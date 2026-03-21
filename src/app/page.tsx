"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden ${isDarkMode ? "bg-black text-white" : "bg-[#fffdf7] text-zinc-900"} transition-colors duration-300 font-sans`}>
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-16">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="CookWhisperer Logo"
            width={70}
            height={70}
            className="drop-shadow-2xl brightness-110"
          />
          <span className={`text-2xl font-extrabold tracking-tighter sm:text-3xl ${isDarkMode ? "text-white" : "text-zinc-900"}`}>CookWhisperer</span>
        </div>
        <div className="flex items-center gap-6 lg:gap-10">
          <div className={`hidden items-center gap-8 text-sm font-semibold sm:flex ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            <a href="#" className="transition-colors hover:text-primary">Features</a>
            <a href="#" className="transition-colors hover:text-primary">Recipes</a>
            <a href="#" className="transition-colors hover:text-primary">Community</a>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 ${isDarkMode ? "bg-white/10 text-white" : "bg-zinc-800/5 text-zinc-900 shadow-sm border border-zinc-200"}`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
            <a href="#" className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg ${isDarkMode ? "bg-white text-black hover:bg-zinc-200" : "bg-zinc-900 text-white hover:bg-zinc-800"}`}>Sign In</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center">
        {/* Video & Bokeh Base */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-50">
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className={`absolute inset-0 ${isDarkMode ? "bg-linear-to-b from-black/80 via-black/40 to-black" : "bg-linear-to-b from-white/20 via-transparent to-[#fffdf7]"}`} />
          
          {isDarkMode && (
            <div className="bokeh-container absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bokeh-particle" style={{
                  width: Math.random() * 250 + 80 + "px",
                  height: Math.random() * 250 + 80 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 5 + "s",
                  opacity: Math.random() * 0.2 + 0.1
                }} />
              ))}
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-7xl animate-fade-in">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-xl mb-8 ${isDarkMode ? "border-white/10 bg-white/5 text-primary" : "border-zinc-200 bg-zinc-800/5 text-primary"}`}>
             ✨ AI Recipe Generation 2.0
          </div>
          
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-9xl lg:text-[7.5rem] leading-[0.85] mb-8 drop-shadow-sm">
            Every Fridge Hides <br />
            <span className="bg-linear-to-r from-primary via-emerald-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">A Delicious Meal. <br /> We'll Find Yours.</span>
          </h1>
          
          <p className={`max-w-4xl text-lg leading-relaxed sm:text-2xl mb-12 opacity-90 ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
            Stop asking what's for dinner. CookWhisperer uses advanced AI to craft 
            perfect recipes from whatever ingredients you already have.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row pb-12">
            <Link href="/generate" className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 text-xl font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,200,150,0.3)]">
              Start Cooking Free
              <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="#" className={`flex h-16 items-center justify-center rounded-full border px-10 text-xl font-bold backdrop-blur-md transition-all hover:scale-105 active:scale-95 ${isDarkMode ? "border-white/20 bg-white/5 text-white hover:bg-white/10" : "border-zinc-200 bg-black/5 text-zinc-900 hover:bg-black/10"}`}>
              Watch the Demo
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${isDarkMode ? "border-white/20" : "border-zinc-300"}`}>
            <div className={`w-1 h-2 rounded-full ${isDarkMode ? "bg-white" : "bg-black"}`} />
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="py-24 px-6 lg:px-16 relative">
        <h2 className="text-4xl sm:text-6xl font-bold text-center mb-20">CookWhisperer's 3-Step Magic</h2>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Connecting Line */}
          <div className={`absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 hidden lg:block opacity-20 bg-linear-to-r from-primary via-accent to-primary`} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {[
              { step: "1", title: "Open Your Fridge", icon: "🧺", desc: "List whatever ingredients you have on hand." },
              { step: "2", title: "AI Thinks For You", icon: "🤖", desc: "Our smart engine finds the perfect culinary matches." },
              { step: "3", title: "Cook & Enjoy", icon: "🍲", desc: "Follow simple, chef-approved instructions." }
            ].map(item => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                <div className={`w-28 h-28 rounded-[2rem] flex items-center justify-center text-4xl mb-8 glass shadow-xl border-accent/20 transition-all group-hover:scale-110 group-hover:rotate-3`}>
                  <span className="drop-shadow-lg">{item.icon}</span>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-white text-lg font-black flex items-center justify-center border-4 border-black">{item.step}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-70 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section className="py-32 px-6 lg:px-16 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-20">Why Families Love CookWhisperer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Zero Waste Cooking", desc: "Turn leftover scraps into gourmet gold.", icon: "🚫", color: "from-blue-500/20 to-blue-600/20" },
              { title: "100+ World Cuisines", desc: "From Mumbai curry to Milanese pasta.", icon: "🌍", color: "from-emerald-500/20 to-emerald-600/20" },
              { title: "Results in Seconds", desc: "Instant recipes for busy weeknights.", icon: "⚡", color: "from-amber-500/20 to-amber-600/20" },
              { title: "Chef-Approved", desc: "Taste-tested logic in every generation.", icon: "👩🍳", color: "from-rose-500/20 to-rose-600/20" },
              { title: "Diet Friendly", desc: "Customized for your health needs.", icon: "🥗", color: "from-green-500/20 to-green-600/20" },
              { title: "Works on Any Device", desc: "Access your kitchen assistant anywhere.", icon: "📱", color: "from-zinc-500/20 to-zinc-600/20" }
            ].map(f => (
              <div key={f.title} className="glass p-10 rounded-[2.5rem] border-white/5 shadow-xl transition-all hover:scale-[1.03] hover:border-primary/30 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 bg-linear-to-br ${f.color} border border-white/10 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="opacity-60 text-lg leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS BANNER */}
      <section className={`py-16 ${isDarkMode ? "bg-primary/10 border-y border-white/5" : "bg-primary/5 border-y border-zinc-200"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Recipes Generated", value: "50K+" },
              { label: "World Cuisines", value: "100+" },
              { label: "Zero Waste", value: "100%" },
              { label: "User Rating", value: "4.9★" }
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl sm:text-5xl font-black mb-2 bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-20 tracking-tight">What Home Cooks Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya from Mumbai", quote: "I had some leftover baingan and half a packet of mushrooms. CookWhisperer suggested a fusion masala that my kids actually finished!", stars: 5 },
              { name: "Rahul from Delhi", quote: "Being a bachelor, I used to order every night. Now I just list my eggs and bread, and I get 5 variations in seconds. Life saver.", stars: 5 },
              { name: "Sneha from Pune", quote: "The diet filter is amazing. As someone looking for Vegan-Jain options, finding recipes that actually taste good is rare.", stars: 5 }
            ].map((t, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 shadow-xl relative group font-sans">
                <div className="text-accent text-3xl mb-4">{"★".repeat(t.stars)}</div>
                <p className="text-xl italic leading-relaxed mb-8 opacity-80">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-blue-500 flex items-center justify-center font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div className="font-bold text-lg">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 px-6 lg:px-16">
        <div className={`max-w-7xl mx-auto rounded-[3.5rem] p-12 sm:p-24 text-center relative overflow-hidden ${isDarkMode ? "bg-zinc-900 shadow-primary/10" : "bg-white shadow-2xl shadow-zinc-200"} border ${isDarkMode ? "border-white/5" : "border-zinc-100"}`}>
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-7xl font-black mb-8 leading-tight">Your Next Favourite Meal <br /> is Already in Your Fridge</h2>
            <p className="text-xl sm:text-2xl mb-12 opacity-70 max-w-3xl mx-auto leading-relaxed">Let CookWhisperer find it for you — free, fast, and delicious.</p>
            
            <Link href="/generate" className="inline-flex h-20 items-center justify-center px-12 rounded-full bg-primary text-2xl font-black text-white shadow-[0_0_40px_rgba(0,200,150,0.4)] transition-all hover:scale-105 active:scale-95 hover:shadow-primary/60">
              Start Cooking Free →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className={`pt-32 pb-12 px-6 lg:px-16 ${isDarkMode ? "bg-black" : "bg-[#fffdf7]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="brightness-110" />
                <span className="text-3xl font-black tracking-tighter">CookWhisperer</span>
              </div>
              <p className="text-xl opacity-60 leading-relaxed max-w-sm mb-8">Powered by AI. Inspired by Home Cooking. Making every meal magical, one ingredient at a time.</p>
              <div className="flex gap-4">
                {[
                  { name: "Twitter", icon: "𝕏" },
                  { name: "Instagram", icon: "📸" },
                  { name: "Discord", icon: "💬" }
                ].map(s => (
                  <button key={s.name} className={`w-12 h-12 rounded-full border flex items-center justify-center text-xl transition-all hover:scale-110 active:scale-95 ${isDarkMode ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-zinc-800/5 border-zinc-200 hover:bg-zinc-800/10"}`}>
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-8 opacity-40">Platform</h4>
              <ul className="space-y-4 font-bold text-lg">
                <li><a href="#" className="hover:text-primary transition-colors text-zinc-500">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-zinc-500">Recipes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-zinc-500">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-8 opacity-40">Legal</h4>
              <ul className="space-y-4 font-bold text-lg">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`pt-12 border-t text-center font-bold opacity-40 ${isDarkMode ? "border-white/10" : "border-zinc-200"}`}>
            © 2025 CookWhisperer AI. Made with ❤️ in India
          </div>
        </div>
      </footer>
    </div>
  );
}
