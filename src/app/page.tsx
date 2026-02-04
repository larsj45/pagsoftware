'use client';

import { useState } from 'react';

export default function Home() {
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState(12);
  
  // Taxa de 2.5% a.m.
  const taxaMensal = 0.025;
  
  const calcularFinanciamento = () => {
    const valorNum = parseFloat(valor.replace(/\D/g, ''));
    if (!valorNum) return null;
    
    const fator = Math.pow(1 + taxaMensal, parcelas);
    const valorParcela = (valorNum * taxaMensal * fator) / (fator - 1);
    const valorTotal = valorParcela * parcelas;
    
    return {
      valorParcela,
      valorTotal,
      jurosTotal: valorTotal - valorNum
    };
  };
  
  const resultado = calcularFinanciamento();

  const formatarMoeda = (value: string) => {
    const numero = value.replace(/\D/g, '');
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(parseFloat(numero) / 100);
    return valorFormatado;
  };

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
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
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
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Simule seu financiamento
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor do software
                  </label>
                  <input
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(formatarMoeda(e.target.value))}
                    placeholder="R$ 10.000,00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de parcelas: {parcelas}x
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    value={parcelas}
                    onChange={(e) => setParcelas(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3x</span>
                    <span>36x</span>
                  </div>
                </div>

                {resultado && (
                  <div className="bg-blue-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parcela mensal:</span>
                      <span className="font-semibold text-lg">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(resultado.valorParcela)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total a pagar:</span>
                      <span className="font-semibold">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(resultado.valorTotal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Juros total:</span>
                      <span className="font-semibold">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(resultado.jurosTotal)}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-blue-200">
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                        Solicitar Financiamento
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
                <li><a href="#" className="hover:text-white">Como funciona</a></li>
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