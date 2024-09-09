import AppThemeProvider from './components/context/theme';
import './globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}