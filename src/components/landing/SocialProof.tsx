// src/components/landing/SocialProof.tsx

export function SocialProof() {
  return (
    <>
      <style jsx global>{`
        .facebook-comments-body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: #f0f2f5;
          line-height: 1.4;
        }
        
        .facebook-comments-container { 
          max-width: 680px; 
          margin: 0 auto; 
          width: 100%;
        }
        
        .comentario-bloco {
          background: white;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 20px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          border: 1px solid #e4e6ea;
          width: 100%;
        }
    
        .post-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 4px;
          border-bottom: 1px solid #e4e6ea;
          margin-bottom: 4px;
          flex-wrap: wrap;
          gap: 8px;
        }
    
        .reacoes-topo {
          display: flex;
          align-items: center;
          color: #65676b;
          font-size: 15px;
        }
    
        .reacoes-container {
          display: flex;
          align-items: center;
          margin-right: 6px;
        }
    
        .reacoes-topo .emoji {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid white;
          position: relative;
        }
    
        .reacoes-topo .emoji:nth-child(2) {
          margin-left: -8px;
          z-index: 1;
        }
    
        .stats-direita {
          color: #65676b;
          font-size: 15px;
        }
    
        .acoes-principais {
          display: flex;
          justify-content: space-around;
          padding: 4px 0;
          border-bottom: 1px solid #e4e6ea;
          margin-bottom: 12px;
        }
    
        .acao {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #65676b;
          font-size: 15px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          flex: 1;
          justify-content: center;
          transition: background-color 0.2s;
          min-width: 0;
        }
    
        .acao:hover {
          background: #f2f2f2;
        }
    
        .acao img {
          flex-shrink: 0;
        }
    
        .ver-mais-comentarios {
          color: #65676b;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 16px;
          cursor: pointer;
        }
    
        .comentario {
          display: flex;
          margin-bottom: 12px;
          position: relative;
        }
    
        .comentario img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 8px;
          flex-shrink: 0;
          object-fit: cover;
        }
    
        .comentario-content {
          flex: 1;
          min-width: 0;
        }
    
        .conteudo {
          background: #f0f2f5;
          border-radius: 16px;
          padding: 8px 12px;
          display: inline-block;
          max-width: 100%;
          word-wrap: break-word;
          word-break: break-word;
        }
    
        .conteudo .nome {
          color: #050505;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 2px;
        }
    
        .conteudo .texto {
          color: #050505;
          font-size: 15px;
          line-height: 1.33;
          margin: 0;
        }
    
        .info-comentario {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 4px;
          font-size: 12px;
          color: #65676b;
          font-weight: 600;
          flex-wrap: wrap;
        }
    
        .info-comentario span {
          cursor: pointer;
          white-space: nowrap;
        }
    
        .info-comentario span:hover {
          text-decoration: underline;
        }
    
        .resposta {
          margin-left: 40px;
          margin-top: 4px;
        }
    
        .resposta .conteudo .mencao {
          color: #365899;
          font-weight: 600;
        }
    
        .linha-conexao {
          position: absolute;
          left: 16px;
          top: 32px;
          height: 80px;
          width: 2px;
          background: #e4e6ea;
          border-radius: 1px;
          z-index: 1;
        }
    
        .comentario-item {
          border: 2px solid transparent;
          border-radius: 8px;
          padding: 4px;
          margin: -4px;
          cursor: default;
        }
    
        .reacoes-comentario {
          display: flex;
          align-items: center;
          margin-left: auto;
        }
    
        .reacoes-comentario-container {
          display: flex;
          align-items: center;
          margin-left: 4px;
        }
    
        .reacoes-comentario .emoji {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid white;
          position: relative;
        }
    
        .reacoes-comentario .emoji:nth-child(2) {
          margin-left: -8px;
          z-index: 1;
        }
    
        .reacoes-comentario .numero {
          font-size: 12px;
          color: #65676b;
          margin-right: 4px;
        }
    
        .ver-mais-respostas {
          margin-left: 40px;
          color: #65676b;
          font-size: 14px;
          font-weight: 600;
          margin-top: 8px;
          cursor: pointer;
        }
    
        @media (max-width: 768px) {
          .facebook-comments-body {
            padding: 5px;
          }
          
          .comentario-bloco {
            padding: 12px;
            border-radius: 6px;
          }
          
          .post-stats {
            font-size: 14px;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          
          .stats-direita {
            font-size: 14px;
          }
          
          .acao {
            padding: 6px 8px;
            font-size: 14px;
            gap: 6px;
          }
          
          .acao img {
            width: 20px;
            height: 20px;
          }
          
          .comentario img {
            width: 28px;
            height: 28px;
          }
          
          .conteudo {
            padding: 6px 10px;
          }
          
          .conteudo .nome {
            font-size: 12px;
          }
          
          .conteudo .texto {
            font-size: 14px;
          }
          
          .info-comentario {
            font-size: 11px;
            gap: 8px;
          }
          
          .resposta {
            margin-left: 28px;
          }
          
          .ver-mais-respostas {
            margin-left: 28px;
            font-size: 13px;
          }
          
          .linha-conexao {
            left: 14px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .post-stats {
            font-size: 13px;
          }
          
          .acao {
            padding: 4px 6px;
            font-size: 13px;
            gap: 4px;
          }
          
          .acao span {
            display: none;
          }
          
          .acao img {
            width: 18px;
            height: 18px;
          }
          
          .comentario img {
            width: 24px;
            height: 24px;
          }
          
          .conteudo .texto {
            font-size: 13px;
          }
          
          .info-comentario {
            font-size: 10px;
            gap: 6px;
          }
          
          .resposta {
            margin-left: 20px;
          }
          
          .ver-mais-respostas {
            margin-left: 20px;
            font-size: 12px;
          }
        }
    
        .comentario-bloco {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .acao {
          cursor: default;
        }
        
        .info-comentario span {
          cursor: default;
        }
        
        .info-comentario span:hover {
          text-decoration: none;
        }
        
        .ver-mais-comentarios,
        .ver-mais-respostas {
          cursor: default;
        }
      `}</style>
      <section className="w-full py-8 md:py-12 lg:py-16 facebook-comments-body">
        <div className="facebook-comments-container">
          <div className="comentario-bloco">
            <div className="post-stats">
              <div className="reacoes-topo">
                <div className="reacoes-container">
                  <img decoding="async" className="emoji" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="Curtir" />
                  <img decoding="async" className="emoji" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" alt="Amei" />
                </div>
                1 mil
              </div>
              <div className="stats-direita">
                49 comentários 23 compartilhamentos
              </div>
            </div>

            <div className="acoes-principais">
              <div className="acao">
                <img decoding="async" src="https://i.imgur.com/6Qxef8g.png" width="24" height="24" alt="Curtir" />
                Curtir
              </div>
              <div className="acao" >
                <img decoding="async" src="https://i.imgur.com/Ve1I6AO.png" width="24" height="24" alt="Comentar" />
                Comentar
              </div>
              <div className="acao">
                <img decoding="async" src="https://i.imgur.com/x3eeSRU.png" width="24" height="24" alt="Compartilhar" />
                Compartilhar
              </div>
            </div>

            <div className="ver-mais-comentarios">Ver mais comentários</div>
            <div className="comentarios-container">
              <div className="comentario-item">
                <div className="drag-handle" ></div>
                <div className="comentario">
                  <img decoding="async" src="https://i.imgur.com/TUBQwbu.jpeg" alt="Jonas Machado Silva" />
                  <div className="comentario-content">
                    <div className="conteudo">
                      <div className="nome">Jonas Machado Silva</div>
                      <div className="texto">Sinceramente, achei que fosse mais uma dessas promessas da internet…
                        Mas quando vi que era download imediato e com garantia, resolvi arriscar.
                        Ainda bem que comprei, porque o conteúdo é excelente!</div>
                    </div>
                    <div className="info-comentario">
                      <span>23h</span>
                      <span>Curtir</span>
                      <span >Responder</span>
                      <div className="reacoes-comentario">
                        <span className="numero">15</span>
                        <div className="reacoes-comentario-container">
                          <img decoding="async" className="emoji" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="Curtir" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comentario-item">
                <div className="drag-handle" ></div>
                <div className="comentario">
                  <img decoding="async" src="https://i.imgur.com/X2HNx1c.jpeg" alt="Maria de Carmo" />
                  <div className="comentario-content">
                    <div className="conteudo">
                      <div className="nome">Maria de Carmo</div>
                      <div className="texto">Confesso que comprei meio desconfiada, porque R$19,90 pra tanta arte parecia brincadeira <img draggable="false" role="img" className="emoji" alt="😅" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f605.svg" />
                        Mas chegou tudo certinho, download imediato e os arquivos são de altíssima qualidade.
                        Já usei em três camisetas e duas canecas ficaram perfeitas! <img draggable="false" role="img" className="emoji" alt="❤️" src="https://s.w.org/images/core/emoji/16.0.1/svg/2764.svg" /><img draggable="false" role="img" className="emoji" alt="🔥" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f525.svg" />
                        Super recomendo pra quem trabalha com personalizados, vale demais!</div>
                    </div>
                    <div className="info-comentario">
                      <span>12h</span>
                      <span>Curtir</span>
                      <span >Responder</span>
                      <div className="reacoes-comentario">
                        <span className="numero">8</span>
                        <div className="reacoes-comentario-container">
                          <img decoding="async" className="emoji" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="Curtir" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comentario-item">
                <div className="drag-handle" ></div>
                <div className="comentario">
                  <img decoding="async" src="https://i.imgur.com/rp8coSN.jpeg" alt="Mariano s," />
                  <div className="comentario-content">
                    <div className="conteudo">
                      <div className="nome">Mariano s,</div>
                      <div className="texto">Fiz a compra pelo Pix e o acesso veio na hora.
                        As pastas são super organizadas, tem arte pra tudo. Tô usando até pra montar combos de produtos. Recomendo demais <img draggable="false" role="img" className="emoji" alt="👏" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f44f.svg" /></div>
                    </div>
                    <div className="info-comentario">
                      <span>1h</span>
                      <span>Curtir</span>
                      <span >Responder</span>
                      <div className="reacoes-comentario">
                        <span className="numero">1</span>
                        <div className="reacoes-comentario-container">
                          <img decoding="async" className="emoji" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="Curtir" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comentario-item">
                <div className="drag-handle" ></div>
                <div className="comentario">
                  <img decoding="async" src="https://i.imgur.com/MGQcwKJ.jpeg" alt="João Silva" />
                  <div className="comentario-content">
                    <div className="conteudo">
                      <div className="nome">João Silva</div>
                      <div className="texto">Não entendo nada de Photoshop e mesmo assim consegui usar tudo só com os arquivos em PNG
                        Fiz minhas canecas direto no celular e ficaram top
                        Achei super de boa de mexer, até pra quem é iniciante <img draggable="false" role="img" className="emoji" alt="👏" src="https://s.w.org/images/core/emoji/16.0.1/svg/1f44f.svg" /></div>
                    </div>
                    <div className="info-comentario">
                      <span>1h</span>
                      <span>Curtir</span>
                      <span >Responder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
