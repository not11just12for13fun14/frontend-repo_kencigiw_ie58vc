import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import * as Tabs from '@radix-ui/react-tabs'
import { CheckCircle2, Sparkles, Brush, Calendar, Recycle, Shield } from 'lucide-react'

function Section({ children, className = '' }) {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
  )
}

function Hero() {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">Steinteppich</h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg">[Wird definiert]</p>
        </div>
      </div>
    </div>
  )
}

function PlaceholderImg({ label = 'Bild', className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 border border-zinc-200/70 aspect-[4/3] ${className}`}>
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-zinc-500">{label}</span>
      </div>
    </div>
  )
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> <span>{children}</span></li>
  )
}

const tabCls = 'inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 data-[state=active]:bg-emerald-600 data-[state=active]:text-white'
const activeTabCls = 'inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow'

function TwoCol({ imgLabel, title, text, bullets = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <PlaceholderImg label={imgLabel} className="md:order-1" />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-zinc-600">{text}</p>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <Bullet key={i}>{b}</Bullet>
          ))}
        </ul>
      </div>
    </div>
  )
}

function VorteileTabs() {
  const intro = 'Steinteppich überzeugt in vielen Bereichen: robust, fugenlos und optisch flexibel – ideal für Treppen, Böden, Balkone und gewerbliche Flächen.'
  const [tab, setTab] = useState('treppen')

  return (
    <Section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Vorteile</h2>
        <p className="mt-3 text-zinc-600 max-w-3xl mx-auto">{intro}</p>
      </div>

      <Tabs.Root value={tab} onValueChange={setTab} className="w-full">
        <Tabs.List className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
          <Tabs.Trigger value="treppen" className={tab === 'treppen' ? activeTabCls : tabCls}>Treppen</Tabs.Trigger>
          <Tabs.Trigger value="boeden" className={tab === 'boeden' ? activeTabCls : tabCls}>Böden</Tabs.Trigger>
          <Tabs.Trigger value="balkone" className={tab === 'balkone' ? activeTabCls : tabCls}>Balkone</Tabs.Trigger>
          <Tabs.Trigger value="gewerbe" className={tab === 'gewerbe' ? activeTabCls : tabCls}>Gewerbe</Tabs.Trigger>
        </Tabs.List>

        <div className="mt-10">
          <Tabs.Content value="treppen">
            <TwoCol
              imgLabel="Treppen"
              title="Treppen"
              text="Als Alternative zur klassischen Treppensanierung bietet Steinteppich eine schnelle, langlebige und rutschhemmende Lösung. Er ummantelt Stufen fugenlos, kaschiert Unebenheiten und ist sofort begehbar. Die Oberfläche ist pflegeleicht, frostbeständig und optisch vielseitig – perfekt für Innen- und Außenbereiche."
              bullets={[
                'Rutschhemmend und trittsicher',
                'Fugenlos – verdeckt alte Fugen und Kanten',
                'Robust, frostsicher und UV-beständig',
                'Schnelle Sanierung mit geringer Ausfallzeit',
              ]}
            />
          </Tabs.Content>

          <Tabs.Content value="boeden">
            <TwoCol
              imgLabel="Böden"
              title="Böden"
              text="Für Wohn- und Nutzflächen punktet Steinteppich mit Fugenlosigkeit, hoher Belastbarkeit und großer Designvielfalt. Die Oberfläche wirkt warm und modern, ist angenehm zu begehen und lässt sich an jeden Stil anpassen. Ideal für Flure, Wohnräume und stark frequentierte Bereiche."
              bullets={[
                'Fugenlos und pflegeleicht',
                'Vielfältige Farben, Mischungen und Körnungen',
                'Langlebig und belastbar',
                'Kompatibel mit Fußbodenheizung',
              ]}
            />
          </Tabs.Content>

          <Tabs.Content value="balkone">
            <TwoCol
              imgLabel="Balkone"
              title="Balkone"
              text="Auf Balkonen überzeugt Steinteppich durch Abdichtungssysteme, UV-Beständigkeit und Witterungsfestigkeit. Regenwasser wird kontrolliert abgeführt, die Fläche bleibt rutschhemmend und formstabil. Auch optisch fügt sich die Oberfläche nahtlos in moderne Fassadenkonzepte ein."
              bullets={[
                'Witterungsfest und UV-stabil',
                'Rutschhemmende Oberfläche',
                'Kompatibel mit Abdichtungssystemen',
                'Schnelle, saubere Sanierung im Bestand',
              ]}
            />
          </Tabs.Content>

          <Tabs.Content value="gewerbe">
            <TwoCol
              imgLabel="Gewerbe"
              title="Gewerbe"
              text="Im gewerblichen Einsatz bietet Steinteppich langlebige, repräsentative Flächen mit Gestaltungsfreiheit für Logos, Wegeführung und Farbkontraste. Die strapazierfähige Oberfläche hält hoher Frequenz stand und bleibt dabei pflegeleicht und wertig im Auftritt."
              bullets={[
                'Individuelles Branding und Motive möglich',
                'Hohe Strapazierfähigkeit',
                'Schnelle Reinigung im laufenden Betrieb',
                'Fugenloser, moderner Look',
              ]}
            />
          </Tabs.Content>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold transition-colors">Primary CTA</a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-5 py-3 font-semibold transition-colors">Secondary CTA</a>
        </div>
      </Tabs.Root>
    </Section>
  )
}

function Designmoeglichkeiten() {
  return (
    <Section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Designmöglichkeiten</h2>
        <p className="mt-3 text-zinc-600 max-w-3xl mx-auto">Steinteppich eröffnet eine beeindruckende Designvielfalt – von Natursteinen über farbige Mischungen bis zu kreativen Motiven und Effekten.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <Card
          title="Steinarten"
          text="Marmor, Quarzkiesel und kolorierte Varianten – in unterschiedlichen Körnungen kombinierbar, auch als individuelle Mischungen."
        />
        <Card
          title="Designs"
          text="Motive, Linien und Flächen in mehreren Farben – für Zonierung, Wegeführung oder markante Highlights."
        />
        <Card
          title="Spezialeffekte"
          text="Lichtlinien, Glasanteile und Glanzeffekte setzen Akzente und erzeugen ein hochwertiges Erscheinungsbild."
        />
      </div>
    </Section>
  )
}

function Card({ title, text }) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <PlaceholderImg className="mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-zinc-600 flex-1">{text}</p>
    </div>
  )
}

function Pflegehinweise() {
  return (
    <Section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Pflegehinweise</h2>
        <p className="mt-3 text-zinc-600 max-w-3xl mx-auto">Steinteppich ist pflegeleicht. Mit wenigen Routinen bleibt die Oberfläche dauerhaft ansehnlich und hygienisch.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <PlaceholderImg label="Pflege" />
        <div>
          <h3 className="text-xl font-semibold">Pflegegrundlagen</h3>
          <p className="mt-3 text-zinc-600">Regelmäßiges Saugen oder Wischen genügt meist. Für stärkere Verschmutzungen empfehlen sich geeignete Reinigungsmittel. Optional kann eine permanente Porenversiegelung die Aufnahme von Schmutz reduzieren.</p>
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold flex items-center gap-2"><Brush className="h-5 w-5 text-emerald-600" /> Reinigung</h4>
              <p className="text-zinc-600">Schonende Reiniger nutzen, nebelfeucht wischen; punktuell mit Bürste arbeiten.</p>
            </div>
            <div>
              <h4 className="font-semibold flex items-center gap-2"><Shield className="h-5 w-5 text-emerald-600" /> Permanente Versiegelung</h4>
              <p className="text-zinc-600">Optional: Porenversiegelung schützt dauerhaft und erleichtert die Pflege deutlich.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <IntervalCard icon={<Calendar className="h-6 w-6" />} title="Wöchentlich" text="Saugen oder wischen, lose Partikel entfernen." />
        <IntervalCard icon={<Sparkles className="h-6 w-6" />} title="Monatlich" text="Gründlich reinigen, Randbereiche bürsten." />
        <IntervalCard icon={<Recycle className="h-6 w-6" />} title="Jährlich" text="Intensivreinigung; Zustand prüfen, ggf. auffrischen." />
      </div>
    </Section>
  )
}

function IntervalCard({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-emerald-700">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-zinc-600">{text}</p>
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'Ist Steinteppich rutschhemmend genug für Treppen und Außenbereiche?',
      a: 'Ja. Je nach Körnung und Bindemittel entsteht eine rutschhemmende Oberfläche, die sich für Innen- und Außenbereiche eignet.'
    },
    {
      q: 'Wie langlebig ist ein Steinteppich?',
      a: 'Bei fachgerechter Ausführung ist Steinteppich sehr langlebig, UV- und frostbeständig sowie leicht zu pflegen.'
    },
    {
      q: 'Kann ich Logos oder Muster integrieren?',
      a: 'Ja, Motive, Konturen und Farbwechsel sind möglich – ideal für Markenauftritte und Wegeführung.'
    },
  ]

  const [open, setOpen] = useState(0)

  return (
    <Section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Fragen & Antworten</h2>
        <p className="mt-3 text-zinc-600 max-w-3xl mx-auto">Die wichtigsten Punkte rund um Steinteppich – kurz und verständlich beantwortet.</p>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white">
        {faqs.map((item, i) => (
          <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-5 focus:outline-none">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-semibold">{item.q}</h3>
                {open === i && (
                  <p className="mt-2 text-zinc-600">{item.a}</p>
                )}
              </div>
              <span className={`mt-1 inline-block h-5 w-5 rounded-full border ${open === i ? 'bg-emerald-600 border-emerald-600' : 'border-zinc-300'}`}></span>
            </div>
          </button>
        ))}
      </div>
    </Section>
  )
}

export default function SteinteppichPage() {
  useEffect(() => {
    document.title = 'Steinteppich – [Wird definiert]'
  }, [])

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Hero />
      <VorteileTabs />
      <Designmoeglichkeiten />
      <Pflegehinweise />
      <FAQ />
    </div>
  )
}
