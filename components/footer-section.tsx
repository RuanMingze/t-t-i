"use client"

import Image from "next/image"
import { Github, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <div data-aos="fade-up">
            <Image
              src="https://raw.githubusercontent.com/RuanMingze/theguide-toolbox/b3d9e8c5c04c4b260b11522763299d1a4a617b67/public/logo.png"
              alt="TheGuide Logo"
              width={48}
              height={48}
              className="mx-auto mb-4 rounded-xl"
            />
            <h3 className="mb-2 text-2xl font-bold">
              <span className="text-primary">TheGuide</span> 工具箱
            </h3>
            <p className="text-sm text-muted-foreground">
              您的一站式效率工具与网站导航平台
            </p>
          </div>

          {/* Links */}
          <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://github.com/RuanMingze/theguide-toolbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://github.com/RuanMingze/theguide-toolbox/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                提交问题
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-md bg-border" />

          {/* Copyright */}
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              由 <span className="font-medium text-primary">RuanMingze (Ruanm)</span> 用 <Heart className="h-3 w-3 text-red-500" /> 打造
            </p>
            <p>MIT License · © {new Date().getFullYear()} TheGuide</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
