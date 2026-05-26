export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#fff7e3_20%,#ffe4a3_40%,#d8c3a0_65%,#2b2118_100%)] text-black">
      
      {/* Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-white/40 blur-[180px]" />

        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-yellow-200/30 blur-3xl animate-pulse" />

        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white/20 blur-3xl animate-pulse" />

        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1440 900"
          fill="none"
        >
          <path
            d="M0 250C250 100 500 450 900 250C1200 120 1450 300 1600 200"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M-100 520C250 340 650 720 1100 520C1300 420 1500 620 1650 500"
            stroke="#ffe7a0"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6">
        <div>
          <h1 className="text-3xl font-black tracking-[0.4em] text-[#2d1a00]">
            AURA
          </h1>

          <p className="text-xs tracking-[0.2em] text-[#7a5c2e] mt-1">
            where the little things light up the everyday
          </p>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all">
          Shop
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
        
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/30 border border-white/40 backdrop-blur-xl mb-8 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

          <p className="text-sm font-semibold text-[#5c4630] tracking-[0.08em]">
            Luxury Lifestyle Essentials
          </p>
        </div>

        <h1 className="text-7xl md:text-8xl font-black leading-none text-[#2b1800] max-w-5xl">
          FEEL THE
          <br />
          GLOW OF
          <br />
          EVERYDAY LUXURY.
        </h1>

        <p className="mt-10 max-w-2xl text-lg md:text-xl text-[#5c4630] leading-relaxed">
          AURA transforms everyday essentials into elegant modern experiences
          surrounded by warmth, light, comfort, and premium design.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl">
            Explore Collection
          </button>

          <button className="bg-white/30 border border-white/40 px-8 py-4 rounded-full font-semibold hover:bg-white/40 transition-all backdrop-blur-xl">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}