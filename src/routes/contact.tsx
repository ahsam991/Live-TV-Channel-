import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Mail, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — StreamFlow" },
      { name: "description", content: "Get in touch about StreamFlow — feedback, broken streams, or feature requests." },
      { property: "og:title", content: "Contact StreamFlow" },
      { property: "og:description", content: "Reach the StreamFlow developer." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-black md:text-5xl">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Found a broken stream? Have a channel to add? Want to collaborate? Send a note.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "hello@streamflow.app" },
            { icon: MessageCircle, label: "Discord", value: "@streamflow" },
            { icon: Github, label: "GitHub", value: "github.com/streamflow" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-4"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="text-sm font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setForm({ name: "", email: "", message: "" });
          }}
          className="space-y-3 rounded-2xl border border-border/60 bg-card/50 p-5"
        >
          {sent && (
            <div className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-sm">
              Thanks! Your message has been queued (demo form).
            </div>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <textarea
            required
            rows={6}
            placeholder="What's on your mind?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </div>
  );
}
