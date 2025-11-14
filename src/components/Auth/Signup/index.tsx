'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import Breadcrumb from '@/components/Common/Breadcrumb';
import RHFInput from '@/components/rhf/rhf-input';
import RHFPasswordField from '@/components/rhf/rhf-password';
import { supabase } from '@/lib/supabaseClient';

const SignupSchema = z
  .object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rePassword: z.string().min(6, 'Re-type password is required'),
  })
  .refine(data => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  });

type SignupFormInputs = z.infer<typeof SignupSchema>;

const Signup = () => {
  const methods = useForm<SignupFormInputs>({
    resolver: zodResolver(SignupSchema),
    defaultValues: { email: '', fullName: '', password: '', rePassword: '' },
  });

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      const { data: supaData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: { data: { fullName: data.fullName } },
      });
      console.log({ supaData });
      if (error) throw error;

      toast.success('Signup successful! Please check your email to confirm.');

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
      toast.error(err.message || 'Something went wrong');
    }
  };

  const handleGoogleSignup = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/dashboard' },
    });
  };

  return (
    <>
      <Breadcrumb title={'Signup'} pages={['Signup']} />
      <section className='overflow-hidden py-20 bg-gray-2'>
        <div className='max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0'>
          <div className='max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11'>
            <div className='text-center mb-11'>
              <h2 className='font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5'>
                Create an Account
              </h2>
              <p>Enter your detail below</p>
            </div>

            <div className='flex flex-col gap-4.5'>
              <button
                type='button'
                onClick={handleGoogleSignup}
                className='flex justify-center items-center gap-3.5 rounded-lg border border-gray-3 bg-gray-1 p-3 ease-out duration-200 hover:bg-gray-2'
              >
                {/* Google SVG */}
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  {/* SVG paths unchanged */}
                </svg>
                Sign Up with Google
              </button>
            </div>

            <span className='relative z-1 block font-medium text-center mt-4.5'>
              <span className='block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3'></span>
              <span className='inline-block px-3 bg-white'>Or</span>
            </span>

            <div className='mt-5.5'>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <RHFInput
                    name='fullName'
                    label='Full Name'
                    placeholder='Enter your full name'
                    required
                    className='mb-5'
                  />

                  <RHFInput
                    name='email'
                    label='Email Address'
                    placeholder='Enter your email address'
                    type='email'
                    required
                    className='mb-5'
                  />

                  <RHFPasswordField
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                    required
                    className='mb-5'
                  />

                  <RHFPasswordField
                    name='rePassword'
                    label='Re-type Password'
                    placeholder='Re-type your password'
                    required
                    className='mb-5'
                  />

                  <button
                    type='submit'
                    disabled={methods.formState.isSubmitting}
                    className='w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-green mt-7.5'
                  >
                    {methods.formState.isSubmitting ? 'Creating account...' : 'Create Account'}
                  </button>

                  <p className='text-center mt-6'>
                    Already have an account?
                    <Link href='/sign-in' className='text-dark ease-out duration-200 hover:text-green pl-2'>
                      Sign in Now
                    </Link>
                  </p>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
