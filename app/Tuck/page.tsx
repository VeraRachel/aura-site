export default function TuckPage() {
  return (
    <main className="min-h-screen bg-[#faf7ef] text-black overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-300px] left-[-200px] w-[1200px] h-[1200px] bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse" />

        <div className="absolute top-[10%] right-[-300px] w-[1000px] h-[1000px] bg-amber-300 rounded-full blur-3xl opacity-20 animate-pulse" />

        <div className="absolute bottom-[-300px] left-[20%] w-[1200px] h-[1200px] bg-white rounded-full blur-3xl opacity-50" />

      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

        {/* GOLDEN RINGS */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="absolute w-[1300px] h-[1300px] border border-yellow-200/20 rounded-full animate-spin [animation-duration:60s]" />

          <div className="absolute w-[900px] h-[900px] border border-yellow-300/20 rounded-full animate-spin [animation-duration:35s]" />

          <div className="absolute w-[600px] h-[600px] border border-white/30 rounded-full animate-pulse" />

        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

          {/* LEFT CONTENT */}
          <div>

            <div className="tracking-[0.5em] uppercase text-sm text-[#b4974d] mb-8">
              Aura Collection
            </div>

            <h1 className="text-8xl md:text-[10rem] font-black leading-none tracking-tight bg-gradient-to-r from-[#fff7cf] via-[#f2ca5b] to-[#b88a1b] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,215,0,0.35)]">
              TUCK
            </h1>

            <p className="mt-8 text-3xl text-[#65563a]">
              Luxury Gum Disposal Pod
            </p>

            <p className="mt-10 text-xl text-[#6e6656] leading-relaxed max-w-2xl">
              A revolutionary everyday carry object designed to transform
              gum disposal into a premium, elegant, odor-sealed experience.
            </p>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-wrap gap-6">

              <button className="px-12 py-5 rounded-full bg-black text-white text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
                Buy Tuck
              </button>

              <a
  href="#demo"
  className="px-12 py-5 rounded-full border border-[#c8a14a] text-[#7a6228] text-xl hover:bg-[#f6e5a8] transition-all duration-300"
>
  Watch Demo
</a>

            </div>

            {/* QUICK FEATURES */}
            <div className="mt-16 space-y-5">

              {[
                "Odor-sealed disposal chamber",
                "Mint storage compartment",
                "One-hand eject mechanism",
                "Pocket-sized luxury carry",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">

                  <div className="w-4 h-4 rounded-full bg-[#d7b860]" />

                  <span className="text-xl text-[#5f584b]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT PRODUCT SHOWCASE */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse" />

            {/* MAIN POD */}
            <div className="relative group">

              {/* SHADOW */}
              <div className="absolute inset-0 bg-black/30 blur-3xl scale-110 opacity-30 rounded-[5rem]" />

              <div className="relative w-[340px] h-[720px] rounded-[5rem] bg-gradient-to-b from-[#fffdf8] via-[#e6dac4] to-[#c8aa78] border border-[#e1c995] shadow-[0_40px_100px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-700 group-hover:-translate-y-4">

                {/* REFLECTION */}
                <div className="absolute top-0 left-0 w-full h-40 bg-white/40 blur-2xl" />

                <div className="absolute left-7 top-12 w-10 h-[600px] bg-white/20 rounded-full blur-xl" />

                {/* TOP MINT STORAGE */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-12 rounded-full bg-gradient-to-r from-[#d9e0cf] to-[#ffffff] border border-[#b8c2ae] shadow-inner flex items-center justify-center">

                  <div className="text-xs tracking-[0.4em] text-[#61705f]">
                    MINT STORAGE
                  </div>

                </div>

                {/* INTERNAL WINDOW */}
                <div className="absolute top-[210px] left-1/2 -translate-x-1/2 w-28 h-[270px] rounded-full bg-[#121212] border border-[#555] overflow-hidden shadow-inner">

                  {/* INNER BAG */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-40 bg-[#2d2d2d] rounded-full opacity-90" />

                  {/* BAG TIE */}
                  <div className="absolute bottom-[165px] left-1/2 -translate-x-1/2 w-8 h-2 bg-[#666]" />

                  {/* SHINE */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                </div>

                {/* SIDE BUTTON */}
                <div className="absolute right-5 top-[310px] w-4 h-24 rounded-full bg-[#d6ba81]" />

                {/* LOWER PUSH SYSTEM */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-24 rounded-[2.5rem] bg-gradient-to-b from-[#edf6e5] to-[#b7c3a9] border border-[#a8b59b] shadow-2xl flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500">

                  <div className="text-[#445042] font-black tracking-[0.4em] text-xl">
                    PUSH
                  </div>

                  <div className="text-xs text-[#687260] mt-1">
                    One-Hand Eject
                  </div>

                </div>

                {/* BOTTOM SHINE */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-white/20 blur-xl" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY SECTION */}
      <section className="relative px-8 md:px-20 py-40">

        <div className="text-center mb-28">

          <div className="tracking-[0.4em] uppercase text-sm text-[#b4974d] mb-6">
            Product Showcase
          </div>

          <h2 className="text-7xl md:text-8xl font-black leading-none">
            Crafted with
            <br />
            intention.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Mint Hatch",
              desc: "Top compartment stores fresh mints for everyday carry.",
            },
            {
              title: "Disposal Chamber",
              desc: "Dark inner core conceals gum and locks odor discreetly.",
            },
            {
              title: "Push Mechanism",
              desc: "Clean eject system ties and releases waste hygienically.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-[3rem] bg-white/70 backdrop-blur-xl border border-[#ecdcb8] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:-translate-y-4 transition-all duration-700"
            >

              {/* MINI POD */}
              <div className="relative h-[320px] flex items-center justify-center mb-10">

                <div className="absolute w-52 h-52 bg-yellow-100 rounded-full blur-3xl opacity-50" />

                <div className="relative w-32 h-64 rounded-[2rem] bg-gradient-to-b from-[#fffdf8] to-[#ccb188] border border-[#e1cda5] shadow-2xl overflow-hidden">

                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-[#d9e0cf]" />

                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-10 h-24 rounded-full bg-[#111]" />

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-16 h-8 rounded-xl bg-[#dce6d1]" />

                </div>

              </div>

              <h3 className="text-4xl font-black">
                {card.title}
              </h3>

              <p className="mt-6 text-lg text-[#665f52] leading-relaxed">
                {card.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="relative px-8 md:px-20 py-40 bg-gradient-to-b from-transparent to-[#f4eedf]">

        <div className="text-center mb-28">

          <div className="tracking-[0.4em] uppercase text-sm text-[#b4974d] mb-6">
            Experience
          </div>

          <h2 className="text-7xl md:text-8xl font-black leading-none">
            How TUCK
            <br />
            works.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              step: "01",
              title: "Insert",
              text: "Place gum into the top chamber after chewing.",
            },
            {
              step: "02",
              title: "Seal",
              text: "Internal structure locks smell and stores gum discreetly.",
            },
            {
              step: "03",
              title: "Eject",
              text: "Press PUSH to tie and release the disposal bag cleanly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 border border-[#ead9af] shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-700"
            >

              <div className="text-8xl font-black text-[#f1d37a]">
                {item.step}
              </div>

              <h3 className="mt-8 text-5xl font-black">
                {item.title}
              </h3>

              <p className="mt-8 text-xl text-[#6b6558] leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FINAL SECTION */}
      <section className="relative px-8 py-40">

        <div className="max-w-6xl mx-auto rounded-[4rem] overflow-hidden bg-black text-white p-20 relative shadow-[0_40px_120px_rgba(0,0,0,0.35)]">

          {/* GOLD GLOW */}
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-yellow-300 rounded-full blur-3xl opacity-20" />

          <div className="relative z-10 text-center">

            <div className="tracking-[0.4em] uppercase text-sm text-yellow-200 mb-8">
              Aura Lifestyle
            </div>

            <h2 className="text-7xl md:text-8xl font-black leading-none">
              Clean habits.
              <br />
              Elevated.
            </h2>

            <p className="mt-10 max-w-3xl mx-auto text-2xl text-white/70 leading-relaxed">
              TUCK transforms a small daily inconvenience into a luxurious,
              intentional experience designed for modern everyday life.
            </p>

            <button className="mt-14 px-14 py-6 rounded-full bg-gradient-to-r from-[#fff2b0] to-[#d7b55f] text-black text-2xl font-black hover:scale-105 transition-all duration-500 shadow-2xl">
              Shop TUCK
            </button>

          </div>

        </div>

      </section>

{/* DEMO SECTION */}
<section
  id="demo"
  className="relative px-8 md:px-20 py-40 overflow-hidden"
>

  {/* GOLDEN GLOW */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-200 rounded-full blur-3xl opacity-20" />

  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="text-center mb-24">

      <div className="tracking-[0.4em] uppercase text-sm text-[#b4974d] mb-6">
        Product Demo
      </div>

      <h2 className="text-7xl md:text-8xl font-black leading-none">
        See TUCK
        <br />
        in motion.
      </h2>

    </div>

    {/* VIDEO PLAYER */}
    <div className="relative group rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#111] to-[#2b2b2b] shadow-[0_40px_120px_rgba(0,0,0,0.35)] border border-[#3a3a3a]">

      {/* GOLD LIGHT */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/10 via-transparent to-yellow-100/10" />

      {/* FAKE VIDEO */}
      <div className="aspect-video flex items-center justify-center relative overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute w-[600px] h-[600px] bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse" />

        {/* TUCK POD */}
        <div className="relative scale-90 group-hover:scale-100 transition-all duration-700">

          <div className="relative w-[180px] h-[380px] rounded-[3rem] bg-gradient-to-b from-[#fffdf8] via-[#e6dac4] to-[#c8aa78] border border-[#e1c995] shadow-[0_30px_80px_rgba(0,0,0,0.3)] overflow-hidden">

            {/* TOP */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-7 rounded-full bg-[#dce6d1]" />

            {/* CENTER */}
            <div className="absolute top-28 left-1/2 -translate-x-1/2 w-14 h-36 rounded-full bg-[#111]" />

            {/* PUSH */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-24 h-12 rounded-2xl bg-[#dce6d1]" />

          </div>

        </div>

        {/* PLAY BUTTON */}
        <div className="absolute flex items-center justify-center">

          <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

            <div className="ml-2 w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[28px] border-l-white" />

          </div>

        </div>

      </div>

    </div>

    {/* DEMO STEPS */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {[
        {
          title: "Open",
          text: "Lift the top hatch to access gum disposal and mint storage.",
        },
        {
          title: "Store",
          text: "Place used gum into the odor-sealed inner chamber.",
        },
        {
          title: "Eject",
          text: "Press PUSH to tie and release the disposal bag cleanly.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-10 border border-[#ead9af] shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >

          <h3 className="text-4xl font-black">
            {item.title}
          </h3>

          <p className="mt-5 text-lg text-[#6d6557] leading-relaxed">
            {item.text}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>

    </main>
  );
}