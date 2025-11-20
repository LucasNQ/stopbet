const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <img
              src="/logo-footer.png"
              alt="StopBet Logo"
              className="mx-auto h-28 w-auto mb-2"
              loading="lazy"
              decoding="async"
            />
            <p className="text-brand-white text-lg max-w-2xl mx-auto">
              Temos como Missão dar de volta o controle aos que Perderam tudo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a
              href="#"
              className="text-brand-white hover:text-brand-red transition-colors duration-200"
            >
              Termos de Uso
            </a>
            <span className="text-brand-white/50">|</span>
            <a
              href="#"
              className="text-brand-white hover:text-brand-red transition-colors duration-200"
            >
              Política de Privacidade
            </a>
            <span className="text-brand-white/50">|</span>
            <a
              href="#"
              className="text-brand-white hover:text-brand-red transition-colors duration-200"
            >
              Contato
            </a>
          </div>

          <div className="text-center text-brand-white/60 text-sm border-t border-brand-white/20 pt-8">
            © {new Date().getFullYear()} StopBet – Todos os Direitos Reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
