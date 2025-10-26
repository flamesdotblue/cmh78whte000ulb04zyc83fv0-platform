import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Personal',
    price: '$29/mo',
    description: 'Perfect for individuals managing their personal life',
    features: [
      '1 AI voice agent number',
      '500 contacts & 500 minutes/mo',
      'Unlimited task management',
      'Basic automations',
      'Calendar integration',
      '7-day history',
      'Email support'
    ],
    cta: 'Start free',
    highlighted: false
  },
  {
    name: 'Plus',
    price: '$79/mo',
    description: 'For power users and light business use',
    features: [
      '2 AI numbers',
      '2,000 contacts & minutes',
      'Advanced automations',
      'Custom workflows',
      '30-day history',
      'Priority support',
      'CRM included'
    ],
    cta: 'Upgrade',
    highlighted: true
  },
  {
    name: 'Pro',
    price: '$199/mo',
    description: 'For professionals and small businesses',
    features: [
      '5 AI numbers',
      'Unlimited contacts',
      '5,000 minutes/mo',
      'Full CRM + analytics',
      '90-day history',
      'API access',
      'Priority phone support'
    ],
    cta: 'Go Pro',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple pricing, big impact</h2>
        <p className="mt-4 text-base text-white/70">14-day free trial. No credit card required. Cancel anytime.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border border-white/10 p-6 ${
              tier.highlighted ? 'bg-white text-black' : 'bg-white/5 text-white'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 right-6 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80">
                Most popular
              </div>
            )}
            <h3 className={`text-lg font-semibold ${tier.highlighted ? 'text-black' : 'text-white'}`}>{tier.name} Plan</h3>
            <p className={`mt-1 text-3xl font-semibold ${tier.highlighted ? 'text-black' : 'text-white'}`}>{tier.price}</p>
            <p className={`mt-2 text-sm ${tier.highlighted ? 'text-black/70' : 'text-white/70'}`}>{tier.description}</p>
            <ul className="mt-6 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`mt-0.5 h-4 w-4 ${tier.highlighted ? 'text-black' : 'text-white'}`} />
                  <span className={tier.highlighted ? 'text-black/80' : 'text-white/80'}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition ${
                tier.highlighted
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-white/50">
        Need more? Enterprise plans with custom integrations and SLAs available.
      </div>
    </section>
  );
}
