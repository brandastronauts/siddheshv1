import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, Loader2, Upload } from 'lucide-react';
import { application, formSteps, programme } from '../../content/ammonoidProgramme';

const MAX_FILE_BYTES = 10 * 1024 * 1024;
// Web3Forms public (client-side) access key — safe to ship in the bundle.
const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'd0a4188d-1906-4948-a4fd-0ef1d307c5cb';

const countWords = (value) => (value || '').trim().split(/\s+/).filter(Boolean).length;

const calcAge = (dob) => {
  if (!dob) return '';
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return '';
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age -= 1;
  return age >= 0 && age < 120 ? String(age) : '';
};

const isVisible = (field, values) => {
  if (!field.showIf) return true;
  return values[field.showIf.field] === field.showIf.equals;
};

const validateField = (field, values, files) => {
  const value = values[field.name] ?? '';

  if (field.type === 'file') {
    const file = files[field.name];
    if (field.required && !file) return 'This upload is required.';
    if (file) {
      if (file.size > MAX_FILE_BYTES) return 'File must be 10 MB or smaller.';
      const allowed = (field.accept || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
      const name = file.name.toLowerCase();
      if (allowed.length && !allowed.some((ext) => name.endsWith(ext))) {
        return `Allowed file types: ${allowed.join(', ')}.`;
      }
    }
    return '';
  }

  if (field.type === 'checkbox') {
    return field.required && value !== true ? 'You must confirm this to continue.' : '';
  }

  if (field.required && !String(value).trim()) return 'This field is required.';
  if (!String(value).trim()) return '';

  if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim())) {
    return 'Enter a valid email address.';
  }
  if (field.type === 'tel' && !/^\+?[0-9\s\-()]{7,20}$/.test(String(value).trim())) {
    return 'Enter a valid phone number, including country code.';
  }
  if (field.name === 'age') {
    const age = Number(value);
    if (!Number.isFinite(age) || age < 12 || age > 18) {
      return 'This programme is open to applicants aged 12–18.';
    }
  }
  if (field.name === 'date_of_birth' && new Date(value).getTime() > Date.now()) {
    return 'Date of birth cannot be in the future.';
  }
  if (field.wordRange) {
    const [min, max] = field.wordRange;
    const words = countWords(value);
    if (words < min || words > max) return `Please write between ${min} and ${max} words (currently ${words}).`;
  }
  return '';
};

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent-cyan focus:ring-2 focus:ring-ring/40';

const AmmonoidApplicationForm = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorDetail, setErrorDetail] = useState('');

  const totalSteps = formSteps.length;
  const current = formSteps[step];
  const visibleFields = useMemo(
    () => current.fields.filter((f) => isVisible(f, values)),
    [current, values]
  );

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value, ...(name === 'date_of_birth' ? { age: calcAge(value) } : {}) }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const setFile = (name, file) => {
    setFiles((prev) => ({ ...prev, [name]: file || undefined }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const next = {};
    visibleFields.forEach((field) => {
      const message = validateField(field, values, files);
      if (message) next[field.name] = message;
    });
    setErrors((prev) => ({ ...prev, ...next }));
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
    window.scrollTo({ top: document.getElementById('apply')?.offsetTop ?? 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: document.getElementById('apply')?.offsetTop ?? 0, behavior: 'smooth' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateStep()) return;

    // Re-validate every step before sending
    for (const s of formSteps) {
      for (const field of s.fields.filter((f) => isVisible(f, values))) {
        if (validateField(field, values, files)) {
          setStatus('idle');
          setStep(formSteps.indexOf(s));
          setErrors((prev) => ({ ...prev, [field.name]: validateField(field, values, files) }));
          return;
        }
      }
    }

    setStatus('submitting');

    const buildPayload = (includeFiles) => {
      const payload = new FormData();
      payload.append('access_key', ACCESS_KEY || '');
      payload.append('subject', 'Ammonoid Paleobiology Research Programme — New Application');
      payload.append('from_name', 'Blue Blocks Micro Research Institute Website');

      formSteps.forEach((s) => {
        s.fields.filter((f) => isVisible(f, values)).forEach((field) => {
          if (field.type === 'file') {
            const file = files[field.name];
            if (!file) return;
            if (includeFiles) payload.append(field.label, file);
            else payload.append(field.label, `${file.name} (attachment could not be delivered — request directly from applicant)`);
            return;
          }
          if (field.type === 'checkbox') {
            payload.append(field.label, values[field.name] === true ? 'Agreed' : 'Not agreed');
            return;
          }
          payload.append(field.label, values[field.name] ?? '');
        });
      });
      return payload;
    };

    const send = async (includeFiles) => {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: buildPayload(includeFiles),
      });
      const result = await response.json().catch(() => null);
      return { ok: response.ok && result?.success === true, message: result?.message };
    };

    try {
      const hasFiles = Object.values(files).some(Boolean);
      let outcome = await send(hasFiles);
      // Some plans reject attachments; retry text-only so the application is not lost.
      if (!outcome.ok && hasFiles) outcome = await send(false);
      if (!outcome.ok) throw new Error(outcome.message || 'submission_failed');

      setStatus('success');
      setValues({});
      setFiles({});
      window.scrollTo({ top: document.getElementById('apply')?.offsetTop ?? 0, behavior: 'smooth' });
    } catch (error) {
      setErrorDetail(error?.message && error.message !== 'submission_failed' ? error.message : '');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-accent-cyan shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-bold text-primary-navy">{application.success.heading}</h3>
            {application.success.paragraphs.map((p) => (
              <p key={p} className="mt-2 text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-5 md:p-8 shadow-[var(--shadow-card)]"
    >
      <div className="mb-6">
        <p className="text-sm font-medium text-muted-foreground">
          Step {step + 1} of {totalSteps} — {current.title}
        </p>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={totalSteps} aria-label="Application progress">
          <div
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / totalSteps) * 100}%`, background: 'var(--gradient-accent)' }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {visibleFields.map((field) => {
          const id = `ammonoid-${field.name}`;
          const error = errors[field.name];
          const describedBy = [field.help ? `${id}-help` : null, error ? `${id}-error` : null].filter(Boolean).join(' ');

          return (
            <div key={field.name}>
              {field.type !== 'checkbox' && (
                <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-2">
                  {field.q ? `${field.q}. ` : ''}{field.label}
                  {field.required && <span className="text-destructive"> *</span>}
                </label>
              )}

              {field.type === 'textarea' && (
                <textarea
                  id={id}
                  name={field.name}
                  rows={field.wordRange ? 7 : 4}
                  value={values[field.name] || ''}
                  onChange={(e) => setValue(field.name, e.target.value)}
                  aria-describedby={describedBy || undefined}
                  aria-invalid={Boolean(error)}
                  className={inputClass}
                />
              )}

              {['text', 'email', 'tel', 'date'].includes(field.type) && (
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  value={values[field.name] || ''}
                  onChange={(e) => setValue(field.name, e.target.value)}
                  aria-describedby={describedBy || undefined}
                  aria-invalid={Boolean(error)}
                  autoComplete="off"
                  className={inputClass}
                />
              )}

              {field.type === 'age' && (
                <input
                  id={id}
                  name={field.name}
                  type="number"
                  min="12"
                  max="18"
                  value={values[field.name] || ''}
                  onChange={(e) => setValue(field.name, e.target.value)}
                  aria-describedby={describedBy || undefined}
                  aria-invalid={Boolean(error)}
                  className={inputClass}
                />
              )}

              {field.type === 'select' && (
                <select
                  id={id}
                  name={field.name}
                  value={values[field.name] || ''}
                  onChange={(e) => setValue(field.name, e.target.value)}
                  aria-describedby={describedBy || undefined}
                  aria-invalid={Boolean(error)}
                  className={inputClass}
                >
                  <option value="">Select an option</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              )}

              {field.type === 'radio' && (
                <div role="radiogroup" aria-labelledby={`${id}-label`} className="flex flex-wrap gap-3">
                  {field.options.map((option) => (
                    <label
                      key={option}
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                        values[field.name] === option
                          ? 'border-accent-cyan bg-accent-cyan/10 text-primary-navy'
                          : 'border-input text-foreground hover:bg-surface'
                      }`}
                    >
                      <input
                        type="radio"
                        name={field.name}
                        value={option}
                        checked={values[field.name] === option}
                        onChange={() => setValue(field.name, option)}
                        className="accent-accent-cyan"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}

              {field.type === 'file' && (
                <div>
                  <label
                    htmlFor={id}
                    className="inline-flex items-center gap-2 rounded-xl border border-dashed border-input px-4 py-3 text-sm font-medium text-foreground cursor-pointer hover:bg-surface transition-colors"
                  >
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    {files[field.name] ? 'Replace file' : 'Choose file'}
                  </label>
                  <input
                    id={id}
                    name={field.name}
                    type="file"
                    accept={field.accept}
                    onChange={(e) => setFile(field.name, e.target.files?.[0])}
                    aria-describedby={describedBy || undefined}
                    aria-invalid={Boolean(error)}
                    className="sr-only"
                  />
                  {files[field.name] && (
                    <p className="mt-2 text-sm text-muted-foreground">Selected: {files[field.name].name}</p>
                  )}
                </div>
              )}

              {field.type === 'checkbox' && (
                <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
                  <input
                    id={id}
                    name={field.name}
                    type="checkbox"
                    checked={values[field.name] === true}
                    onChange={(e) => setValue(field.name, e.target.checked)}
                    aria-describedby={describedBy || undefined}
                    aria-invalid={Boolean(error)}
                    className="mt-1 w-5 h-5 accent-accent-cyan shrink-0"
                  />
                  <span className="text-sm text-foreground leading-relaxed">
                    <span className="font-semibold block mb-1">
                      {field.name === 'declaration' ? 'Declaration' : application.guardianConsentLabel}
                      <span className="text-destructive"> *</span>
                    </span>
                    {field.name === 'declaration' ? application.declarationText : application.guardianConsentText}
                  </span>
                </label>
              )}

              {field.wordRange && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {countWords(values[field.name])} words (required: {field.wordRange[0]}–{field.wordRange[1]})
                </p>
              )}

              {field.help && (
                <p id={`${id}-help`} className="mt-2 text-xs text-muted-foreground">{field.help}</p>
              )}

              {error && (
                <p id={`${id}-error`} role="alert" className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {step === totalSteps - 1 && (
        <p className="mt-6 text-xs text-muted-foreground">
          Your details are used only for programme selection and communication. See our{' '}
          <Link to={application.privacyPath} className="text-link-blue underline">Privacy Policy</Link>. Questions:{' '}
          <a href={`mailto:${programme.contact.email}`} className="text-link-blue underline">{programme.contact.email}</a>.
        </p>
      )}

      {status === 'error' && (
        <p role="alert" className="mt-6 flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          {application.errorMessage}
        </p>
      )}

      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0 || status === 'submitting'}
          className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back
        </button>

        {step < totalSteps - 1 ? (
          <button type="button" onClick={goNext} className="btn-primary">
            Continue
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        ) : (
          <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                Submitting…
              </>
            ) : (
              <>
                Submit Application
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default AmmonoidApplicationForm;
