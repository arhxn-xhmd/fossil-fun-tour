import { useState } from "react";
import { Volume2, Menu, X } from "lucide-react";
import { speakText } from "@/lib/speakText";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "specimens", label: "Specimens" },
    { id: "tour", label: "Virtual Tour" },
    { id: "quiz", label: "Quiz" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cave/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => { onNavigate("home"); speakText("Ancient Earth Museum"); }}
            className="flex items-center gap-2 text-primary font-display text-xl font-bold"
          >
            <Volume2 className="w-5 h-5" />
            Ancient Earth
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cave border-b border-border p-4 space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMobileOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-body transition-all ${
                activeSection === link.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
