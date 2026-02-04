import SimuladorFinanciamento from '@/components/SimuladorFinanciamento';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PagSoftware</h1>
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

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Compre software B2B <span className="text-blue-600">parcelado</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6">
                Fornecedores recebem à vista, compradores pagam mensalmente. 
                Simples, rápido e sem burocracia.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Taxa fixa de 2,5% a.m.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Aprovação em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">100% online</span>
                </div>
              </div>
            </div>

            {/* Simulador */}
            <SimuladorFinanciamento />
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como funciona
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Escolha o software</h3>
              <p className="text-gray-600">
                Selecione o software B2B que precisa e configure o financiamento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Aprovação rápida</h3>
              <p className="text-gray-600">
                Análise automatizada com resposta em até 24 horas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pague mensalmente</h3>
              <p className="text-gray-600">
                O fornecedor recebe à vista e você paga em parcelas fixas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PagSoftware</h3>
              <p className="text-gray-400">
                Facilitando o acesso a software B2B através de financiamento inteligente.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/como-funciona" className="hover:text-white">Como funciona</a></li>
                <li><a href="#" className="hover:text-white">Simulador</a></li>
                <li><a href="#" className="hover:text-white">Taxa de juros</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Suporte</a></li>
                <li><a href="#" className="hover:text-white">Parceria</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 PagSoftware. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}