import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          oléo.shop
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {["Skincare", "Body", "Shop", "Community", "Contacts"].map((item) => (
            <span key={item} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              {item}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-foreground cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-foreground cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
