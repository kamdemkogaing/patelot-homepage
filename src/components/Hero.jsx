import {
  ArrowRight,
  Code,
  ShoppingCart,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const Hero = ({ text }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9CAF88]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#556B2F]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#9CAF88]/5 to-transparent rounded-full"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#9CAF88]/40 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-[#556B2F]/30 rotate-12 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#9CAF88]/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 border border-[#556B2F]/40 rotate-45 animate-spin duration-1000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-12 pt-28 md:pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 backdrop-blur-sm border border-[#9CAF88]/20 rounded-full px-6 py-3 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#9CAF88] animate-pulse" />
              <span className="text-sm text-[#9CAF88] font-medium">
                {text.available}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
                <span className="text-2xl block bg-gradient-to-r from-white via-[#9CAF88] to-[#556B2F] bg-clip-text text-transparent animate-gradient">
                  Patrick Kamdem
                </span>
              </h1>

              <h2 className="text-xl md:text-3xl font-semibold text-gray-300 animate-slide-up delay-200 leading-tight">
                <span className="text-[#9CAF88] font-bold">
                  {text.manager}
                </span>
                <br className="" />
                {/*  <span className="md:inline hidden"> & </span> */}
                <span className="text-[#556B2F] font-bold">
                  {text.developer}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-xl animate-slide-up delay-300">
              {text.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up delay-500">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-[#9CAF88]/25 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#556B2F] to-[#9CAF88] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-sm">{text.projects}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Patrick_Kamdem_Flyer.pdf`}
                download="Patrick_Kamdem_Flyer.pdf"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-slate-600 hover:border-[#9CAF88] hover:scale-105 hover:shadow-2xl hover:shadow-slate-800/25 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 text-sm">{text.cv}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up delay-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#9CAF88]">10+</div>
                <div className="text-sm text-gray-400">{text.years}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#9CAF88]">50+</div>
                <div className="text-sm text-gray-400">{text.projectCount}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#9CAF88]">4</div>
                <div className="text-sm text-gray-400">{text.companies}</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-up delay-300">
            {/* Portrait */}
            <div className="relative group max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src="/portrait-kamdem.png"
                  alt="Patrick Kamdem"
                  className="mx-auto h-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <Star className="w-4 h-4 text-[#9CAF88] fill-current" />
                    <span className="text-sm text-white font-medium">
                      {text.architect}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-[#9CAF88]/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9CAF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {text.frontend}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    React, Vite, Next.js, Tailwind CSS, JavaScript, TypeScript
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-[#9CAF88]/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#556B2F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#556B2F] to-[#9CAF88] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {text.commerce}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Shopware, SelectLine, ManiacSeller, NOSTO, SEA, SEO, CRO,
                    A/B Testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#9CAF88]/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#9CAF88] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
