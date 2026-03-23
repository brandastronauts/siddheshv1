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
import { useToast } from '@/hooks/use-toast';
import { Mail, CheckCircle } from 'lucide-react';

const affiliationOptions = [
  { value: 'researcher', label: 'Researcher' },
  { value: 'university', label: 'University' },
  { value: 'media', label: 'Media' },
  { value: 'industry', label: 'Industry' },
  { value: 'parent', label: 'Parent' },
  { value: 'other', label: 'Other' },
];

const FooterNewsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
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

    // Track via HubSpot collected forms
    try {
      if (window._hsq) {
        window._hsq.push(['identify', { email: email.trim() }]);
        window._hsq.push(['trackPageView']);
      }
    } catch (err) {
      // Silent fail — tracking is non-critical
    }
    
    // Show success state
    setSubmitted(true);
    toast({
      title: 'Subscription received',
      description: 'Thank you. Your submission has been received successfully.',
    });
    
    // Reset form after delay
    setTimeout(() => {
      setEmail('');
      setAffiliation('');
      setConsent(false);
      setSubmitted(false);
    }, 5000);
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="newsletter-email" className="text-white/70 text-xs uppercase tracking-wider">
                Email <span className="text-accent-cyan">*</span>
              </Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="you@institution.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent-cyan focus:ring-accent-cyan/20 transition-all duration-200"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email}</p>
              )}
            </div>
            
            {/* Affiliation Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="newsletter-affiliation" className="text-white/70 text-xs uppercase tracking-wider">
                Affiliation <span className="text-white/40">(optional)</span>
              </Label>
              <Select value={affiliation} onValueChange={setAffiliation}>
                <SelectTrigger aria-label="Select affiliation" className="bg-white/5 border-white/10 text-white focus:border-accent-cyan focus:ring-accent-cyan/20 [&>span]:text-white/60 data-[state=open]:border-accent-cyan">
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
              checked={consent}
              onCheckedChange={setConsent}
              className="mt-0.5 border-white/30 data-[state=checked]:bg-accent-cyan data-[state=checked]:border-accent-cyan"
            />
            <div className="space-y-1">
              <Label 
                htmlFor="newsletter-consent" 
                className="text-white/70 text-sm leading-relaxed cursor-pointer"
              >
                I agree to receive institutional updates from Blue Blocks Micro Research Institute. <span className="text-accent-cyan">*</span>
              </Label>
              {errors.consent && (
                <p className="text-red-400 text-xs">{errors.consent}</p>
              )}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Button 
              type="submit"
              className="bg-accent-cyan hover:bg-accent-cyan/90 text-deep-ink font-medium px-6 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-accent-cyan/20"
            >
              Subscribe
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
