'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Bank = {
  name: string
  alt: string
}

type InfiniteSliderProps = {
  banks: Bank[]
}

export function InfiniteSlider({ banks }: InfiniteSliderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!isVisible || !sliderRef.current) return

    const slider = sliderRef.current
    const totalWidth = slider.scrollWidth
    let currentPosition = 0
    let animationFrameId: number

    const animate = () => {
      if (slider.scrollWidth > slider.clientWidth) {
        currentPosition += 0.5 // Ajuste a velocidade do scroll aqui
        if (currentPosition >= totalWidth) currentPosition = 0
        slider.scrollLeft = currentPosition
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isVisible])

  const doubledBanks = [...banks, ...banks]

  return (
    <div ref={containerRef} className="overflow-hidden" aria-label="Bank logos slider">
      <div
        ref={sliderRef}
        className="flex items-center py-3"
        style={{
          width: `${doubledBanks.length * 200}px`, // Corrigido para considerar os bancos duplicados
          height: '120px',
        }}
      >
        {doubledBanks.map((bank, index) => (
          <div key={`${bank.name}-${index}`} className="flex-shrink-0">
            <Image
              src={`/${bank.name}.png`}
              alt={bank.alt}
              width={180}
              height={120}
              className="h-[120px] w-auto object-contain"
              priority={index < banks.length}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
