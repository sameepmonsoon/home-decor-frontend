import './css/euclid-circular-a-font.css';
import './css/style.css';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import CartSidebarModal from '@/components/Common/CartSidebarModal';
import PreLoader from '@/components/Common/PreLoader';
import PreviewSliderModal from '@/components/Common/PreviewSlider';
import QuickViewModal from '@/components/Common/QuickViewModal';
import ScrollToTop from '@/components/Common/ScrollToTop';
import { ReduxProvider } from '@/redux/provider';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { CartModalProvider } from '../context/CartSidebarModalContext';
import { PreviewSliderProvider } from '../context/PreviewSliderContext';
import { ModalProvider } from '../context/QuickViewModalContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <>
          <ReduxProvider>
            <CartModalProvider>
              <ModalProvider>
                <PreviewSliderProvider>
                  <NuqsAdapter>
                    <Header />
                    {children}
                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </NuqsAdapter>
                </PreviewSliderProvider>
              </ModalProvider>
            </CartModalProvider>
          </ReduxProvider>
          <ScrollToTop />
          <Footer />
        </>
      </body>
    </html>
  );
}
