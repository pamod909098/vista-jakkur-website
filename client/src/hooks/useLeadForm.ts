import { useState, useCallback } from "react";

type LeadFormType = "inquiry" | "site-visit" | "investment" | "callback" | "brochure";

export function useLeadForm() {
  const [formType, setFormType] = useState<LeadFormType | null>(null);

  const openForm = useCallback((type: LeadFormType) => setFormType(type), []);
  const closeForm = useCallback(() => setFormType(null), []);

  return { formType, openForm, closeForm, isOpen: formType !== null };
}
