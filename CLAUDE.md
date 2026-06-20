# CLAUDE.md

Este arquivo fornece orientações ao Claude Code (claude.ai/code) ao trabalhar neste repositório.

## Visão Geral do Projeto

Site HTML estático da ABEASF (Associação Beneficente Antonio Soares Freitas), organização social brasileira localizada em Itaúna, MG. Não há sistema de build — o site executa diretamente a partir do `index.html`.

## Executando Localmente

Qualquer servidor HTTP estático serve:

```powershell
# Python
python -m http.server 8080
```

Abra `http://localhost:8080` no navegador.

## Arquitetura

**Site de página única** (`index.html`) com seções âncora: `#home`, `#about`, `#projetos`, `#contact` (mais uma seção de localização sem link na nav).

Arquivos ativamente usados:

```
index.html              # Todo o markup + JS inline (tema e navbar)
assets/css/main.css     # Único stylesheet customizado; usa variáveis CSS para temas
assets/img/             # Logo, favicon e imagens de fundo (bg/itauna.jpg, bg/pj.jpg)
```

**Stack**: Bootstrap 5.3.3 + Bootstrap Icons 1.11.3 + Google Fonts (Lato, Raleway), todos via CDN. Sem jQuery, sem PHP, sem bundler.

**Arquivos legacy** (presentes no repositório mas não referenciados pelo `index.html` atual): `enviar.php`, `assets/js/*`, `assets/css/bootstrap.css`, `assets/css/animate-custom.css`, `assets/css/ModalShow.css`, `assets/css/icomoon*`, `assets/fonts/glyphicons-*`, `assets/img/modal/`, `assets/img/logo-trans-old.png`. Restos da v1 do site — não usar como referência ao editar.

## Comportamentos Importantes

- **Tema claro/escuro**: Toggle no canto da navbar (`#themeToggle`) que alterna o atributo `data-theme` em `<html>` e persiste em `localStorage`. Um script anti-flash no `<head>` aplica o tema salvo antes da renderização. Todas as cores são definidas via custom properties em `:root` e sobrescritas em `[data-theme="dark"]`.
- **Navbar**: Fixada no topo, ganha sombra ao rolar (classe `.scrolled` via listener inline). Scrollspy é nativo do Bootstrap 5 (`data-bs-spy="scroll"` no `<body>` apontando para `#navbar-main`).
- **Scroll suave**: CSS-only (`html { scroll-behavior: smooth }` em `main.css`). Não há JS de smooth scroll.
- **Localização**: Seção com background fixo (parallax) e overlay azul translúcido sobre `assets/img/bg/itauna.jpg`. Links dentro de `.location-info` precisam de cor branca explícita para não colidir com o overlay azul.
- **Contato**: Apenas informações estáticas (endereço, WhatsApp, e-mail, site, CNPJ/PIX). Não há mais formulário de contato.

## Convenções

- HTML/CSS/JS em português brasileiro (textos, comentários, identificadores quando significativos).
- Cores e espaçamentos via variáveis CSS já definidas em `main.css` (`--primary`, `--text`, `--radius`, etc) — evitar valores literais.
- Para qualquer elemento que apareça sobre fundos coloridos (seções `.section-location` e `.section-projects`), validar contraste em ambos os temas.
