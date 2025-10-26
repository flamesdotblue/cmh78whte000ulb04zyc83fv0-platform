import Spline from '@splinetool/react-spline';
import { Rocket, Play, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-400" />
          <span className="text-lg font-semibold tracking-tight">Telettro</span>
        </div>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#features" className="text-sm text-white/70 hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-white/70 hover:text-white">Pricing</a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
            <Phone className="h-4 w-4" />
            Get your number
          </a>
        </div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-6 md:grid-cols-2 md:pb-24 md:pt-10">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-orange-300" />
            Your AI Personal Assistant That Can Do Anything
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            A dedicated AI voice agent
            <br />
            that runs your life
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Telettro gives you a real phone number for your AI assistant. It answers calls, schedules, 
            follows up, and automates your day — all through natural voice conversations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              <Play className="h-4 w-4" />
              See how it works
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-xs text-white/50">
            <span>14-day free trial</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Cancel anytime</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Privacy-first</span>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(130,87,229,0.35),rgba(255,255,255,0)_60%)]" />
          <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur md:h-[520px]">
            <div className="h-full w-full overflow-hidden rounded-xl">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
