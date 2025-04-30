const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 py-6 mt-10 text-center">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Apple Store</h2>
        <p className="text-sm">Tecnología diseñada para vos.</p>
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Apple Store. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
