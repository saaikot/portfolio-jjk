"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { profile } from "@/data/profile";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Fallback: mailto
      const fd = new FormData(formRef.current!);
      const subject = encodeURIComponent((fd.get("subject") as string) || "Hello!");
      const body = encodeURIComponent(
        `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socials = [
    { icon: FiGithub, href: profile.socials.github, label: "GitHub", color: "#e8e8e8" },
    { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn", color: "#00b4d8" },
    { icon: SiVercel, href: profile.socials.vercel, label: "Vercel", color: "#e8e8e8" },
    { icon: FaWhatsapp, href: profile.socials.whatsapp, label: "WhatsApp", color: "#25D366" },
    { icon: FiMail, href: profile.socials.email, label: "Email", color: "#e63946" },
  ];

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="font-mono text-xs text-muted">[ 06 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-blood/60 to-transparent" />
        <span className="font-jp text-xs text-muted">連絡 先</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
      >
        Summon <span className="text-blood">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-14 font-mono text-xs text-muted"
      >
        <span className="text-cursed">&gt;</span> reply within 24 hours
      </motion.p>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ============ Info Panel ============ */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex h-full flex-col justify-between border border-line bg-surface/40 p-6 backdrop-blur-sm sm:p-8"
          style={{
            clipPath:
              "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
          }}
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cursed">
              [ contact.channels ]
            </span>

            <h3 className="mt-4 font-display text-xl tracking-tight">
              Direct access
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Currently open to freelance projects & full-time roles. Reach
              out through any channel below.
            </p>

            {/* Contact info rows */}
            <div className="mt-7 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 font-mono text-xs text-muted transition-colors hover:text-cursed"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-black/30 text-cursed transition-colors group-hover:border-cursed">
                  <FiMail size={14} />
                </span>
                {profile.email}
              </a>
              <div className="flex items-center gap-3 font-mono text-xs text-muted">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-black/30 text-six-eyes">
                  <FiMapPin size={14} />
                </span>
                {profile.location}
              </div>
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 font-mono text-xs text-muted transition-colors hover:text-[#25D366]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-black/30 text-[#25D366] transition-colors group-hover:border-[#25D366]">
                  <FaWhatsapp size={14} />
                </span>
                {profile.phone}
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
              // find_me_on
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-line bg-black/30 text-muted transition-all duration-200 hover:-translate-y-1"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 0 20px -5px ${color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============ Form ============ */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-line bg-surface/40 p-6 backdrop-blur-sm sm:p-8"
          style={{
            clipPath:
              "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
          }}
        >
          <div className="mb-6 flex items-center justify-between border-b border-line pb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cursed">
              [ send.message ]
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              secure
            </span>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="name" name="name" placeholder="john doe" required />
              <Field
                label="email"
                name="email"
                type="email"
                placeholder="john@mail.com"
                required
              />
            </div>

            <Field
              label="subject"
              name="subject"
              placeholder="project inquiry"
            />

            {/* textarea */}
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-cursed">
                <span className="text-muted">&gt;</span> message
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-3 font-mono text-xs text-blood">
                  $
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="// tell me about your project..."
                  className="w-full resize-none border border-line bg-black/40 py-3 pl-8 pr-4 font-mono text-xs text-ink outline-none transition-all placeholder:text-muted/50 focus:border-cursed focus:shadow-[0_0_24px_-6px_rgba(123,44,191,0.8)]"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative flex w-full items-center justify-center gap-2 border border-cursed bg-cursed/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cursed transition-all duration-200 hover:bg-cursed hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              {status === "sending" ? (
                <>
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-current" />
                  transmitting...
                </>
              ) : (
                <>
                  送信 · send message
                  <FiSend className="transition-transform group-hover:translate-x-1" size={14} />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 font-mono text-xs text-green-400">
                <FiCheckCircle size={14} /> message_transmitted_successfully
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 font-mono text-xs text-red-400">
                <FiAlertCircle size={14} /> transmission_failed — try email
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-cursed">
        <span className="text-muted">&gt;</span> {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-blood">
          $
        </span>
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full border border-line bg-black/40 py-3 pl-8 pr-4 font-mono text-xs text-ink outline-none transition-all placeholder:text-muted/50 focus:border-cursed focus:shadow-[0_0_24px_-6px_rgba(123,44,191,0.8)]"
          style={{
            clipPath:
              "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        />
      </div>
    </div>
  );
}