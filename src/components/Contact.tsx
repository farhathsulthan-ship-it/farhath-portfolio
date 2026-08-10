import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";
import { personal } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // =====================================================
  // WHATSAPP SUBMIT
  // =====================================================

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    const whatsappMessage = `
Hello Farhath,

I received a new message through your portfolio.

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}

Thank you.
    `.trim();

    const whatsappUrl =
      `https://wa.me/919092115542?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");

      setStatus("sent");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 500);
  };

  // =====================================================
  // CONTACT INFORMATION
  // =====================================================

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "EMAIL",
      value: personal.email,

      // Opens Gmail Compose
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        personal.email
      )}`,

      external: true,
    },

    {
      icon: FaPhone,
      label: "WHATSAPP",
      value: personal.phone,

      // Opens WhatsApp directly
      href: "https://wa.me/919092115542",

      external: true,
    },

    {
      icon: FaMapMarkerAlt,
      label: "LOCATION",
      value: personal.location,
    },

    {
      icon: FaLinkedin,
      label: "LINKEDIN",
      value: "linkedin.com/in/farhathsulthan",
      href: personal.linkedin,
      external: true,
    },

    {
      icon: FaGithub,
      label: "GITHUB",
      value: "github.com/farhathsulthan",
      href: personal.github,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto mb-5 h-px w-24 bg-gold/40" />

          <h2 className="font-serif text-4xl font-medium tracking-wide text-cream md:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
            Have a project in mind, an opportunity, or just want to say hi?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-gold/20 bg-bg-soft/30 p-7 md:p-9"
          >
            <h3 className="mb-8 font-serif text-2xl text-cream md:text-3xl">
              Contact Information
            </h3>

            <div className="space-y-3">

              {contactInfo.map((c) => {
                const Icon = c.icon;

                const content = (
                  <div className="flex items-center gap-5">

                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-bg-soft/60 text-gold transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold/10">
                      <Icon className="text-lg" />
                    </div>

                    {/* Information */}
                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-medium tracking-[0.25em] text-text-secondary">
                        {c.label}
                      </p>

                      <p className="break-words text-sm font-medium text-cream transition-colors duration-300 group-hover:text-gold md:text-base">
                        {c.value}
                      </p>
                    </div>

                  </div>
                );

                if (c.href) {
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={
                        c.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group block cursor-pointer rounded-2xl p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/5"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={c.label}
                    className="group block rounded-2xl p-2"
                  >
                    {content}
                  </div>
                );
              })}

            </div>

            {/* =====================================================
                DOWNLOAD RESUME
            ===================================================== */}

            <a
              href={personal.resume}
              download
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#E7C16A] to-[#B77B3D] px-6 py-4 font-medium text-[#1A100A] shadow-lg shadow-gold/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/20"
            >
              <FaDownload />

              <span>Download Resume</span>
            </a>

          </motion.div>

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-gold/20 bg-bg-soft/30 p-7 md:p-9"
          >

            <h3 className="mb-8 font-serif text-2xl text-cream md:text-3xl">
              Send a Message
            </h3>

            <form
              onSubmit={submit}
              className="space-y-5"
            >

              {/* =====================================================
                  NAME
              ===================================================== */}

              <Field
                label="Your Name"
                value={form.name}
                required
                onChange={(value) =>
                  setForm({
                    ...form,
                    name: value,
                  })
                }
              />

              {/* =====================================================
                  EMAIL
              ===================================================== */}

              <Field
                label="Your Email"
                type="email"
                value={form.email}
                required
                onChange={(value) =>
                  setForm({
                    ...form,
                    email: value,
                  })
                }
              />

              {/* =====================================================
                  MESSAGE
              ===================================================== */}

              <Field
                label="Message"
                value={form.message}
                textarea
                required
                onChange={(value) =>
                  setForm({
                    ...form,
                    message: value,
                  })
                }
              />

              {/* =====================================================
                  SEND TO WHATSAPP
              ===================================================== */}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#E7C16A] to-[#B77B3D] px-6 py-4 font-medium text-[#1A100A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/20 disabled:cursor-not-allowed disabled:opacity-60"
              >

                <FaPaperPlane />

                {status === "idle" && "Send Message"}

                {status === "sending" && "Opening WhatsApp..."}

                {status === "sent" && "WhatsApp Opened ✓"}

              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}


// =====================================================
// FORM FIELD COMPONENT
// =====================================================

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {

  const base =
    "w-full rounded-2xl border border-gold/20 bg-bg-soft/40 px-4 py-3 text-cream placeholder:text-text-secondary/50 focus:border-gold focus:bg-bg-soft/60 focus:outline-none transition-all duration-300";

  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-text-secondary">
        {label}
      </label>

      {textarea ? (

        <textarea
          rows={5}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-none`}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />

      ) : (

        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />

      )}

    </div>
  );
}