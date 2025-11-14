'use client';

import { cva } from 'class-variance-authority';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const passwordFieldVariants = cva('', {
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

type Props<T extends FieldValues> = {
  className?: string;
  inputFieldClassName?: string;
  name: Path<T>;
  label: string;
  placeholder: string;
  showLabel?: boolean;
  variant?: 'default' | 'formGroup' | 'single';
  icon?: LucideIcon;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function RHFPasswordField<T extends FieldValues>({
  name,
  label,
  placeholder,
  showLabel = true,
  variant,
  required,
  inputFieldClassName,
  icon: Icon,
  className,
  ...props
}: Props<T>) {
  const { control } = useFormContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(prev => !prev);
  const inputId = `input-${name}`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={cn(passwordFieldVariants({ variant }), className)}>
          {showLabel && (
            <FormLabel htmlFor={inputId} className='block mb-2.5 text-base !text-current'>
              {label}
              {required && <span className='text-red-600 ml-1'>*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className='relative'>
              <input
                id={inputId}
                type={isVisible ? 'text' : 'password'}
                placeholder={placeholder}
                {...field}
                {...props}
                className={cn(
                  'rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20',
                  Icon && 'pl-10',
                  inputFieldClassName
                )}
              />
              {Icon && (
                <Icon className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none' />
              )}
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer text-gray-600'
                onClick={toggleVisibility}
                tabIndex={-1}
              >
                {isVisible ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
              </Button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
