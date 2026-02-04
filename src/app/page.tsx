'use client';

import SimuladorFinanciamento from '@/components/SimuladorFinanciamento';
import FormularioContato from '@/components/FormularioContato';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo variant="white" size="md" />
              <div className="hidden md:block w-px h-8 bg-white/20"></div>
              <p className="hidden md:block text-white/80 text-sm font-medium">
                Financiamento B2B Inteligente
              </p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/5511973531005?text=Olá! Gostaria de saber mais sobre o PagSoftware.', '_blank')}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
            >
              Falar Conosco
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-medium">Plataforma Ativa</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
                Financiamento{' '}
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  B2B
                </span>{' '}
                Inteligente
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transforme a aquisição de software em vantagem competitiva. 
                <span className="text-white font-semibold"> Fornecedores recebem à vista</span>, 
                compradores pagam parcelado.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-sky-400 text-2xl font-bold mb-1">2.5%</div>
                  <div className="text-white/60 text-sm">Taxa mensal fixa</div>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-emerald-400 text-2xl font-bold mb-1">24h</div>
                  <div className="text-white/60 text-sm">Aprovação rápida</div>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-purple-400 text-2xl font-bold mb-1">100%</div>
                  <div className="text-white/60 text-sm">Digital</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => document.querySelector('#simulador')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-sky-500/30 transform hover:scale-105"
                >
                  Simular Agora
                </button>
                <button 
                  onClick={() => window.location.href = '/como-funciona'}
                  className="glass text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Como Funciona
                </button>
              </div>
            </div>

            {/* Right - Simulador */}
            <div id="simulador" className="float">
              <SimuladorFinanciamento />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Por que escolher o{' '}
              <span className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent">
                PagSoftware?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A plataforma que revoluciona a aquisição de software B2B no Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aprovação Instantânea</h3>
              <p className="text-white/70 leading-relaxed">
                Algoritmos inteligentes analisam seu perfil e aprovam em até 24 horas. Sem burocracia, sem papelada.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Taxa Competitiva</h3>
              <p className="text-white/70 leading-relaxed">
                2.5% ao mês fixo. Transparente, sem taxas ocultas. Compare com cartão empresarial e comprove.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fluxo Otimizado</h3>
              <p className="text-white/70 leading-relaxed">
                Fornecedor recebe à vista, você paga mensalmente. Win-win que acelera negócios de ambos os lados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-dark rounded-4xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para revolucionar suas aquisições de software?
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Junte-se às empresas que já descobriram a forma inteligente de financiar tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#simulador')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-sky-500/30"
              >
                Começar Agora
              </button>
              <button 
                onClick={() => window.open('https://wa.me/5511973531005?text=Olá! Gostaria de uma demo personalizada do PagSoftware.', '_blank')}
                className="glass text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Agendar Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Vamos{' '}
              <span className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent">
                conversar?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudar você a encontrar a melhor solução de financiamento
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="glass-dark rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  📞 Fale Conosco
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a 
                        href="mailto:contato@pagsoftware.com.br"
                        className="text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        contato@pagsoftware.com.br
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">💬</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                      <a 
                        href="https://wa.me/5511973531005"
                        target="_blank"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        +55 11 97353-1005
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">⏰</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Horário</h4>
                      <p className="text-white/70">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 glass rounded-xl">
                  <p className="text-white/60 text-sm text-center">
                    ⚡ Resposta em até 24 horas garantida
                  </p>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div>
              <FormularioContato tipo="contato" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-6">
                <Logo variant="white" size="md" />
              </div>
              <p className="text-white/60 leading-relaxed max-w-md">
                Plataforma de financiamento B2B que conecta fornecedores e compradores de software, 
                otimizando fluxo de caixa e acelerando negócios.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="/como-funciona" className="hover:text-white transition-colors">Como funciona</a></li>
                <li><a href="#simulador" className="hover:text-white transition-colors">Simulador</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-3 text-white/60">
                <li>
                  <a href="mailto:contato@pagsoftware.com.br" className="hover:text-white transition-colors">
                    📧 contato@pagsoftware.com.br
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5511973531005" target="_blank" className="hover:text-white transition-colors">
                    💬 +55 11 97353-1005
                  </a>
                </li>
                <li><a href="#contato" className="hover:text-white transition-colors">Formulário</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/40">
              &copy; 2026 PagSoftware. Desenvolvido com ❤️ para o ecossistema B2B brasileiro.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}