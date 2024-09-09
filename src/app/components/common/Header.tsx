import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center p-4 bg-primary-light dark:bg-primary-dark text-white">
            <span className="text-xl font-bold">Agent Alpha Summaries</span>
            <ThemeToggle />
        </header>
    );
}