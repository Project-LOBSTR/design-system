import * as Checkbox from '@radix-ui/react-checkbox'
import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const checkbox = tv(
  {
    base: [
      'border-xs flex h-5 w-5 flex-1 items-center justify-center rounded-xs border border-neutral-50',
      'data-[state="checked"]:border-transparent data-[state="checked"]:bg-primary-green-500',
    ],

    variants: {
      size: {
        sm: 'h-5 w-5',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
      },
    },
  },
  { twMerge: false },
)

export type CheckboxRootProps = ComponentProps<typeof Checkbox.Root> &
  VariantProps<typeof checkbox>

export const Root = ({ className, size, ...props }: CheckboxRootProps) => {
  return <Checkbox.Root className={checkbox({ className, size })} {...props} />
}