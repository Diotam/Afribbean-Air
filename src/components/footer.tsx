export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-200 py-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          {/* Copyright */}
          <span className="text-sm text-gray-500" data-testid="copyright">
            ©2025 Afribbean Air
          </span>

          {/* Links */}
          <div
            className="flex flex-wrap items-center gap-4 text-sm text-gray-500"
            data-testid="footer-links"
          >
            <span data-testid="tagline min-w-max w-max">
              Made for the Atlantic tropics
            </span>
            <span className="text-gray-300">•</span>
            <button
              className="hover:text-gray-700 transition-colors"
              data-testid="link-privacy"
            >
              Privacy
            </button>
            <span className="text-gray-300">•</span>
            <button
              className="hover:text-gray-700 transition-colors"
              data-testid="link-careers"
            >
              Careers
            </button>
            <span className="text-gray-300">•</span>
            <button
              className="hover:text-gray-700 transition-colors"
              data-testid="link-partnerships"
            >
              Partnerships
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
