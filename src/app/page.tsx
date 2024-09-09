import LoginForm from './components/ui/LoginForm';
import ThemeToggle from './components/ui/ThemeToggle';
import Image from 'next/image';

//kjhkjhjkh


export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      <header className="w-full flex justify-between items-center p-4 bg-primary-light dark:bg-primary-dark text-white">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">AI Finance Feed</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm">
              Or{' '}
              <a href="#" className="font-medium text-primary-light dark:text-primary-dark hover:underline">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <LoginForm />
        </div>
      </main>

      <footer className="w-full p-4 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 AI Finance Feed. All rights reserved.</p>
      </footer>
    </div>
  );
}