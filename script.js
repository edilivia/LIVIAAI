// ==========================================
// 1. CONTROLE DE NAVEGAÇÃO E MENU (ABAS)
// ==========================================
function switchTab(tabId) {
    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Remove a classe ativa de todos os botões do menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Ativa a aba clicada
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active-tab');
    }

    // Ativa o botão correspondente no menu
    const activeBtn = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Fecha a barra lateral no celular após o clique automaticamente
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) {
        sidebar.classList.remove('open');
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// ==========================================
// 2. GERADOR DE ROTEIROS COMPLETOS (COPYS TIKTOK)
// ==========================================
function runCopywriter() {
    const produto = document.getElementById('copy-name').value.trim();
    const beneficio = document.getElementById('copy-benefit').value.trim();
    const containerResultados = document.getElementById('copy-results');

    if (!produto || !beneficio) {
        alert("Por favor, digite o nome do produto e o benefício principal!");
        return;
    }

    // Modelos de roteiros completos com começo, meio e fim
    const roteiro1 = `
        <div style="background: #1e1e1e; padding: 15px; border-radius: 8px; border: 1px solid #10b981; margin-bottom: 15px; color: #fff;">
            <span style="color: #10b981; font-weight: bold; display: block; margin-bottom: 8px;">🔥 OPÇÃO 1: Formato UGC Emocional (O Segredo)</span>
            <strong>[0-3s - Gancho]:</strong> Espera aí! Não passa esse vídeo se você sofre tentando ${beneficio.toLowerCase()}. Eu passei meses gastando dinheiro à toa até descobrir isso aqui... 😳<br><br>
            <strong>[3-15s - Problema]:</strong> Olhando assim, ninguém imagina o sufoco que era. Eu já tinha testado de tudo, mas parece que nada funcionava de verdade. Minha autoestima ia lá para baixo.<br><br>
            <strong>[15-35s - Solução]:</strong> Foi aí que eu conheci o(a) <strong>${produto}</strong>. Gente, sério, mudou o meu jogo! Ele ajuda a ${beneficio.toLowerCase()} sem complicação nenhuma. Olha a facilidade de usar isso no dia a dia!<br><br>
            <strong>[35-45s - CTA]:</strong> O melhor é que está com frete grátis e desconto essa semana. Clica no botão 'Saiba Mais' antes que acabe o estoque! 🛒✨
        </div>
    `;

    const roteiro2 = `
        <div style="background: #1e1e1e; padding: 15px; border-radius: 8px; border: 1px solid #3b82f6; margin-bottom: 15px; color: #fff;">
            <span style="color: #3b82f6; font-weight: bold; display: block; margin-bottom: 8px;">💡 OPÇÃO 2: Formato Direto (Pare de errar!)</span>
            <strong>[0-3s - Gancho]:</strong> Se você ainda tenta ${beneficio.toLowerCase()} do jeito antigo, você tá perdendo tempo! Para tudo o que você tá fazendo e olha isso. 🛑<br><br>
            <strong>[3-15s - Contexto]:</strong> A maioria das pessoas comete o erro de achar que precisa gastar uma fortuna ou passar horas para resolver isso. Mas a tecnologia evoluiu.<br><br>
            <strong>[15-35s - Produto]:</strong> Esse(a) <strong>${produto}</strong> viralizou justamente porque resolve o problema direto na fonte. Ele serve para ${beneficio.toLowerCase()} de forma prática, segura e muito rápida.<br><br>
            <strong>[35-45s - CTA]:</strong> Se você quer facilitar sua vida e ter esse resultado hoje mesmo, clica no link promocional aqui embaixo por tempo limitado! 🚀
        </div>
    `;

    // Substitui o estado vazio pelos roteiros gigantes na tela
    containerResultados.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
            <p style="color: #a3a3a3; font-size: 13px; margin-bottom: 10px;">✨ Use as estruturas abaixo para colar no criador de vídeo:</p>
            ${roteiro1}
            ${roteiro2}
        </div>
    `;
}

// ==========================================
// 3. OUTRAS FUNÇÕES DO APP (EVITAR ERROS)
// ==========================================
function runResearch() {
    const nome = document.getElementById('res-name').value;
    const container = document.getElementById('research-result');
    container.innerHTML = `<div style="background:#1e1e1e; padding:20px; border-radius:8px; color:#fff; border: 1px solid #10b981;"><h3>📊 Relatório de Viabilidade: ${nome}</h3><p>Margem estimada está excelente para anúncios no TikTok Shop! O produto possui alto fator viral.</p></div>`;
}

function runPrompter() {
    const produto = document.getElementById('prompt-product').value;
    const container = document.getElementById('prompt-result');
    container.innerHTML = `<div style="background:#1e1e1e; padding:20px; border-radius:8px; color:#fff; border: 1px solid #10b981;"><code>hyper-realistic 8k commercial video of ${produto}, cinematic lighting, tiktok trend style, shot on 35mm lens --ar 9:16</code></div>`;
}

function openConfirmModal(type) {
    const modal = document.getElementById('confirm-modal');
    const text = document.getElementById('modal-cost-text');
    if (modal && text) {
        text.innerText = type === 'image' ? '10 créditos' : '30 créditos';
        modal.style.display = 'flex';
    }
}

function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.style.display = 'none';
}
