"use client"

import { Wifi, WifiOff, Zap, RefreshCw, Shield, Smartphone } from "lucide-react"

const pwaFeatures = [
  {
    icon: WifiOff,
    title: "离线可用",
    description: "Service Worker 缓存核心资源，无网络时仍可使用已访问的工具"
  },
  {
    icon: Zap,
    title: "闪电加载",
    description: "静态资源本地缓存，二次访问瞬间加载，体验如原生应用"
  },
  {
    icon: RefreshCw,
    title: "自动更新",
    description: "后台自动检测更新，无需手动刷新即可获取最新版本"
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "HTTPS 安全传输，本地缓存数据加密，保护您的隐私"
  },
  {
    icon: Smartphone,
    title: "原生体验",
    description: "可安装到桌面，全屏运行，与原生应用无异"
  },
  {
    icon: Wifi,
    title: "智能缓存",
    description: "采用 Cache First 策略，优先使用本地缓存，网络请求作为备选"
  }
]

export function PWASection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            PWA 技术
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Service Worker 赋能
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            TheGuide 采用渐进式 Web 应用 (PWA) 技术，通过 Service Worker 实现离线缓存、
            后台同步等高级功能，为您带来媲美原生应用的使用体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pwaFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          className="mt-12 p-6 rounded-xl bg-card border border-border"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Service Worker 工作原理
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-2xl font-bold text-primary">
                1
              </div>
              <h4 className="font-medium text-foreground mb-2">注册安装</h4>
              <p className="text-sm text-muted-foreground">
                首次访问时，浏览器自动注册 Service Worker 并缓存核心资源
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-2xl font-bold text-primary">
                2
              </div>
              <h4 className="font-medium text-foreground mb-2">拦截请求</h4>
              <p className="text-sm text-muted-foreground">
                Service Worker 拦截网络请求，优先从缓存返回资源
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-2xl font-bold text-primary">
                3
              </div>
              <h4 className="font-medium text-foreground mb-2">后台更新</h4>
              <p className="text-sm text-muted-foreground">
                检测到新版本时，后台静默更新，下次访问自动生效
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
