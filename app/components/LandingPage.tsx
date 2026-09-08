"use client";

import Header from "./header";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaMoneyBill,
  FaMoneyBillWave,
  FaIndustry,
  FaBolt,
  FaSolarPanel,
  FaBatteryThreeQuarters,
  FaNetworkWired,
  FaStar,
  FaHeadset,
  FaBorderStyle,
} from "react-icons/fa";
import {
  LuRadar,
  LuActivity,
  LuFactory,
  LuCurrency,
  LuTrendingUp,
} from "react-icons/lu";
import Image from "next/image";
import Footer from "./footer";
import FormSection from "./formSection";
import { motion } from "framer-motion";

const stars = Array.from({ length: 5 });

export default function LandingPage() {
  return (
    <div className="bg-background text-on-background antialiased overflow-x-hidden pt-18">
      <Header />

      <header className="relative flex items-center justify-center p-0 max-h-screen overflow-y-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-center bg-white bg-[url('/images/homeSolar.jfif')] bg-no-repeat bg-cover lg:bg-none" />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xs" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 min-h-screen w-full grid grid-cols-1 items-center gap-gutter lg:grid-cols-2 overflow-hidden">
          <div className="flex flex-col gap-base md:gap-gutter px-10">
            <span className="inline-block w-max rounded-full starting:opacity-0 transition-all duration-2500 opacity-100  bg-tertiary/20 px-4 py-1 border border-gray-600/50 font-label-caps text-label-caps uppercase tracking-widest text-primary">
              The Future of Energy
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl font-display-lg-mobile text-[2.6rem] font-bold leading-[110%] text-on-background md:font-display-lg md:text-display-lg"
            >
              Power your home with{" "}
              <span className="text-primary">precision</span> and{" "}
              <span className="text-secondary-container">purpose</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl font-body-lg text-body-lg text-on-surface-variant"
            >
              Experience the ultimate transition to renewable energy. We deliver
              high-efficiency solar solutions engineered for long-term
              reliability and significant cost savings.
            </motion.p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row starting:translate-y-14 starting:opacity-0 transition-all duration-700 delay-1000 translate-y-0 opacity-100">
              <a
                href="#formSection"
                className="flex items-center justify-center gap-2 rounded-lg bg-secondary-container px-8 py-2.5 font-headline-sm text-[1rem] text-on-secondary-container shadow-[0_20px_40px_rgba(0,119,182,0.15)] transition-colors hover:bg-secondary-fixed-dim"
              >
                Get Started <AiOutlineArrowRight />
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary-container bg-surface px-8 py-2.5  font-headline-sm text-[1rem] text-primary shadow-sm transition-colors hover:bg-surface-container-low"
                href="#calculator"
              >
                Calculate Savings
              </a>
            </div>
          </div>

          <div
            className="relative hidden h-full lg:block bg-no-repeat bg-cover bg-center overflow-hidden"
            // style={{
            //   backgroundImage: "url('/images/hero5.jfif')",
            // }}
          >
            <div className="absolute left-0 top-0 h-full w-2/5 bg-linear-to-r from-black/60 to-black/0" />
            <Image
              alt="solar panels"
              src="/images/hero5.jfif"
              className="w-full h-full object-cover starting:scale-120 scale-100 delay-1000 transition-all duration-800"
              width={400}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      </header>

      <motion.section className="border-y border-outline-variant/30 bg-linear-to-r from-primary-fixed to-tertiary-fixed py-16 px-margin-desktop md:px-margin-desktop">
        <div className="mx-auto max-w-container-max text-center">
          <motion.div
            transition={{
              delayChildren: 0.5,
              staggerChildren: 0.25,
            }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 font-display-lg text-4xl text-primary md:text-5xl">
                2.5M+
              </div>
              <div className="font-headline-sm text-lg text-on-surface-variant">
                Barrels of Oil Saved
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 font-display-lg text-4xl text-primary md:text-5xl">
                15M+
              </div>
              <div className="font-headline-sm text-lg text-on-surface-variant">
                Trees Planted Equivalent
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 font-display-lg text-4xl text-primary md:text-5xl">
                500k
              </div>
              <div className="font-headline-sm text-lg text-on-surface-variant">
                Tons of Carbon Reduced
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="bg-surface-container-lowest py-section-padding px-margin-desktop md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
              Why Choose AdTech Solar?
            </h2>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Our systems are designed to maximize your energy harvest and
              minimize your utility bills, all while contributing to a cleaner
              planet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {[
              {
                icon: FaMoneyBillWave,
                title: "Maximum Cost Savings",
                desc: "Lock in low energy rates and protect yourself from unpredictable utility price hikes. Our high-yield panels ensure an accelerated return on investment.",
                tint: "bg-primary-container/10 text-primary-container",
              },
              {
                icon: FaIndustry,
                title: "Environmental Stewardship",
                desc: "Significantly reduce your carbon footprint. By generating your own clean power, you are directly contributing to a sustainable future for the next generation.",
                tint: "bg-secondary-container/20 text-secondary",
              },
              {
                icon: FaBolt,
                title: "Energy Independence",
                desc: "Take control of your power supply. Coupled with our advanced battery storage solutions, you can maintain power even during grid outages.",
                tint: "bg-tertiary-container/10 text-tertiary",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="flex flex-col items-start gap-4 rounded-xl border border-outline-variant/30 bg-surface p-8 shadow-[0_20px_40px_rgba(0,119,182,0.08)] hover:shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15 }}
                transition={{
                  duration: (idx + 1) * 0.5,
                }}
                viewport={{ once: true }}
              >
                <div
                  className={`mb-2 flex h-16 w-16 items-center justify-center rounded-full ${card.tint}`}
                >
                  <div
                    className="material-symbols-outlined w-[70%] mx-auto"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {<card.icon className="w-full" />}
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-background">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-surface py-section-padding px-margin-desktop md:px-margin-desktop overflow-hidden"
        id="tech"
      >
        <div className="mx-auto max-w-container-max">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 block font-label-caps tracking-widest text-secondary uppercase">
                Premium Components
              </span>
              <h2 className="mb-6 font-headline-md text-headline-md text-on-background">
                Industry-Leading Technology
              </h2>
              <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
                We don't compromise on quality. AdTech Solar partners
                exclusively with top-tier manufacturers to provide you with the
                most efficient, durable, and aesthetically pleasing solar
                equipment available.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: FaSolarPanel,
                    title: "Monocrystalline High-Efficiency Panels",
                    desc: "Our sleek, all-black panels deliver maximum power output per square foot, ensuring optimal performance even in low-light conditions.",
                  },
                  {
                    icon: FaBatteryThreeQuarters,
                    title: "Intelligent Battery Storage",
                    desc: "Store excess energy for use during peak rate times or grid outages. Our smart battery systems seamlessly integrate with your home network.",
                  },
                  {
                    icon: FaNetworkWired,
                    title: "Microinverter Technology",
                    desc: "Advanced microinverters optimize each panel independently, guaranteeing maximum system yield even if some panels are shaded.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="material-symbols-outlined text-primary">
                        {<item.icon />}
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-2 font-headline-sm text-lg text-on-background">
                        {item.title}
                      </h4>
                      <p className="font-body-md text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative h-150 overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                // style={{
                //   backgroundImage:
                //     "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoKLA7R6J5xU2yYsyYomt_Bi1WP06m-uxN0YEDXsux7toJJAi5rzu_shU3n35cBmG4nYTlVIRA3B3HRPMv19DYg9tB7k8vpqSCIkhSELAe3GWnhbGjP46GfWzwQg0jb-LSNb16nmD8nZLTXeRUj83kvZNSnLZLrjAt4wQ_cfOnKljBRaIuOXCEfvK3CbfC7hGMrVGGsUUytNFhAXAbYhExSThD8uZ0KGR5oWZ_aqf15m9mr49r5kNE6g')",
                // }}
              >
                <Image
                  alt="Solar installation company"
                  width={500}
                  height={700}
                  src="/images/engineer1.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-outline-variant/30 bg-surface-container-lowest py-section-padding px-margin-desktop md:px-margin-desktop"
        id="process"
      >
        <div className="mx-auto max-w-container-max">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
              A Seamless Transition to Solar
            </h2>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Our transparent, streamlined 4-step process ensures a hassle-free
              experience from your first consultation to powering on your new
              system.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute left-[10%] right-[10%] top-12 z-0 hidden h-0.5 bg-outline-variant/30 md:block "
            />

            {[
              {
                step: "1",
                title: "Consultation",
                text: "We assess your energy needs, review your utility bills, and conduct a preliminary satellite roof analysis to determine viability.",
                tone: "bg-primary text-on-primary",
              },
              {
                step: "2",
                title: "Custom Design",
                text: "Our engineers create a tailored system design maximizing your roof's solar potential and handling all necessary permits.",
                tone: "bg-surface-container-high text-primary",
              },
              {
                step: "3",
                title: "Installation",
                text: "Our certified installation crews expertly mount your panels and integrate the electrical systems, typically within 2-3 days.",
                tone: "bg-surface-container-high text-primary",
              },
              {
                step: "4",
                title: "Activation",
                text: "After final utility inspections, we power on your system. You immediately start generating clean energy and tracking it.",
                tone: "bg-secondary-container text-on-secondary-container",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                <div
                  className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-surface-container-lowest text-4xl font-display-lg shadow-lg ${item.tone}`}
                >
                  {item.step}
                </div>
                <h3 className="mb-3 font-headline-sm text-xl text-on-background">
                  {item.title}
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-surface-container-lowest py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 rounded-2xl overflow-hidden ambient-shadow aspect-square lg:order-1 lg:aspect-4/3"
            >
              <Image
                className="h-full w-full object-cover"
                src="/images/homeSolar.jfif"
                alt="Residential solar roof"
                width={650}
                height={500}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 space-y-6 lg:order-2"
            >
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Residential Solar
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Transform your home into an efficient, independent powerhouse.
                Our residential solutions prioritize aesthetic integration
                without compromising on high-yield energy generation.
              </p>
              <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
                {[
                  {
                    icon: LuActivity,
                    title: "Smart Monitoring",
                    text: "Real-time app insights tracking production and consumption at a granular level.",
                  },
                  {
                    icon: FaBorderStyle,
                    title: "Aesthetic Integration",
                    text: "Low-profile mounts and all-black panels designed to complement your roofline.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl bg-surface-container p-6 ambient-shadow transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="material-symbols-outlined icon-fill mb-4 text-3xl text-primary">
                      {<card.icon />}
                    </span>
                    <h3 className="mb-2 font-headline-sm text-[20px] font-semibold text-on-surface">
                      {card.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Commercial &amp; Industrial
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Scale your energy strategy to meet industrial demands. We
                engineer high-capacity systems designed for maximum ROI and
                long-term corporate sustainability.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  {
                    icon: LuFactory,
                    title: "High-Capacity Systems",
                    text: "Megawatt-scale arrays engineered for flat roofs and unused land.",
                  },
                  {
                    icon: LuCurrency,
                    title: "Detailed ROI Analysis",
                    text: "Comprehensive financial modeling including tax incentives and depreciation.",
                  },
                  {
                    icon: LuTrendingUp,
                    title: "Scalable Architecture",
                    text: "Phased deployment options to grow alongside your facility's energy needs.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-primary-fixed p-2 text-primary">
                      <span className="material-symbols-outlined icon-fill text-[20px]">
                        {<item.icon />}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-on-surface-variant">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl ambient-shadow lg:aspect-4/3"
            >
              <Image
                className="h-full w-full object-cover"
                src="/images/industrial2.jfif"
                alt="Commercial solar array"
                width={650}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/*<section
        className="bg-surface py-section-padding px-margin-desktop md:px-margin-desktop"
        id="calculator"
      >
        <div className="mx-auto max-w-container-max">
          <div className="rounded-3xl border border-primary-fixed bg-primary-fixed/30 p-8 shadow-xl md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
                  Calculate Your Solar Savings
                </h2>
                <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
                  Discover how much you could save over 25 years by switching to
                  solar. Enter your average monthly electric bill to see your
                  potential returns.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block font-headline-sm text-lg text-on-background">
                      Average Monthly Electric Bill
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary">$</span>
                      <input
                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-outline-variant accent-primary"
                        type="range"
                        min="50"
                        max="500"
                        value="150"
                        readOnly
                      />
                      <span className="w-16 text-2xl font-bold text-primary">
                        150
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-t border-outline-variant/30 pt-6">
                    <div>
                      <span className="mb-1 block font-body-md text-on-surface-variant">
                        Estimated 25-Year Savings
                      </span>
                      <span className="block font-display-lg text-3xl text-primary">
                        $45,000+
                      </span>
                    </div>
                    <div>
                      <span className="mb-1 block font-body-md text-on-surface-variant">
                        Payback Period
                      </span>
                      <span className="block font-display-lg text-3xl text-secondary-container">
                        6-8 Years
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-md">
                <h3 className="mb-6 font-headline-sm text-xl text-on-background">
                  Get a Detailed Quote
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="First Name"
                      type="text"
                    />
                    <input
                      className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <input
                    className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Email Address"
                    type="email"
                  />
                  <input
                    className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Home Address (for roof analysis)"
                    type="text"
                  />
                  <button
                    className="mt-4 w-full rounded-lg bg-primary px-4 py-4 font-headline-sm text-lg text-on-primary transition-colors hover:bg-primary/90"
                    type="button"
                  >
                    Generate My Report
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      <section
        className="bg-surface-container-lowest py-section-padding px-margin-desktop md:px-margin-desktop"
        id="testimonials"
      >
        <div className="mx-auto max-w-container-max">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
              Empowering Homeowners
            </h2>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Don't just take our word for it. Hear from customers who have
              transformed their homes with AdTech Solar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Jenkins",
                location: "Austin, TX",
                quote:
                  "The installation was incredibly fast, and the panels look amazing on our roof. Our last energy bill was just the connection fee!",
              },
              {
                name: "Marcus & Elena Rodriguez",
                location: "Phoenix, AZ",
                quote:
                  "AdTech Solar handled every single detail, from permits to HOA approval. The battery backup has already saved us during two grid outages.",
              },
              {
                name: "David Chen",
                location: "San Diego, CA",
                quote:
                  "Highly professional crew. The app they provided to track our generation and usage is addictive. Best investment we've made in our home.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-surface p-8 shadow-sm"
              >
                <div>
                  <div className="mb-4 flex text-secondary-container">
                    {stars.map((_, index) => (
                      <span
                        key={`${testimonial.name}-${index}`}
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        <FaStar />
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 font-body-lg italic text-on-background">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-headline-sm text-lg text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface py-section-padding px-margin-desktop md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 block font-label-caps uppercase tracking-widest text-secondary"
              >
                Smart Monitoring
              </motion.span>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`mb-6 font-headline-md text-headline-md text-on-background `}
              >
                Power in the Palm of Your Hand
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8 font-body-lg text-body-lg text-on-surface-variant"
              >
                Take control of your energy production and consumption from
                anywhere. Our intuitive mobile app gives you real-time insights
                and direct access to support.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    icon: LuRadar,
                    title: "Real-time Tracking",
                    desc: "Monitor your system's performance, current output, and historical generation data with easy-to-read graphs.",
                  },
                  {
                    icon: FaHeadset,
                    title: "Direct Support",
                    desc: "Have a question? Connect instantly with our dedicated solar support team directly through the app.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="material-symbols-outlined text-primary">
                        {<item.icon />}
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-2 font-headline-sm text-lg text-on-background">
                        {item.title}
                      </h4>
                      <p className="font-body-md text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute m-auto h-75 w-75 rounded-full bg-primary-fixed/20 blur-3xl" />
              <div className="relative z-10 flex h-150 w-75 flex-col overflow-hidden rounded-[3rem] border-8 border-surface-container-high bg-surface-container-lowest shadow-2xl">
                <div className="absolute inset-x-0 top-0 z-20 mx-auto h-6 w-40 rounded-b-3xl bg-surface-container-high" />
                <div className="flex flex-1 flex-col bg-surface p-6 pt-12">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="font-headline-sm text-on-background">
                      My Solar
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">
                      notifications
                    </span>
                  </div>
                  <div className="mb-6 rounded-2xl bg-primary p-6 text-on-primary shadow-lg">
                    <div className="mb-1 text-sm opacity-80">
                      Current Output
                    </div>
                    <div className="mb-4 font-display-lg text-3xl">4.2 kW</div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-on-primary/20">
                      <div className="h-full w-3/4 rounded-full bg-on-primary" />
                    </div>
                  </div>
                  <div className="mb-4 font-headline-sm text-lg text-on-background">
                    Today's Generation
                  </div>
                  <div className="flex flex-1 items-end justify-between gap-2 pb-4">
                    {[20, 40, 70, 90, 60, 30].map((height, index) => (
                      <div
                        key={height + index}
                        className={`w-1/6 rounded-t-md ${index === 3 ? "bg-primary shadow-[0_0_15px_rgba(0,93,144,0.3)]" : "bg-primary-fixed"}`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/30 bg-surface-container-lowest py-section-padding px-margin-desktop md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
              The AdTech Solar Edge
            </h2>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              See how our standards stack up against the rest of the solar
              industry.
            </p>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface shadow-sm"
          >
            <div className="grid grid-cols-3 border-b border-outline-variant/30 bg-surface-container-low font-headline-sm text-on-background">
              <div className="p-6">Feature</div>
              <div className="p-6 text-center text-on-surface-variant">
                Industry Average
              </div>
              <div className="bg-primary-fixed/30 p-6 text-center font-bold text-primary">
                AdTech Solar
              </div>
            </div>
            {[
              ["Panel Efficiency", "15% - 18%", "22%+"],
              ["Installation Speed", "3-6 Weeks", "1-2 Weeks"],
              ["Warranty Duration", "10-15 Years", "25 Years"],
              ["After-install support", "little to none", "Extensive"],
            ].map(([feature, avg, precision], index) => (
              <div
                key={feature}
                className={`grid grid-cols-3 items-center ${index % 2 === 0 ? "bg-surface-container-lowest/50" : ""} ${index < 3 ? "border-b border-outline-variant/10" : ""}`}
              >
                <div className="p-6 font-body-lg text-on-background">
                  {feature}
                </div>
                <div className="p-6 text-center text-on-surface-variant">
                  {avg}
                </div>
                <div className="bg-primary-fixed/10 p-6 text-center text-lg font-semibold text-primary">
                  {precision}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <FormSection />

      <section
        className="bg-surface py-section-padding px-margin-desktop md:px-margin-desktop"
        id="faq"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 font-headline-md text-headline-md text-on-background"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-body-lg text-on-surface-variant"
            >
              Everything you need to know about switching to solar.
            </motion.p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long do solar panels last?",
                a: "Our premium solar panels come with a 25-year performance warranty, but they are designed to last 30-40 years with minimal degradation in efficiency over time.",
              },
              {
                q: "What happens on cloudy days or at night?",
                a: "Your panels will still generate some power on cloudy days. At night, you will draw from the grid or your battery storage system (if installed). Through net metering, excess power generated during the day can offset nighttime grid usage.",
              },
              {
                q: "Will solar panels damage my roof?",
                a: "No. In fact, they often protect the portion of the roof they cover from weather and sun damage. Our installers use specialized mounting hardware that preserves roof integrity and includes a comprehensive leak warranty.",
              },
              {
                q: "Are there still tax incentives for going solar?",
                a: "Yes! The federal solar tax credit (ITC) currently allows you to deduct 30% of the cost of installing a solar energy system from your federal taxes. Many states also offer additional local incentives.",
              },
            ].map((faq) => (
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={faq.q}
                className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6"
              >
                <h3 className="mb-2 font-headline-sm text-lg text-primary">
                  {faq.q}
                </h3>
                <p className="font-body-md text-on-surface-variant">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-primary py-24 px-margin-desktop md:px-margin-desktop"
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ffffff 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-display-lg text-4xl text-on-primary md:text-5xl">
            Ready to Take Control of Your Energy?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-body-lg text-xl text-primary-fixed-dim">
            Join thousands of homeowners who are saving money and the
            environment. Schedule your free, zero-pressure consultation today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-secondary-container px-10 py-4 font-headline-sm text-xl text-on-secondary-container shadow-lg transition-colors hover:bg-secondary-fixed-dim active:scale-95">
              Get Your Free Quote
            </button>
            <button className="rounded-lg border-2 border-on-primary bg-transparent px-10 py-4 font-headline-sm text-xl text-on-primary transition-colors hover:bg-on-primary/10 active:scale-95">
              Call Us: 1-800-SOLAR-01
            </button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
