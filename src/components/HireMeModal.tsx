"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";

export default function HireMeModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xvzblree", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => setStatus("idle"), 300);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-black hover:bg-emerald-300 transition"
      >
        Hire me
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-display text-xl">Get in touch</h2>
                  <p className="text-white/50 text-xs mt-0.5">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/40 hover:text-white transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {status === "sent" ? (
                <div className="py-8 text-center space-y-2">
                  <p className="text-emerald-400 text-2xl">✓</p>
                  <p className="text-white/80 text-sm">Message sent! I'll be in touch soon.</p>
                  <Button
                    onClick={handleClose}
                    variant="secondary"
                    className="rounded-full mt-4 bg-zinc-900/60 border border-white/10"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-white/50 text-xs mb-1 block">Name</label>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 transition"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-xs mb-1 block">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 transition"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-xs mb-1 block">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="What's on your mind?"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50 transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs">
                      Something went wrong. Email me directly at{" "}
                      <a href="mailto:abahriwassim8@gmail.com" className="underline">
                        abahriwassim8@gmail.com
                      </a>
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-emerald-400 text-black hover:bg-emerald-300 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </Button>
                </form>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
