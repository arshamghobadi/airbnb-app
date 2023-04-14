import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ToasterProvider from './provider/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
export const metadata = {
  title: 'Aribnb',
  description: 'created by arsham ghobadi',
};
const font = Nunito({
  subsets: ['latin'],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <SearchModal />
          <RentModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
