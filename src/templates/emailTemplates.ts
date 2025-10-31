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
<head><title>🎨 Seu acesso ao Pack 50MIL Artes foi liberado!</title></head>
<body style="font-family: 'Poppins', sans-serif; background-color: #f0fdf4; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    
    <h1 style="color: #059669; font-size: 28px; margin-bottom: 15px;">🎉 Compra aprovada, ${name}!</h1>
    
    <p style="font-size: 17px; color: #333; line-height: 1.6;">
      Parabéns! Seu acesso ao <strong>Pack 50MIL Artes Para Sublimação</strong> foi liberado com sucesso.  
      Agora você tem em mãos um dos maiores acervos de artes do Brasil — pronto para impulsionar sua criatividade e suas vendas.
    </p>

    <a href="${access_url}" 
       style="display: inline-block; margin-top: 25px; padding: 16px 35px; background-color: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px;">
       🚀 ACESSAR MINHAS 50.000 ARTES
    </a>

    <p style="font-size: 15px; color: #444; margin-top: 25px; line-height: 1.6;">
      Dica: comece explorando os <strong>temas mais vendidos</strong> — cristão, futebol, animes e datas comemorativas.  
      Em poucos minutos, você já pode estar criando produtos personalizados prontos para vender.
    </p>

    <hr style="margin: 25px 0; border: none; border-top: 1px solid #dcfce7;">

    <p style="font-size: 13px; color: #666;">
      Se o botão acima não funcionar, copie e cole este link no seu navegador:<br>
      <a href="${access_url}" style="color:#059669;">${access_url}</a>
    </p>

    <p style="font-size: 12px; color: #999; margin-top: 15px;">
      Qualquer dúvida, nossa equipe está à disposição.  
      Boas criações e boas vendas! 💚
    </p>
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
