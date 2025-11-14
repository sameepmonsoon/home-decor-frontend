import './css/euclid-circular-a-font.css';
import './css/style.css';

import { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from 'sonner';

import CartSidebarModal from '@/components/Common/CartSidebarModal';
import PreviewSliderModal from '@/components/Common/PreviewSlider';
import QuickViewModal from '@/components/Common/QuickViewModal';
import ScrollToTop from '@/components/Common/ScrollToTop';
import NextAuthProvider from '@/providers/session-provider';
import { ReduxProvider } from '@/redux/provider';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { CartModalProvider } from '../context/CartSidebarModalContext';
import { PreviewSliderProvider } from '../context/PreviewSliderContext';
import { ModalProvider } from '../context/QuickViewModalContext';

export const metadata: Metadata = {
  title: 'HomeDecor',
  description: 'Elegant Furniture and Décor, Just a Click Away',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <>
          <ReduxProvider>
            <NextAuthProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <NuqsAdapter>
                      <Toaster richColors visibleToasts={3} />

                      <Header />
                      {children}
                      <QuickViewModal />
                      <CartSidebarModal />
                      <PreviewSliderModal />
                    </NuqsAdapter>
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </NextAuthProvider>
          </ReduxProvider>
          <ScrollToTop />
          <Footer />
        </>
      </body>
    </html>
  );
}
