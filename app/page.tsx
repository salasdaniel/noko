"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Bot, Smartphone, Workflow, MessageSquare, CheckCircle, Mail, Phone, MapPin, Send } from "lucide-react"

const translations = {
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      getStarted: "Comenzar",
    },
    hero: {
      badge: "Sin Código • Soluciones IA • Automatización",
      title: "noko",
      tagline: "no code, ai solutions.",
      subtitle: "Transforma Tu Negocio con IA",
      description:
        "Creamos automatizaciones y soluciones de IA de vanguardia sin código. Desde chatbots inteligentes hasta automatizaciones completas, llevamos el futuro a tu negocio.",
      startJourney: "Comenzar Ahora",
      viewWork: "Ver Proyectos",
    },
    services: {
      title: "SERVICIOS PREMIUM",
      description:
        "Soluciones integrales de IA diseñadas para automatizar, optimizar y transformar las operaciones de tu negocio",
      chatbots: {
        title: "Chatbots IA",
        description:
          "Chatbots inteligentes que entienden el contexto y proporcionan interacciones similares a las humanas",
      },
      conversational: {
        title: "IA Conversacional",
        description: "Sistemas conversacionales avanzados que manejan interacciones complejas con clientes",
      },
      automation: {
        title: "Automatizaciones n8n",
        description: "Potentes automatizaciones de flujo de trabajo que conectan tus herramientas y optimizan procesos",
      },
      apps: {
        title: "Apps FlutterFlow",
        description: "Aplicaciones móviles hermosas y funcionales construidas con el desarrollo visual de FlutterFlow",
      },
    },
    features: {
      title: "¿Por Qué Elegir NOKO?",
      description:
        "Combinamos tecnología de IA de vanguardia con plataformas sin código para entregar soluciones que son tanto poderosas como accesibles.",
      list: [
        "No se requiere codificación - enfoque de desarrollo visual",
        "Ciclos rápidos de implementación e iteración",
        "Implementación de IA rentable",
        "Soluciones escalables que crecen con tu negocio",
        "Soporte y mantenimiento 24/7",
        "Integración con sistemas existentes",
      ],
      stats: {
        projects: "Proyectos Entregados",
        support: "Soporte Disponible",
        satisfaction: "Satisfacción del Cliente",
        delivery: "Entrega Promedio",
      },
    },
    about: {
      title: "ACERCA DE NOSOTROS",
      description:
        "NOKO está a la vanguardia de la revolución de IA sin código. Creemos que las soluciones de IA poderosas no deberían requerir conocimientos extensos de programación. Nuestro equipo de expertos aprovecha las últimas plataformas sin código y tecnologías de IA para crear soluciones que son tanto sofisticadas como accesibles.",
    },
    cta: {
      title: "¿Listo para Transformar Tu Negocio?",
      description:
        "Hablemos sobre cómo NOKO puede ayudarte a implementar soluciones de IA que generen resultados reales.",
      button: "Consulta Gratuita",
    },
    contact: {
      title: "CONTACTO",
      description: "¿Listo para comenzar tu viaje de IA? Nos encantaría saber de ti.",
      email: "Envíanos un Email",
      call: "Llámanos",
      visit: "Visítanos",
      form: {
        title: "Envíanos un Mensaje",
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        phone: "Teléfono",
        message: "Mensaje",
        send: "Enviar Mensaje",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Inténtalo de nuevo.",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Transformando negocios con soluciones de IA sin código",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      badge: "No Code • AI Solutions • Automation",
      title: "noko",
      tagline: "no code, ai solutions.",
      subtitle: "Transform Your Business with AI",
      description:
        "We create cutting-edge AI automations and solutions without code. From intelligent chatbots to complete automations, we bring the future to your business.",
      startJourney: "Start Now",
      viewWork: "View Projects",
    },
    services: {
      title: "PREMIUM SERVICES",
      description: "Comprehensive AI solutions designed to automate, optimize, and transform your business operations",
      chatbots: {
        title: "AI Chatbots",
        description: "Intelligent chatbots that understand context and provide human-like interactions",
      },
      conversational: {
        title: "Conversational AI",
        description: "Advanced conversational systems that handle complex customer interactions",
      },
      automation: {
        title: "n8n Automations",
        description: "Powerful workflow automations that connect your tools and streamline processes",
      },
      apps: {
        title: "FlutterFlow Apps",
        description: "Beautiful, functional mobile apps built with FlutterFlow's visual development",
      },
    },
    features: {
      title: "Why Choose NOKO?",
      description:
        "We combine cutting-edge AI technology with no-code platforms to deliver solutions that are both powerful and accessible.",
      list: [
        "No coding required - visual development approach",
        "Rapid deployment and iteration cycles",
        "Cost-effective AI implementation",
        "Scalable solutions that grow with your business",
        "24/7 support and maintenance",
        "Integration with existing systems",
      ],
      stats: {
        projects: "Projects Delivered",
        support: "Support Available",
        satisfaction: "Client Satisfaction",
        delivery: "Average Delivery",
      },
    },
    about: {
      title: "ABOUT US",
      description:
        "NOKO is at the forefront of the no-code AI revolution. We believe that powerful AI solutions shouldn't require extensive programming knowledge. Our team of experts leverages the latest no-code platforms and AI technologies to create solutions that are both sophisticated and accessible.",
    },
    cta: {
      title: "Ready to Transform Your Business?",
      description: "Let's discuss how NOKO can help you implement AI solutions that drive real results.",
      button: "Free Consultation",
    },
    contact: {
      title: "CONTACT",
      description: "Ready to start your AI journey? We'd love to hear from you.",
      email: "Email Us",
      call: "Call Us",
      visit: "Visit Us",
      form: {
        title: "Send Us a Message",
        name: "Name",
        email: "Email",
        company: "Company",
        phone: "Phone",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Transforming businesses with no-code AI solutions",
    },
  },
}

// Animated Button Component
const AnimatedButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "outline"
}) => {
  const baseClass = variant === "outline" ? "animated-button-outline" : "animated-button"

  return (
    <button className={`${baseClass} ${className}`} onClick={onClick}>
      <span className="button-text">{children}</span>
      <span className="button-icon">
        <svg width="20px" height="12px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              className="arrow-path"
              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546013,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
              fill={variant === "outline" ? "#374151" : "#FFFFFF"}
            ></path>
          </g>
        </svg>
      </span>
    </button>
  )
}

export default function HomePage() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    }

    setTimeout(() => setFormStatus("idle"), 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/noko_logo_transparent.png"
              alt="NOKO Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t.nav.contact}
            </a>
            <AnimatedButton variant="outline" onClick={toggleLanguage} className="text-sm px-4 py-2">
              {language === "es" ? "EN" : "ES"}
            </AnimatedButton>
            <AnimatedButton>{t.nav.getStarted}</AnimatedButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-light pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-8 bg-gray-100 text-gray-700 border-gray-200 text-lg px-6 py-2 font-medium hover:text-white transition-colors duration-300">
            {t.hero.badge}
          </Badge>

          {/* Logo and tagline in a div with responsive height */}
          <div className="flex flex-col items-center justify-center h-[100vh] md:h-[50vh]">
            <Image
              src="/images/noko_logo_transparent.png"
              alt="NOKO Logo"
              width={300}
              height={120}
              className="object-contain"
            />
            <p className="text-[1.650rem] text-gray-600 mt-4 font-light">{t.hero.tagline}</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.hero.subtitle}</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">{t.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton className="text-lg">{t.hero.startJourney}</AnimatedButton>
            <AnimatedButton variant="outline" className="text-lg">
              {t.hero.viewWork}
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-dark py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6 text-white hover-underline">{t.services.title}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.services.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#002eff] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl font-bold">{t.services.chatbots.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {t.services.chatbots.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl font-bold">{t.services.conversational.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {t.services.conversational.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl font-bold">{t.services.automation.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {t.services.automation.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl font-bold">{t.services.apps.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {t.services.apps.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-light py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-5xl font-black text-gray-900 mb-6 hover-underline">{t.features.title}</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{t.features.description}</p>
              <div className="space-y-4">
                {t.features.list.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-[#002eff] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#002eff]/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#002eff] mb-2">50+</div>
                    <div className="text-gray-600 font-medium">{t.features.stats.projects}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#002eff] mb-2">24/7</div>
                    <div className="text-gray-600 font-medium">{t.features.stats.support}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#002eff] mb-2">99%</div>
                    <div className="text-gray-600 font-medium">{t.features.stats.satisfaction}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#002eff] mb-2">48h</div>
                    <div className="text-gray-600 font-medium">{t.features.stats.delivery}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-5xl font-black text-white mb-8 hover-underline">{t.about.title}</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t.about.description}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-5xl font-black text-gray-900 mb-6">{t.cta.title}</h3>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{t.cta.description}</p>
          <div className="flex justify-center">
            <AnimatedButton className="text-xl px-12 py-4">{t.cta.button}</AnimatedButton>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-dark py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-6xl font-black text-white mb-6 hover-underline">{t.contact.title}</h3>
            <p className="text-xl text-gray-300">{t.contact.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
                <CardHeader className="flex flex-row items-center space-y-0 space-x-6">
                  <div className="w-12 h-12 bg-[#002eff] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{t.contact.email}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">hello@noko.ai</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
                <CardHeader className="flex flex-row items-center space-y-0 space-x-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{t.contact.call}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">+1 (555) 123-4567</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
                <CardHeader className="flex flex-row items-center space-y-0 space-x-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{t.contact.visit}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">San Francisco, CA</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-bold">{t.contact.form.title}</CardTitle>
              </CardHeader>
              <div className="p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-medium">
                        {t.contact.form.name}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        {t.contact.form.email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white font-medium">
                      {t.contact.form.company}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white font-medium">
                      {t.contact.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white font-medium">
                      {t.contact.form.message}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <button type="submit" disabled={formStatus === "sending"} className="w-full animated-button">
                    <span className="button-text">
                      {formStatus === "sending" ? "Enviando..." : t.contact.form.send}
                    </span>
                    <span className="button-icon">
                      <Send className="w-4 h-4" />
                    </span>
                  </button>
                  {formStatus === "success" && <p className="text-green-400 text-center">{t.contact.form.success}</p>}
                  {formStatus === "error" && <p className="text-red-400 text-center">{t.contact.form.error}</p>}
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-light py-12 px-4 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/noko_logo_transparent.png"
                alt="NOKO Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Social Media Icons */}
            <div className="social-icons mb-4 md:mb-0">
              <a href="#" className="social-icon facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="text-gray-600 text-center md:text-right">
              <p className="font-medium">&copy; 2024 NOKO. {t.footer.rights}</p>
              <p className="text-sm mt-1">{t.footer.tagline}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
