# Guia de Uso dos Logos da Aguiar Sistemas

Este documento descreve as diferentes versões do logo da Aguiar Sistemas disponíveis no projeto e quando usar cada uma.

## Versões Disponíveis

### 1. Logo Original (Branco)

- **Arquivo:** `src/assets/Logo Aguiar Sistemas.svg`
- **Cores:** Totalmente branco (`fill="white"`)
- **Uso recomendado:** Fundos escuros (footer, seções escuras)
- **Dimensões:** 158x100 pixels
- **ViewBox:** `0 0 158 100`

### 2. Logo Adaptado (Escuro)

- **Arquivo:** `src/assets/Logo Aguiar Sistemas Dark.svg`
- **Cores:** Cinza escuro (`fill="#1f2937"`) para visibilidade em fundos claros
- **Uso recomendado:** Fundos claros (header, seções brancas)
- **Dimensões:** 158x100 pixels
- **ViewBox:** `0 0 158 100`

## Implementação Atual

### Header (Fundo Branco)

```jsx
import logoAguiarSistemas from "../assets/Logo Aguiar Sistemas Dark.svg";
```

- Usa a versão escura para garantir visibilidade no fundo branco
- Logo fica claramente visível e profissional

### Footer (Fundo Escuro)

- Não usa logo diretamente
- Se necessário usar logo no footer, utilizar a versão branca original

## Padrão de Cores Usado

A versão escura foi criada seguindo o design system do Tailwind CSS:

- **Cinza escuro (gray-800):** Para o símbolo gráfico principal
- **Cinza médio (gray-700):** Para o texto "AGUIAR SISTEMAS"
- **Cinza claro (gray-500):** Para o texto "Software" (se aplicável)

## Status Atual (Atualizado)

✅ **Logo adaptado recriado:** Baseado no arquivo original atualizado (158x100px)  
✅ **Logo escuro no header branco:** Totalmente visível e legível  
✅ **Logo branco disponível:** Para uso em fundos escuros  
✅ **Aplicação funcionando:** Servidor rodando em localhost:5174  
✅ **Sem erros:** Nenhum erro de compilação detectado  
✅ **Responsive:** Funciona bem em diferentes tamanhos de tela

## Testes de Visibilidade

✅ **Logo escuro no header branco:** Totalmente visível e legível
✅ **Logo branco no footer escuro:** Mantém visibilidade original
✅ **Responsive:** Funciona bem em diferentes tamanhos de tela

## Manutenção

Para futuras atualizações:

1. Sempre manter as duas versões sincronizadas
2. Usar cores consistentes com o design system
3. Testar visibilidade em diferentes fundos
4. Manter as mesmas dimensões (243x33 pixels)

---

_Última atualização: Dezembro 2024_
