export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-xs border-t border-contraste/10 text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Kevin. Todos los derechos reservados. Desarrollado con Next.js</p>
    </footer>
  );
}