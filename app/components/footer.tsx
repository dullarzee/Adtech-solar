export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-on-primary-fixed py-section-padding font-body-md text-body-md text-secondary-container dark:border-outline dark:bg-surface-container-lowest dark:text-secondary-fixed">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-desktop md:grid-cols-4">
        <div className="col-span-1 md:col-span-4 mb-8">
          <div className="font-headline-md text-headline-md font-bold text-surface opacity-90 transition-opacity hover:opacity-100 dark:text-primary">
            SolarPrecision
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { label: "Home", link: "/" },
            { label: "Calculator", link: "#calculator" },
            { label: "Terms of Service", link: "/terms" },
            { label: "Contact us", link: "#ContactUs" },
          ].map((item) => (
            <a
              key={item.label}
              className="inline-block w-max text-surface-variant transition-transform duration-300 hover:translate-x-1 hover:text-secondary-container dark:text-on-surface-variant"
              href="#"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {[
            { label: "+234 81 4824 4729", value: "+2348148244729" },
            {
              label: "Info@solarprecision.com",
              value: "info@solarprecision.com",
            },
          ].map((item) => (
            <a
              key={item.label}
              className="inline-block w-max text-surface-variant transition-transform duration-300 hover:translate-x-1 hover:text-secondary-container dark:text-on-surface-variant"
              href={
                item.value.includes("@")
                  ? `mailto:${item.value}`
                  : isNaN(parseInt(item.value))
                    ? `#${item.value}`
                    : `tel:${item.value}`
              }
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <a
            className="inline-block w-max text-surface-variant transition-transform duration-300 hover:translate-x-1 hover:text-secondary-container dark:text-on-surface-variant"
            href="#"
          >
            Contact Support
          </a>
        </div>
        <div className="col-span-1 mt-8 border-t border-outline-variant/20 pt-8 md:col-span-4 dark:border-outline/20">
          <p className="text-sm opacity-70">
            © 2026 SolarPrecision Energy Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
