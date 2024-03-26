import{j as e}from"./jsx-runtime--26OcTxz.js";import{R as o}from"./index-UymYeMGS.js";import"./output-DOol9aOf.js";import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-B99Sp-t6.js";const h={title:"Form/RadioGroup",component:o.Root,args:{size:"sm",defaultValue:"1"},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]}},parameters:{docs:{description:{component:`This story displays the \`RadioGroup\` component, which is a React Element built using Pattern Composition.

## Usage:

\`RadioGroup.Root\` - The root element wrapping the group of \`x\` items.

\`RadioGroup.Item\` - The individual radio item.

## API Reference:
### Item

\`size: 'sm' | 'md' | 'lg'\` - The size of the radio item.`}}}},a={render:r=>e.jsxs(o.Root,{...r,children:[e.jsx(o.Item,{value:"1",...r}),e.jsx(o.Item,{value:"2",...r}),e.jsx(o.Item,{value:"3",...r})]})},t={render:r=>e.jsx(o.Root,{...r,children:e.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[e.jsx(o.Item,{value:"1",size:"sm"}),e.jsx("p",{className:"text-sf-sm text-primary-purple-500",children:"Radio Label"})]})})};var s,i,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <RadioGroup.Root {...args}>
      <RadioGroup.Item value="1" {...args} />
      <RadioGroup.Item value="2" {...args} />
      <RadioGroup.Item value="3" {...args} />
    </RadioGroup.Root>
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <RadioGroup.Root {...args}>
      <div className="flex flex-row gap-2 items-center">
        <RadioGroup.Item value="1" size="sm" />
        <p className="text-sf-sm text-primary-purple-500">Radio Label</p>
      </div>
    </RadioGroup.Root>
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const G=["Default","WithLabel"];export{a as Default,t as WithLabel,G as __namedExportsOrder,h as default};
