"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F6F4] text-[#0F172A] overflow-hidden relative">

      {/* DREAMY BACKGROUND GLOWS */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#B9A7D6] opacity-30 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#BFD8F2] opacity-30 blur-[120px] animate-pulse"></div>

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#E8C8D1] opacity-20 blur-[100px]"></div>

      {/* HERO SECTION */}

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 bg-gradient-to-br from-[#B9A7D6] via-[#F7F6F4] to-[#BFD8F2]">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-light tracking-[0.3em] text-[#D4AF37]"
        >
          AURA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl md:text-3xl text-[#0F172A]"
        >
          Illuminate the Everyday
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-[#555]"
        >
          Luxury wellness essentials designed to bring
          light, movement, peace, and purpose into everyday life.
        </motion.p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link href="/shop">
            <button className="px-8 py-4 rounded-full bg-[#D4AF37] text-white text-lg hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition duration-500">
              Shop Aura
            </button>
          </Link>

          <Link href="/tuck">
            <button className="px-8 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition duration-500">
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
              title: "PACE",
              text: "Elegant movement, activewear, and wellness essentials.",
              color: "#BFD8F2"
            },
            {
              title: "CLOUD",
              text: "Comfy wear and softness inspired by peaceful rest.",
              color: "#E8C8D1"
            },
            {
              title: "RELAX",
              text: "Spa-inspired recovery and calming self-care.",
              color: "#B9A7D6"
            },
            {
              title: "RESET",
              text: "On-the-go freshness and active wellness products.",
              color: "#A8B89F"
            },
            {
              title: "SHINE",
              text: "Minimal everyday Aura merchandise and apparel.",
              color: "#F7F6F4"
            },
            {
              title: "PASSION",
              text: "Faith-filled journals, devotionals, and spiritual essentials.",
              color: "#0F172A"
            }
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="rounded-[40px] p-10 shadow-2xl transition duration-500"
              style={{
                background: item.color,
                color: item.title === "PASSION" ? "white" : "#0F172A"
              }}
            >
              <h3 className="text-4xl mb-6">
                {item.title}
              </h3>

              <p className="text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>

          ))}

        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      <section className="py-32 px-8 bg-gradient-to-r from-[#F7F6F4] to-[#E8C8D1]">

        <div className="text-center mb-20">

          <h2 className="text-6xl text-[#D4AF37] mb-6">
            Designed to Glow
          </h2>

          <p className="text-xl text-[#555]">
            Everyday products reimagined through light,
            movement, and calm.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[
            {
              name: "TUCK",
              subtitle: "Luxury gum disposal pod",
              color: "from-[#B9A7D6] to-white"
            },
            {
              name: "VEIL",
              subtitle: "Pocket mist wellness device",
              color: "from-[#BFD8F2] to-white"
            },
            {
              name: "FLOW",
              subtitle: "Hydration bottle system",
              color: "from-[#E8C8D1] to-white"
            }
          ].map((product, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              className={`rounded-[50px] bg-gradient-to-br ${product.color} p-10 shadow-2xl overflow-hidden`}
            >

              <motion.div
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4
                }}
                className="w-full h-80 rounded-[40px] bg-white/70 backdrop-blur-xl shadow-inner mb-8 flex items-center justify-center"
              >

                <div className="w-36 h-60 rounded-[50px] bg-white shadow-2xl border border-[#ddd]"></div>

              </motion.div>

              <h3 className="text-4xl mb-4">
                {product.name}
              </h3>

              <p className="text-lg text-[#555] mb-8">
                {product.subtitle}
              </p>

              <button className="px-6 py-3 rounded-full bg-[#D4AF37] text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition duration-500">
                Explore
              </button>

            </motion.div>

          ))}

        </div>
      </section>

      {/* SCRIPTURE SECTION */}

      <section className="py-28 px-8 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl text-[#D4AF37] mb-8"
        >
          “Let your light shine before others.”
        </motion.h2>

        <p className="text-2xl text-[#555]">
          Matthew 5:16
        </p>

      </section>

      {/* FOOTER */}

      <footer className="py-20 text-center bg-[#0F172A] text-white">

        <h2 className="text-5xl mb-6 tracking-[0.2em]">
          AURA
        </h2>

        <p className="text-xl text-[#ccc] mb-4">
          Glow with Purpose.
        </p>

        <p className="text-[#888]">
          Luxury wellness essentials inspired by light,
          peace, movement, and purpose.
        </p>

      </footer>

    </main>
  )
}