document.addEventListener('DOMContentLoaded', function() {
    // Código para alternar as abas do Menu Lateral
    const menuItems = document.querySelectorAll('.sidebar li');
    const sections = document.querySelectorAll('.main-content section');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const targetSection = this.getAttribute('data-target');
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    // LÓGICA DO GERADOR DE COPYS TIKTOK COMPLETAS
    const btnGerarCopy = document.querySelector('#copys-tiktok button');
    
    if (btnGerarCopy) {
        btnGerarCopy.addEventListener('click', function() {
            const produto = document.querySelector('input[placeholder="Ex: Removedor de Cravos Ultrassônico"]').value.trim();
            const beneficio = document.querySelector('input[placeholder="Ex: Pele limpa em 5 minutos"]').value.trim();

            if (!produto || !beneficio) {
                alert("Por favor, preencha o nome do produto e o benefício principal!");
                return;
            }

            // Seleciona a área onde o resultado vai aparecer
            let resultadoContainer = document.querySelector('.copy-results-container');
            
            // Se o container de resultados não existir, cria ele abaixo do botão
            if (!resultadoContainer) {
                resultadoContainer = document.createElement('div');
                resultadoContainer.className = 'copy-results-container';
                document.querySelector('#copys-tiktok .form-container').appendChild(resultadoContainer);
            }

            // Estruturas de roteiros completos (Começo, Meio e Fim)
            const roteiro1 = `
<strong>🔥 Opção 1: Formato UGC Emocional (O Segredo Revelado)</strong>
<br><br>
<strong>[0 a 3 seg - O GANCHO]:</strong> Espera aí! Não passa esse vídeo se você sofre tentando ${beneficio.toLowerCase()}. Eu passei meses gastando dinheiro à toa até descobrir isso aqui... 😳
<br><br>
<strong>[3 a 15 seg - O PROBLEMA]:</strong> Olhando assim, ninguém imagina o sufoco que era. Eu já tinha testado de tudo, mas parece que nada funcionava de verdade. Minha autoestima ia lá para baixo.
<br><br>
<strong>[15 a 35 seg - A SOLUÇÃO]:</strong> Foi aí que eu conheci o(a) <strong>${produto}</strong>. Gente, sério, mudou o meu jogo! Ele foi feito exatamente para ajudar a ${beneficio.toLowerCase()} sem complicações. Olha a facilidade de usar isso no dia a dia! (Mostra o produto na tela).
<br><br>
<strong>[35 a 45 seg - CTA / Chamada de Ação]:</strong> O melhor de tudo é que eles estão com frete grátis e desconto essa semana. Clica no link do meu perfil ou no botão 'Saiba Mais' antes que acabe o estoque! 🛒✨
            `;

            const roteiro2 = `
<strong>💡 Opção 2: Formato Direto e Curioso (Se você faz isso, pare agora!)</strong>
<br><br>
<strong>[0 a 3 seg - O GANCHO]:</strong> Se você ainda tenta ${beneficio.toLowerCase()} do jeito antigo, você está perdendo tempo e dinheiro! Para tudo o que você tá fazendo e olha isso. 🛑
<br><br>
<strong>[3 a 15 seg - O CONTEXTO]:</strong> A maioria das pessoas comete o erro de achar que precisa de tratamentos caros ou horas de esforço para conseguir resolver isso. Mas a tecnologia evoluiu.
<br><br>
<strong>[15 a 35 seg - O PRODUTO]:</strong> Esse(a) <strong>${produto}</strong> viralizou na gringa justamente porque resolve o problema direto na fonte. Ele serve para ${beneficio.toLowerCase()} de forma 100% prática, segura e rápida. É literalmente ligar e usar.
<br><br>
<strong>[35 a 45 seg - CTA / Chamada de Ação]:</strong> Se você quer facilitar sua vida e ter esse resultado hoje mesmo, clica no botão aqui embaixo. O link promocional está ativo por tempo limitado! 🚀
            `;

            const roteiro3 = `
<strong>🚨 Opção 3: Formato Antagonista (O que não te contam)</strong>
<br><br>
<strong>[0 a 3 seg - O GANCHO]:</strong> Eles vão me odiar por revelar isso, mas esse é o maior segredo que nunca te contaram sobre como ${beneficio.toLowerCase()} sem esforço... 🤫
<br><br>
<strong>[3 a 15 seg - A JORNADA]:</strong> Sabe quando você vê aquelas pessoas na internet com o resultado perfeito e acha que elas gastaram uma fortuna? Mentira. Elas só usam a ferramenta certa.
<br><br>
<strong>[15 a 35 seg - A DEMONSTRAÇÃO]:</strong> O segredo é esse(a) pequeno(a) <strong>${produto}</strong>. Ele foi desenhado especificamente para quem quer ${beneficio.toLowerCase()} em casa, economizando tempo e dinheiro. É o verdadeiro custo-benefício que ninguém te mostra.
<br><br>
<strong>[35 a 45 seg - CTA / Chamada de Ação]:</strong> Pare de gastar com o que não funciona. Garanta o seu <strong>${produto}</strong> direto no site oficial clicando em 'Saiba Mais' com garantia exclusiva! 💎
            `;

            // Injeta os 3 roteiros na tela com um visual bonito
            resultadoContainer.innerHTML = `
                <div class="result-card" style="background: #1e1e1e; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #10b981; color: #fff; font-size: 14px; line-height: 1.6;">
                    ${roteiro1}
                    <hr style="border: 0; border-top: 1px dashed #333; margin: 20px 0;">
                    ${roteiro2}
                    <hr style="border: 0; border-top: 1px dashed #333; margin: 20px 0;">
                    ${roteiro3}
                </div>
            `;
        });
    }
});
