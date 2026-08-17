import { useState, useCallback } from "react";

export type LeadFormType = "inquiry" | "site-visit" | "investment" | "callback" | "brochure" | "marketing";

export function useLeadForm() {
  const [formType, setFormType] = useState<LeadFormType | null>(null);

  const openForm = useCallback((type: LeadFormType) => setFormType(type), []);
  const closeForm = useCallback(() => setFormType(null), []);

  return { formType, openForm, closeForm, isOpen: formType !== null };
}
