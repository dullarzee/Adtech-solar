export default function Header() {
  return (
    <nav className="fixed top-0 left-0 bg-surface/90 text-primary font-body-md text-body-md z-50 w-full shadow-md backdrop-blur-md dark:bg-surface-container-lowest/90 dark:text-primary-fixed-dim dark:shadow-none">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-4 lg:px-margin-desktop py-4">
        <div className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary dark:text-primary-fixed-dim">
          AdTech Solar
        </div>

        <div className="hidden items-center gap-gutter md:flex">
          <a
            className="rounded-lg border-b-2 border-secondary-container px-3 py-2 pb-1 font-semibold text-primary transition-transform duration-200 hover:bg-surface-container-low active:scale-95 dark:text-secondary-fixed-dim dark:hover:bg-surface-container-highest"
            href="#"
          >
            Home
          </a>
          <a
            className="rounded-lg px-3 py-2 text-on-surface-variant transition-all duration-200 hover:bg-surface-container-low hover:text-primary active:scale-95 dark:text-outline-variant dark:hover:bg-surface-container-highest"
            href="#process"
          >
            How it Works
          </a>

          <a
            className="rounded-lg px-3 py-2 text-on-surface-variant transition-all duration-200 hover:bg-surface-container-low hover:text-primary active:scale-95 dark:text-outline-variant dark:hover:bg-surface-container-highest"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="rounded-lg px-3 py-2 text-on-surface-variant transition-all duration-200 hover:bg-surface-container-low hover:text-primary active:scale-95 dark:text-outline-variant dark:hover:bg-surface-container-highest"
            href="#faq"
          >
            FAQ
          </a>
        </div>

        <button className="rounded-lg bg-secondary-container px-6 py-2 font-body-md text-body-md font-semibold text-on-secondary-container transition-opacity hover:opacity-90 active:scale-95">
          Get a Quote
        </button>
      </div>
    </nav>
  );
}
