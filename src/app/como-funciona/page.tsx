export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <a href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600">
                PagSoftware
              </a>
              <p className="text-sm text-gray-600">Financiamento para Software B2B</p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/5511973531005?text=Olá! Gostaria de saber mais sobre o PagSoftware.', '_blank')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Como funciona o PagSoftware
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entenda todo o processo de financiamento de software B2B, desde a solicitação até o pagamento final.
          </p>
        </div>
      </section>

      {/* Processo Detalhado */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Etapa 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Solicitação</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Escolha o software B2B que deseja adquirir
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Use nosso simulador para calcular as parcelas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Envie sua solicitação via WhatsApp
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Forneça documentação básica da empresa
                </li>
              </ul>
            </div>

            {/* Etapa 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Análise</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Análise automatizada de crédito
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Verificação de dados da empresa
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Aprovação em até 24 horas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Comunicação transparente do resultado
                </li>
              </ul>
            </div>

            {/* Etapa 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Pagamento</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fornecedor recebe o valor à vista
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Você paga em parcelas mensais fixas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Taxa de 2,5% ao mês, transparente
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Debito automático ou boleto
                </li>
              </ul>
            </div>
          </div>

          {/* Vantagens */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Vantagens do PagSoftware</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-600">Para Compradores</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">💰</span>
                    Preserva capital de giro da empresa
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📈</span>
                    Permite investimento em crescimento
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">⚡</span>
                    Aprovação rápida e processo simples
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🔒</span>
                    Taxa fixa e transparente
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-600">Para Fornecedores</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">💵</span>
                    Recebimento à vista garantido
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🚀</span>
                    Acelera o ciclo de vendas
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📊</span>
                    Reduz inadimplência
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🤝</span>
                    Sem custos para o fornecedor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para financiar seu software?
            </h3>
            <p className="text-blue-100 mb-6">
              Use nosso simulador e faça sua solicitação em poucos cliques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Usar Simulador
              </button>
              <button 
                onClick={() => window.open('https://wa.me/5511973531005?text=Olá! Gostaria de tirar dúvidas sobre o PagSoftware.', '_blank')}
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Tirar Dúvidas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">PagSoftware</h3>
            <p className="text-gray-400">
              Facilitando o acesso a software B2B através de financiamento inteligente.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              &copy; 2026 PagSoftware. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}