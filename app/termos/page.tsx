export const metadata = {
  title: 'Termos — I♥Pomo',
  description: 'Termos de uso do I♥Pomo',
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Termos de Uso</h1>

        <p className="text-gray-400 mb-4">
          Estes Termos de Uso regem sua utilização do I♥Pomo. Ao acessar ou usar o serviço, você
          concorda em cumprir estes termos.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Uso permitido</h2>
          <p className="text-gray-400">
            Você concorda em usar o aplicativo apenas para fins legais e de acordo com estes termos.
            É proibido usar o serviço para atividades ilegais ou que violem direitos de terceiros.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Propriedade intelectual</h2>
          <p className="text-gray-400">
            Todo o conteúdo do aplicativo (textos, imagens, design) é protegido por leis de
            propriedade intelectual. Não é permitido copiar ou distribuir sem autorização.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Limitação de responsabilidade</h2>
          <p className="text-gray-400">
            O aplicativo é fornecido "no estado em que se encontra". Na máxima extensão permitida
            por lei, não nos responsabilizamos por danos indiretos ou consequenciais.
          </p>
        </section>

        <p className="text-sm text-gray-500">Última atualização: Outubro de 2025</p>
      </div>
    </div>
  )
}
