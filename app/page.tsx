export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f7f4ed] text-black">

      <h1 className="text-7xl font-black">
        AURA
      </h1>

      <p className="mt-6 text-2xl text-gray-600">
        Where the little things light up the everyday.
      </p>

      <a
        href="/Tuck"
        className="mt-10 px-10 py-5 rounded-full bg-black text-white text-2xl hover:scale-110 transition-all"
      >
        Shop Tuck
      </a>

    </main>
  );
}