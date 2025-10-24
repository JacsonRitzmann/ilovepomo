'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Timer,
  CheckSquare,
  Volume2,
  BarChart3,
  Calendar,
  Zap,
  Check,
  ArrowRight,
  Play,
  Star,
  Award,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [feature, setFeature] = useState([
    {
      icon: Timer,
      title: "Timer Pomodoro",
      description: "Timer personalizável com modos Pomodoro, pausa curta e longa. Notificações inteligentes e sons relaxantes.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: CheckSquare,
      title: "Gestão de Tarefas",
      description: "Organize suas tarefas por projeto. Priorize, categorize e acompanhe seu progresso em tempo real.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Volume2,
      title: "Sons Ambiente",
      description: "Biblioteca de sons relaxantes: chuva, natureza, café. Crie o ambiente perfeito para seu foco.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Analise sua produtividade com gráficos e estatísticas. Identifique padrões e melhore continuamente.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Calendário Integrado",
      description: "Visualize suas sessões concluídas. Mantenha a motivação com sua sequência de dias produtivos.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Dicas de Bem-Estar",
      description: "Receba lembretes para alongamentos, hidratação e pausas. Cuide da sua saúde enquanto trabalha.",
      color: "from-pink-500 to-pink-600"
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">I♥Pomo</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("recursos")} className="text-gray-300 hover:text-white transition-colors">
                Recursos
              </button>
              <button onClick={() => scrollToSection("como-funciona")} className="text-gray-300 hover:text-white transition-colors">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection("planos")} className="text-gray-300 hover:text-white transition-colors">
                Planos
              </button>
              <Button
                onClick={() => scrollToSection("download")}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none"
              >
                Baixar Agora
              </Button>
            </div>

            <Button
              onClick={() => scrollToSection("download")}
              className="md:hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none"
            >
              Baixar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transforme seu
                <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Foco em Resultados
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                O método Pomodoro reimaginado. Gerencie seu tempo, tarefas e bem-estar
                em um único lugar. Simples, elegante e poderoso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("download")}
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none text-lg px-8 py-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Começar Gratuitamente
                </Button>
                <Button
                  onClick={() => scrollToSection("recursos")}
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  Ver Recursos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>


              {/* <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-red-500">500K+</div>
                  <div className="text-sm text-gray-500">Usuários Ativos</div>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-red-500">4.8</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    Avaliação
                  </div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68b81e56f4fd1bfafc2f5330/45200da40_CapturadeTela2025-10-14s201006.png"
                  alt="I♥Pomo App Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-white" />
                  <div>
                    <div className="text-sm text-white/80">Escolha dos Editores</div>
                    <div className="text-lg font-bold text-white">App do Ano</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-12 px-6 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: "Aumento de Produtividade", value: "+40%" },
              { icon: Timer, label: "Horas Focadas", value: "2M+" },
              { icon: CheckSquare, label: "Tarefas Completadas", value: "10M+" },
              { icon: Star, label: "Satisfação", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-red-500" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Features Section */}
      <section id="recursos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tudo que você precisa para
              <span className="block text-red-500">ser mais produtivo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ferramentas profissionais em uma interface simples e elegante
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feature.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 p-6 h-full backdrop-blur-sm group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como Funciona o
              <span className="block text-red-500">Método Pomodoro</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Escolha uma Tarefa",
                description: "Selecione a tarefa em que deseja focar"
              },
              {
                step: "02",
                title: "Configure o Timer",
                description: "Ajuste para 25 minutos de foco intenso"
              },
              {
                step: "03",
                title: "Trabalhe com Foco",
                description: "Dedique-se completamente até o timer acabar"
              },
              {
                step: "04",
                title: "Faça uma Pausa",
                description: "Descanse 5 minutos e repita o processo"
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-red-500/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-red-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escolha o Plano
              <span className="block text-red-500">Ideal para Você</span>
            </h2>
            <p className="text-xl text-gray-400">
              Comece grátis. Evolua quando precisar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold">R$ 0</span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                  <p className="text-gray-400">Perfeito para começar sua jornada de produtividade</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Timer Pomodoro completo",
                    "Gestão básica de tarefas",
                    "3 sons ambiente",
                    "Relatórios semanais básicos",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollToSection("download")}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  size="lg"
                >
                  Começar Grátis
                </Button>
              </Card>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/30 p-8 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 text-white border-none">
                    Mais Popular
                  </Badge>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                      R$ 19,90
                    </span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                  <p className="text-gray-300">Para profissionais que levam produtividade a sério</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Tudo do plano Free",
                    "Mais sons ambiente ",
                    "Relatórios avançados",
                    "Calendário completo",
                    "Dicas personalizadas de bem-estar",
                    "Tema personalizável",
                    "Suporte prioritário"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollToSection("download")}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none"
                  size="lg"
                >
                  Começar Teste Grátis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  7 dias grátis • Cancele quando quiser
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto para Transformar
            <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Sua Produtividade?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Junte-se a milhares pessoas que já melhoraram seu foco e produtividade
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none text-lg px-12 py-7"
            >
              <Play className="w-6 h-6 mr-2" />
              Baixar para Mac OS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-12 py-7"
            >
              Baixar para Windows
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">I♥Pomo</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforme seu foco em resultados com o método Pomodoro reimaginado.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection("recursos")} className="hover:text-white transition-colors">Recursos</button></li>
                <li><button onClick={() => scrollToSection("planos")} className="hover:text-white transition-colors">Planos</button></li>
                <li><button onClick={() => scrollToSection("download")} className="hover:text-white transition-colors">Download</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="/termos" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="/cookies" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 I♥Pomo. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}