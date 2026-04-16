export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-xl font-semibold text-foreground">oléo.shop</span>
        <nav className="flex items-center gap-6">
          {["Skincare", "Body", "Shop", "Community", "Contacts"].map((item) => (
            <span key={item} className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer uppercase tracking-wider">
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
