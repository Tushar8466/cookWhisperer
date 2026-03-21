"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/stateful-button";
import { GlareCard } from "@/components/ui/glare-card";

export default function GeneratePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [diet, setDiet] = useState("Veg");
  const [isGenerating, setIsGenerating] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);

  const quickAdd = [
    { name: "Onion", emoji: "🧅" },
    { name: "Tomato", emoji: "🍅" },
    { name: "Paneer", emoji: "🧀" },
    { name: "Potato", emoji: "🥔" },
    { name: "Rice", emoji: "🍚" },
    { name: "Dal", emoji: "🫘" },
    { name: "Garlic", emoji: "🧄" },
    { name: "Egg", emoji: "🥚" },
    { name: "Spinach", emoji: "🌿" },
    { name: "Ginger", emoji: "🧅" }
  ];

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

  const addIngredient = (name: string) => {
    if (name && !ingredients.includes(name)) {
      setIngredients([...ingredients, name]);
    }
    setInputValue("");
  };

  const removeIngredient = (name: string) => {
    setIngredients(ingredients.filter(i => i !== name));
  };

  const generateRecipes = async () => {
    if (ingredients.length === 0) return;
    
    setIsGenerating(true);
    setRecipes([]);
    
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const mockResults = [
      {
        id: 1,
        title: `${cuisine !== 'All' ? cuisine : 'Gourmet'} ${ingredients[0] || 'Kitchen'} Special`,
        time: "25 mins",
        difficulty: "Medium",
        match: "98% Match",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        tags: [diet, cuisine].filter(t => t !== 'All'),
        saved: false
      },
      {
        id: 2,
        title: `Spicy ${ingredients[1] || 'Garden'} Fusion Bowl`,
        time: "15 mins",
        difficulty: "Easy",
        match: "92% Match",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        tags: [diet, "Quick"],
        saved: false
      },
      {
        id: 3,
        title: `Chef's Choice ${ingredients[2] || 'Harvest'} Medley`,
        time: "40 mins",
        difficulty: "Hard",
        match: "85% Match",
        image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&q=80",
        tags: [diet, "Healthy"],
        saved: false
      }
    ];
    
    setRecipes(mockResults);
    setIsGenerating(false);
    
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-300 font-sans`}>
      {/* Background Image with Fixed Attachment for Parallax */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1daa9086-0f1d-4d65-86b5-4a15a36d08d4/traditional-food-around-the-world-Travlinmad.jpg")' }}
      />
      
      {/* Dynamic Overlay */}
      <div 
        className={`fixed inset-0 z-1 transition-colors duration-300 ${
          isDarkMode ? "bg-black/75" : "bg-white/82"
        }`} 
      />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="CookWhisperer Logo"
            width={60}
            height={60}
            className="drop-shadow-2xl brightness-110 transition-transform group-hover:scale-110"
          />
          <span className={`text-2xl font-extrabold tracking-tighter sm:text-3xl ${isDarkMode ? "text-white" : "text-zinc-900"}`}>CookWhisperer</span>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 ${isDarkMode ? "bg-[#1a1a1a] text-white border border-[#2a2a2a]" : "bg-white text-zinc-900 shadow-sm border border-zinc-200"}`}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <Link href="/" className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>Back to Home</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-12 pb-32">
        {/* Ingredient Input Section */}
        <section className="px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
             <div className={`inline-flex items-center gap-3 rounded-full border px-6 py-2 text-sm font-black uppercase tracking-[0.2em] mb-8 ${isDarkMode ? "bg-[#1a1a1a] border-[#2a2a2a] text-[#00c896]" : "bg-white border-zinc-200 text-[#00c896]"}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c896] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c896]"></span>
                </span>
                <span>Kitchen Assistant</span>
              </div>
            
            <h1 className={`text-5xl sm:text-8xl font-black mb-12 tracking-tight leading-tight ${isDarkMode ? "text-white" : "text-[#111111]"}`}>
              What's in your <span className="text-[#00c896]">fridge</span> today?
            </h1>
            
            <div className={`p-9 rounded-[20px] mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.6)] border transition-all duration-300 ${isDarkMode ? "bg-[#111111] border-[#2a2a2a]" : "bg-white border-zinc-200"}`}>
              <div className="relative z-10">
                {/* Search Input Container */}
                <div className={`relative mb-8 rounded-xl transition-all duration-300 border ${isDarkMode ? "bg-[#1a1a1a] border-[#333333]" : "bg-[#f4f4f4] border-zinc-200"} focus-within:border-[#00c896]`}>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl opacity-40">🔍</div>
                  <div className="flex flex-wrap items-center gap-3 p-4 pl-16 min-h-[72px]">
                    {ingredients.map(ing => (
                      <span key={ing} className="flex items-center gap-2 bg-[#00c896] text-black px-5 py-2.5 rounded-full text-sm font-black shadow-sm">
                        ✓ {ing}
                        <button onClick={() => removeIngredient(ing)} className="ml-1 hover:scale-125 transition-transform">×</button>
                      </span>
                    ))}
                    <input 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addIngredient(inputValue)}
                      placeholder="e.g. Tomato, Onion..."
                      className={`flex-1 bg-transparent border-none outline-hidden text-lg sm:text-xl py-2 font-medium ${isDarkMode ? "text-white placeholder:text-[#666666]" : "text-[#111111] placeholder:text-zinc-400"}`}
                    />
                  </div>
                </div>

                {/* Ingredient Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {quickAdd.map((item) => {
                    const isSelected = ingredients.includes(item.name);
                    return (
                      <button 
                        key={item.name}
                        onClick={() => isSelected ? removeIngredient(item.name) : addIngredient(item.name)}
                        className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                          isSelected 
                          ? "bg-[#00c896] text-black border-none" 
                          : isDarkMode 
                            ? "bg-[#1e1e1e] border-[#303030] text-[#bbbbbb] hover:bg-[#252525]" 
                            : "bg-[#eeeeee] border-[#cccccc] text-zinc-700 hover:bg-[#e4e4e4]"
                        } border`}
                      >
                        {isSelected && <span>✓</span>}
                        <span className="text-xl">{item.emoji}</span> {item.name}
                      </button>
                    );
                  })}
                </div>

                {/* Filters Side by Side */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                  <div className={`flex-1 flex items-center gap-6 p-6 rounded-2xl border transition-all ${isDarkMode ? "bg-[#1a1a1a] border-[#333333]" : "bg-[#f4f4f4] border-zinc-200"}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${isDarkMode ? "text-[#888888]" : "text-zinc-500"}`}>Cuisine</span>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Indian", "Chinese", "Italian"].map(c => (
                        <button 
                          key={c}
                          onClick={() => setCuisine(c)}
                          className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                            cuisine === c 
                            ? isDarkMode ? "bg-white text-black" : "bg-[#111111] text-white" 
                            : isDarkMode ? "bg-[#1a1a1a] text-[#888888] border border-[#333333]" : "bg-white text-zinc-500 border border-zinc-200"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={`flex-1 flex items-center gap-6 p-6 rounded-2xl border transition-all ${isDarkMode ? "bg-[#1a1a1a] border-[#333333]" : "bg-[#f4f4f4] border-zinc-200"}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${isDarkMode ? "text-[#888888]" : "text-zinc-500"}`}>Diet</span>
                    <div className="flex flex-wrap gap-2">
                      {["Veg", "Non-Veg", "Vegan", "Jain"].map(d => (
                        <button 
                          key={d}
                          onClick={() => setDiet(d)}
                          className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                            diet === d 
                            ? "bg-[#00c896] text-black" 
                            : isDarkMode ? "bg-[#1a1a1a] text-[#888888] border border-[#333333]" : "bg-white text-zinc-500 border border-zinc-200"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Find My Recipe Button */}
                <div className="relative group/btn">
                  <Button 
                    onClick={generateRecipes}
                    disabled={ingredients.length === 0}
                    className="w-full h-[60px] rounded-xl text-lg font-bold text-white shadow-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden bg-[#00c896]"
                  >
                    Find My Recipe ✨
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Results Section */}
        {(isGenerating || recipes.length > 0) && (
          <section id="results" className="py-24 px-6 lg:px-16 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h2 className={`text-4xl sm:text-6xl font-black mb-4 ${isDarkMode ? "text-white" : "text-[#111111]"}`}>AI Recommendations</h2>
                  <p className={`text-xl ${isDarkMode ? "opacity-60" : "text-zinc-600"}`}>Handpicked for your ingredients and {cuisine} preference.</p>
                </div>
                {recipes.length > 0 && !isGenerating && (
                  <button onClick={generateRecipes} className="text-[#00c896] font-bold flex items-center gap-2 hover:underline">
                    Refresh Magic ↺
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {isGenerating ? (
                  [1, 2, 3].map(i => (
                    <div key={i} className={`h-[500px] rounded-3xl animate-pulse ${isDarkMode ? "bg-[#1a1a1a]" : "bg-zinc-200"}`} />
                  ))
                ) : (
                  recipes.map((recipe) => (
                    <GlareCard key={recipe.id}>
                      <div className={`h-full w-full rounded-3xl overflow-hidden group transition-all border ${isDarkMode ? "bg-[#111111] border-[#2a2a2a]" : "bg-white border-zinc-200 shadow-xl"}`}>
                        <div className="relative h-48 overflow-hidden">
                          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-1 rounded-full text-xs font-bold border border-white/10">
                            {recipe.match}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex gap-2 mb-3">
                            {recipe.tags.map((tag: string) => (
                              <span key={tag} className={`text-[10px] uppercase tracking-widest font-black px-2 py-1 rounded-full border ${isDarkMode ? "bg-[#1a1a1a] text-[#00c896] border-[#00c896]/20" : "bg-zinc-100 text-zinc-600 border-zinc-200"}`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className={`text-xl font-black mb-3 group-hover:text-[#00c896] transition-colors leading-tight ${isDarkMode ? "text-white" : "text-[#111111]"}`}>{recipe.title}</h3>
                          <div className={`flex justify-between items-center pt-4 border-t ${isDarkMode ? "border-white/5" : "border-zinc-100"}`}>
                            <div className={`flex gap-3 text-[10px] font-bold ${isDarkMode ? "opacity-60" : "text-zinc-500"}`}>
                              <span>⏱ {recipe.time}</span>
                              <span>🔥 {recipe.difficulty}</span>
                            </div>
                            <button 
                              onClick={() => alert("Recipe details are coming soon to the AI Kitchen!")}
                              className="text-[#00c896] font-black text-[10px] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                            >
                              View →
                            </button>
                          </div>
                        </div>
                      </div>
                    </GlareCard>
                  ))
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className={`pt-32 pb-12 px-6 lg:px-16 relative z-10`}>
        <div className={`max-w-7xl mx-auto text-center font-bold opacity-40 border-t pt-12 ${isDarkMode ? "border-white/5 text-white" : "border-zinc-200 text-[#111111]"}`}>
          © 2025 CookWhisperer AI. Made with ❤️ in India
        </div>
      </footer>
    </div>
  );
}
