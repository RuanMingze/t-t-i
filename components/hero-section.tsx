"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-8 lg:pt-40">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div data-aos="fade-down" data-aos-delay="0">
            <Image
              src="https://raw.githubusercontent.com/RuanMingze/theguide-toolbox/b3d9e8c5c04c4b260b11522763299d1a4a617b67/public/logo.png"
              alt="TheGuide Logo"
              width={80}
              height={80}
              priority
              className="mb-6 rounded-2xl shadow-lg shadow-primary/20"
            />
          </div>

          {/* Badge */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <Shield className="h-4 w-4" />
            <span>纯前端架构 · 隐私至上</span>
          </div>

          {/* Title */}
          <h1 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            <span className="text-primary">TheGuide</span> 工具箱
          </h1>

          {/* Subtitle */}
          <p 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
          >
            您的一站式效率工具与网站导航平台。所有工具都在浏览器本地运行，无需上传数据，保护您的隐私。
          </p>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="mb-16 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href="https://theguide.ruanmgjx.dpdns.org/" target="_blank" rel="noopener noreferrer">
                开始使用
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
              <a href="https://github.com/RuanMingze/theguide-toolbox" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="500"
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">30+</span>
              <span className="text-sm text-muted-foreground">实用工具</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">7</span>
              <span className="text-sm text-muted-foreground">工具分类</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">100%</span>
              <span className="text-sm text-muted-foreground">本地处理</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">0</span>
              <span className="text-sm text-muted-foreground">数据上传</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
