export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-orange-400/10 p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_30%,rgba(255,255,255,0.2),rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get your AI phone number in 5 minutes</h3>
          <p className="mt-3 text-sm text-white/80">
            Sign up, choose a number, and start talking to your AI. No learning curve. Just call and get things done.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90">
              Start 14-day free trial
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Contact sales
            </a>
          </div>
          <div className="mt-4 text-xs text-white/60">US numbers included. International available. Cancel anytime.</div>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-white/60 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-400" />
          <span className="font-medium text-white/80">Telettro</span>
          <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Status</a>
        </div>
      </footer>
    </section>
  );
}
