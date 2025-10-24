export const metadata = {
  title: 'Cookies — I♥Pomo',
  description: 'Política de cookies do I♥Pomo',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>

        <p className="text-gray-400 mb-4">
          Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o uso
          do serviço e fornecer funcionalidades. Abaixo explicamos como e por que usamos essas
          tecnologias.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. O que são cookies?</h2>
          <p className="text-gray-400">
            Cookies são pequenos arquivos armazenados no seu dispositivo que ajudam a lembrar
            preferências, manter sessões e coletar informações sobre o uso.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Como usamos</h2>
          <p className="text-gray-400">
            Usamos cookies essenciais para o funcionamento do serviço e cookies analíticos para
            entender como você usa o app. Você pode controlar ou desativar cookies nas configurações
            do seu navegador, mas isso pode afetar a funcionalidade.
          </p>
        </section>

        <p className="text-sm text-gray-500">Última atualização: Outubro de 2025</p>
      </div>
    </div>
  )
}
