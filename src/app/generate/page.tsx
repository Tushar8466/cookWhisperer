"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/stateful-button";
import { GlareCard } from "../../components/ui/glare-card";
import { RecipeModal } from "../../components/ui/recipe-modal";
import { Scales } from "../../components/ui/scales";
import { Recipe, getDynamicRecipes, recipeDatabase } from "../../lib/recipe-data";
import { motion, AnimatePresence } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      staggerChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function GeneratePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [diet, setDiet] = useState("Veg");
  const [isGenerating, setIsGenerating] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const placeholders = [
    "Tomato, Onion, Paneer...",
    "Chicken, Garlic, Ginger...",
    "Potato, Spinach, Corn...",
    "Egg, Cheese, Mushroom...",
  ];

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

  // Typing Animation Effect
  useEffect(() => {
    let currentText = placeholders[0];
    let charIndex = 0;
    let placeholderIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      currentText = placeholders[placeholderIndex];
      
      if (isDeleting) {
        setPlaceholder(currentText.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 50;
      } else {
        setPlaceholder(currentText.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        typingSpeed = 500; // Pause before next
      }

      setTimeout(type, typingSpeed);
    };

    const timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
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
    
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const dynamicResults = getDynamicRecipes(cuisine, diet, ingredients);
    
    setRecipes(dynamicResults);
    setIsGenerating(false);
    
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const openRecipeDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
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
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className={`inline-flex items-center gap-3 rounded-full border px-6 py-2 text-sm font-black uppercase tracking-[0.2em] mb-8 ${isDarkMode ? "bg-[#1a1a1a] border-[#2a2a2a] text-[#00c896]" : "bg-white border-zinc-200 text-[#00c896]"}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c896] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c896]"></span>
                </span>
                <span>AI Kitchen Assistant</span>
              </div>
              <h1 className={`text-5xl sm:text-8xl font-black mb-6 tracking-tight leading-tight ${isDarkMode ? "text-white" : "text-[#111111]"}`}>
                What's in your <span className="text-[#00c896]">fridge</span>?
              </h1>
              <p className={`text-xl font-medium opacity-60 max-w-2xl mx-auto ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                Type ingredients or select quick-add items below to find your next favorite meal.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className={`p-9 rounded-[32px] mb-12 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border transition-all duration-500 ${isDarkMode ? "bg-[#111111] border-white/5" : "bg-white border-zinc-200"}`}
            >
              <div className="space-y-10">
                {/* Search Input */}
                <div className="relative group">
                  <div className="relative flex items-center">
                    <span className="absolute left-6 text-2xl opacity-40">🔍</span>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && inputValue && addIngredient(inputValue)}
                      placeholder={placeholder}
                      className={`w-full pl-16 pr-8 py-6 rounded-[20px] text-xl font-bold transition-all outline-none border-2 ${
                        isDarkMode 
                          ? "bg-[#161616] border-[#2a2a2a] text-white placeholder:text-zinc-600 focus:border-[#00c896]" 
                          : "bg-zinc-50 border-zinc-200 text-[#111111] placeholder:text-zinc-400 focus:border-[#00c896]"
                      }`}
                    />
                  </div>
                </div>

                {/* Selected Ingredients */}
                <AnimatePresence mode="popLayout">
                  {ingredients.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-wrap gap-3"
                    >
                      {ingredients.map(ing => (
                        <motion.button
                          key={ing}
                          layout
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          onClick={() => removeIngredient(ing)}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00c896] text-white font-black text-sm shadow-lg shadow-[#00c896]/20 group"
                        >
                          {ing}
                          <span className="opacity-60 group-hover:opacity-100 transition-opacity">✕</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Quick Add Section */}
                <div className="space-y-6">
                  <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ${isDarkMode ? "text-white" : "text-[#111111]"}`}>
                    Quick Add Essentials
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {quickAdd.map(item => {
                      const isSelected = ingredients.includes(item.name);
                      return (
                        <button
                          key={item.name}
                          onClick={() => isSelected ? removeIngredient(item.name) : addIngredient(item.name)}
                          className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border-2 ${
                            isSelected 
                              ? "bg-[#00c896] text-black border-[#00c896] shadow-[0_4px_14px_rgba(0,200,150,0.3)]" 
                              : isDarkMode 
                                ? "bg-[#161616] border-[#2a2a2a] text-zinc-400 hover:border-[#00c896] hover:text-white" 
                                : "bg-white border-zinc-200 text-zinc-600 hover:border-[#00c896] hover:text-[#111111]"
                          }`}
                        >
                          <span className="text-lg">{item.emoji}</span>
                          {item.name}
                          {isSelected && <span className="ml-1 text-black font-black">✕</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className={`flex-1 p-5 rounded-[20px] border-2 ${isDarkMode ? "bg-[#161616] border-[#2a2a2a]" : "bg-white border-zinc-200"}`}>
                    <span className={`block text-[10px] font-black uppercase tracking-widest mb-3 ${isDarkMode ? "text-[#888888]" : "text-zinc-500"}`}>Cuisine</span>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Indian", "Chinese", "Italian"].map(c => (
                        <button 
                          key={c}
                          onClick={() => setCuisine(c)}
                          className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                            cuisine === c 
                            ? "bg-[#00c896] text-black shadow-[0_4px_10px_rgba(0,200,150,0.3)]" 
                            : isDarkMode ? "bg-[#222222] text-[#888888] hover:text-white hover:bg-[#333333]" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={`flex-1 p-5 rounded-[20px] border-2 ${isDarkMode ? "bg-[#161616] border-[#2a2a2a]" : "bg-white border-zinc-200"}`}>
                    <span className={`block text-[10px] font-black uppercase tracking-widest mb-3 ${isDarkMode ? "text-[#888888]" : "text-zinc-500"}`}>Diet</span>
                    <div className="flex flex-wrap gap-2">
                      {["Veg", "Non-Veg", "Vegan", "Jain"].map(d => (
                        <button 
                          key={d}
                          onClick={() => setDiet(d)}
                          className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                            diet === d 
                            ? "bg-[#00c896] text-black shadow-[0_4px_10px_rgba(0,200,150,0.3)]" 
                            : isDarkMode ? "bg-[#222222] text-[#888888] hover:text-white hover:bg-[#333333]" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Find My Recipe Button */}
                <div className="relative group/btn pt-4">
                  <Button 
                    onClick={generateRecipes}
                    disabled={ingredients.length === 0}
                    className="w-full h-[72px] rounded-[20px] text-xl font-black text-white shadow-2xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden bg-[#00c896]"
                  >
                    Find My Recipe ✨
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Recipe Results Section */}
        <AnimatePresence>
          {(isGenerating || recipes.length > 0) && (
            <section id="results" className="py-24 px-6 lg:px-16 scroll-mt-20">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
                >
                  <div>
                    <h2 className={`text-5xl sm:text-7xl font-black tracking-tighter mb-4 ${isDarkMode ? "text-white" : "text-[#111111]"}`}>
                      AI Recommendations
                    </h2>
                    <p className={`text-xl font-medium opacity-60 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                      Handpicked for your ingredients and {cuisine} preference.
                    </p>
                  </div>
                  <button 
                    onClick={generateRecipes}
                    className="flex items-center gap-3 text-[#00c896] font-black hover:opacity-80 transition-opacity text-sm uppercase tracking-[0.2em]"
                  >
                    Refresh Magic ↺
                  </button>
                </motion.div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {isGenerating ? (
                    [1, 2, 3].map(i => (
                      <motion.div 
                        key={i} 
                        variants={itemVariants}
                        className={`h-[500px] rounded-[32px] animate-pulse ${isDarkMode ? "bg-[#1a1a1a]" : "bg-zinc-100"}`} 
                      />
                    ))
                  ) : (
                    recipes.map((recipe, idx) => (
                      <motion.div 
                        key={recipe.id} 
                        variants={itemVariants}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <GlareCard>
                          <div className={`flex flex-col h-full w-full rounded-[30px] overflow-hidden group transition-all border-2 ${isDarkMode ? "bg-[#161616] border-[#2a2a2a] shadow-[0_10px_40px_rgba(0,0,0,0.8)]" : "bg-white border-zinc-200 shadow-xl"}`}>
                            <div className="relative h-60 w-full overflow-hidden shrink-0">
                              <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                              {/* Sleek gradient overlay for smooth transition to card body */}
                              <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? "from-[#161616] via-[#161616]/20" : "from-white via-white/20"} to-transparent z-10`} />
                              
                              <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 z-20 shadow-lg">
                                {recipe.match}
                              </div>
                              <button 
                                onClick={(e) => toggleFavorite(e, recipe.id)}
                                className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 active:scale-95 border-2 z-20 ${
                                  favorites.includes(recipe.id) 
                                    ? "bg-[#00c896] text-black border-[#00c896] shadow-[0_4px_14px_rgba(0,200,150,0.4)]" 
                                    : "bg-[#161616] text-[#888888] border-[#2a2a2a] hover:border-[#00c896] hover:text-[#00c896]"
                                }`}
                              >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill={favorites.includes(recipe.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                              </button>
                            </div>
                            
                            <div className="relative p-7 pt-2 flex flex-col flex-grow overflow-hidden z-20">
                              {/* Background Pattern */}
                              <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
                                <Scales 
                                  size={16} 
                                  orientation="diagonal" 
                                  color={isDarkMode ? "#ffffff" : "#000000"} 
                                />
                              </div>
                              
                              <div className="flex gap-2 mb-3 relative z-10">
                                {recipe.tags.map((tag: string) => (
                                  <span key={tag} className={`text-[9px] uppercase tracking-[0.2em] font-black px-3 py-1.5 rounded-lg border-2 ${isDarkMode ? "bg-[#222222] text-[#00c896] border-[#333333]" : "bg-zinc-100 text-zinc-600 border-zinc-200"}`}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <h3 className={`text-2xl font-black mb-3 group-hover:text-[#00c896] transition-colors leading-tight relative z-10 ${isDarkMode ? "text-white" : "text-[#111111]"}`}>
                                {recipe.title}
                              </h3>
                              
                              <div className={`flex gap-5 text-[10px] font-black uppercase tracking-widest relative z-10 mb-6 ${isDarkMode ? "text-[#888888]" : "text-zinc-500"}`}>
                                <span className="flex items-center gap-1.5"><span className="text-lg leading-none">⏱</span> {recipe.time}</span>
                                <span className="flex items-center gap-1.5"><span className="text-lg leading-none">🔥</span> {recipe.difficulty}</span>
                              </div>
                              
                              <div className="mt-auto relative z-10">
                                <button 
                                  onClick={() => openRecipeDetails(recipe)}
                                  className="w-full bg-[#00c896] text-black hover:bg-[#00e6ac] hover:shadow-[0_4px_20px_rgba(0,200,150,0.4)] py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                                >
                                  <span>View Recipe</span>
                                  <span className="text-sm">→</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </GlareCard>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </div>
            </section>
          )}
        </AnimatePresence>

        <RecipeModal 
          recipe={selectedRecipe} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          isDarkMode={isDarkMode} 
        />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 lg:px-16 border-t border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="opacity-50" />
            <span className={`text-xl font-black tracking-tighter opacity-50 ${isDarkMode ? "text-white" : "text-black"}`}>CookWhisperer</span>
          </div>
          <div className={`text-sm font-bold opacity-30 ${isDarkMode ? "text-white" : "text-black"}`}>
            © 2025 AI Kitchen. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
