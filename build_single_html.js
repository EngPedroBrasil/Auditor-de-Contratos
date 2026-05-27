const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const distDir = path.join(projectDir, 'dist');

console.log('Iniciando empacotamento do AuditoriaContratos...');

try {
    // 1. Criar pasta dist se não existir
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
        console.log('Diretório "dist" criado com sucesso.');
    }

    // 2. Ler arquivos de entrada
    let html = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');
    const css = fs.readFileSync(path.join(projectDir, 'styles.css'), 'utf8');
    const js = fs.readFileSync(path.join(projectDir, 'app.js'), 'utf8');

    // 3. Converter logo.png para Base64
    const logoPath = path.join(projectDir, 'logo.png');
    let logoBase64 = '';
    if (fs.existsSync(logoPath)) {
        const logoBuffer = fs.readFileSync(logoPath);
        logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
        console.log('Logotipo convertido para Base64 com sucesso.');
    } else {
        console.warn('Alerta: arquivo "logo.png" não encontrado. Continuando sem ele.');
    }

    // 4. Realizar substituições
    // A) Substituir o link do CSS pela tag <style> inlined
    const cssRegex = /<link\s+rel=["']stylesheet["']\s+href=["']styles\.css["']\s*\/?>/i;
    if (cssRegex.test(html)) {
        html = html.replace(cssRegex, `<style>\n${css}\n</style>`);
        console.log('CSS incorporado com sucesso.');
    } else {
        console.warn('Alerta: Link para styles.css não encontrado no HTML.');
    }

    // B) Substituir a logo pelo src em Base64
    const logoImgRegex = /<img\s+src=["']logo\.png["']/i;
    if (logoImgRegex.test(html) && logoBase64) {
        html = html.replace(logoImgRegex, `<img src="${logoBase64}"`);
        console.log('Imagem do logotipo incorporada como Data URL Base64.');
    }

    // C) Substituir a tag de script pelo código inlined
    const scriptRegex = /<script\s+src=["']app\.js["']><\/script>/i;
    if (scriptRegex.test(html)) {
        html = html.replace(scriptRegex, `<script>\n${js}\n</script>`);
        console.log('JavaScript incorporado com sucesso.');
    } else {
        console.warn('Alerta: Tag para app.js não encontrada no HTML.');
    }

    // 5. Salvar o arquivo final consolidado na pasta dist e na raiz
    const outputPath = path.join(distDir, 'index.html');
    fs.writeFileSync(outputPath, html, 'utf8');
    
    const rootOutputPath = path.join(projectDir, 'index_single.html');
    fs.writeFileSync(rootOutputPath, html, 'utf8');
    
    console.log(`\n🎉 SUCESSO! Arquivos únicos HTML consolidados gerados em:\n👉 Na pasta dist: ${outputPath}\n👉 Na raiz do projeto: ${rootOutputPath}\n`);

} catch (err) {
    console.error('Erro durante o empacotamento:', err);
    process.exit(1);
}
