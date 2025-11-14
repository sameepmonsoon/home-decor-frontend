import { cva } from 'class-variance-authority';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MAX_SIZE } from '@/enums';
import { cn } from '@/lib/utils';

import { AvatarUploader } from '../FileUploader/avatar-uploader';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  numberOfFiles?: number;
  onUpload?: (files: File[]) => Promise<void>;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'formGroup' | 'single';
};

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

export default function RHFAvtarUpload<T extends FieldValues>({
  name,
  label,
  className,
  disabled,
  onUpload,
  required,
  variant,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <div className={cn(inputFieldVariants({ variant, className }))}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-base'>
              {label}
              {required && <span className='text-red-500'>*</span>}
            </FormLabel>
            <FormControl>
              <AvatarUploader
                value={field.value}
                onValueChange={field.onChange}
                maxSize={MAX_SIZE.IMAGE}
                disabled={disabled}
                onUpload={onUpload}
                className='rounded-md p-5'
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
