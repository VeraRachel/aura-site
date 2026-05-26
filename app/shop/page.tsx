export default function HomePage() {
    return (
      <main className="min-h-screen bg-[#f7f4ed] text-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
  
        {/* Background Glow */}
        <div className="absolute w-[700px] h-[700px] bg-yellow-200 rounded-full blur-3xl opacity-30 top-[-200px] animate-pulse" />
  
        <div className="relative z-10 text-center max-w-4xl">
  
          <div className="mb-6 text-sm tracking-[0.4em] uppercase text-[#9a8455]">
            Aura Collection
          </div>
  
          <h1 className="text-7xl md:text-8xl font-black leading-none">
            AURA
          </h1>
  
          <p className="mt-6 text-2xl text-[#666]">
            Where the little things light up the everyday.
          </p>
  
          <p className="mt-6 text-lg text-[#666] leading-relaxed">
            Luxury everyday products designed to simplify life beautifully.
          </p>
  
          <div className="mt-12">
  
            <a
              href="/tuck"
              className="inline-block px-10 py-5 rounded-full bg-black text-white text-xl hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              Shop Tuck
            </a>
  
          </div>
        </div>
      </main>
    );
  }