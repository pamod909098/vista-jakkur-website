/*
 * Vista Spaces Contact Page — Architectural Precision
 * Full contact form with inquiry types, map, and business info
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import LeadForm from "@/components/LeadForm";
import { useLeadForm } from "@/hooks/useLeadForm";
import { MapView } from "@/components/Map";
import { COMPANY } from "@/lib/siteData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const { formType, openForm, closeForm, isOpen } = useLeadForm();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll get back to you within 24 hours.");
  };

  const inquiryTypes = [
    { label: "General Inquiry", type: "general" as const },
    { label: "Property Inquiry", type: "property" as const },
    { label: "Investment Inquiry", type: "investment" as const },
    { label: "Site Visit Booking", type: "site-visit" as const },
    { label: "Partnership", type: "partnership" as const },
    { label: "Digital Marketing & Video Promotion", type: "digital-marketing" as const },
  ];

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question about our projects, investment opportunities, or partnerships — our team is here to help."
        bgImage="/images/vj-residential.webp"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Get in Touch"
                title="Let's Connect"
              />
              <p className="mt-6 text-base text-charcoal-600 leading-relaxed font-body">
                Reach out to us through any of the channels below, or fill out the form and we'll respond within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900 font-body">Registered Office</h4>
                    <p className="text-sm text-charcoal-500 mt-0.5 font-body leading-relaxed">{COMPANY.fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900 font-body">Phone</h4>
                    <a href={`tel:${COMPANY.phone}`} className="text-sm text-emerald-700 hover:text-emerald-800 font-body">{COMPANY.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900 font-body">Email</h4>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm text-emerald-700 hover:text-emerald-800 font-body">{COMPANY.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900 font-body">Business Hours</h4>
                    <p className="text-sm text-charcoal-500 mt-0.5 font-body">{COMPANY.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <button
                  onClick={() => openForm("site-visit")}
                  className="p-4 rounded-lg bg-beige-50 border border-emerald-100 text-center hover:bg-emerald-50 transition-colors"
                >
                  <p className="text-sm font-semibold text-charcoal-900 font-body">Schedule Visit</p>
                </button>
                <button
                  onClick={() => openForm("investment")}
                  className="p-4 rounded-lg bg-beige-50 border border-emerald-100 text-center hover:bg-emerald-50 transition-colors"
                >
                  <p className="text-sm font-semibold text-charcoal-900 font-body">Investment</p>
                </button>
                <button
                  onClick={() => openForm("brochure")}
                  className="p-4 rounded-lg bg-beige-50 border border-emerald-100 text-center hover:bg-emerald-50 transition-colors"
                >
                  <p className="text-sm font-semibold text-charcoal-900 font-body">Download Brochure</p>
                </button>
                <button
                  onClick={() => openForm("callback")}
                  className="p-4 rounded-lg bg-beige-50 border border-emerald-100 text-center hover:bg-emerald-50 transition-colors"
                >
                  <p className="text-sm font-semibold text-charcoal-900 font-body">Request Callback</p>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-lg bg-beige-50 border border-emerald-100/50">
                <h3 className="font-display text-xl font-bold text-charcoal-900">Send Us a Message</h3>
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <span className="text-emerald-700 text-2xl">&#10003;</span>
                    </div>
                    <p className="font-display text-lg text-charcoal-900 font-semibold">Message Sent!</p>
                    <p className="text-sm text-charcoal-500 mt-2 font-body">We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <Label className="text-xs text-charcoal-600 font-body">Inquiry Type *</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {inquiryTypes.map((t) => (
                          <button
                            key={t.type}
                            type="button"
                            className="px-3 py-1.5 text-xs font-medium font-body rounded-full bg-white border border-emerald-200 text-charcoal-700 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-charcoal-600 font-body">Full Name *</Label>
                        <Input required placeholder="Your full name" className="mt-1 bg-white" />
                      </div>
                      <div>
                        <Label className="text-xs text-charcoal-600 font-body">Phone *</Label>
                        <Input required type="tel" placeholder="+91-" className="mt-1 bg-white" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-charcoal-600 font-body">Email *</Label>
                      <Input required type="email" placeholder="your@email.com" className="mt-1 bg-white" />
                    </div>
                    <div>
                      <Label className="text-xs text-charcoal-600 font-body">Company / Organization</Label>
                      <Input placeholder="Optional" className="mt-1 bg-white" />
                    </div>
                    <div>
                      <Label className="text-xs text-charcoal-600 font-body">Message *</Label>
                      <Textarea required rows={4} placeholder="How can we help you?" className="mt-1 bg-white" />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold h-12 rounded-md transition-colors">
                      Send Message <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="mt-8 h-[350px] rounded-lg overflow-hidden shadow-xl">
                <MapView
                  className="h-full w-full rounded-lg"
                  initialCenter={{ lat: 12.9716, lng: 77.5946 }}
                  initialZoom={14}
                  onMapReady={(map: google.maps.Map) => {
                    new google.maps.marker.AdvancedMarkerElement({
                      map,
                      position: { lat: 12.9716, lng: 77.5946 },
                      title: "Vista Spaces Jakkur Residency",
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm type={formType} open={isOpen} onOpenChange={(open) => !open && closeForm()} />
    </div>
  );
}
