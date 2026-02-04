import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Verificar se a API key está configurada
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service não configurado' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, phone, message, type } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Template do email baseado no tipo
    const emailContent = type === 'simulation' ? `
      <h2>🎯 Nova Simulação de Financiamento - PagSoftware</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0ea5e9;">📊 Dados da Simulação</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
      </div>
      
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #10b981;">📝 Mensagem</h3>
        <p>${message}</p>
      </div>
      
      <p style="color: #64748b; font-size: 14px;">
        📅 Enviado em: ${new Date().toLocaleString('pt-BR')}
      </p>
    ` : `
      <h2>✉️ Novo Contato - PagSoftware</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0ea5e9;">👤 Informações de Contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
      </div>
      
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #10b981;">📝 Mensagem</h3>
        <p>${message}</p>
      </div>
      
      <p style="color: #64748b; font-size: 14px;">
        📅 Enviado em: ${new Date().toLocaleString('pt-BR')}
      </p>
    `;

    const subject = type === 'simulation' ? 
      `🎯 Nova Simulação: ${name} - ${company || 'Empresa não informada'}` :
      `✉️ Novo Contato: ${name} - ${company || 'Pessoa física'}`;

    // Enviando email via Resend
    const data = await resend.emails.send({
      from: 'PagSoftware <noreply@pagsoftware.com.br>',
      to: ['contato@pagsoftware.com.br'],
      subject: subject,
      html: emailContent,
      replyTo: email,
    });

    // Email de confirmação para o usuário
    const confirmationEmail = `
      <div style="max-width: 600px; margin: 0 auto; font-family: 'Inter', sans-serif;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; font-size: 28px; margin: 0;">Obrigado pelo contato!</h1>
          <p style="color: rgba(255,255,255,0.8); font-size: 18px; margin: 10px 0 0 0;">
            Recebemos sua ${type === 'simulation' ? 'simulação' : 'mensagem'} e retornaremos em breve.
          </p>
        </div>
        
        <div style="background: white; padding: 40px 20px;">
          <h2 style="color: #0ea5e9; margin-bottom: 20px;">Próximos Passos</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-bottom: 15px;">📧 Confirmação</h3>
            <p style="color: #64748b; margin: 0;">
              Sua ${type === 'simulation' ? 'simulação' : 'mensagem'} foi recebida com sucesso. 
              Nossa equipe analisará e entrará em contato em até 24 horas.
            </p>
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #0369a1; margin-bottom: 15px;">💬 WhatsApp Direto</h3>
            <p style="color: #0369a1; margin: 0;">
              Para uma resposta mais rápida, você pode nos chamar diretamente no WhatsApp:
              <br><strong>+55 11 97353-1005</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #64748b; margin: 0;">
              Atenciosamente,<br>
              <strong style="color: #0ea5e9;">Equipe PagSoftware</strong>
            </p>
          </div>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; font-size: 14px; margin: 0;">
            📧 contato@pagsoftware.com.br | 📱 +55 11 97353-1005
          </p>
        </div>
      </div>
    `;

    // Enviando confirmação para o usuário
    await resend.emails.send({
      from: 'PagSoftware <noreply@pagsoftware.com.br>',
      to: [email],
      subject: 'Confirmação - PagSoftware | Recebemos seu contato',
      html: confirmationEmail,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado com sucesso!',
      data: data 
    });
    
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    );
  }
}