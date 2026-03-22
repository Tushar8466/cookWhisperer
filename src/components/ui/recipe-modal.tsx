import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Recipe } from "../../lib/recipe-data";
import Image from "next/image";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const RecipeModal = ({ recipe, isOpen, onClose, isDarkMode }: RecipeModalProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isOpen) setIsFullscreen(false);
  }, [isOpen]);

  if (!recipe) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed inset-x-4 top-[10%] bottom-[10%] z-50 mx-auto max-w-4xl overflow-hidden rounded-[24px] shadow-2xl ${
              isDarkMode ? "bg-[#111111] border border-[#2a2a2a] text-white" : "bg-white text-zinc-900"
            }`}
          >
            <div className="flex h-full flex-col md:flex-row">
              {/* Image Side */}
              <div 
                className="relative h-64 w-full md:h-full md:w-1/2 group cursor-zoom-in overflow-hidden border-r border-[#2a2a2a]/20"
                onClick={() => setIsFullscreen(true)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 hidden md:flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest bg-black/50 px-6 py-3 rounded-full backdrop-blur-md shadow-2xl">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                    Full Image
                  </span>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:hidden pointer-events-none" />
                <button
                  onClick={(e) => { e.stopPropagation(); onClose(); }}
                  className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95 md:hidden"
                >
                  ✕
                </button>
              </div>

              {/* Content Side */}
              <div className="relative flex flex-1 flex-col overflow-y-auto p-8 lg:p-12">
                <button
                  onClick={onClose}
                  className={`absolute right-8 top-8 hidden h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 md:flex ${
                    isDarkMode ? "bg-[#1a1a1a] text-white hover:bg-[#252525]" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                  }`}
                >
                  ✕
                </button>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map(tag => (
                      <span key={tag} className="bg-[#00c896]/10 text-[#00c896] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[#00c896]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl font-black mb-4 leading-tight">{recipe.title}</h2>
                  <p className={`text-lg leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                    {recipe.description}
                  </p>
                </div>

                {/* Quick Info */}
                <div className={`grid grid-cols-3 gap-4 mb-10 p-4 rounded-2xl ${isDarkMode ? "bg-[#1a1a1a]" : "bg-zinc-50"}`}>
                  <div className="text-center">
                    <span className="block text-[10px] font-black uppercase tracking-tighter opacity-50 mb-1">Time</span>
                    <span className="font-bold">⏱ {recipe.time}</span>
                  </div>
                  <div className="text-center border-x border-white/5">
                    <span className="block text-[10px] font-black uppercase tracking-tighter opacity-50 mb-1">Difficulty</span>
                    <span className="font-bold">🔥 {recipe.difficulty}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[10px] font-black uppercase tracking-tighter opacity-50 mb-1">Calories</span>
                    <span className="font-bold">⚡️ {recipe.nutrition.calories} kcal</span>
                  </div>
                </div>

                {/* Ingredients & Instructions */}
                <motion.div 
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="space-y-10"
                >
                  <motion.section variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                    <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                      <span className="h-6 w-1 bg-[#00c896] rounded-full" />
                      Ingredients
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {recipe.ingredients.map(ing => (
                        <li key={ing} className="flex items-center gap-3 group">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00c896] group-hover:scale-150 transition-transform" />
                          <span className={`${isDarkMode ? "text-zinc-300" : "text-zinc-700"} transition-colors group-hover:text-[#00c896]`}>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.section>

                  <motion.section variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                    <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                      <span className="h-6 w-1 bg-[#00c896] rounded-full" />
                      Instructions
                    </h3>
                    <div className="space-y-6">
                      {recipe.instructions.map((step, idx) => (
                        <div key={idx} className="flex gap-4 group">
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all group-hover:scale-110 ${
                            isDarkMode ? "bg-[#2a2a2a] text-[#00c896] group-hover:bg-[#00c896]/20" : "bg-zinc-100 text-[#00c896] group-hover:bg-[#00c896]/10"
                          }`}>
                            {idx + 1}
                          </span>
                          <p className={`${isDarkMode ? "text-zinc-300" : "text-zinc-700"} leading-relaxed transition-colors group-hover:text-white`}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Fullscreen Image Overlay */}
          <AnimatePresence>
            {isFullscreen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFullscreen(false)}
                className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-2xl cursor-zoom-out p-4 md:p-12"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,150,0.1)_0%,transparent_60%)] pointer-events-none" />
                <button 
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-all hover:scale-110 active:scale-95 hover:bg-white/20 border border-white/10 shadow-2xl z-20"
                >
                  ✕
                </button>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  src={recipe.image}
                  alt={recipe.title}
                  className="relative z-10 max-h-full max-w-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};
