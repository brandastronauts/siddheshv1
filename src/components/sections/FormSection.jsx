'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const HUBSPOT_PORTAL_ID = '245638953';
const HUBSPOT_FORM_ID = '54cad465-b7b1-45cb-b9c2-28ec4a7283a4';

const FIELD_NAME_TO_HUBSPOT = {
  name: 'fullname',
  email: 'email',
  inquiryType: 'inquiry_type',
  institution: 'company',
  phone: 'phone',
  message: 'message',
};

const submitToHubSpot = async (fields, formData) => {
  const hubspotFields = fields
    .filter((field) => formData[field.name]?.trim())
    .map((field) => ({
      objectTypeId: '0-1',
      name: FIELD_NAME_TO_HUBSPOT[field.name] || field.name,
      value: formData[field.name].trim(),
    }));

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: hubspotFields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
          hutk: document.cookie.match(/hubspotutk=([^;]*)/)?.[1] || undefined,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Submission failed (${response.status})`);
  }

  return response.json();
};

// Fire-and-forget: save a copy to the CMS form-submissions collection.
// Never throws — HubSpot is the authoritative submission path.
const saveToPayload = (fields, formData, formName) => {
  const payload = {};
  fields.forEach((field) => {
    if (formData[field.name]) payload[field.name] = formData[field.name];
  });

  fetch('/api/form-submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formName: formName || 'Contact Form',
      email: formData['email'] || undefined,
      name: formData['name'] || undefined,
      payload,
      sourcePath: window.location.pathname,
    }),
  }).catch(() => {
    // Intentionally silent — CMS logging is secondary to HubSpot
  });
};

const FormSection = ({ heading, header, description, intro, fields, submitLabel, submit, formName }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const title = header || heading;
  const subtitle = intro || description;

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
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    const newErrors = {};
    fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      await submitToHubSpot(fields, formData);
      saveToPayload(fields, formData, header || heading || formName);
      setSubmitted(true);
    } catch (err) {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
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
              Submission Received
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you. Your submission has been received successfully.
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
            <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
              {title}
            </h2>
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
            {/* Honeypot field */}
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
              {fields.map((field) => {
                const fieldId = `form-${field.name}`;
                const errorId = `${fieldId}-error`;
                const hasError = !!errors[field.name];
                const autoComplete = field.autoComplete || (
                  field.type === 'email' ? 'email' :
                  field.type === 'tel' ? 'tel' :
                  field.name === 'name' || field.name === 'fullName' ? 'name' :
                  field.name === 'organization' || field.name === 'company' || field.name === 'affiliation' ? 'organization' :
                  'on'
                );
                return (
                  <div key={field.name}>
                    <label
                      htmlFor={fieldId}
                      className="block text-sm font-medium text-deep-ink mb-2"
                    >
                      {field.label}
                      {field.required && <span className="text-destructive ml-1" aria-hidden="true">*</span>}
                    </label>

                    {field.type === 'textarea' ? (
                      <textarea
                        id={fieldId}
                        name={field.name}
                        rows={4}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        autoComplete={autoComplete}
                        aria-required={field.required ? 'true' : 'false'}
                        aria-invalid={hasError ? 'true' : 'false'}
                        aria-describedby={hasError ? errorId : undefined}
                        className={`w-full px-4 py-3 min-h-[44px] rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-all ${
                          hasError ? 'border-destructive' : 'border-border'
                        }`}
                        placeholder={field.placeholder || ''}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        id={fieldId}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        aria-required={field.required ? 'true' : 'false'}
                        aria-invalid={hasError ? 'true' : 'false'}
                        aria-describedby={hasError ? errorId : undefined}
                        className={`w-full px-4 py-3 min-h-[44px] rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-all ${
                          hasError ? 'border-destructive' : 'border-border'
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
                        type={field.type || 'text'}
                        id={fieldId}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        autoComplete={autoComplete}
                        aria-required={field.required ? 'true' : 'false'}
                        aria-invalid={hasError ? 'true' : 'false'}
                        aria-describedby={hasError ? errorId : undefined}
                        className={`w-full px-4 py-3 min-h-[44px] rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-all ${
                          hasError ? 'border-destructive' : 'border-border'
                        }`}
                        placeholder={field.placeholder || ''}
                      />
                    )}

                    {hasError && (
                      <p id={errorId} role="alert" className="mt-2 text-sm text-destructive">{errors[field.name]}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {submitError && (
              <div className="mt-4 flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-primary-navy text-white font-medium rounded-lg hover:bg-secondary-blue transition-all duration-200 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting…' : (submitLabel || 'Submit Request')}
              {!submitting && <Send className="w-4 h-4" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
