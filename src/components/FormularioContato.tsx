'use client';

import { useState } from 'react';

interface FormularioContatoProps {
  tipo?: 'contato' | 'simulacao';
  className?: string;
  simulacao?: {
    valor: string;
    parcelas: number;
    valorParcela: number;
    valorTotal: number;
    jurosTotal: number;
  };
}

export default function FormularioContato({ 
  tipo = 'contato', 
  className = '',
  simulacao 
}: FormularioContatoProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: simulacao ? 
      `Olá! Gostaria de solicitar um financiamento através do PagSoftware:

💰 Valor: ${simulacao.valor}
📅 Parcelas: ${simulacao.parcelas}x
💳 Valor da parcela: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(simulacao.valorParcela)}
📊 Total: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(simulacao.valorTotal)}

Aguardo contato para prosseguir com a análise.` 
      : ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: tipo
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className={`glass-dark rounded-3xl p-8 text-center ${className}`}>
        <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✅</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">
          Mensagem Enviada!
        </h3>
        
        <p className="text-white/70 mb-6 leading-relaxed">
          Recebemos sua {tipo === 'simulacao' ? 'solicitação de financiamento' : 'mensagem'} com sucesso. 
          Nossa equipe entrará em contato em até 24 horas.
        </p>

        <div className="space-y-4">
          <div className="glass rounded-xl p-4">
            <p className="text-white/60 text-sm">
              📧 Confirmação enviada para seu email
            </p>
          </div>
          
          <div className="glass rounded-xl p-4">
            <p className="text-white/60 text-sm mb-2">
              💬 Para uma resposta mais rápida:
            </p>
            <button
              onClick={() => window.open('https://wa.me/5511973531005?text=Olá! Acabei de enviar um formulário e gostaria de uma resposta rápida.', '_blank')}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-green-400 hover:to-emerald-500 transition-all duration-300"
            >
              Chamar no WhatsApp
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
        >
          Enviar Nova Mensagem
        </button>
      </div>
    );
  }

  return (
    <div className={`glass-dark rounded-3xl p-8 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          {tipo === 'simulacao' ? '📋 Solicitar Financiamento' : '✉️ Entre em Contato'}
        </h3>
        <p className="text-white/60 text-sm">
          {tipo === 'simulacao' ? 
            'Preencha os dados para formalizar sua solicitação' :
            'Fale conosco através do formulário ou WhatsApp'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome e Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">
              👤 Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">
              📧 Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        {/* Empresa e Telefone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">
              🏢 Empresa
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
              placeholder="Nome da empresa"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">
              📱 Telefone/WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-2">
            💬 Mensagem *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={tipo === 'simulacao' ? 8 : 4}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 resize-none"
            placeholder={tipo === 'simulacao' ? 
              'Conte mais sobre suas necessidades de software...' :
              'Como podemos ajudar você?'
            }
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-sky-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Enviando...
              </span>
            ) : (
              `📤 Enviar ${tipo === 'simulacao' ? 'Solicitação' : 'Mensagem'}`
            )}
          </button>

          {/* Alternativas de contato */}
          <div className="text-center">
            <p className="text-white/50 text-sm mb-3">Ou prefere falar conosco diretamente?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => window.open('https://wa.me/5511973531005?text=Olá! Gostaria de falar sobre financiamento de software.', '_blank')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 text-sm"
              >
                💬 WhatsApp
              </button>
              <a
                href="mailto:contato@pagsoftware.com.br"
                className="bg-white/10 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-sm"
              >
                📧 contato@pagsoftware.com.br
              </a>
            </div>
          </div>
        </div>
      </form>

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
          <p className="text-red-300 text-sm">
            ❌ Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.
          </p>
        </div>
      )}
    </div>
  );
}