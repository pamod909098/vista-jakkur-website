import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { toast } from "sonner";
import type { LeadFormType } from "@/hooks/useLeadForm";

interface LeadFormProps {
  type: LeadFormType | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FORM_CONFIG: Record<LeadFormType, { title: string; description: string; hasProject: boolean; hasBudget: boolean }> = {
  inquiry: {
    title: "Property Inquiry",
    description: "Tell us about your requirements and our team will get back to you within 24 hours.",
    hasProject: true,
    hasBudget: true,
  },
  "site-visit": {
    title: "Schedule a Site Visit",
    description: "Book a private visit to our ongoing projects. Our team will arrange everything for you.",
    hasProject: false,
    hasBudget: false,
  },
  investment: {
    title: "Investment Consultation",
    description: "Speak with our investment advisory team for personalized property investment guidance.",
    hasProject: false,
    hasBudget: true,
  },
  callback: {
    title: "Request a Callback",
    description: "Leave your details and we'll call you back at your preferred time.",
    hasProject: false,
    hasBudget: false,
  },
  brochure: {
    title: "Download Brochure",
    description: "Enter your details and we'll email you our latest project brochure.",
    hasProject: false,
    hasBudget: false,
  },
  marketing: {
    title: "Digital Marketing Consultation",
    description: "Tell us about your company video or YouTube promotion goals and our team will contact you shortly.",
    hasProject: false,
    hasBudget: false,
  },
};

export default function LeadForm({ type, open, onOpenChange }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  // Don't render if no type
  if (!type) return null;

  const config = FORM_CONFIG[type];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! Our team will contact you shortly.");
    setTimeout(() => {
      onOpenChange(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white border-0 shadow-2xl">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 text-charcoal-400 hover:text-charcoal-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-charcoal-900">{config.title}</DialogTitle>
          <DialogDescription className="text-sm text-charcoal-500 font-body">
            {config.description}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <span className="text-emerald-700 text-2xl">&#10003;</span>
            </div>
            <p className="font-display text-lg text-charcoal-900 font-semibold">Thank You!</p>
            <p className="text-sm text-charcoal-500 mt-2 font-body">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs text-charcoal-600 font-body">Full Name *</Label>
                <Input required placeholder="Your name" className="mt-1" />
              </div>
              <div>
                <Label className="text-xs text-charcoal-600 font-body">Phone *</Label>
                <Input required type="tel" placeholder="+91-" className="mt-1" />
              </div>
            </div>
            <div>
              <Label className="text-xs text-charcoal-600 font-body">Email *</Label>
              <Input required type="email" placeholder="your@email.com" className="mt-1" />
            </div>
            {config.hasProject && (
              <div>
                <Label className="text-xs text-charcoal-600 font-body">Interested Project</Label>
                <Input placeholder="e.g., Vista Verdant Township" className="mt-1" />
              </div>
            )}
            {config.hasBudget && (
              <div>
                <Label className="text-xs text-charcoal-600 font-body">Budget Range</Label>
                <Input placeholder="e.g., ₹50 Lakhs - ₹1 Crore" className="mt-1" />
              </div>
            )}
            {type === "site-visit" && (
              <div>
                <Label className="text-xs text-charcoal-600 font-body">Preferred Date</Label>
                <Input type="date" className="mt-1" />
              </div>
            )}
            <div>
              <Label className="text-xs text-charcoal-600 font-body">Message (Optional)</Label>
              <Textarea rows={3} placeholder="Tell us more about your requirements..." className="mt-1" />
            </div>
            <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold h-11 rounded-md transition-colors">
              Submit
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
