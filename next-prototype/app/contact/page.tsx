"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const validate = (nextValues: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = "Naam is verplicht.";
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = "E-mail is verplicht.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Vul een geldig e-mailadres in.";
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = "Bericht is verplicht.";
    }

    return nextErrors;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        const fieldErrors =
          data?.fieldErrors as Partial<Record<keyof FormValues, string[]>> | undefined;

        if (fieldErrors) {
          setErrors({
            name: fieldErrors.name?.[0],
            email: fieldErrors.email?.[0],
            message: fieldErrors.message?.[0],
          });
        }

        setSubmitError(data?.message ?? "Versturen mislukt. Probeer opnieuw.");
        return;
      }

      setValues(initialValues);
      setSubmitSuccess(`Bericht verzonden. Referentie: ${data.id}`);
    } catch {
      setSubmitError("Er ging iets mis tijdens het versturen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">Contact</h1>
      <p className="mt-3 text-slate-600">
        Stuur een bericht via het formulier hieronder.
      </p>

      <form className="mt-10 space-y-6" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900">
            Naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0900ff] focus:ring-2 focus:ring-[#0900ff]/20"
          />
          {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0900ff] focus:ring-2 focus:ring-[#0900ff]/20"
          />
          {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-900">
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={values.message}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, message: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0900ff] focus:ring-2 focus:ring-[#0900ff]/20"
          />
          {errors.message ? (
            <p className="mt-2 text-sm text-red-600">{errors.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-full bg-[#0900ff] px-6 py-3 font-semibold text-white transition hover:bg-[#0700d6]"
        >
          {isLoading ? "Bezig met verzenden..." : "Verzenden"}
        </button>
        {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
        {submitSuccess ? <p className="text-sm text-emerald-700">{submitSuccess}</p> : null}
      </form>
    </main>
  );
}
