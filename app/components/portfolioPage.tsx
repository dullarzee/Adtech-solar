import Header from "./header";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <header className="mx-auto max-w-container-max px-margin-mobile py-section-padding text-center md:px-margin-desktop">
        <h1 className="mb-4 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
          Our Projects &amp; Technical Gallery
        </h1>
        <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Explore our portfolio of high-efficiency solar installations. From
          residential rooftops to large-scale commercial arrays, see precision
          engineering in action.
        </p>
      </header>

      <section className="mx-auto mb-section-padding max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-ambient hover-lift md:flex-row">
          <div className="relative h-64 md:h-auto md:w-1/2">
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8F_agNgyEY4aFsXQm_m9aIXrIL_jj9esWwlStQgJoRDpstDQYVaY6ibV3ugN8FTf4FAbsagD-4ia8iPCheL14a8jho_NdcxJyoLAeWq6bztzce0lWHIu0Eb8xfGte24tlcOs64sokdGdGnjAtmiv2eAHVV3pcE8s-EczN-xUA6skINGQNbQq20gZVdluA-gCefrO9T3Ufy-H5-tlRD8nWqWTfxSwDQKiCVyLdb7Ya4TgO6MTT7pSVqw")',
              }}
            />
            <div className="absolute left-4 top-4 rounded-full bg-tertiary px-3 py-1 font-label-caps text-label-caps text-on-tertiary shadow-sm backdrop-blur-sm">
              Featured Commercial
            </div>
          </div>

          <div className="flex flex-col justify-center p-gutter md:w-1/2 md:p-8">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-body-md text-body-md font-semibold">
                TechPark Logistics Center
              </span>
            </div>

            <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
              1.2 MW Rooftop Installation
            </h2>

            <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
              A comprehensive rooftop solar solution designed for maximum yield
              and structural integrity. This installation powers 80% of the
              facility's operations, featuring advanced micro-inverter
              technology for optimized energy harvesting.
            </p>

            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-surface-container px-4 py-2 font-body-md text-body-md text-primary">
                <span className="material-symbols-outlined">bolt</span>
                <strong>1,800 MWh/yr</strong> Generated
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-surface-container px-4 py-2 font-body-md text-body-md text-primary">
                <span className="material-symbols-outlined">co2</span>
                <strong>1,270 Tons</strong> Offset Annually
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex items-center gap-1 font-label-caps text-label-caps text-primary-container transition-colors hover:text-primary"
              >
                View Full Case Study
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-section-padding max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="rounded-full border border-primary-container bg-primary-container px-6 py-2 font-label-caps text-label-caps text-on-primary-container shadow-sm transition-all"
          >
            All Projects
          </button>
          <button
            type="button"
            className="rounded-full border border-outline-variant bg-surface-container-lowest px-6 py-2 font-label-caps text-label-caps text-on-surface-variant transition-all hover:bg-surface-container"
          >
            Residential
          </button>
          <button
            type="button"
            className="rounded-full border border-outline-variant bg-surface-container-lowest px-6 py-2 font-label-caps text-label-caps text-on-surface-variant transition-all hover:bg-surface-container"
          >
            Commercial
          </button>
          <button
            type="button"
            className="rounded-full border border-outline-variant bg-surface-container-lowest px-6 py-2 font-label-caps text-label-caps text-on-surface-variant transition-all hover:bg-surface-container"
          >
            Industrial
          </button>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg bg-surface-container-lowest shadow-ambient hover-lift">
            <div className="relative h-48">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaT_SUMU-ew4xS3Y24vBMZc_MXpaJBuJXWWoY-FXekjFuGP6DQjoCWYK6pTE51cm7moVAJA7anMt08rrpLIIBTOR44nBd5iqhDUTUDWW2FIFmIgsxSsjE1_nEQ9t8hhkWfn6xYcuvnmOW5r_GWzFTVa4AKTruvBAOqXTWvqDyYT8Mv1rRIs4B4Nss2I7sPsFb4RokTijS5d8n3Cn1Ina8xNY_1TQB6AekLvdw33S7o9HL49MuHM4h-gA"
                alt="Modern suburban array"
              />
              <div className="absolute right-3 top-3 rounded bg-surface-container-lowest/90 px-2 py-1 font-label-caps text-label-caps text-primary backdrop-blur">
                Residential
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 font-headline-sm text-headline-sm text-on-background">
                Modern Suburban Array
              </h3>
              <div className="mb-4 flex items-center gap-1 font-body-md text-body-md text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                <span>Austin, TX</span>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-4 text-sm">
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    electric_meter
                  </span>
                  <span className="font-semibold">12 kW</span> System
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    energy_savings_leaf
                  </span>
                  <span className="font-semibold">18 MWh/yr</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-lg bg-surface-container-lowest shadow-ambient hover-lift">
            <div className="relative h-48">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjt3P78MsW_eR79V59dhwESdWxFJ0pWoLDwNviITzTt7kDxbLO0J5bsZiQmWRBH8nlcQvjLo8hupEbr8Srk4bqrR8dbaGxzZSkmuY6PgtBHW-lGjiW9H6n-Oy8M_mPKv7N8STdrCWKm2XjWgxgn1t-EzGk-YGiedYzuefoxbnIh8-8wjM__z2GYsr5a1BRj-pubdcYBa-BtjYshGgVODrWUdQnvsuIroPogGzERBeakm7cEp3R9HgvfA"
                alt="Valley ground-mount solar farm"
              />
              <div className="absolute right-3 top-3 rounded bg-surface-container-lowest/90 px-2 py-1 font-label-caps text-label-caps text-primary backdrop-blur">
                Industrial
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 font-headline-sm text-headline-sm text-on-background">
                Valley Ground-Mount
              </h3>
              <div className="mb-4 flex items-center gap-1 font-body-md text-body-md text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                <span>Central Valley, CA</span>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-4 text-sm">
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    electric_meter
                  </span>
                  <span className="font-semibold">5 MW</span> System
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    energy_savings_leaf
                  </span>
                  <span className="font-semibold">8.2 GWh/yr</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-lg bg-surface-container-lowest shadow-ambient hover-lift">
            <div className="relative h-48">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEf6o-T_pxGX3YYEECaumujqvVoLKANZ1gyo9UBhCsnen2qiai--4NnJIyuT42AkpCzmnd9s09EnkTSSXX517ZAaylQ76LMobnTZVklY1be7f7zbn5VYUkCTMo8JI1GfRXCtbSS0BdKPK_1i1PLN9VLgYl4wJ1uizRiSohTlEFQoRo0R-EPuFxOaIBdWWLbduRyZnt4L_LxvlJvBoGjmgeM-0FoV4vwyuHejHDh6MeLZFqflXu0FMXbQ"
                alt="Corporate campus carport"
              />
              <div className="absolute right-3 top-3 rounded bg-surface-container-lowest/90 px-2 py-1 font-label-caps text-label-caps text-primary backdrop-blur">
                Commercial
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 font-headline-sm text-headline-sm text-on-background">
                Corporate Campus Carport
              </h3>
              <div className="mb-4 flex items-center gap-1 font-body-md text-body-md text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                <span>Denver, CO</span>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-4 text-sm">
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    electric_meter
                  </span>
                  <span className="font-semibold">850 kW</span> System
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    energy_savings_leaf
                  </span>
                  <span className="font-semibold">1.4 GWh/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-full border-2 border-primary-container px-8 py-3 font-label-caps text-label-caps text-primary-container transition-colors hover:bg-surface-container-low"
          >
            Load More Projects
          </button>
        </div>
      </section>

      <section className="bg-surface-container-low px-margin-mobile py-section-padding md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-headline-md text-headline-md text-primary">
              Precision in Detail
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A closer look at our installation quality and hardware standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[250px]">
            <div className="group relative overflow-hidden rounded-xl shadow-sm md:col-span-2 md:row-span-2">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf_afMBr-mqMzVv-JODZxpgFxoVWP3F5tmVkb4ry2l_MVIygWbfD0hJ7iDo9nFyTyT0jLe__Ud3hpLHFaMrOjQ9zgc2XnRMY1ovmaeMqE_gpIC2pinkWC333FN6B4euo_ZCrVn2AU227x_NztIXgReeakWbxgBqSP6U9_n-5mWyqKh0v0VOvF24tmefvex51zCfCxiexhi6KnkRKK4pmFtohcc-PPkoYOZ7W0zNPe-4OPdW6YKeReJ7A"
                alt="Immaculate cable management"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-body-md text-body-md font-semibold text-on-primary">
                  Immaculate Cable Management
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-sm md:col-span-1 md:row-span-1">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgKDpqbJ1kWnzlXj9X0ucTHq-riqVn2QGaLYPAaxReF8qouwDzF93l9D0-Y0cwlQ2yOgrh7NuSbCcHKCcMgXGzp2_RhOViFGMt_AdJN8t8DGJYFYjoBij-215zsKEgabbiWAH_YzeyOvJhIr7mvwhDb1SpLbkUqKza4bbTBGpEwjuBOHlPf1H7oloVP7PDt_2jT4f3eTiDhh4nr4MLUS3xaBlEdB4oXoQkC9NT0q_gvVrf7LIKj_7hHQ"
                alt="High-efficiency inverters"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-on-primary">
                  High-Efficiency Inverters
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-sm md:col-span-1 md:row-span-1">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6tpbDPP1pLukmnYU7zvP_ZdgjsY5mJ92SDuMJSE6PIdoHidLIe4zVF9-lA8_2e1xroEnpMwQnEgVV9O9tIpwTygtNGWjvt93Yee_4kH4WU7ZosWuANZBC3LqkzxTCVcLoA-0t9bKqX9nidMhQVEmI53XPtNahfTBDTa7TYNDKzydXDzcaSAm7XdK5FarLnxOYI11AQxyq1WczWlC1eY0PB24z2dFJ2m7w1LeIlxBF74tqJdif1viJRQ"
                alt="Structural racking inspections"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-on-primary">
                  Structural Racking Inspections
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-sm md:col-span-2 md:row-span-1">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_PxMyzt9GyQY_updI76eCzzC1piBLwUQxmTUPvtxGCzrgkZw6No2M3Je_Kl3JAXXQOHAcu2KNNUuhSH9is5g-DYC8ahv-ymeUvTF7dC9ycfJcOdEjbnrurKy3Xy_P0LmTaDr_Y-EtaoARCCShKb82COYFClgs4UaqNtOUb7ra_A-3UtPuxJoUWSHS0ecFfmOcea42k8tg9z4jKS0QD9cQNlL0c_VTGAFO3TgauGTvP6rHZSk0JZr3kw"
                alt="Low-profile roof integration"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-body-md text-body-md font-semibold text-on-primary">
                  Low-Profile Roof Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 w-full bg-surface-container-highest dark:bg-inverse-surface">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-8 px-margin-mobile py-section-padding md:flex-row md:px-margin-desktop">
          <div className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold text-primary dark:text-inverse-primary">
            <span className="material-symbols-outlined filled text-secondary-container">
              solar_power
            </span>
            SolarPrecision
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-secondary-container hover:underline dark:text-outline-variant dark:hover:text-secondary-fixed-dim"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-secondary-container hover:underline dark:text-outline-variant dark:hover:text-secondary-fixed-dim"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-secondary-container hover:underline dark:text-outline-variant dark:hover:text-secondary-fixed-dim"
            >
              Installation Warranty
            </a>
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-secondary-container hover:underline dark:text-outline-variant dark:hover:text-secondary-fixed-dim"
            >
              Support
            </a>
          </div>

          <div className="text-center font-body-md text-body-md text-on-surface-variant dark:text-outline-variant md:text-right">
            © 2024 SolarPrecision. All rights reserved. Precision in every
            panel.
          </div>
        </div>
      </footer>
    </div>
  );
}
