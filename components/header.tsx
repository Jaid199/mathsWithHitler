import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/header/logo.png"
            alt="Geeks Logo"
            width={100}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-medium hover:shadow-lg transition-shadow"
          >
            About
          </Link>
          <Link
            href="/learning"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Learning
          </Link>
          <Link
            href="/quiz"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
