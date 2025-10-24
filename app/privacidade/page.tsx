export const metadata = {
  title: 'Privacidade — I♥Pomo',
  description: 'Política de privacidade do I♥Pomo',
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>

        <p className="text-gray-400 mb-4">
          Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas
          informações quando você usa o I♥Pomo. Ao utilizar nosso serviço, você concorda com as
          práticas descritas aqui.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Informações que coletamos</h2>
          <p className="text-gray-400">
            Podemos coletar informações que você fornece diretamente (por exemplo, cadastro,
            configurações e preferências) e informações de uso (como estatísticas de sessão e
            dados agregados de desempenho). Não vendemos seus dados pessoais.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Como usamos as informações</h2>
          <p className="text-gray-400">
            Utilizamos os dados para fornecer e melhorar o serviço, personalizar sua experiência,
            enviar notificações opcionais e para análise interna. Quando necessário, podemos usar
            serviços de terceiros para hospedagem e análise — esses provedores estão sujeitos às
            suas próprias políticas de privacidade.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Segurança</h2>
          <p className="text-gray-400">
            Adotamos medidas razoáveis para proteger suas informações contra acesso não autorizado
            ou divulgação. No entanto, nenhum método de transmissão ou armazenamento é 100% seguro.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Seus direitos</h2>
          <p className="text-gray-400">
            Você pode solicitar acesso, correção ou exclusão de seus dados. Para isso, entre em
            contato através dos canais de suporte disponíveis no aplicativo.
          </p>
        </section>

        <p className="text-sm text-gray-500">Última atualização: Outubro de 2025</p>
      </div>
    </div>
  )
}
