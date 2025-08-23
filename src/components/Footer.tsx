export default function Footer() {
  return (
    <footer className="text-white/40 text-sm text-center mt-4 mb-20 py-3 md:mb-4">
      <p>
        © {new Date().getFullYear()} Luís Vinícius. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
