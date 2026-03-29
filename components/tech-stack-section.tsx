"use client"

const techStack = [
  { name: "Next.js", version: "16.2.0", category: "框架" },
  { name: "React", version: "19.2.4", category: "前端" },
  { name: "TypeScript", version: "", category: "语言" },
  { name: "Tailwind CSS", version: "v4", category: "样式" },
  { name: "Radix UI", version: "", category: "UI 组件" },
  { name: "shadcn/ui", version: "", category: "UI 组件" },
  { name: "Cloudflare Pages", version: "", category: "部署" },
  { name: "pnpm", version: "", category: "包管理" },
]

export function TechStackSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="tech">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            技术栈
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            采用现代化技术栈，确保高性能与优秀的开发体验
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                {tech.category}
              </span>
              <span className="text-lg font-semibold text-foreground">
                {tech.name}
              </span>
              {tech.version && (
                <span className="text-sm text-muted-foreground">{tech.version}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
