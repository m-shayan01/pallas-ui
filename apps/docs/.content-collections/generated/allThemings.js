
export default [
  {
    "content": "# Color Tokens\n\nPallas UI uses a semantic color system that provides consistent theming across the entire design system.\n\n## Color System\n\nOur color system is organized into semantic categories that represent their usage in the UI. Each color has variations for different states and emphasis levels.\n\n<ColorPalette />\n\n## Usage\n\nUse these color tokens in your components for consistent styling:\n\n```tsx\nimport { css } from '@styled-system/css'\n\nfunction Example() {\n  return (\n    <div\n      className={css({\n        color: 'text',\n        bg: 'surface.container',\n        borderColor: 'border',\n      })}\n    >\n      Content with consistent colors\n    </div>\n  )\n}\n```",
    "title": "Color Tokens",
    "description": "Color tokens used in Pallas UI design system",
    "order": 2,
    "toc": true,
    "_meta": {
      "filePath": "colors.mdx",
      "fileName": "colors.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "colors"
    },
    "slug": "colors",
    "mdx": "var Component=(()=>{var p=Object.create;var o=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var f=(l,e)=>()=>(e||l((e={exports:{}}).exports,e),e.exports),E=(l,e)=>{for(var r in e)o(l,r,{get:e[r],enumerable:!0})},c=(l,e,r,t)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let s of m(e))!u.call(l,s)&&s!==r&&o(l,s,{get:()=>e[s],enumerable:!(t=y(e,s))||t.enumerable});return l};var x=(l,e,r)=>(r=l!=null?p(g(l)):{},c(e||!l||!l.__esModule?o(r,\"default\",{value:l,enumerable:!0}):r,l)),C=l=>c(o({},\"__esModule\",{value:!0}),l);var i=f((A,a)=>{a.exports=_jsx_runtime});var F={};E(F,{default:()=>h});var n=x(i());function d(l){let e={code:\"code\",figure:\"figure\",h1:\"h1\",h2:\"h2\",p:\"p\",pre:\"pre\",span:\"span\",...l.components},{ColorPalette:r}=e;return r||b(\"ColorPalette\",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:\"color-tokens\",children:\"Color Tokens\"}),`\n`,(0,n.jsx)(e.p,{children:\"Pallas UI uses a semantic color system that provides consistent theming across the entire design system.\"}),`\n`,(0,n.jsx)(e.h2,{id:\"color-system\",children:\"Color System\"}),`\n`,(0,n.jsx)(e.p,{children:\"Our color system is organized into semantic categories that represent their usage in the UI. Each color has variations for different states and emphasis levels.\"}),`\n`,(0,n.jsx)(r,{}),`\n`,(0,n.jsx)(e.h2,{id:\"usage\",children:\"Usage\"}),`\n`,(0,n.jsx)(e.p,{children:\"Use these color tokens in your components for consistent styling:\"}),`\n`,(0,n.jsx)(e.figure,{\"data-rehype-pretty-code-figure\":\"\",children:(0,n.jsx)(e.pre,{style:{backgroundColor:\"#fff\",color:\"#24292e\"},tabIndex:\"0\",\"data-language\":\"tsx\",\"data-theme\":\"github-light\",children:(0,n.jsxs)(e.code,{\"data-language\":\"tsx\",\"data-theme\":\"github-light\",style:{display:\"grid\"},children:[(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#D73A49\"},children:\"import\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\" { css } \"}),(0,n.jsx)(e.span,{style:{color:\"#D73A49\"},children:\"from\"}),(0,n.jsx)(e.span,{style:{color:\"#032F62\"},children:\" '@styled-system/css'\"})]}),`\n`,(0,n.jsx)(e.span,{\"data-line\":\"\",children:\" \"}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#D73A49\"},children:\"function\"}),(0,n.jsx)(e.span,{style:{color:\"#6F42C1\"},children:\" Example\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"() {\"})]}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#D73A49\"},children:\"  return\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\" (\"})]}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"    <\"}),(0,n.jsx)(e.span,{style:{color:\"#22863A\"},children:\"div\"})]}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#6F42C1\"},children:\"      className\"}),(0,n.jsx)(e.span,{style:{color:\"#D73A49\"},children:\"=\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"{\"}),(0,n.jsx)(e.span,{style:{color:\"#6F42C1\"},children:\"css\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"({\"})]}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"        color: \"}),(0,n.jsx)(e.span,{style:{color:\"#032F62\"},children:\"'text'\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"        bg: \"}),(0,n.jsx)(e.span,{style:{color:\"#032F62\"},children:\"'surface.container'\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"        borderColor: \"}),(0,n.jsx)(e.span,{style:{color:\"#032F62\"},children:\"'border'\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,n.jsx)(e.span,{\"data-line\":\"\",children:(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"      })}\"})}),`\n`,(0,n.jsx)(e.span,{\"data-line\":\"\",children:(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"    >\"})}),`\n`,(0,n.jsx)(e.span,{\"data-line\":\"\",children:(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"      Content with consistent colors\"})}),`\n`,(0,n.jsxs)(e.span,{\"data-line\":\"\",children:[(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"    </\"}),(0,n.jsx)(e.span,{style:{color:\"#22863A\"},children:\"div\"}),(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\">\"})]}),`\n`,(0,n.jsx)(e.span,{\"data-line\":\"\",children:(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"  )\"})}),`\n`,(0,n.jsx)(e.span,{\"data-line\":\"\",children:(0,n.jsx)(e.span,{style:{color:\"#24292E\"},children:\"}\"})})]})})})]})}function h(l={}){let{wrapper:e}=l.components||{};return e?(0,n.jsx)(e,{...l,children:(0,n.jsx)(d,{...l})}):d(l)}function b(l,e){throw new Error(\"Expected \"+(e?\"component\":\"object\")+\" `\"+l+\"` to be defined: you likely forgot to import, pass, or provide it.\")}return C(F);})();\n;return Component;",
    "tocData": [
      {
        "level": 2,
        "text": "Color System",
        "slug": "color-system"
      },
      {
        "level": 2,
        "text": "Usage",
        "slug": "usage"
      }
    ]
  },
  {
    "content": "# Theming\n\nPallas UI provides a comprehensive theming system that allows you to customize the look and feel of your application. The theming system is built on top of [Panda CSS](https://panda-css.com/) and provides a set of tokens for colors, spacing, typography, and more.\n\n## Tokens\n\nPallas UI uses a token-based approach to theming. Tokens are named values that can be used across your application to ensure consistency. The following token categories are available:\n\n- [Colors](/docs/theming/colors) - Color tokens for text, backgrounds, borders, and more\n- [Spacing & Sizing](/docs/theming/spacing-and-sizing) - Tokens for spacing, padding, margins, and component sizes\n\n## Using Tokens\n\nYou can use tokens in your components with the css function from Panda CSS:\n\n```tsx\nimport { css } from '@styled-system/css'\n\nfunction Example() {\n  return (\n    <div\n      className={css({\n        color: 'text',\n        bg: 'surface.container',\n        p: 'padding.block.md',\n        borderRadius: 'md',\n        border: '1px solid',\n        borderColor: 'border',\n      })}\n    >\n      Content with consistent styling\n    </div>\n  )\n}\n```",
    "title": "Theming",
    "description": "Learn how to customize the look and feel of Pallas UI",
    "order": 1,
    "toc": true,
    "_meta": {
      "filePath": "index.mdx",
      "fileName": "index.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "index"
    },
    "slug": "index",
    "mdx": "var Component=(()=>{var p=Object.create;var o=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var f=(l,n)=>()=>(n||l((n={exports:{}}).exports,n),n.exports),E=(l,n)=>{for(var s in n)o(l,s,{get:n[s],enumerable:!0})},c=(l,n,s,a)=>{if(n&&typeof n==\"object\"||typeof n==\"function\")for(let r of g(n))!m.call(l,r)&&r!==s&&o(l,r,{get:()=>n[r],enumerable:!(a=y(n,r))||a.enumerable});return l};var b=(l,n,s)=>(s=l!=null?p(u(l)):{},c(n||!l||!l.__esModule?o(s,\"default\",{value:l,enumerable:!0}):s,l)),k=l=>c(o({},\"__esModule\",{value:!0}),l);var t=f((F,i)=>{i.exports=_jsx_runtime});var x={};E(x,{default:()=>h});var e=b(t());function d(l){let n={a:\"a\",code:\"code\",figure:\"figure\",h1:\"h1\",h2:\"h2\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...l.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:\"theming\",children:\"Theming\"}),`\n`,(0,e.jsxs)(n.p,{children:[\"Pallas UI provides a comprehensive theming system that allows you to customize the look and feel of your application. The theming system is built on top of \",(0,e.jsx)(n.a,{href:\"https://panda-css.com/\",children:\"Panda CSS\"}),\" and provides a set of tokens for colors, spacing, typography, and more.\"]}),`\n`,(0,e.jsx)(n.h2,{id:\"tokens\",children:\"Tokens\"}),`\n`,(0,e.jsx)(n.p,{children:\"Pallas UI uses a token-based approach to theming. Tokens are named values that can be used across your application to ensure consistency. The following token categories are available:\"}),`\n`,(0,e.jsxs)(n.ul,{children:[`\n`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:\"/docs/theming/colors\",children:\"Colors\"}),\" - Color tokens for text, backgrounds, borders, and more\"]}),`\n`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:\"/docs/theming/spacing-and-sizing\",children:\"Spacing & Sizing\"}),\" - Tokens for spacing, padding, margins, and component sizes\"]}),`\n`]}),`\n`,(0,e.jsx)(n.h2,{id:\"using-tokens\",children:\"Using Tokens\"}),`\n`,(0,e.jsx)(n.p,{children:\"You can use tokens in your components with the css function from Panda CSS:\"}),`\n`,(0,e.jsx)(n.figure,{\"data-rehype-pretty-code-figure\":\"\",children:(0,e.jsx)(n.pre,{style:{backgroundColor:\"#fff\",color:\"#24292e\"},tabIndex:\"0\",\"data-language\":\"tsx\",\"data-theme\":\"github-light\",children:(0,e.jsxs)(n.code,{\"data-language\":\"tsx\",\"data-theme\":\"github-light\",style:{display:\"grid\"},children:[(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#D73A49\"},children:\"import\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\" { css } \"}),(0,e.jsx)(n.span,{style:{color:\"#D73A49\"},children:\"from\"}),(0,e.jsx)(n.span,{style:{color:\"#032F62\"},children:\" '@styled-system/css'\"})]}),`\n`,(0,e.jsx)(n.span,{\"data-line\":\"\",children:\" \"}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#D73A49\"},children:\"function\"}),(0,e.jsx)(n.span,{style:{color:\"#6F42C1\"},children:\" Example\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"() {\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#D73A49\"},children:\"  return\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\" (\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"    <\"}),(0,e.jsx)(n.span,{style:{color:\"#22863A\"},children:\"div\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#6F42C1\"},children:\"      className\"}),(0,e.jsx)(n.span,{style:{color:\"#D73A49\"},children:\"=\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"{\"}),(0,e.jsx)(n.span,{style:{color:\"#6F42C1\"},children:\"css\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"({\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"        color: \"}),(0,e.jsx)(n.span,{style:{color:\"#032F62\"},children:\"'text'\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"        bg: \"}),(0,e.jsx)(n.span,{style:{color:\"#032F62\"},children:\"'surface.container'\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"        p: \"}),(0,e.jsx)(n.span,{style:{color:\"#032F62\"},children:\"'padding.block.md'\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"        borderRadius: \"}),(0,e.jsx)(n.span,{style:{color:\"#032F62\"},children:\"'md'\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"        border: \"}),(0,e.jsx)(n.span,{style:{color:\"#032F62\"},children:\"'1px solid'\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"        borderColor: \"}),(0,e.jsx)(n.span,{style:{color:\"#032F62\"},children:\"'border'\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\",\"})]}),`\n`,(0,e.jsx)(n.span,{\"data-line\":\"\",children:(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"      })}\"})}),`\n`,(0,e.jsx)(n.span,{\"data-line\":\"\",children:(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"    >\"})}),`\n`,(0,e.jsx)(n.span,{\"data-line\":\"\",children:(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"      Content with consistent styling\"})}),`\n`,(0,e.jsxs)(n.span,{\"data-line\":\"\",children:[(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"    </\"}),(0,e.jsx)(n.span,{style:{color:\"#22863A\"},children:\"div\"}),(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\">\"})]}),`\n`,(0,e.jsx)(n.span,{\"data-line\":\"\",children:(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"  )\"})}),`\n`,(0,e.jsx)(n.span,{\"data-line\":\"\",children:(0,e.jsx)(n.span,{style:{color:\"#24292E\"},children:\"}\"})})]})})})]})}function h(l={}){let{wrapper:n}=l.components||{};return n?(0,e.jsx)(n,{...l,children:(0,e.jsx)(d,{...l})}):d(l)}return k(x);})();\n;return Component;",
    "tocData": [
      {
        "level": 2,
        "text": "Tokens",
        "slug": "tokens"
      },
      {
        "level": 2,
        "text": "Using Tokens",
        "slug": "using-tokens"
      }
    ]
  },
  {
    "content": "# Spacing & Sizing\n\nPallas UI uses a consistent sizing and spacing system to ensure proper layout and component proportions.\n\n## Control Heights\n\n<div className=\"flex flex-wrap gap-8 my-8\">\n  <SizeBox label=\"Small\" width=\"100px\" height=\"1.75rem\" />\n  <SizeBox label=\"Medium\" width=\"100px\" height=\"2rem\" />\n  <SizeBox label=\"Large\" width=\"100px\" height=\"2.5rem\" />\n</div>\n\n## Layout Spacing\n\n### Default Layout Spacing\n\n<div className=\"flex flex-col gap-6 my-8\">\n  <SpacingBox label=\"Small\" size=\"spacing.layout.default.sm\" />\n  <SpacingBox label=\"Medium\" size=\"spacing.layout.default.md\" />\n  <SpacingBox label=\"Large\" size=\"spacing.layout.default.lg\" />\n</div>\n\n### Internal Layout Spacing\n\n<div className=\"flex flex-col gap-6 my-8\">\n  <SpacingBox label=\"Small\" size=\"spacing.layout.internal.sm\" />\n  <SpacingBox label=\"Medium\" size=\"spacing.layout.internal.md\" />\n  <SpacingBox label=\"Large\" size=\"spacing.layout.internal.lg\" />\n</div>\n\n### Section Layout Spacing\n\n<div className=\"flex flex-col gap-6 my-8\">\n  <SpacingBox label=\"Small\" size=\"spacing.layout.section.sm\" />\n  <SpacingBox label=\"Medium\" size=\"spacing.layout.section.md\" />\n  <SpacingBox label=\"Large\" size=\"spacing.layout.section.lg\" />\n</div>\n\n## Component Spacing\n\n### Gap Spacing\n\n<div className=\"flex flex-col gap-6 my-8\">\n  <SpacingBox label=\"Small\" size=\"spacing.gap.component.sm\" />\n  <SpacingBox label=\"Medium\" size=\"spacing.gap.component.md\" />\n  <SpacingBox label=\"Large\" size=\"spacing.gap.component.lg\" />\n</div>\n\n### Gap Inline\n\n<div className=\"flex flex-col gap-6 my-8\">\n  <SpacingBox label=\"Extra Small\" size=\"spacing.gap.inline.xs\" />\n  <SpacingBox label=\"Small\" size=\"spacing.gap.inline.sm\" />\n  <SpacingBox label=\"Medium\" size=\"spacing.gap.inline.md\" />\n  <SpacingBox label=\"Large\" size=\"spacing.gap.inline.lg\" />\n</div>\n\n### Padding Block\n\n<div className=\"flex flex-col gap-6 my-8\">\n  <SpacingBox label=\"Small\" size=\"spacing.padding.block.sm\" />\n  <SpacingBox label=\"Medium\" size=\"spacing.padding.block.md\" />\n  <SpacingBox label=\"Large\" size=\"spacing.padding.block.lg\" />\n</div>\n\n### Padding Inline\n\n<div className=\"flex flex-col gap-6 my-8\">\n  <SpacingBox label=\"Extra Small\" size=\"spacing.padding.inline.xs\" />\n  <SpacingBox label=\"Small\" size=\"spacing.padding.inline.sm\" />\n  <SpacingBox label=\"Medium\" size=\"spacing.padding.inline.md\" />\n  <SpacingBox label=\"Large\" size=\"spacing.padding.inline.lg\" />\n</div>",
    "title": "Spacing & Sizing",
    "description": "Size and spacing tokens used in Pallas UI design system",
    "order": 3,
    "toc": true,
    "_meta": {
      "filePath": "spacing-and-sizing.mdx",
      "fileName": "spacing-and-sizing.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "spacing-and-sizing"
    },
    "slug": "spacing-and-sizing",
    "mdx": "var Component=(()=>{var m=Object.create;var c=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var f=(l,i)=>()=>(i||l((i={exports:{}}).exports,i),i.exports),y=(l,i)=>{for(var a in i)c(l,a,{get:i[a],enumerable:!0})},g=(l,i,a,n)=>{if(i&&typeof i==\"object\"||typeof i==\"function\")for(let s of u(i))!b.call(l,s)&&s!==a&&c(l,s,{get:()=>i[s],enumerable:!(n=h(i,s))||n.enumerable});return l};var z=(l,i,a)=>(a=l!=null?m(x(l)):{},g(i||!l||!l.__esModule?c(a,\"default\",{value:l,enumerable:!0}):a,l)),S=l=>g(c({},\"__esModule\",{value:!0}),l);var p=f((v,d)=>{d.exports=_jsx_runtime});var L={};y(L,{default:()=>r});var e=z(p());function t(l){let i={h1:\"h1\",h2:\"h2\",h3:\"h3\",p:\"p\",...l.components},{SizeBox:a,SpacingBox:n}=i;return a||o(\"SizeBox\",!0),n||o(\"SpacingBox\",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:\"spacing--sizing\",children:\"Spacing & Sizing\"}),`\n`,(0,e.jsx)(i.p,{children:\"Pallas UI uses a consistent sizing and spacing system to ensure proper layout and component proportions.\"}),`\n`,(0,e.jsx)(i.h2,{id:\"control-heights\",children:\"Control Heights\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-wrap gap-8 my-8\",children:[(0,e.jsx)(a,{label:\"Small\",width:\"100px\",height:\"1.75rem\"}),(0,e.jsx)(a,{label:\"Medium\",width:\"100px\",height:\"2rem\"}),(0,e.jsx)(a,{label:\"Large\",width:\"100px\",height:\"2.5rem\"})]}),`\n`,(0,e.jsx)(i.h2,{id:\"layout-spacing\",children:\"Layout Spacing\"}),`\n`,(0,e.jsx)(i.h3,{id:\"default-layout-spacing\",children:\"Default Layout Spacing\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-col gap-6 my-8\",children:[(0,e.jsx)(n,{label:\"Small\",size:\"spacing.layout.default.sm\"}),(0,e.jsx)(n,{label:\"Medium\",size:\"spacing.layout.default.md\"}),(0,e.jsx)(n,{label:\"Large\",size:\"spacing.layout.default.lg\"})]}),`\n`,(0,e.jsx)(i.h3,{id:\"internal-layout-spacing\",children:\"Internal Layout Spacing\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-col gap-6 my-8\",children:[(0,e.jsx)(n,{label:\"Small\",size:\"spacing.layout.internal.sm\"}),(0,e.jsx)(n,{label:\"Medium\",size:\"spacing.layout.internal.md\"}),(0,e.jsx)(n,{label:\"Large\",size:\"spacing.layout.internal.lg\"})]}),`\n`,(0,e.jsx)(i.h3,{id:\"section-layout-spacing\",children:\"Section Layout Spacing\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-col gap-6 my-8\",children:[(0,e.jsx)(n,{label:\"Small\",size:\"spacing.layout.section.sm\"}),(0,e.jsx)(n,{label:\"Medium\",size:\"spacing.layout.section.md\"}),(0,e.jsx)(n,{label:\"Large\",size:\"spacing.layout.section.lg\"})]}),`\n`,(0,e.jsx)(i.h2,{id:\"component-spacing\",children:\"Component Spacing\"}),`\n`,(0,e.jsx)(i.h3,{id:\"gap-spacing\",children:\"Gap Spacing\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-col gap-6 my-8\",children:[(0,e.jsx)(n,{label:\"Small\",size:\"spacing.gap.component.sm\"}),(0,e.jsx)(n,{label:\"Medium\",size:\"spacing.gap.component.md\"}),(0,e.jsx)(n,{label:\"Large\",size:\"spacing.gap.component.lg\"})]}),`\n`,(0,e.jsx)(i.h3,{id:\"gap-inline\",children:\"Gap Inline\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-col gap-6 my-8\",children:[(0,e.jsx)(n,{label:\"Extra Small\",size:\"spacing.gap.inline.xs\"}),(0,e.jsx)(n,{label:\"Small\",size:\"spacing.gap.inline.sm\"}),(0,e.jsx)(n,{label:\"Medium\",size:\"spacing.gap.inline.md\"}),(0,e.jsx)(n,{label:\"Large\",size:\"spacing.gap.inline.lg\"})]}),`\n`,(0,e.jsx)(i.h3,{id:\"padding-block\",children:\"Padding Block\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-col gap-6 my-8\",children:[(0,e.jsx)(n,{label:\"Small\",size:\"spacing.padding.block.sm\"}),(0,e.jsx)(n,{label:\"Medium\",size:\"spacing.padding.block.md\"}),(0,e.jsx)(n,{label:\"Large\",size:\"spacing.padding.block.lg\"})]}),`\n`,(0,e.jsx)(i.h3,{id:\"padding-inline\",children:\"Padding Inline\"}),`\n`,(0,e.jsxs)(\"div\",{className:\"flex flex-col gap-6 my-8\",children:[(0,e.jsx)(n,{label:\"Extra Small\",size:\"spacing.padding.inline.xs\"}),(0,e.jsx)(n,{label:\"Small\",size:\"spacing.padding.inline.sm\"}),(0,e.jsx)(n,{label:\"Medium\",size:\"spacing.padding.inline.md\"}),(0,e.jsx)(n,{label:\"Large\",size:\"spacing.padding.inline.lg\"})]})]})}function r(l={}){let{wrapper:i}=l.components||{};return i?(0,e.jsx)(i,{...l,children:(0,e.jsx)(t,{...l})}):t(l)}function o(l,i){throw new Error(\"Expected \"+(i?\"component\":\"object\")+\" `\"+l+\"` to be defined: you likely forgot to import, pass, or provide it.\")}return S(L);})();\n;return Component;",
    "tocData": [
      {
        "level": 2,
        "text": "Control Heights",
        "slug": "control-heights"
      },
      {
        "level": 2,
        "text": "Layout Spacing",
        "slug": "layout-spacing",
        "children": [
          {
            "level": 3,
            "text": "Default Layout Spacing",
            "slug": "default-layout-spacing"
          },
          {
            "level": 3,
            "text": "Internal Layout Spacing",
            "slug": "internal-layout-spacing"
          },
          {
            "level": 3,
            "text": "Section Layout Spacing",
            "slug": "section-layout-spacing"
          }
        ]
      },
      {
        "level": 2,
        "text": "Component Spacing",
        "slug": "component-spacing",
        "children": [
          {
            "level": 3,
            "text": "Gap Spacing",
            "slug": "gap-spacing"
          },
          {
            "level": 3,
            "text": "Gap Inline",
            "slug": "gap-inline"
          },
          {
            "level": 3,
            "text": "Padding Block",
            "slug": "padding-block"
          },
          {
            "level": 3,
            "text": "Padding Inline",
            "slug": "padding-inline"
          }
        ]
      }
    ]
  }
]