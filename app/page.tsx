"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F6F4] text-[#0F172A] relative">

      {/* BACKGROUND GLOWS */}

      <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-[#6FA8E8] opacity-50 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-[#9D7BD8] opacity-45 blur-[180px] rounded-full"></div>

      <div className="absolute top-[35%] left-[35%] w-[400px] h-[400px] bg-[#E8C8D1] opacity-25 blur-[130px] rounded-full"></div>

      {/* HERO */}

      <section className="relative text-center py-44 px-6 bg-gradient-to-br from-[#7FB0F0] via-[#DCE9FF] to-[#9D7BD8] overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            repeat: Infinity,
            duration: 8
          }}
          className="absolute inset-0 bg-white blur-[120px]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-8xl md:text-[11rem] font-black tracking-[0.35em] text-white"
          style={{
            textShadow:
              `
              0 0 2px rgba(15,23,42,1),
              0 0 5px rgba(15,23,42,1),
              0 0 12px rgba(15,23,42,0.95),
              0 0 24px rgba(255,255,255,1),
              0 0 55px rgba(255,255,255,0.95),
              0 0 95px rgba(255,255,255,0.85),
              0 0 130px rgba(255,255,255,0.7)
              `
          }}
        >
          AURA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 mt-10 text-3xl text-[#14213D]"
        >
          Illuminate the Everyday
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative z-10 mt-8 max-w-3xl mx-auto text-lg text-[#3E4A61] leading-loose"
        >
          Luxury wellness essentials inspired by movement,
          comfort, peace, beauty, and purposeful light.
        </motion.p>

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

      <section className="py-32 px-8">

        <div className="text-center mb-20">

          <h2 className="text-6xl text-[#D4AF37] mb-6">
            Aura Collections
          </h2>

          <p className="text-xl text-[#555]">
            Glow with purpose through every collection.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[
            {
              title: "Pace",
              subtitle: "Active Wear",
              text: "Elegant movement essentials, activewear, walking gear, and wellness products.",
              symbol: "◢",
              color: "#BFD8F2"
            },
            {
              title: "Cloud",
              subtitle: "Comfy Wear",
              text: "Soft pajamas, blankets, hoodies, and peaceful comfort essentials.",
              symbol: "◌",
              color: "#F7F6F4"
            },
            {
              title: "Relax",
              subtitle: "Spa & Recovery",
              text: "Eye masks, calming sets, therapeutic lights, and body recovery tools.",
              symbol: "∿",
              color: "#B9A7D6"
            },
            {
              title: "Reset",
              subtitle: "On-The-Go Wellness",
              text: "Refreshing sprays, hydration bottles, cooling stones, and travel wellness.",
              symbol: "△",
              color: "#A8B89F"
            },
            {
              title: "Shine",
              subtitle: "Everyday Essentials",
              text: "Minimal lifestyle products including TUCK and elevated daily accessories.",
              symbol: "✦",
              color: "#E8C8D1"
            },
            {
              title: "Passion",
              subtitle: "Spiritual Life",
              text: "Prayer cubes, journals, devotionals, and inspirational essentials.",
              symbol: "☷",
              color: "#0F172A"
            }
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              className="rounded-[45px] p-10 shadow-2xl transition duration-500"
              style={{
                background: item.color,
                color: item.title === "Passion" ? "white" : "#0F172A"
              }}
            >

              <div className="text-5xl mb-8 opacity-70">
                {item.symbol}
              </div>

              <h3
                className="text-6xl mb-2"
                style={{
                  fontFamily:
                    '"Snell Roundhand", "Apple Chancery", "URW Chancery L", cursive',
                  fontWeight: 500,
                  letterSpacing: "0.03em"
                }}
              >
                {item.title}
              </h3>

              <p className="uppercase tracking-[0.2em] text-sm mb-6 opacity-70">
                {item.subtitle}
              </p>

              <p className="text-lg leading-loose">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="py-32 px-8 bg-gradient-to-r from-[#F7F6F4] to-[#E8C8D1]">

        <div className="text-center mb-20">

          <h2 className="text-6xl text-[#D4AF37] mb-6">
            Designed to Glow
          </h2>

          <p className="text-xl text-[#555]">
            Everyday products reimagined through light and elegance.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[
            {
              name: "TUCK",
              subtitle: "Luxury gum disposal pod",
              image:
                "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop"
            },
            {
              name: "VEIL",
              subtitle: "Pocket mist wellness device",
              image:
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
            },
            {
              name: "FLOW",
              subtitle: "Hydration bottle system",
              image:
                "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop"
            }
          ].map((product, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="rounded-[45px] bg-white/70 backdrop-blur-xl p-6 shadow-2xl overflow-hidden"
            >

              <motion.img
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4
                }}
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover rounded-[30px]"
              />

              <div className="pt-8">

                <h3 className="text-4xl mb-4">
                  {product.name}
                </h3>

                <p className="text-lg text-[#555] mb-8">
                  {product.subtitle}
                </p>

                <button className="px-6 py-3 rounded-full bg-[#D4AF37] text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition duration-500">
                  Explore
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CUSTOMER IDEAS */}

      <section className="py-32 px-8 text-center bg-gradient-to-br from-[#BFD8F2] via-[#F7F6F4] to-[#B9A7D6]">

        <h2 className="text-6xl text-[#D4AF37] mb-8">
          What Should Shine Next?
        </h2>

        <p className="max-w-3xl mx-auto text-xl text-[#555] leading-loose mb-14">
          What would you like to see on Aura’s shelves in the future?
          What everyday struggles or discomforts would you love
          a beautiful physical solution for?
        </p>

        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl">

          <textarea
            placeholder="Share your ideas, struggles, comfort wishes, or product dreams..."
            className="w-full h-52 rounded-[30px] p-8 text-lg outline-none bg-[#F7F6F4]"
          ></textarea>

          <button className="mt-8 px-10 py-4 rounded-full bg-[#D4AF37] text-white text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition duration-500">
            Share Your Glow
          </button>

        </div>

      </section>

      {/* SCRIPTURE */}

      <section className="py-28 px-8 text-center">

        <h2 className="text-5xl text-[#D4AF37] mb-8 leading-relaxed">
          “Let your{" "}
          <span
            style={{
              fontFamily:
                '"Snell Roundhand", "Apple Chancery", "URW Chancery L", cursive',
              fontSize: "1.35em",
              fontWeight: 500
            }}
          >
            light
          </span>{" "}
          shine before others.”
        </h2>

        <p className="text-2xl text-[#555]">
          Matthew 5:16
        </p>

      </section>

      {/* FOOTER */}

      <footer className="py-20 text-center bg-[#0F172A] text-white">

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