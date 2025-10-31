// src/templates/emailTemplates.ts

// Interface para os dados do e-mail de compra aprovada
interface ConfirmationEmailProps {
  name: string;
  access_url: string; // Link para o produto digital
}

// Interface para os dados do e-mail de carrinho abandonado
interface AbandonedCartEmailProps {
  name: string;
  checkout_link: string; // Link para finalizar a compra
}

/**
 * Template HTML para e-mails de pagamento aprovado.
 */
export function paymentApprovedTemplate({ name, access_url }: ConfirmationEmailProps): string {
  // Use interpolação de string para substituir os dados
  return `
    <!DOCTYPE html>
    <html>
    <head><title>Compra Aprovada!</title></head>
    <body style="font-family: sans-serif; background-color: #f0fdf4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; padding: 30px; text-align: center;">
        <h1 style="color: #059669; font-size: 28px;">🎉 Pagamento Aprovado, ${name}!</h1>
        <p style="font-size: 16px; color: #333;">Obrigado pela sua confiança! Seu acesso ao conteúdo está liberado.</p>
        <a href="${access_url}" style="display: inline-block; margin-top: 20px; padding: 15px 30px; background-color: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
          ACESSAR MEU CONTEÚDO AGORA
        </a>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">Se o botão não funcionar, copie e cole este link no seu navegador: ${access_url}</p>
      </div>
    </body>
    </html>
  `;
}

/**
 * Template HTML para e-mails de carrinho abandonado.
 */
export function cartAbandonedTemplate({ name, checkout_link }: AbandonedCartEmailProps): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><title>😱 Seu acesso exclusivo quase foi perdido!</title></head>
    <body style="font-family: 'Poppins', sans-serif; background-color: #fff7ed; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        
        <h1 style="color: #d97706; font-size: 28px; margin-bottom: 15px;">🚀 ${name}, seu Pack 50MIL Artes ainda está te esperando!</h1>
        
        <p style="font-size: 17px; color: #333; line-height: 1.6;">
          Você estava a um passo de garantir <strong>50.000 artes exclusivas</strong> para personalização.<br>
          Centenas de criadores já baixaram e estão vendendo produtos incríveis.<br>
          👉 Não deixe sua chance escapar — o preço especial de <strong>R$19,90</strong> é por tempo limitado!
        </p>
        
        <a href="${checkout_link}" 
           style="display: inline-block; margin-top: 25px; padding: 16px 35px; background-color: #f59e0b; color: white; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px;">
           🔥 FINALIZAR MINHA COMPRA AGORA
        </a>
        
        <p style="font-size: 14px; color: #666; margin-top: 25px; line-height: 1.5;">
          Lembre-se: são <strong>50.000 artes prontas</strong> em alta resolução —<br>
          sem precisar criar nada do zero, e com acesso vitalício.<br>
          <span style="color:#d97706; font-weight:bold;">Seu carrinho expira em poucas horas.</span>
        </p>
        
        <hr style="margin: 25px 0; border: none; border-top: 1px solid #f3e0c7;">
        
        <p style="font-size: 12px; color: #999;">
          Se já finalizou a compra, desconsidere este e-mail. 😉
        </p>
      </div>
    </body>
    </html>
  `;
}
