"use client";
import { useState } from "react";
import landingData from "@/data/dr_james_chess_academy_landing_page_json.json";
import RegisterInterestForm from "./components/RegisterInterestForm";

type Currency = "SGD" | "MYR";

export default function Home() {
  const [currency, setCurrency] = useState<Currency>("MYR");
  const [activePricingCard, setActivePricingCard] = useState<
    "private" | "group" | null
  >(null);

  // Use the data from JSON
  const { header, sections, footer } = landingData;

  // Find specific sections
  const heroSection = sections.find((s) => s.id === "hero");
  const badgesSection = sections.find((s) => s.id === "badges");
  const aboutSection = sections.find((s) => s.id === "about");
  const parentsReview = sections.find((s) => s.id === "why-parents");
  const programsSection = sections.find((s) => s.id === "programs");
  const testimonialsSection = sections.find((s) => s.id === "testimonials");
  const classFeaturesSection = sections.find((s) => s.id === "class-features");
  const coachesSection = sections.find((s) => s.id === "coaches");
  const gallerySection = sections.find((s) => s.id === "gallery");
  const pricingSection = sections.find((s) => s.id === "pricing");
  const faqsSection = sections.find((s) => s.id === "faqs");
  const finalCtaSection = sections.find((s) => s.id === "final-cta");

  return (
    <main className="min-h-screen">
      {/* Logo - Fixed position top-left */}
      <a
        href="https://www.instagram.com/chesscoachdrjames"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 left-6 z-50 transition-transform hover:scale-105"
      >
        <img
          src={header.logo.src}
          alt={header.logo.alt}
          className="w-14 h-14 md:w-18 md:h-18 rounded-full shadow-lg border-2 border-white/50"
        />
      </a>

      {/* Currency Switcher - Fixed position */}
      <div className="fixed top-6 right-6 z-50 glass-effect rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
        <span
          className={`text-sm font-semibold transition-colors ${
            currency === "SGD" ? "text-gradient" : "text-gray-500"
          }`}
        >
          SGD
        </span>
        <button
          onClick={() => setCurrency(currency === "SGD" ? "MYR" : "SGD")}
          className="relative w-14 h-7 rounded-full transition-colors"
          style={{
            background: "linear-gradient(135deg, #000000 0%, #333333 100%)",
          }}
        >
          <div
            className="absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300"
            style={{
              transform:
                currency === "SGD" ? "translateX(4px)" : "translateX(32px)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          />
        </button>
        <span
          className={`text-sm font-semibold transition-colors ${
            currency === "MYR" ? "text-gradient" : "text-gray-500"
          }`}
        >
          MYR
        </span>
      </div>

      {/* Floating Social Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {footer.contact.messenger_links?.map((link: any, index: number) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <button
              className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${
                link.icon === "facebook"
                  ? "bg-[#0084FF] hover:bg-[#0073E6]"
                  : "bg-linear-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] hover:shadow-pink-500/50"
              }`}
            >
              {link.icon === "facebook" ? (
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8l3.13 3.259L19.752 8l-6.559 6.963z" />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              )}
            </button>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                {link.platform}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Hero Section */}
      {heroSection && (
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-scroll md:bg-fixed"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.85), rgba(248, 248, 248, 0.9)), url(/images/landing_page_backdrop.jpg)",
          }}
          aria-label={heroSection.props.aria_label}
        >
          <div
            className="container mx-auto px-6 text-center z-10"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {heroSection.props.heading}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              {heroSection.props.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={heroSection.props.primary_cta?.href} className="group">
                <button className="relative px-10 py-5 text-xl font-bold text-white rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-3xl">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-linear-to-r from-black via-gray-800 to-black bg-size-200 animate-gradient"></div>

                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-white blur-xl opacity-20 animate-pulse"></div>
                  </div>

                  {/* Button text */}
                  <span className="relative z-10 flex items-center gap-2">
                    {heroSection.props.primary_cta?.label}
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white to-transparent opacity-20"></div>
                </button>
              </a>

              <a href={heroSection.props.secondary_cta?.href} className="group">
                <button className="relative px-10 py-5 text-xl font-bold text-black bg-white rounded-xl border-3 border-black overflow-hidden transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                  {/* Hover background fill */}
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  {/* Button text with color change on hover */}
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    {heroSection.props.secondary_cta?.label}
                    <svg
                      className="w-5 h-5 transform group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>

            {/* Urgency text */}
            <p className="mt-6 text-sm text-gray-600 animate-pulse">
              🔥 <strong className="text-black">Limited spots available</strong>
            </p>
          </div>

          {/* Decorative chess pieces floating effect */}
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-6xl"
            style={{ animation: "float 3s ease-in-out infinite", opacity: 0.3 }}
          >
            ♔
          </div>
        </section>
      )}

      {/* Badges Section */}
      {badgesSection && (
        <section className="py-12 px-6 bg-marble-light">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {(badgesSection.props.items as string[])?.map((item, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-lg p-4 text-center text-sm text-gray-800 hover:scale-105 transition-transform duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {aboutSection && (
        <section
          id="about"
          className="py-24 px-6 bg-linear-to-b from-pure-white to-marble-light"
        >
          <div
            className="container mx-auto max-w-6xl"
            style={{ animation: "slideUp 0.8s ease-out" }}
          >
            <h2 className="section-title text-gradient text-center mb-12">
              {aboutSection.props.heading}
            </h2>
            <div className="max-w-4xl mx-auto">
              {aboutSection.props.body?.map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-lg text-gray-700 mb-6 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                )
              )}
              {aboutSection.props.subsections?.map(
                (subsection: any, index: number) => (
                  <div key={index} className="mt-8">
                    <h3 className="text-2xl font-bold text-gradient mb-4">
                      {subsection.heading}
                    </h3>
                    <ul className="space-y-3">
                      {subsection.bullets.map(
                        (bullet: string, bulletIndex: number) => (
                          <li
                            key={bulletIndex}
                            className="text-gray-700 flex items-start"
                          >
                            <span className="text-gradient mr-2">•</span>
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Parents Choose Us Section */}
      {parentsReview && (
        <section className="py-24 px-6 bg-pure-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center text-gradient mb-16">
              {parentsReview.props.heading}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parentsReview.props.features?.map(
                (feature: any, index: number) => (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-8 hover:scale-105 transition-all duration-300"
                    style={{
                      animation: `slideUp ${0.6 + index * 0.1}s ease-out`,
                    }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-gradient">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {gallerySection && (
        <section id="gallery" className="py-24 px-6 bg-pure-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="section-title text-center text-gradient mb-16">
              {gallerySection.props.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(
                gallerySection.props.images as Array<{
                  src: string;
                  link: string;
                }>
              )?.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-xl aspect-square shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      View Post
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section - Responsive Carousel */}
      {testimonialsSection && (
        <section
          id="testimonials"
          className="py-24 px-6 bg-pure-white overflow-hidden"
        >
          <div className="container mx-auto max-w-7xl">
            <h2 className="section-title text-center text-gradient mb-16">
              {testimonialsSection.props.heading}
            </h2>

            {/* Desktop: Infinite Scrolling Carousel (hidden on mobile) */}
            <div className="relative hidden md:block">
              <div className="overflow-hidden">
                <div
                  className="flex gap-6"
                  style={{
                    animation: "infiniteScroll 30s linear infinite",
                  }}
                >
                  {/* Duplicate items twice for seamless infinite scroll */}
                  {(
                    (testimonialsSection.props.items as Array<{
                      quote: string;
                      author: string;
                    }>) || []
                  )
                    .concat(
                      (testimonialsSection.props.items as Array<{
                        quote: string;
                        author: string;
                      }>) || []
                    )
                    .map((item: any, index: number) => (
                      <div
                        key={index}
                        className="shrink-0 glass-effect rounded-xl p-8"
                        style={{
                          width: "calc(33.333% - 16px)",
                          minWidth: "350px",
                        }}
                      >
                        <div className="mb-4">
                          <svg
                            className="w-10 h-10 text-gradient opacity-50"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 mb-6 italic leading-relaxed text-base">
                          "{item.quote}"
                        </p>
                        <div className="border-t border-gray-300 pt-4">
                          <p className="font-semibold text-gradient">
                            {item.author}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Gradient Overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-pure-white to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-pure-white to-transparent pointer-events-none z-10" />
            </div>

            {/* Mobile: Swipeable Static Carousel (hidden on desktop) */}
            <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
              <div className="flex gap-4 pb-4">
                {(
                  (testimonialsSection.props.items as Array<{
                    quote: string;
                    author: string;
                  }>) || []
                ).map((item: any, index: number) => (
                  <div
                    key={index}
                    className="shrink-0 snap-center glass-effect rounded-xl p-6 w-[85vw] max-w-sm"
                  >
                    <div className="mb-3">
                      <svg
                        className="w-8 h-8 text-gradient opacity-50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                      "{item.quote}"
                    </p>
                    <div className="border-t border-gray-300 pt-3">
                      <p className="font-semibold text-gradient text-sm">
                        {item.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Programs Section */}
      {programsSection && (
        <section
          id="programs"
          className="py-24 px-6 bg-linear-to-b from-marble-light to-pure-white"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center text-gradient mb-16">
              {programsSection.props.heading}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programsSection.props.programs?.map(
                (program: any, index: number) => (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-8 hover:scale-105 transition-all duration-300"
                    style={{
                      animation: `slideUp ${0.6 + index * 0.1}s ease-out`,
                    }}
                  >
                    <h3
                      className="text-2xl font-bold mb-4 text-gradient"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {program.summary}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">
                        What You'll Learn:
                      </p>
                      <ul className="space-y-2">
                        {program.outcomes.map(
                          (outcome: string, outcomeIndex: number) => (
                            <li
                              key={outcomeIndex}
                              className="text-gray-700 text-sm flex items-start"
                            >
                              <span className="text-gradient mr-2">✓</span>
                              {outcome}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <p className="text-sm text-gray-600">
                        Recommended Age: {program.recommended_age_range}
                      </p>
                      {program.lesson_format && (
                        <p className="text-sm text-gray-600">
                          Format: {program.lesson_format.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Class Features Section */}
      {classFeaturesSection && (
        <section className="py-24 px-6 bg-linear-to-b from-marble-light to-pure-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center text-gradient mb-16">
              {classFeaturesSection.props.heading}
            </h2>
            <div className="glass-effect rounded-xl p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {classFeaturesSection.props.bullets?.map(
                  (bullet: string, index: number) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-gradient mr-3 text-xl">✓</span>
                      <span>{bullet}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Coaches Section
      {coachesSection && (
        <section id="coaches" className="py-24 px-6 bg-[#0a0a0a]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center text-gradient mb-16">
              {coachesSection.props.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coachesSection.props.members?.map(
                (member: any, index: number) => (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-8 text-center hover:scale-105 transition-all duration-300"
                    style={{
                      animation: `slideUp ${0.6 + index * 0.1}s ease-out`,
                    }}
                  >
                    <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-[#d4af37] to-[#ffd700] flex items-center justify-center text-6xl mb-6">
                      ♚
                    </div>
                    <h3 className="text-xl font-bold text-gradient mb-3">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )} */}

      {/* Pricing Section */}
      {pricingSection && (
        <section
          id="pricing"
          className="py-24 px-6 bg-linear-to-b from-marble-light to-pure-white hidden"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="section-title text-center text-gradient mb-4">
              {pricingSection.props.heading}
            </h2>
            <p className="text-center text-gray-600 mb-16 text-sm">
              {pricingSection.props.note}
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 1-to-1 Private Coaching Card */}
              <div
                className="group relative glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer md:cursor-default"
                onClick={() =>
                  setActivePricingCard(
                    activePricingCard === "private" ? null : "private"
                  )
                }
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
                    Online 1-to-1 Private Coaching
                  </h3>
                  <p className="text-4xl font-bold text-black mb-2">
                    {currency === "MYR" ? "RM" : "S$"}{" "}
                    {currency === "MYR" ? "130" : "40"}
                  </p>
                  <p className="text-sm text-gray-400 mb-6">per hour</p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gradient mr-2">•</span>
                      Personalised lesson plans
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gradient mr-2">•</span>
                      Progress tracking
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gradient mr-2">•</span>
                      Full tailored experience
                    </li>
                  </ul>

                  <div className="mt-6 pt-4 border-t border-gray-300">
                    <p className="text-xs text-gray-500 italic">
                      💡 <span className="md:hidden">Tap</span>
                      <span className="hidden md:inline">Hover</span> to see
                      trial info
                    </p>
                  </div>
                </div>

                {/* Hover overlay with trial info */}
                <div
                  className={`absolute inset-0 bg-linear-to-br from-black to-gray-800 transition-opacity duration-500 flex items-center justify-center p-8 z-20 rounded-xl transform-gpu ${
                    activePricingCard === "private"
                      ? "opacity-95"
                      : "opacity-0 md:group-hover:opacity-95"
                  }`}
                >
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-4">Trial Session</h4>
                    <p className="text-3xl font-bold mb-2">
                      {currency === "MYR" ? "RM" : "S$"}{" "}
                      {currency === "MYR" ? "130" : "40"}
                    </p>
                    <p className="text-sm mb-4 opacity-80">
                      per hour (normal rate)
                    </p>
                    <ul className="space-y-2 text-sm text-left max-w-xs mx-auto">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        Full personalized experience
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        Normal hourly rate
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        Tailored from day one
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Small Group Classes Card */}
              <div
                className="group relative glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer md:cursor-default"
                onClick={() =>
                  setActivePricingCard(
                    activePricingCard === "group" ? null : "group"
                  )
                }
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
                    Online Small Group Classes
                  </h3>
                  <p className="text-4xl font-bold text-black mb-2">
                    {currency === "MYR" ? "RM" : "S$"} 35
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    per student per class
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gradient mr-2">•</span>
                      Social learning
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gradient mr-2">•</span>
                      Affordable rates
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gradient mr-2">•</span>
                      Collaborative environment
                    </li>
                  </ul>

                  <div className="mt-6 pt-4 border-t border-gray-300">
                    <p className="text-xs text-gray-500 italic">
                      💡 <span className="md:hidden">Tap</span>
                      <span className="hidden md:inline">Hover</span> to see
                      trial info
                    </p>
                  </div>
                </div>

                {/* Hover overlay with trial info */}
                <div
                  className={`absolute inset-0 bg-linear-to-br from-black to-gray-800 transition-opacity duration-500 flex items-center justify-center p-8 z-20 rounded-xl transform-gpu ${
                    activePricingCard === "group"
                      ? "opacity-95"
                      : "opacity-0 md:group-hover:opacity-95"
                  }`}
                >
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-4">
                      Group Trial Class
                    </h4>
                    <p className="text-3xl font-bold mb-2">FREE</p>
                    <p className="text-sm mb-4 opacity-80">completely free</p>
                    <ul className="space-y-2 text-sm text-left max-w-xs mx-auto">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        Experience our teaching style
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        No commitment required
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        Risk-free introduction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* {pricingSection.props.cta && (
              <div className="text-center mt-12">
                <a href={pricingSection.props.cta.href}>
                  <button className="btn-primary text-lg">
                    {pricingSection.props.cta.label}
                  </button>
                </a>
              </div>
            )} */}
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqsSection && (
        <section id="faqs" className="py-24 px-6 bg-pure-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center text-gradient mb-16">
              {faqsSection.props.heading}
            </h2>
            <div className="space-y-6">
              {faqsSection.props.items?.map((faq: any, index: number) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-6 hover:scale-102 transition-all duration-300"
                  style={{
                    animation: `slideUp ${0.5 + index * 0.1}s ease-out`,
                  }}
                >
                  <h3 className="text-lg font-bold text-gradient mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {finalCtaSection && (
        <section
          id="contact"
          className="py-24 px-6 bg-linear-to-b from-marble-light to-pure-white"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="section-title text-gradient mb-6">
              {finalCtaSection.props.heading}
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              {finalCtaSection.props.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={finalCtaSection.props.primary_cta?.href}>
                <button className="btn-primary text-lg">
                  {finalCtaSection.props.primary_cta?.label}
                </button>
              </a>
              <a href={finalCtaSection.props.secondary_cta?.href}>
                <button className="btn-secondary text-lg">
                  {finalCtaSection.props.secondary_cta?.label}
                </button>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Register Interest Form */}
      <RegisterInterestForm />

      {/* Footer */}
      <footer className="py-12 px-6 bg-marble-light border-t border-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">Contact</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>📧 {footer.contact.email}</p>
                <p>📍 {footer.contact.address}</p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600 mb-2">WhatsApp Us:</p>
                {footer.contact.whatsapp_contacts?.map(
                  (contact: any, index: number) => (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-700 hover:text-black transition-colors"
                    >
                      💬 {contact.name}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {footer.social.map((social: any, index: number) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">Legal</h3>
              <div className="flex flex-col gap-2">
                {footer.legal.map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-300">
            <p className="text-4xl mb-4">♔ ♕ ♖ ♗ ♘ ♙</p>
            <p className="text-gray-700 text-sm">
              © 2025 Dr James Chess Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
