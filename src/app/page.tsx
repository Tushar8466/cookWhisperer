import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-8 lg:px-16">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="CookWhisper Logo"
            width={100}
            height={100}
            className="drop-shadow-2xl"
          />
          <span className="text-2xl font-extrabold tracking-tighter sm:text-3xl">CookWhisper</span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-400 sm:flex">
          <a href="#" className="transition-colors hover:text-white">Features</a>
          <a href="#" className="transition-colors hover:text-white">Recipes</a>
          <a href="#" className="transition-colors hover:text-white">Community</a>
          <a href="#" className="rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20">Sign In</a>
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pb-12 text-center lg:px-16">
        <div className="flex max-w-5xl flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            New: AI Recipe Generation 2.0
          </div>

          <h1 className="text-6xl font-extrabold tracking-tight sm:text-9xl lg:text-[7rem] leading-[0.9]">
            Every Fridge Hides <br />
            <span className="bg-linear-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">A Delicious Meal. <br /> We'll Find Yours.</span>
          </h1>

          <p className="max-w-4xl text-xl leading-relaxed text-zinc-300 sm:text-3xl">
            Experience the future of cooking. CookWhisper uses advanced AI to transcribe
            your kitchen moments, discover perfect pairings, and craft personalized recipes in real-time.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row pb-32">
            <a
              className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 text-xl font-bold text-black transition-all hover:scale-105 active:scale-95"
              href="#"
            >
              Start Cooking Free
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              className="flex h-16 items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 text-xl font-bold backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
              href="#"
            >
              Watch the Demo
            </a>
          </div>

          {/* Feature Highlights Section Separator */}
          <div className="mt-24 grid grid-cols-1 gap-12 border-t border-white/10 pt-20 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold">Voice Transcription</h3>
              <p className="text-sm text-zinc-400">Natural voice commands and step-by-step guidance.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold">Smart Substitution</h3>
              <p className="text-sm text-zinc-400">Instant alternatives for any ingredient you're missing.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </div>
              <h3 className="text-lg font-bold">Smart Grocery List</h3>
              <p className="text-sm text-zinc-400">Auto-sync ingredients to your shopping app of choice.</p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 flex flex-col items-center gap-6 text-sm font-medium text-zinc-500">
          <div className="flex items-center gap-8">
            <span className="uppercase tracking-widest text-zinc-600">Trusted by 50k+ Home Chefs</span>
          </div>
          <p>© 2026 CookWhisper AI. Crafting the future of taste.</p>
        </div>
      </main>
    </div>
  );
}
