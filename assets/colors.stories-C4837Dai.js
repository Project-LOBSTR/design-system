import{g as u,M as g}from"./chunk-HLWAVYOI-Bn9BnJ_N.js";import{j as e}from"./jsx-runtime--26OcTxz.js";import{c as m}from"./index-BxvivKro.js";import{r as j}from"./index-BLgStI3F.js";import{useMDXComponents as d}from"./index-5egpPWge.js";import"./iframe-2HfTV_Qd.js";import"../sb-preview/runtime.js";import"./react-18-dx9qDk38.js";import"./index-B99Sp-t6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-CbnHSNsj.js";import"./index-Bw8VTzHM.js";import"./extends-CCbyfPlC.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";const h=()=>{var i;const[r,o]=j.useState("primary-green"),s=(i=Object.entries(m).find(([t])=>t===r))==null?void 0:i[1];return e.jsxs("div",{children:[e.jsx("select",{style:{fontSize:"14px",padding:"4px",border:`1px solid ${s==null?void 0:s[500]}`,borderRadius:"5px",marginBottom:"1rem"},onFocus:t=>{t.target.style.outline="none",t.target.style.boxShadow="0 0 0 3px #F0F0F0"},onChange:t=>{o(t.target.value)},children:Object.entries(m).map(([t])=>{const x=t.split("-").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ");return e.jsx("option",{value:t,children:x},t)})}),e.jsx(e.Fragment,{children:Object.entries(s??"primary-green").map(([t,n])=>{const c=u(n,"#fff")<3.5?"#000":"#fff";return e.jsx("div",{style:{backgroundColor:n,padding:"2rem"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontFamily:"monospace",color:c},children:[e.jsx("strong",{children:t}),e.jsx("span",{children:n})]})},t)})})]})};function l(r){const o=Object.assign({h1:"h1",p:"p"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Tokens/Colors"}),`
`,e.jsx(o.h1,{id:"colors",children:"Colors"}),`
`,e.jsx(o.p,{children:"These are the colors used in the design system."}),`
`,e.jsx(h,{})]})}function f(r={}){const{wrapper:o}=Object.assign({},d(),r.components);return o?e.jsx(o,{...r,children:e.jsx(l,{...r})}):l(r)}const y=()=>{throw new Error("Docs-only story")};y.parameters={docsOnly:!0};const a={title:"Tokens/Colors",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:f};const z=["__page"];export{z as __namedExportsOrder,y as __page,a as default};
