import * as Tabs from '@radix-ui/react-tabs'
import { VariantProps, tv } from 'tailwind-variants'

const tab = tv(
  {
    base: [' font-sf-digital font-bold text-neutral-80'],

    variants: {
      variant: {
        solid:
          ' data-[state="active"]:text-primary-purple-500 data-[state="active"]:bg-primary-purple-50 rounded-md bg-neutral-20 text-sf-lg hover:bg-neutral-40 hover:text-neutral-90',
        underline:
          ' data-[state="active"]:border-b-primary-purple-500 data-[state="active"]:text-primary-purple-500 border-b border-b-neutral-30 text-sf-lg hover:border-b-neutral-90 hover:text-neutral-90',
      },
      size: {
        base: 'px-4 py-2.5',
        lg: 'px-10 py-2.5',
      },
    },
    defaultVariants: { variant: 'solid', size: 'base' },
  },
  {
    twMerge: false,
  },
)

export type TabsTriggerProps = Tabs.TabsTriggerProps & VariantProps<typeof tab>

export const Trigger = ({
  size,
  variant,
  className,
  ...props
}: TabsTriggerProps) => {
  return (
    <Tabs.Trigger
      {...props}
      className={tab({
        className,
        variant,
        size,
      })}
    />
  )
}
