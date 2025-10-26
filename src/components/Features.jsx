import { Phone, Users, Calendar, Bot, Sparkles, Shield } from 'lucide-react';

const items = [
  {
    icon: Phone,
    title: 'Your own AI number',
    desc: 'A dedicated phone number that answers, screens, and follows up 24/7.'
  },
  {
    icon: Users,
    title: 'Smart contacts',
    desc: 'Import contacts, assign rules, track relationships and conversations.'
  },
  {
    icon: Calendar,
    title: 'Daily planning',
    desc: 'AI organizes your day, schedules appointments, and sends reminders.'
  },
  {
    icon: Bot,
    title: 'Intelligent voice',
    desc: 'Understands context, learns your preferences, and handles multi-step tasks.'
  },
  {
    icon: Sparkles,
    title: 'No-code automations',
    desc: 'Build workflows like missed-call replies, birthday calls, and follow-ups.'
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    desc: 'End-to-end security. Your data never used to train other models.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Turn calls into outcomes</h2>
        <p className="mt-4 text-base text-white/70">
          Telettro is built for individuals first — powerful enough for business. Let your AI voice agent
          answer, coordinate, and automate, while you focus on what matters.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <item.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          title="Daily life automation"
          bullets={[
            'Answer calls when you are busy or sleeping',
            'Schedule appointments and send invites',
            'Coordinate groups and gather RSVPs'
          ]}
        />
        <Card
          title="Task copilot"
          bullets={[
            'Follow up with friends and clients',
            'Proactive reminders at the right time',
            'Recurring check-ins and birthday calls'
          ]}
        />
        <Card
          title="Optional personal CRM"
          bullets={[
            'Full history for each relationship',
            'Notes, tags, and search',
            'Analytics for power users'
          ]}
        />
      </div>
    </section>
  );
}

function Card({ title, bullets }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
      <h4 className="text-base font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-white/70">• {b}</li>
        ))}
      </ul>
    </div>
  );
}
