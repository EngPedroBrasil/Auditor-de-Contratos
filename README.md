# AuditoriaContratos 🚀
> **Dashboard Inteligente de Controladoria e Conciliação Física-Financeira de Contratos (Sienge ERP)**

O **AuditoriaContratos** é uma ferramenta corporativa sob medida desenvolvida para Engenheiros de Obra, Controllers (PCO) e Gestores de Contrato na Construção Civil. O sistema automatiza o cruzamento de dados físicos de medições com as provisões financeiras fiscais lançadas no setor de Contas a Pagar, mitigando riscos de pagamentos em duplicidade e faturamentos irregulares de forma preditiva.

---

## 💡 O Problema que Resolvemos
Em grandes obras, a conciliação manual de contratos é lenta, exaustiva e suscetível a falhas. Notas fiscais de medições físicas podem ser lançadas em duplicidade em SPEs (Sociedades de Propósito Específico) distintas do mesmo grupo econômico, ou adiantamentos financeiros podem ser liquidados sem a devida compensação física no canteiro de obras. 

O **AuditoriaContratos** analisa, cruza e consolida relatórios extraídos em tempo real do **ERP Sienge**, disparando alertas visuais preditivos antes do vencimento bancário dos borderôs de pagamento.

---

## 🛠️ Principais Funcionalidades
* **Upload Inteligente Drag & Drop:** Arraste e solte o *Relatório de Análise de Contrato* (PDF) e o *Contas a Pagar por Credor* (PDF) extraídos do Sienge.
* **Leitura Direta Client-side (PDF.js):** Extração de texto e mapeamento de tabelas direto no navegador do usuário, garantindo privacidade absoluta dos dados financeiros (sem tráfego de servidores externos).
* **Motor de Auditoria Preditivo:**
  * **Alerta Crítico de Duplicidade:** Identifica automaticamente se a mesma medição/NF está lançada em múltiplos CNPJs com liquidação por adiantamento em outra empresa.
  * **Retenção de Borderô:** Bloqueia pagamentos de notas sinalizadas com pendências técnicas contratuais de forma integrada.
* **Evolução Físico-Financeira por Insumo:** Acompanhamento dinâmico do progresso e saldo físico-financeiro residual a medir para cada item do contrato.
* **Painel de Conciliação Consolidado:** Separa com transparência o saldo contratual remanescente das retenções técnicas e parcelas de medição a vencer alongadas no contas a pagar de cada CNPJ.
* **Design Premium e Responsivo:** Visual moderno baseado nas diretrizes corporativas da *PRC Empreendimentos*, com suporte a Modo Escuro/Claro e folhas de estilo otimizadas para impressão física e geração de PDFs executivos.

---

## 💻 Tecnologias Utilizadas
* **Core:** HTML5 Semântico, CSS3 Moderno (Variação de Tema HSL) e JavaScript Assíncrono (Vanilla ES6).
* **Processamento de Arquivos:** [PDF.js (Mozilla)](https://mozilla.github.io/pdf.js/) via CDN para extração inteligente de fluxo de texto.
* **Interface e Estilização:**
  * Ícones Vetoriais Premium: [Lucide Icons](https://lucide.dev/).
  * Tipografia Geométrica: Google Fonts (Outfit & Inter).
  * Sem dependências pesadas de frameworks (Next/React), rodando 100% no navegador cliente.

---

## 🚀 Como Executar o Projeto Localmente

### 1. Execução Direta
Como o projeto foi projetado de forma autônoma e leve, basta abrir o arquivo `index.html` em qualquer navegador web. 
* *Nota:* Para testar as regras lógicas sem extrair arquivos reais imediatos, você pode clicar no botão **"Carregar Dados de Exemplo (Contrato CT/Aleatório)"** para simular um fluxo de auditoria completo baseado na empresa fictícia ACME.

### 2. Geração do Arquivo Único Consolidado (Build)
O projeto conta com um script automatizado em Node.js para converter todos os recursos externos (estilos CSS, códigos JavaScript e imagens de logo) em um único arquivo HTML inline, ideal para distribuição rápida por e-mail ou portal de intranet.

Para gerar a versão consolidada de produção:
1. Certifique-se de possuir o Node.js instalado.
2. Na raiz do projeto, instale as dependências (para ler arquivos locais de forma integrada):
   ```bash
   npm install
   ```
3. Execute o script de empacotamento:
   ```bash
   node build_single_html.js
   ```
4. O arquivo consolidado e autônomo de produção será gerado na raiz sob o nome: **`index_single.html`**.

---

## 📄 Licença e Créditos
* **Desenvolvedor:** Pedro Henrique Brasil Ribeiro (Engenheiro Controller de obras - PCO)
* **Licença:** Uso interno exclusivo para fins de controle e governança corporativa na Controladoria Geral da PRC Empreendimentos.
