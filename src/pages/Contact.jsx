import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { Link2, GitBranch, Mail, Phone } from "lucide-react";
import "../styles/Contact.css";

const LINKS = [
  { Icon: Link2,     label: "linkedin.com/in/roopaskalled77", href: "https://linkedin.com/in/roopaskalled77" },
  { Icon: GitBranch, label: "github.com/Roopask831",          href: "https://github.com/Roopask831" },
  { Icon: Mail,      label: "kalledr1@montclair.edu",          href: "mailto:kalledr1@montclair.edu" },
  { Icon: Phone,     label: "732-433-6154",                    href: "tel:7324336154" },
];

export default function Contact() {
  useFadeIn();
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())                            e.name    = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(form.email))            e.email   = "Valid email required.";
    if (form.message.trim().length < 15)             e.message = "Message must be at least 15 characters.";
    return e;
  };

  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const submit = () => {
    const e = validate();
    setErrors(e);
    if (!Object.keys(e).length) { setSent(true); setForm({ name: "", email: "", message: "" }); }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Let's build something together.</h2>
          <p className="section-sub">
            Actively seeking software engineering roles. Open to full-time, internship, and contract opportunities.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info card */}
          <div className="contact__info fade-in">
            <h3 className="contact__info-heading">Get in touch</h3>
            <p className="contact__info-body">
              Whether it's a job opportunity, a collaboration, or just a question about one of my
              projects — I'd love to hear from you.
            </p>
            <div className="contact__links">
              {LINKS.map(({ Icon, label, href }) => (
                <a key={href} className="contact__link" href={href} target="_blank" rel="noreferrer">
                  <div className="contact__link-icon"><Icon size={16} /></div>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-in">
            {sent ? (
              <div className="contact__success">
                Message sent! Thanks for reaching out — I'll get back to you soon.
              </div>
            ) : (
              <div className="contact__form">
                <Field label="Your Name" name="name" value={form.name} onChange={handle} placeholder="Jane Smith" error={errors.name} />
                <Field label="Email Address" name="email" value={form.email} onChange={handle} placeholder="jane@company.com" error={errors.email} />
                <div className="contact__field">
                  <label className="contact__label">Message</label>
                  <textarea className="contact__textarea" name="message" value={form.message} onChange={handle} placeholder="Hi Roopa, I came across your flood mapping project and wanted to discuss..." />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>
                <button className="btn-primary" onClick={submit}>Send Message →</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, error }) {
  return (
    <div className="contact__field">
      <label className="contact__label">{label}</label>
      <input className="contact__input" name={name} value={value} onChange={onChange} placeholder={placeholder} />
      {error && <span className="contact__error">{error}</span>}
    </div>
  );
}