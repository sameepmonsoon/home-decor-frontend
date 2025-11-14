'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import Breadcrumb from '@/components/Common/Breadcrumb';
import RHFInput from '@/components/rhf/rhf-input';
import RHFPasswordField from '@/components/rhf/rhf-password';

const SigninSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SigninFormInputs = z.infer<typeof SigninSchema>;

const Signin = () => {
  const methods = useForm<SigninFormInputs>({
    resolver: zodResolver(SigninSchema),
  });

  const session = useSession();
  console.log({ session });

  const onSubmit = async (data: SigninFormInputs) => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success('Login successful!');
      }
    } catch (err: any) {
      console.error(err);
      toast.error('Something went wrong');
    }
  };

  const handleGoogleLogin = async () => {
    await signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <>
      <Breadcrumb title={'Signin'} pages={['Signin']} />
      <section className='overflow-hidden py-20 bg-gray-2'>
        <div className='max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0'>
          <div className='max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11'>
            <div className='text-center mb-11'>
              <h2 className='font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5'>
                Sign In to Your Account
              </h2>
              <p>Enter your detail below</p>
            </div>

            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <RHFInput
                  name='email'
                  label='Email'
                  placeholder='Enter your email'
                  type='email'
                  required
                  className='mb-5'
                />

                <RHFPasswordField name='password' label='Password' placeholder='Enter your password' required />

                <button
                  type='submit'
                  disabled={methods.formState.isSubmitting}
                  className='w-full flex justify-center font-medium text-white bg-green py-3 px-6 rounded-lg ease-out duration-200 hover:bg-green-dark mt-7.5'
                >
                  {methods.formState.isSubmitting ? 'Signing in...' : 'Sign in to account'}
                </button>

                <a href='#' className='block text-center text-dark-4 mt-4.5 ease-out duration-200 hover:text-dark'>
                  Forget your password?
                </a>

                <span className='relative z-1 block font-medium text-center mt-4.5'>
                  <span className='block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3'></span>
                  <span className='inline-block px-3 bg-white'>Or</span>
                </span>

                <div className='flex flex-col gap-4.5 mt-4.5'>
                  <button
                    type='button'
                    onClick={handleGoogleLogin}
                    className='flex justify-center items-center gap-3.5 rounded-lg border border-gray-3 bg-gray-1 p-3 ease-out duration-200 hover:bg-gray-2'
                  >
                    {/* SVG icon unchanged */}
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      {/* SVG paths here */}
                    </svg>
                    Sign In with Google
                  </button>
                </div>

                <p className='text-center mt-6'>
                  Don&apos;t have an account?
                  <Link href='/register' className='text-dark ease-out duration-200 hover:text-green pl-2'>
                    Sign Up Now!
                  </Link>
                </p>
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
