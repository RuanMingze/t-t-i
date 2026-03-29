"use client"

import { FeatureCard } from "@/components/feature-card"
import {
  FileText,
  Code,
  ImageIcon,
  FileOutput,
  Dices,
  Calculator,
  Palette,
  CloudSun,
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "文本工具",
    description: "强大的文本处理功能",
    items: ["字数统计", "大小写转换", "文本对比", "批量替换", "文本反转", "去除重复行", "文本排序"],
  },
  {
    icon: Code,
    title: "编码转换",
    description: "多种编码格式互转",
    items: ["Base64 编解码", "URL 编解码", "Unicode 转换", "HTML 实体转换", "JSON 格式化", "进制转换", "ASCII 转换"],
  },
  {
    icon: ImageIcon,
    title: "图片工具",
    description: "全面的图片处理功能",
    items: ["图片压缩", "尺寸调整", "图片旋转", "图片滤镜", "黑白转换", "背景透明", "图片转 Base64"],
  },
  {
    icon: FileOutput,
    title: "格式转换",
    description: "文件格式转换处理",
    items: ["DOCX 转 TXT", "DOCX 转 MD", "PDF 转 TXT", "PDF 转 MD"],
  },
  {
    icon: Dices,
    title: "生成器",
    description: "各类随机生成工具",
    items: ["密码生成器", "UUID 生成器", "二维码生成", "Lorem 生成器", "随机颜色"],
  },
  {
    icon: Calculator,
    title: "计算工具",
    description: "实用计算与单位换算",
    items: ["科学计算器", "单位换算", "百分比计算", "日期计算", "时间戳转换", "BMI 计算器"],
  },
  {
    icon: Palette,
    title: "颜色工具",
    description: "色彩选择与转换",
    items: ["取色器", "颜色转换", "渐变生成器"],
  },
  {
    icon: CloudSun,
    title: "生活服务",
    description: "日常实用工具",
    items: ["实时时钟", "日历查看", "天气预报"],
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="features">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            功能特性
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            涵盖文本、编码、图片、生成器、计算等多种实用工具，满足您的日常效率需求
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
