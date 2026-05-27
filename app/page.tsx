"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F6F4] text-[#0F172A] overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 bg-gradient-to-br from-[#B9A7D6] via-[#F7F6F4] to-[#BFD8F2]">

        <div className="absolute inset-0 opacity-20 blur-3xl bg-white"></div>

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
          className="mt-6 max-w-2xl text-lg text-[#444]"
        >
          Luxury wellness essentials designed to bring light,
          movement, beauty, and peace into everyday life.
        </motion.p>

        <div className="mt-12 flex gap-6">

          <Link href="/shop">
            <button className="px-8 py-4 rounded-full bg-[#D4AF37] text-white text-lg hover:scale-105 transition duration-300 shadow-2xl">
              Shop Aura
            </button>
          </Link>

          <Link href="/tuck">
            <button className="px-8 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg hover:bg-[#D4AF37] hover:text-white transition duration-300">
              Explore Tuck
            </button>
          </Link>

        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="py-28 px-8">

        <h2 className="text-5xl text-center mb-20 text-[#D4AF37]">
          Aura Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[
            {
              title: "PACE",
              text: "Elegant activewear and movement essentials.",
              color: "#BFD8F2"
            },
            {
              title: "CLOUD",
              text: "Comfort wear for rest, softness, and calm.",
              color: "#E8C8D1"
            },
            {
              title: "RESET",
              text: "On-the-go wellness and freshness products.",
              color: "#A8B89F"
            },
            {
              title: "RELAX",
              text: "Spa-inspired recovery and rest accessories.",
              color: "#B9A7D6"
            },
            {
              title: "SHINE",
              text: "Minimal everyday Aura merchandise.",
              color: "#F7F6F4"
            },
            {
              title: "PASSION",
              text: "Faith-filled journals and spiritual essentials.",
              color: "#0F172A"
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-[40px] p-10 shadow-2xl"
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

      {/* TUCK FEATURE */}

      <section className="py-32 px-8 bg-gradient-to-r from-[#F7F6F4] to-[#E8C8D1]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl text-[#D4AF37] mb-8">
              TUCK
            </h2>

            <p className="text-2xl mb-6">
              The luxury gum disposal pod.
            </p>

            <p className="text-lg text-[#555] leading-loose">
              Clean. Elegant. Portable.
              Designed to discreetly seal and dispose gum while
              keeping movement effortless and hygienic.
            </p>

            <div className="mt-10 flex gap-6">

              <Link href="/tuck">
                <button className="px-8 py-4 rounded-full bg-[#D4AF37] text-white hover:scale-105 transition">
                  View Product
                </button>
              </Link>

              <button className="px-8 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition">
                Watch Demo
              </button>

            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            className="rounded-[50px] h-[500px] bg-gradient-to-br from-[#B9A7D6] to-[#F7F6F4] shadow-2xl flex items-center justify-center"
          >
            <div className="w-52 h-96 rounded-[60px] bg-white shadow-2xl border border-[#ddd]"></div>
          </motion.div>

        </div>
      </section>

      {/* SCRIPTURE */}

      <section className="py-24 px-8 text-center">

        <p className="text-4xl text-[#D4AF37] mb-8">
          “Let your light shine before others.”
        </p>

        <p className="text-xl text-[#555]">
          Matthew 5:16
        </p>

      </section>

    </main>
  )
}