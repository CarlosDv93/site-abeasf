# CLAUDE.md

Este arquivo fornece orientações ao Claude Code (claude.ai/code) ao trabalhar neste repositório.

## Visão Geral do Projeto

Site HTML estático da ABEASF (Associação Beneficente Antonio Soares Freitas), organização social brasileira. Não há sistema de build — o site executa diretamente a partir do `index.html`.

## Executando Localmente

Sirva com qualquer servidor HTTP com suporte a PHP (necessário para o formulário de contato):

```powershell
# Python (apenas estático, sem formulário de contato)
python -m http.server 8080

# Servidor embutido do PHP (habilita o formulário de contato)
php -S localhost:8080
```

Abra `http://localhost:8080` no navegador.

## Arquitetura

**Site de página única** (`index.html`) com três seções âncora: `#about`, `#projects`, `#contact`.

```
index.html          # Todo o markup do site; uma página com seções Bootstrap 3
enviar.php          # Handler de e-mail do formulário de contato (PHP mail())
assets/
  css/main.css      # Estilos customizados principais
  js/ajax-enviar.js # Envio AJAX do formulário de contato (POST para enviar.php)
  js/jquery-func.js # Lógica de scrollspy e estado ativo da nav
  js/ModalShow.js   # Modais de imagem
```

**Stack**: Bootstrap 3 + jQuery 1.x. Sem transpilação, bundling ou gerenciamento de pacotes.

## Comportamentos Importantes

- **Navbar**: Fixada no topo, colapsa em mobile. Estado ativo controlado pelo scrollspy em `jquery-func.js` observando `#about`, `#projects`, `#contact`.
- **Formulário de contato**: POST AJAX para `enviar.php`; feedback de sucesso/erro injetado em `#form-msg`.
- **Scroll suave**: `smoothscroll.js` intercepta todos os cliques em âncoras `href="#..."`.
- **Modais**: `ModalShow.js` abre imagens de `assets/img/modal/` em modais Bootstrap.
