'use client';

import { cva } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  variant?: 'default' | 'formGroup' | 'single';
  className?: string;
  required?: boolean;
  showLabel?: boolean;
  inputFieldClassName?: string;
  icon?: LucideIcon;
  labelClassName?: string;
  rows?: number;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const inputFieldVariants = cva('form-group', {
  variants: {
    variant: {
      default: 'w-full',
      formGroup: 'lg:w-[calc(50%-10px)] w-full',
      single: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function RHFInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  required = false,
  variant,
  className,
  showLabel = true,
  type = 'text',
  inputFieldClassName,
  icon: Icon,
  labelClassName,
  rows = 5,
  ...props
}: Props<T>) {
  const { control } = useFormContext();
  const inputId = `input-${name}`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={cn(inputFieldVariants({ variant, className }))}>
          {showLabel && (
            <FormLabel
              htmlFor={inputId}
              className={cn('block mb-2.5 text-base !text-black font-medium', labelClassName)}
            >
              {label}
              {required && <span className='text-red-500 ml-1'>*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className='relative'>
              {type === 'textarea' ? (
                <textarea
                  id={inputId}
                  placeholder={placeholder}
                  rows={rows}
                  {...field}
                  {...props}
                  className={cn(
                    'rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20',
                    Icon && 'pl-10',
                    inputFieldClassName
                  )}
                />
              ) : (
                <input
                  id={inputId}
                  placeholder={placeholder}
                  type={type}
                  {...field}
                  {...props}
                  className={cn(
                    'rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20',
                    Icon && 'pl-10',
                    inputFieldClassName
                  )}
                />
              )}

              {Icon && (
                <Icon className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none' />
              )}
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
