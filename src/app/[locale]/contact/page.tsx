"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError(t("invalidEmail"));
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    // Integration will go here
    // For now, let's simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="card p-8 bg-card/50 backdrop-blur-xl border-border relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mb-8 text-sm">{t("description")}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1.5 opacity-80">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all disabled:opacity-50"
              placeholder={t("namePlaceholder")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 opacity-80">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={`w-full px-4 py-3 rounded-xl bg-secondary/30 border focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all disabled:opacity-50 ${
                emailError
                  ? "border-red-500 focus:border-red-500"
                  : "border-border focus:border-primary/50"
              }`}
              placeholder={t("emailPlaceholder")}
            />
            {emailError && (
              <p className="mt-1.5 text-xs text-red-500 animate-fade-in">
                {emailError}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 opacity-80">
              {t("messageLabel")}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all disabled:opacity-50 resize-none"
              placeholder={t("messagePlaceholder")}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t("sending")}
                </>
              ) : (
                t("send")
              )}
            </button>
          </div>

          {status === "success" && (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm text-center animate-fade-in">
              {t("success")}
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center animate-fade-in">
              {t("error")}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
