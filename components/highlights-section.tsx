"use client"

import { Shield, Zap, Smartphone, DollarSign, Users, Lock } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "纯前端架构",
    description: "所有工具都在浏览器本地运行，无需服务器参与",
  },
  {
    icon: Lock,
    title: "隐私保护",
    description: "文件和数据不上传，完全在本地处理，保护您的隐私",
  },
  {
    icon: Zap,
    title: "快速响应",
    description: "无需网络请求，即时处理，体验流畅",
  },
  {
    icon: DollarSign,
    title: "免费部署",
    description: "可部署到 Cloudflare Pages，零成本运营",
  },
  {
    icon: Smartphone,
    title: "响应式设计",
    description: "完美支持桌面端和移动端，随时随地使用",
  },
  {
    icon: Users,
    title: "多种登录方式",
    description: "支持 Ruanm OAuth 2.0 和 GitHub OAuth 2.0 登录",
  },
]

export function HighlightsSection() {
  return (
    <section className="bg-secondary/30 px-4 py-20 md:px-8" id="highlights">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            为什么选择 TheGuide
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            安全、快速、免费 — 打造最佳用户体验
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
