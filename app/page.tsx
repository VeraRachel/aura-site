"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const collections = [
  {
    title: "Pace",
    subtitle: "ACTIVE WEAR",
    description:
      "Elegant movement essentials, activewear, walking gear, and wellness products.",
    color: "#DDEEFF",
    dark: false,
  },

  {
    title: "Cloud",
    subtitle: "COMFY WEAR",
    description:
      "Soft pajamas, blankets, hoodies, and peaceful comfort essentials.",
    color: "#F8F5FF",
    dark: false,
  },

  {
    title: "Relax",
    subtitle: "SPA & RECOVERY",
    description:
      "Eye masks, calming sets, therapeutic lights, and body recovery tools.",
    color: "#E8DDFF",
    dark: false,
  },

  {
    title: "Reset",
    subtitle: "ON-THE-GO WELLNESS",
    description:
      "Refreshing sprays, hydration bottles, cooling stones, and travel wellness.",
    color: "#E4F0E2",
    dark: false,
  },

  {
    title: "Shine",
    subtitle: "EVERYDAY ESSENTIALS",
    description:
      "Minimal lifestyle products including TUCK and elevated daily accessories.",
    color: "#F6E5EC",
    dark: false,
  },

  {
    title: "Passion",
    subtitle: "SPIRITUAL LIFE",
    description:
      "Prayer cubes, journals, devotionals, and inspirational essentials.",
    color: "#182033",
    dark: true,
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F6F4] text-[#0F172A] relative">

      {/* GLOBAL GLOWS */}

      <div className="absolute top-[-300px] left-[-200px] w-[800px] h-[800px] bg-[#7EAFF2] opacity-30 blur-[190px] rounded-full"></div>

      <div className="absolute top-[5%] right-[-250px] w-[850px] h-[850px] bg-[#B89CFF] opacity-25 blur-[190px] rounded-full"></div>

      <div className="absolute top-[35%] left-[20%] w-[600px] h-[600px] bg-[#F1D9E6] opacity-20 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-[15%] right-[10%] w-[700px] h-[700px] bg-[#C9DBC2] opacity-20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] left-[-150px] w-[700px] h-[700px] bg-[#182033] opacity-10 blur-[180px] rounded-full"></div>

      {/* HERO */}

      <section className="relative text-center py-44 px-6 overflow-hidden bg-gradient-to-b from-[#6FA5F0] via-[#E6EDFF] via-[#F5EFFF] to-[#F6E5EC]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_65%)]"></div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.35, 0.55, 0.35]
          }}
          transition={{
            repeat: Infinity,
            duration: 8
          }}
          className="absolute inset-0 bg-white blur-[130px]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-8xl md:text-[11rem] font-black tracking-[0.35em] text-white"
          style={{
            textShadow:
              `
              0 0 18px rgba(255,255,255,1),
              0 0 40px rgba(255,255,255,0.95),
              0 0 80px rgba(255,255,255,0.9),
              0 0 140px rgba(255,255,255,0.7)
              `
          }}
        >
          AURA
        </motion.h1>

        <p className="relative z-10 mt-10 text-3xl text-[#24364F]">
          Illuminate the Everyday
        </p>

        <p className="relative z-10 mt-8 max-w-3xl mx-auto text-lg text-[#4A5A74] leading-loose">
          Luxury wellness essentials inspired by movement,
          comfort, peace, beauty, and purposeful light.
        </p>

        <div className="relative z-10 mt-14 flex flex-wrap justify-center gap-6">

          <Link href="/shop">
            <button className="px-10 py-4 rounded-full bg-[#D4AF37] text-white text-lg hover:scale-110 hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] transition duration-500">
              Shop Aura
            </button>
          </Link>

          <Link href="/tuck">
            <button className="px-10 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition duration-500">
              Explore Tuck
            </button>
          </Link>

        </div>

      </section>

      {/* COLLECTIONS */}

      <section className="relative py-32 px-8 overflow-hidden bg-gradient-to-b from-[#F6E5EC] via-[#F8F6F5] via-[#E4F0E2] to-[#DCEBFF]">

        <div className="absolute top-[5%] left-[10%] w-[450px] h-[450px] bg-[#C7B4FF] opacity-20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-[#BFD8F2] opacity-20 blur-[140px] rounded-full"></div>

        <div className="absolute top-[35%] left-[45%] w-[300px] h-[300px] bg-[#C9DBC2] opacity-15 blur-[120px] rounded-full"></div>

        <div className="text-center mb-20 relative z-10">

          <h2 className="text-6xl text-[#D4AF37] mb-6">
            Aura Collections
          </h2>

          <p className="text-xl text-[#555]">
            Glow with purpose through every collection.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">

          {collections.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              className="rounded-[45px] p-10 shadow-2xl backdrop-blur-xl transition duration-500"
              style={{
                background: item.color,
                color: item.dark ? "white" : "#0F172A"
              }}
            >

              <div className="w-20 h-20 rounded-full bg-white/40 mx-auto mb-8 blur-[1px]"></div>

              <h3
                className="text-6xl mb-4"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontStyle: "italic",
                  fontWeight: 500
                }}
              >
                {item.title}
              </h3>

              <p className="tracking-[0.25em] text-sm mb-6 opacity-70">
                {item.subtitle}
              </p>

              <p className="text-lg leading-loose">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CUSTOMER GLOW */}

      <section className="relative py-32 px-8 text-center overflow-hidden bg-gradient-to-b from-[#DCEBFF] via-[#F8F6F5] via-[#E7DAFF] to-[#182033]">

        <div className="absolute top-[5%] left-[10%] w-[450px] h-[450px] bg-[#BFD8F2] opacity-15 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-[0%] right-[5%] w-[500px] h-[500px] bg-[#D9BFFF] opacity-15 blur-[160px] rounded-full"></div>

        <div className="absolute top-[35%] left-[45%] w-[350px] h-[350px] bg-[#F1D9E6] opacity-10 blur-[130px] rounded-full"></div>

        <div className="relative z-10">

          <h2 className="text-6xl text-[#F3D36A] mb-8">
            What Should Shine Next?
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-white leading-loose mb-14 font-semibold drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
            What would you like to see on Aura’s shelves in the future?
            What everyday struggles or discomforts would you love
            a beautiful physical solution for?
          </p>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl">

            <textarea
              placeholder="Share your ideas, struggles, comfort wishes, or product dreams..."
              className="w-full h-52 rounded-[30px] p-8 text-lg outline-none bg-white/20 text-white placeholder:text-white/70"
            ></textarea>

            <button className="mt-8 px-10 py-4 rounded-full bg-[#D4AF37] text-white text-lg hover:scale-105 transition duration-500">
              Share Your Glow
            </button>

          </div>

        </div>

      </section>

      {/* SCRIPTURE */}

      <section className="py-28 px-8 text-center bg-[#182033] text-white">

        <h2 className="text-5xl text-[#F3D36A] mb-8 leading-relaxed">
          “Let your{" "}
          <span
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: "italic",
              fontSize: "1.25em"
            }}
          >
            light
          </span>{" "}
          shine before others.”
        </h2>

        <p className="text-2xl text-[#D0D0D0]">
          Matthew 5:16
        </p>

      </section>

      {/* FOOTER */}

      <footer className="py-20 text-center bg-black text-white">

        <h2 className="text-5xl mb-6 tracking-[0.3em]">
          AURA
        </h2>

        <p className="text-xl text-[#ccc] mb-4">
          Glow with Purpose.
        </p>

        <p className="max-w-2xl mx-auto text-[#888] leading-loose">
          Luxury wellness essentials inspired by light,
          movement, comfort, peace, and purpose.
        </p>

      </footer>

    </main>
  )
}