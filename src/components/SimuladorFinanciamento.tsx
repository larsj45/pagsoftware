'use client';

import { useState } from 'react';
import FormularioContato from './FormularioContato';

interface SimuladorProps {
  className?: string;
}

export default function SimuladorFinanciamento({ className = '' }: SimuladorProps) {
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState(12);
  const [showForm, setShowForm] = useState(false);
  
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
    <div className={`glass-dark rounded-3xl p-8 backdrop-blur-xl border border-white/10 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Simule seu Financiamento
        </h3>
        <p className="text-white/60 text-sm">
          Descubra em segundos quanto vai pagar
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-3">
            💰 Valor do Software
          </label>
          <input
            type="text"
            value={valor}
            onChange={(e) => setValor(formatarMoeda(e.target.value))}
            placeholder="R$ 10.000,00"
            className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg font-semibold focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 placeholder-white/40"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-3">
            📅 Parcelas: <span className="text-sky-400 text-lg">{parcelas}x</span>
          </label>
          <input
            type="range"
            min="3"
            max="36"
            value={parcelas}
            onChange={(e) => setParcelas(parseInt(e.target.value))}
            className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${((parcelas - 3) / 33) * 100}%, rgba(255,255,255,0.1) ${((parcelas - 3) / 33) * 100}%, rgba(255,255,255,0.1) 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-white/50 mt-2">
            <span>3x</span>
            <span>36x</span>
          </div>
        </div>

        {resultado && (
          <div className="glass rounded-2xl p-6 space-y-4 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">📊 Resumo do Financiamento</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70 font-medium">Parcela mensal:</span>
                <span className="font-bold text-xl text-emerald-400">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(resultado.valorParcela)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70 font-medium">Total a pagar:</span>
                <span className="font-semibold text-lg text-white">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(resultado.valorTotal)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70 font-medium">Juros total:</span>
                <span className="font-semibold text-lg text-orange-400">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(resultado.jurosTotal)}
                </span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10 space-y-3">
              <p className="text-white/60 text-sm text-center">
                📋 Como deseja prosseguir?
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-xl font-bold hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
                >
                  📧 Formulário Completo
                </button>
                
                <button 
                  onClick={handleSolicitarFinanciamento}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  💬 WhatsApp Direto
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Formulário de Contato */}
      {showForm && resultado && (
        <div className="mt-8">
          <FormularioContato 
            tipo="simulacao"
            simulacao={{
              valor,
              parcelas,
              valorParcela: resultado.valorParcela,
              valorTotal: resultado.valorTotal,
              jurosTotal: resultado.jurosTotal
            }}
          />
          
          <div className="text-center mt-4">
            <button
              onClick={() => setShowForm(false)}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              ← Voltar ao simulador
            </button>
          </div>
        </div>
      )}
    </div>
  );
}