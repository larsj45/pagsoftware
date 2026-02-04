'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

export default function ComoFunciona() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Logo variant="white" size="md" />
              </Link>
              <div className="hidden md:block w-px h-8 bg-white/20"></div>
              <p className="hidden md:block text-white/80 text-sm font-medium">
                Como Funciona
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

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">Processo Simplificado</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Como funciona o{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              PagSoftware
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Um processo <span className="text-white font-semibold">inteligente</span> e 
            <span className="text-white font-semibold"> transparente</span> que beneficia 
            fornecedores e compradores de software B2B.
          </p>
        </div>
      </section>

      {/* Processo Passo a Passo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              3 Passos Simples
            </h2>
            <p className="text-xl text-white/60">
              Do interesse à aprovação em menos de 24 horas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Passo 1 */}
            <div className="relative">
              <div className="glass-dark rounded-3xl p-8 h-full group hover:bg-white/10 transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📋</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  Solicitação
                </h3>
                
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Escolha o software B2B desejado</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use nosso simulador inteligente</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Envie solicitação via WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Documentação empresarial mínima</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative">
              <div className="glass-dark rounded-3xl p-8 h-full group hover:bg-white/10 transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🤖</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  Análise IA
                </h3>
                
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Algoritmos avançados de crédito</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Verificação automatizada de dados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Resposta em até 24 horas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comunicação transparente</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="relative">
              <div className="glass-dark rounded-3xl p-8 h-full group hover:bg-white/10 transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💳</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  Pagamentos
                </h3>
                
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fornecedor recebe 100% à vista</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Você paga parcelas mensais fixas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Taxa transparente de 2,5% a.m.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Débito automático ou boleto</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Comparativos */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Win-Win para Todos
            </h2>
            <p className="text-xl text-white/60">
              Vantagens que transformam o ecossistema B2B
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Para Compradores */}
            <div className="glass-dark rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Para Compradores</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 p-4 glass rounded-xl">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-sm">💰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Preserva Capital de Giro</h4>
                    <p className="text-white/60 text-sm">Mantenha liquidez para investir no core business</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4 p-4 glass rounded-xl">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-400 text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Aprovação Rápida</h4>
                    <p className="text-white/60 text-sm">Processo 100% digital, sem burocracia</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4 p-4 glass rounded-xl">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm">📊</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Previsibilidade</h4>
                    <p className="text-white/60 text-sm">Taxa fixa, sem surpresas no orçamento</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Para Fornecedores */}
            <div className="glass-dark rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Para Fornecedores</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 p-4 glass rounded-xl">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-sm">💵</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Recebimento à Vista</h4>
                    <p className="text-white/60 text-sm">100% do valor na conta em até 48h</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4 p-4 glass rounded-xl">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-400 text-sm">📈</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Acelera Vendas</h4>
                    <p className="text-white/60 text-sm">Clientes podem comprar mesmo sem budget imediato</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4 p-4 glass rounded-xl">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm">🛡️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Zero Risco</h4>
                    <p className="text-white/60 text-sm">Sem custos, assumimos o risco de inadimplência</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-dark rounded-4xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Teste nosso simulador e descubra como o PagSoftware pode acelerar seus negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-sky-500/30"
              >
                Usar Simulador
              </button>
              <button 
                onClick={() => window.open('https://wa.me/5511973531005?text=Olá! Gostaria de tirar dúvidas sobre como funciona o PagSoftware.', '_blank')}
                className="glass text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Tirar Dúvidas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="mb-6">
              <Logo variant="white" size="md" />
            </div>
            <p className="text-white/60 max-w-md mx-auto leading-relaxed">
              Transformando a aquisição de software B2B no Brasil através de tecnologia e inovação.
            </p>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/40">
              &copy; 2026 PagSoftware. Financiamento B2B inteligente.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}