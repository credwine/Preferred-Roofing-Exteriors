'use client'

import { motion } from 'framer-motion'

// Your roof image – used for all heroes, no overlays
const HERO_IMAGE = '/images/2022-02-21.webp'

interface PageHeroProps {
  title: string
  /** Part of title to highlight in yellow (accent) - e.g. "Atlanta, GA" */
  highlight?: string
  subtitle?: string
  /** Center text (default true for inner pages) */
  centered?: boolean
}

export default function PageHero({
  title,
  highlight,
  subtitle,
  centered = true,
}: PageHeroProps) {
  const displayTitle =
    highlight && title.includes(highlight) ? (
      <>
        {title.substring(0, title.indexOf(highlight))}
        <span className="text-accent-300">{highlight}</span>
        {title.substring(title.indexOf(highlight) + highlight.length)}
      </>
    ) : (
      title
    )

  return (
    <section className="relative text-white overflow-hidden py-24 md:py-32 min-h-[420px] flex items-center">
      {/* Your roof image – full visibility, no overlay. Slight brightness so it pops. */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          filter: 'brightness(1.05) contrast(1.02)',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={centered ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'}
        >
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.8)' }}
          >
            {displayTitle}
          </h1>
          {subtitle && (
            <p
              className="text-xl md:text-2xl leading-relaxed px-6 py-3 rounded-full inline-block"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                color: 'rgba(255,255,255,0.98)',
                textShadow: '0 1px 4px rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,0.2)',
              }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
