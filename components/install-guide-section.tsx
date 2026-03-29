"use client"

import { useState } from "react"
import { Monitor, Smartphone, Apple, Chrome } from "lucide-react"
import { cn } from "@/lib/utils"

type Platform = "windows" | "macos" | "android" | "ios"

const platforms = [
  { id: "windows" as Platform, label: "Windows", icon: Monitor },
  { id: "macos" as Platform, label: "macOS", icon: Apple },
  { id: "android" as Platform, label: "Android", icon: Smartphone },
  { id: "ios" as Platform, label: "iOS", icon: Apple },
]

const installGuides: Record<Platform, { browser: string; browserIcon: typeof Chrome; steps: string[] }[]> = {
  windows: [
    {
      browser: "Chrome / Edge",
      browserIcon: Chrome,
      steps: [
        "打开 TheGuide 工具箱网站",
        "点击地址栏右侧的「安装」图标（或菜单中的「安装 TheGuide」）",
        "在弹出的对话框中点击「安装」",
        "应用将自动添加到桌面和开始菜单"
      ]
    }
  ],
  macos: [
    {
      browser: "Chrome",
      browserIcon: Chrome,
      steps: [
        "打开 TheGuide 工具箱网站",
        "点击地址栏右侧的安装图标",
        "或点击菜单 → 更多工具 → 创建快捷方式",
        "勾选「在窗口中打开」，点击创建"
      ]
    },
    {
      browser: "Safari",
      browserIcon: Chrome,
      steps: [
        "打开 TheGuide 工具箱网站",
        "点击菜单栏「文件」→「添加到程序坞」",
        "或使用快捷键 Command + Shift + D",
        "应用图标将出现在程序坞中"
      ]
    }
  ],
  android: [
    {
      browser: "Chrome",
      browserIcon: Chrome,
      steps: [
        "打开 TheGuide 工具箱网站",
        "点击浏览器右上角菜单（三个点）",
        "选择「添加到主屏幕」或「安装应用」",
        "确认安装，应用图标将出现在主屏幕"
      ]
    }
  ],
  ios: [
    {
      browser: "Safari",
      browserIcon: Chrome,
      steps: [
        "使用 Safari 打开 TheGuide 工具箱网站",
        "点击底部工具栏的「分享」按钮",
        "向下滚动，选择「添加到主屏幕」",
        "点击右上角「添加」，应用图标将出现在主屏幕"
      ]
    }
  ]
}

export function InstallGuideSection() {
  const [activePlatform, setActivePlatform] = useState<Platform>("windows")

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            安装指南
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            安装到您的设备
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            将 TheGuide 工具箱安装为独立应用，享受更快的启动速度和原生应用般的体验
          </p>
        </div>

        {/* Platform Tabs */}
        <div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activePlatform === platform.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              <platform.icon className="w-4 h-4" />
              {platform.label}
            </button>
          ))}
        </div>

        {/* Install Steps */}
        <div 
          className="grid gap-6 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {installGuides[activePlatform].map((guide, guideIndex) => (
            <div
              key={guide.browser}
              className={cn(
                "p-6 rounded-xl bg-card border border-border",
                installGuides[activePlatform].length === 1 && "md:col-span-2 md:max-w-2xl md:mx-auto"
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <guide.browserIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {guide.browser}
                </h3>
              </div>

              <ol className="space-y-4">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                      {stepIndex + 1}
                    </span>
                    <p className="text-muted-foreground pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div 
          className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h4 className="text-lg font-semibold text-foreground mb-3">
            温馨提示
          </h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              安装后的应用会在独立窗口中运行，拥有更沉浸的使用体验
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              PWA 应用支持离线使用，即使没有网络也能访问已缓存的工具
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              应用会自动更新，无需手动重新安装即可获取最新功能
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              如需卸载，可在系统设置或应用管理中移除
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
