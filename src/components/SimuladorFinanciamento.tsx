'use client';

import { useState } from 'react';

interface SimuladorProps {
  className?: string;
}

export default function SimuladorFinanciamento({ className = '' }: SimuladorProps) {
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

  const handleSolicitarFinanciamento = () => {
    if (!resultado) return;
    
    const mensagem = `Olá! Gostaria de solicitar um financiamento no PagSoftware:
    
💰 Valor: ${valor}
📅 Parcelas: ${parcelas}x
💳 Valor da parcela: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado.valorParcela)}
📊 Total a pagar: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado.valorTotal)}

Aguardo contato para prosseguir!`;

    const whatsappUrl = `https://wa.me/5511973531005?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
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
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
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
              <span className="font-semibold text-lg text-blue-600">
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
              <button 
                onClick={handleSolicitarFinanciamento}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Solicitar via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}