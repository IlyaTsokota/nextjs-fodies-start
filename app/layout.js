import Header from '@/components/header/header';
import './globals.css';
import HeaderBackground from '@/components/header-background/header-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderBackground />
        <Header />

        {children}
      </body>
    </html>
  );
}
