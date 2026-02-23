import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-gold fill-gold" />
            <span className="text-xl font-bold text-primary-foreground">
              thebestreview<span className="text-gold">.pt</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#precos" className="hover:text-gold transition-colors">Planos</a>
            <a href="#como-funciona" className="hover:text-gold transition-colors">Como Funciona</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
          </nav>

          <div className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} thebestreview.pt
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
