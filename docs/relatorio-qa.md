# Relatório de QA — ConectaTech

## 1. Visão geral

A ConectaTech é uma landing page responsiva de assistência técnica. A análise de QA considera os fluxos de navegação, a adaptação a diferentes telas, a acessibilidade do menu, os links externos e a clareza das informações apresentadas.

## 2. Abordagem utilizada

A qualidade do projeto foi analisada a partir de quatro perguntas:

1. O comportamento implementado atende ao objetivo da página?
2. O usuário consegue concluir as principais ações?
3. O site continua utilizável em diferentes telas e formas de navegação?
4. Quais riscos precisam ser corrigidos antes de um uso comercial?

## 3. Pontos positivos identificados no código

- Uso de HTML semântico, com `header`, `nav`, `main`, `section`, `article` e `footer`;
- Hierarquia de títulos organizada;
- Menu mobile com atualização de `aria-expanded` e `aria-label`;
- Links externos protegidos com `noopener noreferrer`;
- FAQ construído com elementos nativos `details` e `summary`;
- Layout adaptável por meio de Grid, Flexbox e media query;
- Imagem principal com camada escura para melhorar o contraste do texto;
- Menu fechado automaticamente após a seleção de um link no mobile.

## 4. Riscos e oportunidades de melhoria

| ID | Tipo | Prioridade | Observação | Recomendação |
|---|---|---:|---|---|
| QA-001 | Configuração | Alta | Os links do WhatsApp usam um número fictício | Substituir pelo número comercial antes da publicação definitiva |
| QA-002 | Acessibilidade | Média | O menu não possui fechamento pela tecla Escape | Implementar o fechamento por teclado |
| QA-003 | Usabilidade | Baixa | O menu não fecha ao tocar fora dele | Avaliar a inclusão desse comportamento |
| QA-004 | Acessibilidade | Média | O foco do teclado pode receber uma indicação visual mais clara | Criar estilos com `:focus-visible` |
| QA-005 | Desempenho | Média | A imagem principal pode afetar o carregamento | Comprimir e, se possível, disponibilizar em WebP ou AVIF |
| QA-006 | SEO | Baixa | O projeto não possui favicon e metadados sociais | Adicionar ícone e Open Graph |
| QA-007 | Qualidade | Média | Ainda não existem testes automatizados | Automatizar os fluxos críticos após estabilizar os requisitos |
| QA-008 | Compatibilidade | Média | É necessário registrar testes em navegadores diferentes | Validar Chrome, Edge, Firefox e navegador mobile |
| QA-009 | Navegação | Baixa | A logo aponta para `#`, sem uma seção inicial identificada | Criar `id="inicio"` e apontar a logo para `#inicio` |

## 5. Diferença entre defeito e melhoria

- **Defeito:** o sistema não se comporta conforme um requisito definido.
- **Melhoria:** o comportamento atual funciona, mas pode oferecer uma experiência melhor.
- **Risco:** condição que pode causar falha, dificuldade ou impacto futuro.

Essa separação evita registrar toda sugestão como bug e ajuda a definir prioridades.

## 6. Exemplo de relato de bug

### Título

Menu mobile permanece aberto após selecionar uma opção.

### Ambiente

- Dispositivo: informar modelo;
- Sistema operacional: informar versão;
- Navegador: informar navegador e versão;
- URL: https://landing-assistencia.vercel.app/

### Passos para reprodução

1. Acessar a página em uma tela de até 768 pixels;
2. Tocar no botão do menu;
3. Selecionar “Serviços”;
4. Observar o estado do menu.

### Resultado esperado

A página deve navegar para Serviços e o menu deve fechar.

### Resultado encontrado

Descrever o comportamento realmente observado e anexar uma captura de tela ou gravação.

## 7. Competências de QA demonstradas

- Análise de requisitos e comportamento;
- Definição de critérios de aceite;
- Elaboração de casos de teste;
- Testes funcionais, responsivos e de acessibilidade;
- Identificação e priorização de riscos;
- Documentação clara de defeitos;
- Comunicação entre visão de negócio e implementação técnica;
- Uso de GitHub para documentação e rastreabilidade.

## 8. Próximas etapas

1. Executar os casos de teste e registrar os resultados;
2. Adicionar evidências das execuções;
3. Corrigir o número do WhatsApp;
4. Implementar as melhorias de acessibilidade prioritárias;
5. Criar testes automatizados para o menu, FAQ e navegação;
6. Reexecutar os testes após cada alteração relevante.

## Conclusão

O projeto atende ao objetivo de demonstrar uma landing page simples e responsiva. A documentação de QA transforma o trabalho em um estudo de caso mais completo, pois apresenta não apenas a interface construída, mas também a capacidade de analisar requisitos, testar comportamentos, comunicar riscos e planejar melhorias.
