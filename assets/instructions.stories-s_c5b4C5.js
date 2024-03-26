import{M as s}from"./chunk-HLWAVYOI-Bn9BnJ_N.js";import{j as n}from"./jsx-runtime--26OcTxz.js";import{useMDXComponents as i}from"./index-5egpPWge.js";import"./iframe-2HfTV_Qd.js";import"../sb-preview/runtime.js";import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./react-18-dx9qDk38.js";import"./index-B99Sp-t6.js";import"./chunk-EIRT5I3Z-CbnHSNsj.js";import"./index-Bw8VTzHM.js";import"./extends-CCbyfPlC.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function r(o){const t=Object.assign({h2:"h2",p:"p",h3:"h3",strong:"strong",code:"code",pre:"pre"},i(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Get Started"}),`
`,n.jsx(t.h2,{id:"get-started",children:"Get Started"}),`
`,n.jsx(t.p,{children:"How to use Lobstr UI in your project:"}),`
`,n.jsx(t.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"React Components"}),": ",n.jsx(t.code,{children:"npm install @lobstr/react"})]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Colors, Typography and Tokens"}),": ",n.jsx(t.code,{children:"npm install @lobstr/tokens"})]}),`
`,n.jsx(t.h2,{id:"configuration",children:"Configuration"}),`
`,n.jsx(t.h3,{id:"1-tailwind-config",children:"1. Tailwind config"}),`
`,n.jsxs(t.p,{children:["Add this to your ",n.jsx(t.code,{children:"tailwind.config.ts"})]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-import",children:`import type { Config } from 'tailwindcss'
import {
  blur,
  borderWidth,
  colors,
  dropShadow,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@lobstr/tokens'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    // Insert the relative paths you wish for this config to apply to
  ],

  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      lineHeight: lineHeights,
      borderRadius: radii,
      space,
      dropShadow,
      blur,
      borderWidth,
    },
  },
  plugins: [],
}
export default config
`})}),`
`,n.jsx(t.h3,{id:"2-css-output",children:"2. CSS Output"}),`
`,n.jsx(t.p,{children:"Add this line of code to the root of your project"}),`
`,n.jsx(t.p,{children:n.jsx(t.code,{children:"import '@lobstr/react/dist/output.css'"})}),`
`,n.jsx(t.h3,{id:"3-import-the-component-you-wish-to-use",children:"3. Import the Component you wish to use"}),`
`,n.jsx(t.h3,{id:"eg",children:"E.g."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{children:`import { TextInput } from '@lobstr/react'
import { Search } from 'lucide-react'

export const YourComponent = () => {
  return (
    <TextInput.Root size="md" disabled={false}>
      <TextInput.Prefix>
        <Search />
      </TextInput.Prefix>
      <TextInput.Control placeholder="Search" />
    </TextInput.Root>
  )
}
`})})]})}function c(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?n.jsx(t,{...o,children:n.jsx(r,{...o})}):r(o)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const e={title:"Get Started",tags:["stories-mdx"],includeStories:["__page"]};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:c};const C=["__page"];export{C as __namedExportsOrder,d as __page,e as default};
