'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Send, Mail } from 'lucide-react'
import { parametros } from '@/lib/utils'

export default function AjudaPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    plano: 'gratuito',
    mensagem: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ tipo: 'sucesso' | 'erro'; mensagem: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('/api/formulario.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.sucesso) {
        setStatus({ tipo: 'sucesso', mensagem: data.mensagem })
        setFormData({ nome: '', email: '', plano: 'gratuito', mensagem: '' })
      } else {
        setStatus({ tipo: 'erro', mensagem: data.erro || 'Erro ao enviar mensagem' })
      }
    } catch (error) {
      setStatus({ tipo: 'erro', mensagem: 'Erro de conexão. Tente novamente.' })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Central de <span className="text-red-600">Ajuda</span> e <span className="text-red-600">Contato</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Entre em contato conosco. Estamos aqui para <span className="text-red-600 font-medium">ajudar você!</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário de Contato */}
        <Card className="border-red-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="size-5 text-red-600" />
              Formulário de Contato
            </CardTitle>
            <CardDescription>Envie sua mensagem e responderemos em breve</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plano">Plano</Label>
                <select
                  id="plano"
                  name="plano"
                  value={formData.plano}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="gratuito">Gratuito</option>
                  <option value="pro">Pro</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva sua dúvida ou problema..."
                  rows={5}
                  required
                />
              </div>

              {status && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    status.tipo === 'sucesso'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.mensagem}
                </div>
              )}

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={loading}>
                <Send className="mr-2 size-4" />
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Outras Opções de Contato */}
        <div className="space-y-6">
          <Card className="border-red-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="size-5 text-red-600" />
                Suporte via E-mail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Prefere conversar por e-mail?
              </p>
              <Button asChild className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700" variant="outline">
                <a
                  href={parametros.emailSuporte ? `mailto:${parametros.emailSuporte}` : 'mailto:'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  Enviar E-mail
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1 text-red-600">Como funciona o plano gratuito?</h4>
                <p className="text-sm text-muted-foreground">
                  O plano gratuito oferece acesso básico ao Pomodoro timer com funcionalidades limitadas.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-red-600">Posso trocar de plano?</h4>
                <p className="text-sm text-muted-foreground">
                  Sim! Você pode fazer upgrade adiquirindo o plano PRO.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-red-600">Qual o tempo de resposta?</h4>
                <p className="text-sm text-muted-foreground">
                  Respondemos o mais rápido possível, geralmente em até 24 horas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horário de Atendimento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta</span>
                  <Badge variant="outline" className="border-red-200 text-red-600">9h - 18h</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
