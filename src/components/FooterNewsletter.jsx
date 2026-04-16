import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const HUBSPOT_PORTAL_ID = '245638953';
const HUBSPOT_NEWSLETTER_FORM_ID = '3971e03d-0686-416c-bf1d-dd029e0b25ba';

const affiliationOptions = [
  { value: 'researcher', label: 'Researcher' },
  { value: 'university', label: 'University' },
  { value: 'media', label: 'Media' },
  { value: 'industry', label: 'Industry' },
  { value: 'parent', label: 'Parent' },
  { value: 'other', label: 'Other' },
];

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!consent) {
      newErrors.consent = 'You must agree to receive updates';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setSubmitError('');

    try {
      const hubspotFields = [
        { objectTypeId: '0-1', name: 'email', value: email.trim() },
      ];

      if (affiliation) {
        hubspotFields.push({ objectTypeId: '0-1', name: 'affiliation', value: affiliation });
      }

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_NEWSLETTER_FORM_ID}`,
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
            legalConsentOptions: {
              consent: {
                consentToProcess: true,
                text: 'I agree to receive institutional updates from Blue Blocks Micro Research Institute.',
              },
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Submission failed (${response.status})`);
      }

      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setAffiliation('');
        setConsent(false);
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-accent-cyan/10">
          <Mail className="w-5 h-5 text-accent-cyan" />
        </div>
        <h3 className="text-lg font-semibold text-white">Subscribe to our Newsletter</h3>
      </div>

      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        Monthly digest, DOI releases, and protocol updates. Announced 30 days in advance.
      </p>

      {submitted ? (
        <div className="flex items-center gap-3 py-4 text-accent-cyan">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Thank you. Your submission has been received successfully.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Newsletter subscription form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="newsletter-email" className="text-white/70 text-xs uppercase tracking-wider">
                Email <span className="text-accent-cyan" aria-hidden="true">*</span>
              </Label>
              <Input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
                placeholder="you@institution.edu"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (submitError) setSubmitError(''); }}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent-cyan focus:ring-accent-cyan/20 transition-all duration-200"
              />
              {errors.email && (
                <p id="newsletter-email-error" role="alert" className="text-red-400 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Affiliation Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="newsletter-affiliation" className="text-white/70 text-xs uppercase tracking-wider">
                Affiliation <span className="text-white/40">(optional)</span>
              </Label>
              <Select value={affiliation} onValueChange={setAffiliation} name="affiliation">
                <SelectTrigger id="newsletter-affiliation" aria-label="Select affiliation" className="bg-white/5 border-white/10 text-white focus:border-accent-cyan focus:ring-accent-cyan/20 [&>span]:text-white/60 data-[state=open]:border-accent-cyan">
                  <SelectValue placeholder="Select affiliation" />
                </SelectTrigger>
                <SelectContent className="bg-deep-ink border-white/10">
                  {affiliationOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-white/80 focus:bg-white/10 focus:text-white"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="newsletter-consent"
              name="consent"
              checked={consent}
              onCheckedChange={setConsent}
              aria-required="true"
              aria-invalid={errors.consent ? 'true' : 'false'}
              aria-describedby={errors.consent ? 'newsletter-consent-error' : undefined}
              className="mt-0.5 border-white/30 data-[state=checked]:bg-accent-cyan data-[state=checked]:border-accent-cyan"
            />
            <div className="space-y-1">
              <Label
                htmlFor="newsletter-consent"
                className="text-white/70 text-sm leading-relaxed cursor-pointer"
              >
                I agree to receive institutional updates from Blue Blocks Micro Research Institute. <span className="text-accent-cyan" aria-hidden="true">*</span>
              </Label>
              {errors.consent && (
                <p id="newsletter-consent-error" role="alert" className="text-red-400 text-xs">{errors.consent}</p>
              )}
            </div>
          </div>

          {submitError && (
            <div className="flex items-center gap-2 text-red-400 text-xs" role="alert">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Button
              type="submit"
              disabled={submitting}
              aria-label="Subscribe to newsletter"
              className="bg-accent-cyan hover:bg-accent-cyan/90 text-deep-ink font-medium px-6 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-accent-cyan/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting…' : 'Subscribe'}
            </Button>
            <p className="text-white/40 text-xs">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default FooterNewsletter;
