# Casos de Teste — ConectaTech

## Escopo

Este documento descreve os principais cenários funcionais, responsivos e de acessibilidade da landing page ConectaTech.

## Critérios de aceite

### Navegação

- Cada item do menu deve direcionar o usuário para a seção correspondente.
- A rolagem entre as seções deve acontecer de forma suave.
- Nenhum link interno deve direcionar para uma seção inexistente.

### Menu mobile

- Em telas com largura de até 768 pixels, o menu deve ficar oculto inicialmente.
- O botão do menu deve exibir três linhas quando estiver fechado.
- Ao tocar no botão, os links devem aparecer e o ícone deve mudar para um X.
- Ao selecionar um link, o menu deve fechar automaticamente.
- O estado acessível do botão deve mudar entre aberto e fechado.

### Responsividade

- Serviços e etapas devem aparecer em três colunas em telas maiores.
- Em telas de até 768 pixels, os cards devem ser organizados em uma coluna.
- Textos, botões e cards não devem ficar cortados, sobrepostos ou fora da tela.

## Cenários

| ID | Cenário | Pré-condição | Ação | Resultado esperado | Status |
|---|---|---|---|---|---|
| CT-001 | Navegar para Serviços | Página carregada | Selecionar “Serviços” | A seção “Nossos serviços” é exibida | A validar |
| CT-002 | Navegar para Sobre | Página carregada | Selecionar “Sobre” | A seção correspondente é exibida | A validar |
| CT-003 | Navegar para Dúvidas | Página carregada | Selecionar “Dúvidas” | O FAQ é exibido | A validar |
| CT-004 | Abrir menu mobile | Tela de até 768 px e menu fechado | Tocar no botão do menu | Links aparecem e o ícone muda para X | A validar |
| CT-005 | Fechar menu pelo botão | Menu mobile aberto | Tocar novamente no botão | Links são ocultados e as três linhas retornam | A validar |
| CT-006 | Fechar menu por um link | Menu mobile aberto | Selecionar um dos links | A seção é exibida e o menu fecha | A validar |
| CT-007 | Abrir pergunta do FAQ | Seção de dúvidas visível | Selecionar uma pergunta | A resposta correspondente é exibida | A validar |
| CT-008 | Fechar pergunta do FAQ | Pergunta aberta | Selecionar novamente a pergunta | A resposta é recolhida | A validar |
| CT-009 | Abrir WhatsApp | Página carregada | Selecionar um botão de contato | O endereço do WhatsApp abre em outra aba ou aplicativo | Bloqueado: número fictício |
| CT-010 | Validar cards no desktop | Tela acima de 768 px | Acessar Serviços e Como funciona | Cada grupo é exibido em três colunas | A validar |
| CT-011 | Validar cards no mobile | Tela de até 768 px | Acessar Serviços e Como funciona | Os cards são exibidos em uma coluna | A validar |
| CT-012 | Validar textos em tela pequena | Tela mobile | Percorrer toda a página | Não há texto cortado, sobreposto ou rolagem horizontal indevida | A validar |
| CT-013 | Validar estado acessível do menu | Leitor de tela ou inspetor aberto | Abrir e fechar o menu | `aria-expanded` e `aria-label` refletem o estado atual | A validar |
| CT-014 | Navegar utilizando teclado | Página carregada | Utilizar Tab e Enter | Links, botão e FAQ podem ser acessados e acionados | A validar |
| CT-015 | Abrir link externo com segurança | Página carregada | Inspecionar link do WhatsApp | O link usa `noopener noreferrer` | A validar |

## Modelo para registrar uma execução

Ao executar os testes, substituir “A validar” por:

- **Aprovado:** comportamento igual ao esperado;
- **Reprovado:** comportamento diferente do esperado;
- **Bloqueado:** teste não pôde ser concluído;
- **Não aplicável:** cenário não pertence à versão avaliada.

Para cada reprovação, registrar navegador, dispositivo, evidência e passos para reprodução.
