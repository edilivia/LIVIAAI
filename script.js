// ==========================================================================
// 0. CONTROLE DO MENU RETRÁTIL (CELULAR)
// ==========================================================================
function toggleSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// ==========================================================================
// 1. GERENCIAMENTO DE ABAS (NAVEGAÇÃO DO MENU)
// ==========================================================================
function switchTab(tabId) {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active-tab');
    });
    
    document.getElementById(tabId).classList.add('active-tab');
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) {
        sidebar.classList.remove('open');
    }
}

// ==========================================================================
// 2. MÓDULO 1: VALIDAÇÃO DE PRODUTO
// ==========================================================================
function runResearch() {
    const name = document.getElementById('res-name').value;
    const niche = document.getElementById('res-niche').value;
    const cost = parseFloat(document.getElementById('res-cost').value);
    const price = parseFloat(document.getElementById('res-price').value);
    const notes = document.getElementById('res-notes').value;

    if (!name || isNaN(cost) || isNaN(price)) {
        alert("Por favor, preencha o Nome, Custo e Preço de Venda do produto.");
        return;
    }

    const margin = price - cost;
    const markup = (price / cost).toFixed(1);
    
    let score = 50;
    if (markup >= 3) score += 20;
    if (margin >= 50) score += 20;
    if (notes.length > 10) score += 10;
    if (score > 100) score = 100;

    const resultBox = document.getElementById('research-result');
    resultBox.innerHTML = `
        <div class="result-box-ready">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <div>
                    <h2 style="font-size: 18px; margin-bottom: 2px;">${name}</h2>
                    <span style="font-size: 11px; background: #27272a; padding: 2px 6px; border-radius: 4px; color: #34d399;">${niche}</span>
                </div>
                <div class="score-display">
                    <div class="score-num">${score}</div>
                    <div style="font-size: 10px; color: #71717a; text-transform: uppercase;">Score</div>
                </div>
            </div>
            <div class="report-grid">
                <div class="report-item"><h4>Margem</h4><p style="color: #10b981; font-weight: bold;">R$ ${margin.toFixed(2)}</p></div>
                <div class="report-item"><h4>Custo</h4><p>R$ ${cost.toFixed(2)}</p></div>
                <div class="report-item"><h4>Markup</h4><p>${markup}x</p></div>
            </div>
        </div>
    `;
}

// ==========================================================================
// 3. MÓDULO 2: COPYS PARA TIKTOK
// ==========================================================================
function runCopywriter() {
    const name = document.getElementById('copy-name').value;
    const benefit = document.getElementById('copy-benefit').value;

    if (!name || !benefit) {
        alert("Por favor, preencha os campos da copy.");
        return;
    }

    const container = document.getElementById('copy-results');
    container.innerHTML = `
        <div class="copy-card">
            <button class="copy-actions-btn" onclick="copyText(this)">Copiar</button>
            <span class="copy-tag">Opção 1: Direta e Curiosa</span>
            <p class="copy-text">🚨 GANCHO: Aposto que você nunca viu nada igual!<br><br>Esse(a) ${name} te ajuda a ${benefit} sem esforço nenhum. Saiba mais!</p>
        </div>
    `;
}

function copyText(button) {
    const textElement = button.nextElementSibling.nextElementSibling;
    navigator.clipboard.writeText(textElement.innerText);
    button.innerText = "Copiado!";
    setTimeout(() => { button.innerText = "Copiar"; }, 2000);
}

// ==========================================================================
// 4. MÓDULO 3: DIREÇÃO DE CENA
// ==========================================================================
function runPrompter() {
    const product = document.getElementById('prompt-product').value;
    const style = document.getElementById('prompt-style').value;

    if (!product) {
        alert("Por favor, digite o que é o seu produto.");
        return;
    }

    const resultBox = document.getElementById('prompt-result');
    resultBox.innerHTML = `
        <div class="result-box-ready">
            <h4 style="font-size: 11px; color: #34d399; text-transform: uppercase; margin-bottom: 8px;">Prompt Técnico Pronto</h4>
            <p style="font-size: 13px; color: #fafafa; background:#1c1c1e; padding:12px; border-radius:8px;">High-quality video of ${product}, style "${style}" --ar 9:16</p>
        </div>
    `;
}

// ==========================================================================
// 5. MODAL DE CRÉDITOS E SIMULAÇÕES
// ==========================================================================
let currentActionType = '';

function openConfirmModal(type) {
    currentActionType = type;
    const modal = document.getElementById('confirm-modal');
    const costText = document.getElementById('modal-cost-text');
    if(type === 'image') costText.innerText = "2 créditos";
    if(type === 'video') costText.innerText = "5 créditos";
    modal.classList.add('open');
}

function closeConfirmModal() {
    document.getElementById('confirm-modal').classList.remove('open');
}
