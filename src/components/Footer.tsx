export function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <span className="font-display text-xl font-semibold text-foreground">oléo.shop</span>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {["Skincare", "Body", "Shop", "Community", "Contacts"].map((item) => (
            <span key={item} className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer uppercase tracking-wider">
              {item}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>EN</span>
          <span>·</span>
          <span>$</span>
        </div>
      </div>
    </footer>
  );
}
