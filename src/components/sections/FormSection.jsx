import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const FormSection = ({ heading, header, description, intro, fields, submitLabel, recipientEmail, submit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const title = header || heading;
  const subtitle = intro || description;
  const emailTo = submit?.to || recipientEmail;
  const mediaEmailTo = submit?.mediaTo;
  const emailSubject = submit?.subject || `Contact Form Submission`;
  const successMessage = submit?.successMessage || "Draft email opened in your mail client.";

  const validateField = (field, value) => {
    if (field.required && (!value || value.trim() === '')) {
      return `${field.label} is required`;
    }
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }
    if (value && value.length > 2000) {
      return `${field.label} is too long (max 2000 characters)`;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check — bots fill this hidden field
    if (honeypot) return;
    
    // Validate all fields
    const newErrors = {};
    fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Determine recipient based on inquiry type
    const inquiryType = formData.inquiryType || '';
    const isMedia = inquiryType === 'media';
    const recipient = isMedia && mediaEmailTo ? mediaEmailTo : emailTo;

    // Build email body
    const emailBody = fields
      .map((field) => {
        const value = formData[field.name] || 'N/A';
        if (field.type === 'select' && field.options?.[0]?.label) {
          const selectedOption = field.options.find(opt => opt.value === value);
          return `${field.label}: ${selectedOption?.label || value}`;
        }
        return `${field.label}: ${value}`;
      })
      .join('\n\n');

    // Build subject with inquiry type
    const inquiryLabel = (() => {
      const field = fields.find(f => f.name === 'inquiryType');
      if (field?.options) {
        const opt = field.options.find(o => o.value === inquiryType);
        return opt?.label || inquiryType;
      }
      return inquiryType;
    })();

    const subject = inquiryLabel
      ? `${emailSubject} — ${inquiryLabel} — ${formData.name || 'Website'}`
      : `${emailSubject} — ${formData.name || 'Website'}`;
    
    const mailtoLink = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="collab-form" className="section-spacing bg-background">
        <div className="container-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 text-center shadow-card border border-border/50"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-deep-ink mb-3">
              Inquiry Submitted
            </h3>
            <p className="text-muted-foreground mb-6">
              {successMessage}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({});
              }}
              className="text-link-blue hover:text-secondary-blue font-medium min-h-[44px]"
            >
              Submit another inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="collab-form" className="section-spacing bg-background">
      <div className="container-grid">
        <div className="max-w-2xl mx-auto">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-4"
            >
              {title}
            </motion.h2>
          )}
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-muted-foreground mb-8"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.form 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50"
          >
            {/* Honeypot field — hidden from real users, bots fill it */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website_url_hp">Website</label>
              <input
                type="text"
                id="website_url_hp"
                name="website_url_hp"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-deep-ink mb-2"
                  >
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 min-h-[44px] rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-all ${
                        errors[field.name] ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder={field.placeholder || ''}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 min-h-[44px] rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-all ${
                        errors[field.name] ? 'border-destructive' : 'border-border'
                      }`}
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((option, idx) => {
                        const optionValue = typeof option === 'string' ? option : option.value;
                        const optionLabel = typeof option === 'string' ? option : option.label;
                        return (
                          <option key={idx} value={optionValue}>
                            {optionLabel}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 min-h-[44px] rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-all ${
                        errors[field.name] ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder={field.placeholder || ''}
                    />
                  )}
                  
                  {errors[field.name] && (
                    <p className="mt-2 text-sm text-destructive">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
            
            <button
              type="submit"
              className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-primary-navy text-white font-medium rounded-lg hover:bg-secondary-blue transition-all duration-200 hover:shadow-lg"
            >
              {submitLabel || 'Submit Request'}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
