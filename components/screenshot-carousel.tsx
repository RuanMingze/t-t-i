"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const screenshots = [
  {
    src: "https://luckycola.com.cn/public/imgs/luckycola_Imghub_forever_c4w8eKYK17747658308018006.png",
    alt: "TheGuide 工具箱截图 1",
    caption: "工具箱主页",
  },
  {
    src: "https://luckycola.com.cn/public/imgs/luckycola_Imghub_forever_0NjpyGMt17747655864435411.png",
    alt: "TheGuide 工具箱截图 2",
    caption: "工具箱工具页面",
  },
  {
    src: "https://luckycola.com.cn/public/imgs/luckycola_Imghub_forever_ktUpRL8G17747649167334817.png",
    alt: "TheGuide 工具箱截图 3",
    caption: "工具箱导航页面",
  },
]

export function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }, [])

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  return (
    <section className="relative px-4 pb-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-2 shadow-2xl shadow-primary/10 backdrop-blur-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.src}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                )}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground/80 shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:text-foreground"
            aria-label="上一张"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground/80 shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:text-foreground"
            aria-label="下一张"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                )}
                aria-label={`跳转到第 ${index + 1} 张`}
              />
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="relative mt-4 h-6 overflow-hidden">
          {screenshots.map((screenshot, index) => (
            <p
              key={screenshot.caption}
              data-aos="fade-up"
              data-aos-delay="200"
              className={cn(
                "absolute left-0 right-0 text-center text-sm text-muted-foreground transition-all duration-500",
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : index < currentIndex
                    ? "opacity-0 -translate-y-full"
                    : "opacity-0 translate-y-full"
              )}
            >
              {screenshot.caption}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
