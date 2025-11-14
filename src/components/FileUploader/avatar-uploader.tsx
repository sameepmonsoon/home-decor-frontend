'use client';

import { UploadIcon, User2 } from 'lucide-react';
import * as React from 'react';
import Dropzone, { type DropzoneProps, type FileRejection } from 'react-dropzone';
import { toast } from 'sonner';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useControllableState } from '@/hooks/common/use-uncontrollable-state';
import { cn, formatBytes } from '@/lib/utils';

interface AvatarUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: File[];
  onValueChange?: React.Dispatch<React.SetStateAction<File[]>>;
  onUpload?: (files: File[]) => Promise<void>;
  progresses?: Record<string, number>;
  accept?: DropzoneProps['accept'];
  maxSize?: DropzoneProps['maxSize'];
  disabled?: boolean;
}

export function AvatarUploader(props: AvatarUploaderProps) {
  const {
    value: valueProp,
    onValueChange,
    onUpload,
    accept = { 'image/*': [] },
    maxSize = 1024 * 1024 * 5,
    disabled = false,
    className,
    ...dropzoneProps
  } = props;

  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  });

  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length > 1) {
        toast.error('Only one image can be uploaded');
        return;
      }

      const newFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles(newFiles);

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file, errors }) => {
          if (errors[0]?.code === 'file-too-large') {
            toast.error(`File ${file.name} is too large. Max size is ${formatBytes(maxSize)}`);
          } else {
            toast.error(`File ${file.name} was rejected`);
          }
        });
      }

      if (onUpload && newFiles.length > 0) {
        toast.promise(onUpload(newFiles), {
          loading: 'Uploading profile image...',
          success: () => {
            return 'Profile image uploaded successfully';
          },
          error: 'Failed to upload profile image',
        });
      }
    },
    [maxSize, onUpload, setFiles]
  );

  const currentPreview = files?.[0] && isFileWithPreview(files[0]) ? files[0].preview : null;

  return (
    <Dropzone onDrop={onDrop} accept={accept} maxSize={maxSize} maxFiles={1} multiple={false} disabled={disabled}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div className={cn(disabled && 'pointer-events-none opacity-60', className)}>
          <div
            {...getRootProps()}
            className='mx-auto max-w-64 group relative flex flex-col cursor-pointer items-center'
            {...dropzoneProps}
          >
            <div className='relative'>
              <Avatar className='size-32 md:size-52'>
                <AvatarImage src={currentPreview ?? undefined} className='!h-full !w-full object-cover' />
                <AvatarFallback>
                  <User2 className='h-16 p-5 w-16 text-muted-foreground' />
                </AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity',
                  'group-hover:opacity-100',
                  isDragActive && 'opacity-100'
                )}
              >
                <UploadIcon className='h-4 w-4 text-white' />
              </div>
            </div>
            <input {...getInputProps()} />
            <div className='space-y-1 text-center mt-2'>
              <p className='text-sm font-medium text-muted-foreground'>
                {isDragActive ? 'Drop image here' : 'Click to upload or drag and drop'}
              </p>
              <p className='text-xs text-muted-foreground/70'>Maximum file size: {formatBytes(maxSize)}</p>
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
}

export function isFileWithPreview(file: File): file is File & { preview: string } {
  return 'preview' in file && typeof file.preview === 'string';
}
