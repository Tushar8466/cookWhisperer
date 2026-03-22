export interface Recipe {
  id: number;
  title: string;
  time: string;
  difficulty: string;
  match: string;
  image: string;
  tags: string[];
  description: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const recipeDatabase: Recipe[] = [
  {
    id: 1,
    title: "Gourmet Mushroom Risotto",
    time: "35 mins",
    difficulty: "Medium",
    match: "98% Match",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    tags: ["Veg", "Italian"],
    description: "A creamy, luxurious risotto with sautéed mushrooms and a hint of truffle oil.",
    ingredients: ["Arborio Rice", "Mushrooms", "Onion", "Garlic", "Parmesan", "Vegetable Broth"],
    instructions: [
      "Sauté onions and garlic in olive oil until soft.",
      "Add rice and toast for 2 minutes.",
      "Gradually add warm broth, stirring constantly until absorbed.",
      "Stir in sautéed mushrooms and parmesan cheese.",
      "Garnish with herbs and serve warm."
    ],
    nutrition: { calories: "450", protein: "12g", carbs: "65g", fat: "15g" }
  },
  {
    id: 2,
    title: "Spicy Paneer Tikka",
    time: "25 mins",
    difficulty: "Medium",
    match: "95% Match",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80",
    tags: ["Veg", "Indian"],
    description: "Char-grilled paneer cubes marinated in yogurt and spicy Indian masalas.",
    ingredients: ["Paneer", "Yogurt", "Bell Peppers", "Onion", "Ginger-Garlic Paste", "Tandoori Masala"],
    instructions: [
      "Mix yogurt and spices to create the marinade.",
      "Coat paneer and vegetables in the marinade for 30 mins.",
      "Skewer the pieces and grill or pan-fry until charred.",
      "Serve with mint chutney and lemon wedges."
    ],
    nutrition: { calories: "320", protein: "18g", carbs: "8g", fat: "24g" }
  },
  {
    id: 3,
    title: "Garlic Butter Shrimp Pasta",
    time: "15 mins",
    difficulty: "Easy",
    match: "92% Match",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
    tags: ["Non-Veg", "Italian"],
    description: "Succulent shrimp tossed in a rich garlic butter sauce with al dente spaghetti.",
    ingredients: ["Shrimp", "Spaghetti", "Butter", "Garlic", "Lemon", "Parsley"],
    instructions: [
      "Boil pasta until al dente.",
      "Sauté garlic in butter until fragrant.",
      "Add shrimp and cook until pink.",
      "Toss in pasta, lemon juice, and parsley.",
      "Season with salt and pepper to taste."
    ],
    nutrition: { calories: "550", protein: "28g", carbs: "52g", fat: "22g" }
  },
  {
    id: 4,
    title: "Classic Egg Fried Rice",
    time: "10 mins",
    difficulty: "Easy",
    match: "90% Match",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    tags: ["Non-Veg", "Chinese"],
    description: "A quick and flavorful Chinese-style fried rice with scrambled eggs and vegetables.",
    ingredients: ["Rice", "Egg", "Spring Onion", "Soy Sauce", "Ginger", "Sesame Oil"],
    instructions: [
      "Scramble eggs in a hot wok and set aside.",
      "Sauté ginger and spring onions.",
      "Add cold cooked rice and toss with soy sauce.",
      "Stir in the eggs and sesame oil.",
      "Serve hot with a drizzle of chili oil."
    ],
    nutrition: { calories: "380", protein: "14g", carbs: "48g", fat: "12g" }
  },
  {
    id: 5,
    title: "Mediterranean Hummus Bowl",
    time: "10 mins",
    difficulty: "Easy",
    match: "88% Match",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    tags: ["Vegan", "Healthy"],
    description: "A fresh and nutritious bowl with creamy hummus, cucumber, and chickpeas.",
    ingredients: ["Hummus", "Chickpeas", "Cucumber", "Tomato", "Olive Oil", "Lemon"],
    instructions: [
      "Arrange hummus and chickpeas in a bowl.",
      "Add chopped cucumber and tomatoes.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt and serves with pita bread."
    ],
    nutrition: { calories: "280", protein: "10g", carbs: "32g", fat: "14g" }
  },
  {
    id: 6,
    title: "Classic Margherita Pizza",
    time: "20 mins",
    difficulty: "Medium",
    match: "94% Match",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
    tags: ["Veg", "Italian"],
    description: "Traditional Italian pizza with fresh tomatoes, mozzarella, and basil on a crispy crust.",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Fresh Mozzarella", "Basil Leaves", "Olive Oil"],
    instructions: [
      "Stretch pizza dough into a circle.",
      "Spread a thin layer of tomato sauce.",
      "Tear fresh mozzarella and distribute evenly over the pizza.",
      "Bake in a very hot oven until the crust is golden and cheese is bubbly.",
      "Top with fresh basil and a drizzle of olive oil before serving."
    ],
    nutrition: { calories: "420", protein: "16g", carbs: "50g", fat: "18g" }
  },
  {
    id: 7,
    title: "Creamy Palak Paneer",
    time: "30 mins",
    difficulty: "Medium",
    match: "91% Match",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    tags: ["Veg", "Indian"],
    description: "Soft paneer cubes simmered in an aromatic, vibrant green spinach gravy.",
    ingredients: ["Spinach", "Paneer", "Onion", "Tomato", "Garlic", "Garam Masala", "Cream"],
    instructions: [
      "Blanch the spinach and blend into a smooth puree.",
      "Sauté chopped onions, garlic, and tomatoes until soft and fragrant.",
      "Add dry spices including garam masala and turmeric.",
      "Mix in the spinach puree and simmer for 5 minutes.",
      "Add paneer cubes and a splash of cream before serving."
    ],
    nutrition: { calories: "350", protein: "15g", carbs: "12g", fat: "28g" }
  },
  {
    id: 8,
    title: "Chicken Tikka Masala",
    time: "40 mins",
    difficulty: "Hard",
    match: "97% Match",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41aa?w=800&q=80",
    tags: ["Non-Veg", "Indian"],
    description: "Roasted marinated chicken chunks in a spiced, intensely flavorful curry sauce.",
    ingredients: ["Chicken Breast", "Yogurt", "Tomato Puree", "Onion", "Ginger", "Tikka Spices", "Heavy Cream"],
    instructions: [
      "Marinate chicken in yogurt and spices, then bake or pan-fry until browned.",
      "In a separate pan, sauté onions, ginger, and garlic.",
      "Add tomato puree and spices, simmering until oil separates.",
      "Stir in heavy cream and the cooked chicken.",
      "Let simmer until flavors meld, and serve with naan."
    ],
    nutrition: { calories: "480", protein: "35g", carbs: "15g", fat: "30g" }
  },
  {
    id: 9,
    title: "Spicy Beef Stir-Fry",
    time: "15 mins",
    difficulty: "Easy",
    match: "89% Match",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    tags: ["Non-Veg", "Chinese"],
    description: "Tender beef strips seared quickly with crunchy veggies in a savory soy-ginger sauce.",
    ingredients: ["Beef Slices", "Broccoli", "Bell Peppers", "Soy Sauce", "Ginger", "Garlic"],
    instructions: [
      "Thinly slice beef against the grain.",
      "Sizzle ginger and garlic in a very hot wok or skillet.",
      "Sear beef quickly until just browned on the outside.",
      "Toss in chopped broccoli and bell peppers, cooking for 2 minutes.",
      "Add soy sauce mixture, thicken slightly, and serve over rice."
    ],
    nutrition: { calories: "410", protein: "32g", carbs: "20g", fat: "22g" }
  },
  {
    id: 10,
    title: "Vegan Lentil Soup",
    time: "45 mins",
    difficulty: "Easy",
    match: "85% Match",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    tags: ["Vegan", "Healthy"],
    description: "A hearty, warming soup packed with protein-rich lentils, carrots, and celery.",
    ingredients: ["Brown Lentils", "Carrots", "Celery", "Onion", "Vegetable Broth", "Cumin", "Thyme"],
    instructions: [
      "Sauté diced onions, carrots, and celery until softened.",
      "Add cumin and thyme, roasting for 1 minute.",
      "Stir in rinsed lentils and pour over vegetable broth.",
      "Bring to a boil, then reduce heat and simmer for 30 minutes.",
      "Season generously and serve hot with crusty bread."
    ],
    nutrition: { calories: "290", protein: "16g", carbs: "45g", fat: "3g" }
  },
  {
    id: 11,
    title: "Kung Pao Chicken",
    time: "25 mins",
    difficulty: "Medium",
    match: "93% Match",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
    tags: ["Non-Veg", "Chinese"],
    description: "A classic Sichuan dish featuring chicken, peanuts, and dried chilies in a bold sauce.",
    ingredients: ["Chicken Cubes", "Peanuts", "Dried Red Chilies", "Soy Sauce", "Vinegar", "Sichuan Peppercorns"],
    instructions: [
      "Marinate chicken cubes with a splash of soy sauce and cornstarch.",
      "Fry chicken until golden and remove from wok.",
      "Toast dried chilies and peppercorns quickly, avoiding burning.",
      "Add scallions, return chicken to the wok, and toss with the Kung Pao sauce.",
      "Stir in roasted peanuts right before serving."
    ],
    nutrition: { calories: "450", protein: "30g", carbs: "18g", fat: "26g" }
  },
  {
    id: 12,
    title: "Lemon Herb Baked Salmon",
    time: "20 mins",
    difficulty: "Easy",
    match: "96% Match",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    tags: ["Non-Veg", "Healthy"],
    description: "Flaky, omega-3 rich salmon baked perfectly with fresh lemon juice and dill.",
    ingredients: ["Salmon Fillet", "Lemon", "Dill", "Olive Oil", "Garlic", "Asparagus"],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Place salmon fillets on a baking sheet lined with foil.",
      "Drizzle with olive oil, crushed garlic, chopped dill, and lemon juice.",
      "Arrange trimmed asparagus around the fish.",
      "Bake for 12-15 minutes until salmon flakes easily with a fork."
    ],
    nutrition: { calories: "360", protein: "34g", carbs: "4g", fat: "22g" }
  },
  {
    id: 13,
    title: "Chana Masala (Chickpea Curry)",
    time: "25 mins",
    difficulty: "Medium",
    match: "89% Match",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    tags: ["Vegan", "Indian"],
    description: "A robust, tangy chickpea curry cooked in a rich tomato and onion base.",
    ingredients: ["Chickpeas", "Tomato Puree", "Onion", "Chana Masala Spice", "Coriander", "Ginger"],
    instructions: [
      "Fry onions, ginger, and garlic until deeply golden brown.",
      "Add chana masala spice mix and toast lightly.",
      "Pour in tomato puree and cook until the sauce thickens and releases oil.",
      "Add boiled or canned chickpeas and simmer for 10 minutes.",
      "Garnish with lots of fresh coriander and a squeeze of lemon."
    ],
    nutrition: { calories: "310", protein: "12g", carbs: "45g", fat: "8g" }
  },
  {
    id: 14,
    title: "Penne Pasta Primavera",
    time: "20 mins",
    difficulty: "Easy",
    match: "84% Match",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    tags: ["Veg", "Italian", "Healthy"],
    description: "A light, vibrant pasta dish loaded with fresh, crisp seasonal vegetables.",
    ingredients: ["Penne Pasta", "Zucchini", "Cherry Tomatoes", "Bell Peppers", "Olive Oil", "Parmesan"],
    instructions: [
      "Boil pasta in heavily salted water until al dente.",
      "Slice vegetables evenly and sauté in olive oil until just tender.",
      "Toss the hot pasta with the sautéed vegetables.",
      "Add a splash of pasta water to create a light emulsion.",
      "Finish with freshly grated parmesan and cracked black pepper."
    ],
    nutrition: { calories: "380", protein: "12g", carbs: "60g", fat: "10g" }
  },
  {
    id: 15,
    title: "Crispy Tofu Peanut Bowl",
    time: "25 mins",
    difficulty: "Medium",
    match: "87% Match",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    tags: ["Vegan", "Healthy", "Chinese"],
    description: "Golden baked tofu bites served over quinoa, drenched in a creamy peanut dressing.",
    ingredients: ["Firm Tofu", "Quinoa", "Peanut Butter", "Soy Sauce", "Lime", "Edamame"],
    instructions: [
      "Press and cube tofu, toss with cornstarch, and bake until crisp.",
      "Cook quinoa according to package instructions.",
      "Whisk peanut butter, soy sauce, lime juice, and a splash of warm water for the dressing.",
      "Assemble bowls with quinoa, baked tofu, and edamame.",
      "Drizzle generously with peanut sauce."
    ],
    nutrition: { calories: "420", protein: "20g", carbs: "48g", fat: "18g" }
  },
  {
    id: 16,
    title: "Classic Miso Soup",
    time: "15 mins",
    difficulty: "Easy",
    match: "92% Match",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    tags: ["Vegan", "Japanese"],
    description: "A traditional, comforting Japanese soup with delicate tofu cubes and seaweed.",
    ingredients: ["Miso Paste", "Tofu", "Wakame Seaweed", "Dashi Stock", "Spring Onion"],
    instructions: [
      "Bring dashi stock to a gentle simmer.",
      "Soak wakame seaweed until expanded, then add to the broth.",
      "Gently stir in cubed silken tofu.",
      "Remove a ladle of broth, dissolve the miso paste in it, and whisk it back into the pot.",
      "Turn off the heat immediately to preserve the miso flavor. Garnish with spring onions."
    ],
    nutrition: { calories: "80", protein: "6g", carbs: "8g", fat: "2g" }
  },
  {
    id: 17,
    title: "Vegetable Hakka Noodles",
    time: "20 mins",
    difficulty: "Easy",
    match: "94% Match",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
    tags: ["Veg", "Chinese"],
    description: "Street-style Indo-Chinese noodles tossed with crunchy vegetables and soy sauce.",
    ingredients: ["Noodles", "Cabbage", "Carrot", "Bell Pepper", "Garlic", "Soy Sauce"],
    instructions: [
      "Boil noodles until just cooked, then drain and toss with a little oil.",
      "Heat oil in a wok on high heat and quickly stir-fry minced garlic.",
      "Add thinly sliced cabbage, carrots, and bell peppers, tossing vigorously.",
      "Add the boiled noodles along with soy sauce, vinegar, and a pinch of white pepper.",
      "Toss everything together until well combined and smoking hot."
    ],
    nutrition: { calories: "350", protein: "8g", carbs: "65g", fat: "10g" }
  },
  {
    id: 18,
    title: "Dal Makhani",
    time: "4 Hours",
    difficulty: "Hard",
    match: "98% Match",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    tags: ["Veg", "Indian"],
    description: "A rich, creamy, slow-cooked black lentil curry bursting with buttery flavors.",
    ingredients: ["Whole Black Lentils", "Kidney Beans", "Butter", "Cream", "Tomato Puree", "Garlic"],
    instructions: [
      "Soak lentils and beans overnight, then pressure cook until completely soft.",
      "In a heavy-bottomed pan, melt abundant butter and sauté garlic and tomato puree.",
      "Add Kashmiri chili powder and the cooked lentils along with their cooking water.",
      "Simmer on the lowest possible heat for hours, mashing the lentils occasionally for creaminess.",
      "Finish with heavy cream and serve with garlic naan."
    ],
    nutrition: { calories: "420", protein: "14g", carbs: "40g", fat: "25g" }
  },
  {
    id: 19,
    title: "Avocado Toast with Poached Egg",
    time: "10 mins",
    difficulty: "Medium",
    match: "90% Match",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    tags: ["Veg", "Healthy"],
    description: "A quintessential cafe-style breakfast loaded with healthy fats and protein.",
    ingredients: ["Sourdough Bread", "Avocado", "Egg", "Lemon", "Chili Flakes", "Olive Oil"],
    instructions: [
      "Toast a thick slice of sourdough bread until golden and crisp.",
      "Mash a ripe avocado with lemon juice, salt, and pepper.",
      "Bring a pot of water to a gentle simmer with a drop of vinegar, swirl, and poach an egg for 3 minutes.",
      "Spread the avocado onto the toast and gently place the poached egg on top.",
      "Garnish with chili flakes and a drizzle of premium olive oil."
    ],
    nutrition: { calories: "320", protein: "14g", carbs: "25g", fat: "20g" }
  },
  {
    id: 20,
    title: "Sweet and Sour Pork",
    time: "40 mins",
    difficulty: "Medium",
    match: "86% Match",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    tags: ["Non-Veg", "Chinese"],
    description: "Crispy fried pork pieces coated in an irresistible sticky, tangy, and sweet sauce.",
    ingredients: ["Pork Loin", "Pineapple", "Bell Peppers", "Cornstarch", "Ketchup", "Vinegar"],
    instructions: [
      "Cut pork into bite-sized pieces, toss in a wet cornstarch batter, and deep fry until crispy.",
      "In a clean wok, mix ketchup, vinegar, sugar, and soy sauce to create the sweet and sour base.",
      "Bring the sauce to a boil and thicken with cornstarch slurry.",
      "Toss in chunks of pineapple, bell peppers, and the crispy pork.",
      "Quickly coat everything in the glossy sauce and serve immediately."
    ],
    nutrition: { calories: "550", protein: "28g", carbs: "52g", fat: "26g" }
  },
  {
    id: 21,
    title: "Mediterranean Quinoa Salad",
    time: "15 mins",
    difficulty: "Easy",
    match: "89% Match",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    tags: ["Vegan", "Healthy"],
    description: "A bright, refreshing, protein-packed salad with feta, olives, and a lemon vinaigrette.",
    ingredients: ["Quinoa", "Cherry Tomatoes", "Cucumber", "Kalamata Olives", "Feta Cheese", "Lemon"],
    instructions: [
      "Cook quinoa and let it cool completely.",
      "Chop cucumbers, halve cherry tomatoes, and pit the olives.",
      "Whisk together olive oil, lemon juice, dried oregano, salt, and pepper.",
      "Toss the quinoa with the vegetables and dressing.",
      "Crumble feta cheese over the top before serving."
    ],
    nutrition: { calories: "340", protein: "12g", carbs: "42g", fat: "16g" }
  },
  {
    id: 22,
    title: "Creamy Chicken Alfredo",
    time: "25 mins",
    difficulty: "Medium",
    match: "95% Match",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    tags: ["Non-Veg", "Italian"],
    description: "Tender chicken and fettuccine pasta smothered in a rich, buttery parmesan sauce.",
    ingredients: ["Fettuccine", "Chicken Breast", "Heavy Cream", "Butter", "Parmesan", "Garlic"],
    instructions: [
      "Season and pan-sear chicken breast until cooked through, then slice.",
      "Boil fettuccine until al dente.",
      "Melt butter in a skillet, add minced garlic, and stir in heavy cream.",
      "Simmer the cream slightly, then fold in generous amounts of freshly grated parmesan.",
      "Toss the pasta and sliced chicken in the rich sauce until fully coated."
    ],
    nutrition: { calories: "680", protein: "35g", carbs: "45g", fat: "40g" }
  },
  {
    id: 23,
    title: "Aloo Gobi (Potato & Cauliflower)",
    time: "30 mins",
    difficulty: "Easy",
    match: "91% Match",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80",
    tags: ["Vegan", "Indian"],
    description: "A comforting, homestyle dry curry featuring toasted spices, cauliflower, and potatoes.",
    ingredients: ["Potatoes", "Cauliflower", "Onion", "Tomato", "Turmeric", "Cumin Seeds"],
    instructions: [
      "Heat oil in a pan and temper cumin seeds until they splutter.",
      "Sauté finely chopped onions and tomatoes with turmeric and coriander powder.",
      "Add cubed potatoes and cauliflower florets.",
      "Cover and cook on low heat until the vegetables are tender but still hold their shape.",
      "Garnish with julienned ginger and fresh cilantro."
    ],
    nutrition: { calories: "210", protein: "5g", carbs: "35g", fat: "7g" }
  },
  {
    id: 24,
    title: "Vegetarian Spring Rolls",
    time: "35 mins",
    difficulty: "Medium",
    match: "85% Match",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    tags: ["Vegan", "Chinese"],
    description: "Crispy, golden-fried wrappers filled with a savory mixture of shredded vegetables.",
    ingredients: ["Spring Roll Wrappers", "Cabbage", "Carrot", "Glass Noodles", "Soy Sauce", "Oil"],
    instructions: [
      "Rehydrate glass noodles and chop them into small pieces.",
      "Stir-fry shredded cabbage and carrots with soy sauce until wilted but crunchy.",
      "Place a spoonful of filling on a wrapper, fold the sides, and roll tightly, sealing the edge with water.",
      "Deep fry the rolls in hot oil until they are golden brown and blistered.",
      "Serve hot with sweet chili sauce."
    ],
    nutrition: { calories: "320", protein: "6g", carbs: "42g", fat: "14g" }
  },
  {
    id: 25,
    title: "Classic Baked Ziti",
    time: "50 mins",
    difficulty: "Medium",
    match: "93% Match",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
    tags: ["Veg", "Italian"],
    description: "A hearty baked pasta dish layered with robust tomato sauce, ricotta, and melted mozzarella.",
    ingredients: ["Ziti Pasta", "Marinara Sauce", "Ricotta Cheese", "Mozzarella", "Parmesan", "Basil"],
    instructions: [
      "Preheat the oven to 375°F (190°C) and boil ziti until slightly undercooked.",
      "Mix the cooked pasta with marinara sauce and dollops of ricotta cheese.",
      "Transfer half the pasta mixture into a baking dish and cover with shredded mozzarella.",
      "Add the remaining pasta and top generously with more mozzarella and parmesan.",
      "Bake until the cheese is melted, bubbly, and browned around the edges."
    ],
    nutrition: { calories: "480", protein: "22g", carbs: "55g", fat: "18g" }
  },
  {
    id: 26,
    title: "Beef and Broccoli",
    time: "20 mins",
    difficulty: "Easy",
    match: "88% Match",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    tags: ["Non-Veg", "Chinese"],
    description: "A quick, savory stir-fry of tender beef strips and crisp broccoli in a ginger-soy glaze.",
    ingredients: ["Flank Steak", "Broccoli", "Soy Sauce", "Oyster Sauce", "Garlic", "Ginger"],
    instructions: [
      "Thinly slice the steak against the grain and toss with a little soy sauce and cornstarch.",
      "Blanch the broccoli florets for 1 minute, then drain.",
      "Sauté ginger and garlic in a hot wok, add the beef, and sear until browned.",
      "Toss in the broccoli and pour the savory glaze over the mix.",
      "Stir constantly until the sauce thickens and coats everything evenly."
    ],
    nutrition: { calories: "390", protein: "32g", carbs: "15g", fat: "20g" }
  },
  {
    id: 27,
    title: "Eggplant Parmesan",
    time: "60 mins",
    difficulty: "Medium",
    match: "93% Match",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    tags: ["Veg", "Italian"],
    description: "Crispy breaded eggplant slices baked with rich marinara sauce and gooey cheese.",
    ingredients: ["Eggplant", "Breadcrumbs", "Marinara Sauce", "Mozzarella", "Parmesan", "Basil"],
    instructions: [
      "Slice the eggplant, salt it to draw out moisture, and pat dry.",
      "Dip slices in egg, coat with breadcrumbs, and bake or fry until crispy.",
      "Layer the crispy eggplant with marinara sauce, mozzarella, and parmesan in a baking dish.",
      "Bake until the cheese is melted, bubbly, and golden on top.",
      "Let it cool slightly and garnish with fresh basil leaves before serving."
    ],
    nutrition: { calories: "450", protein: "18g", carbs: "42g", fat: "24g" }
  },
  {
    id: 28,
    title: "Matar Paneer",
    time: "35 mins",
    difficulty: "Medium",
    match: "96% Match",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80",
    tags: ["Veg", "Indian"],
    description: "A popular vegetarian curry made with soft paneer cubes and sweet green peas.",
    ingredients: ["Paneer", "Green Peas", "Tomato", "Onion", "Garam Masala", "Coriander", "Cream"],
    instructions: [
      "Lightly pan-fry paneer cubes until golden and set aside.",
      "Blend boiled onions and tomatoes into a smooth paste.",
      "Cook the paste with aromatic spices until the oil separates.",
      "Add green peas, paneer, and a little water, simmering until the peas are tender.",
      "Finish with a spoonful of cream and fresh coriander."
    ],
    nutrition: { calories: "340", protein: "16g", carbs: "22g", fat: "22g" }
  },
  {
    id: 29,
    title: "Spicy Black Bean Burger",
    time: "30 mins",
    difficulty: "Medium",
    match: "90% Match",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
    tags: ["Vegan", "Healthy"],
    description: "A hearty and flavorful plant-based burger patty made from black beans and spices.",
    ingredients: ["Black Beans", "Oats", "Onion", "Garlic", "Cumin", "Burger Buns", "Lettuce"],
    instructions: [
      "Mash drained black beans roughly, leaving some texture.",
      "Mix in cooked oats, sautéed onions, garlic, and spices.",
      "Form the mixture into thick patties and let them rest for 10 minutes.",
      "Pan-fry the patties in a little oil until a crisp crust forms on both sides.",
      "Serve on toasted buns with fresh lettuce, tomato, and your favorite sauce."
    ],
    nutrition: { calories: "380", protein: "15g", carbs: "55g", fat: "12g" }
  },
  {
    id: 30,
    title: "Lemon Garlic Shrimp Scampi",
    time: "15 mins",
    difficulty: "Easy",
    match: "94% Match",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
    tags: ["Non-Veg", "Italian"],
    description: "Plump shrimp sautéed quickly in a glossy sauce of butter, garlic, and bright lemon juice.",
    ingredients: ["Shrimp", "Linguine", "Butter", "Garlic", "Lemon", "White Wine", "Parsley"],
    instructions: [
      "Cook linguine in salted water until al dente.",
      "Melt butter in a skillet, gently cooking immense amounts of minced garlic.",
      "Add shrimp and cook until just pink, then pour in a splash of white wine and lemon juice.",
      "Toss the hot pasta into the skillet, letting it absorb the sauce.",
      "Garnish heavily with chopped parsley and serve immediately."
    ],
    nutrition: { calories: "480", protein: "28g", carbs: "45g", fat: "20g" }
  },
  {
    id: 31,
    title: "Roasted Sweet Potato Bowl",
    time: "40 mins",
    difficulty: "Easy",
    match: "87% Match",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    tags: ["Vegan", "Healthy"],
    description: "A nourishing bowl layered with caramelized sweet potatoes, kale, and a tahini drizzle.",
    ingredients: ["Sweet Potato", "Kale", "Quinoa", "Chickpeas", "Tahini", "Lemon", "Paprika"],
    instructions: [
      "Toss sweet potato cubes and chickpeas in olive oil and paprika, and roast at 400°F (200°C) until tender.",
      "Massage kale leaves with a little lemon juice and olive oil to soften them.",
      "Prepare a quick dressing by whisking tahini, lemon juice, garlic, and warm water.",
      "Assemble bowls with a base of cooked quinoa, topped with kale and the roasted vegetables.",
      "Drizzle generously with the creamy tahini dressing."
    ],
    nutrition: { calories: "410", protein: "14g", carbs: "62g", fat: "16g" }
  },
  {
    id: 32,
    title: "Authentic Chicken Biryani",
    time: "1 Hour 15 mins",
    difficulty: "Hard",
    match: "97% Match",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41aa?w=800&q=80",
    tags: ["Non-Veg", "Indian"],
    description: "A majestic centerpiece dish of fragrant basmati rice, marinated chicken, and saffron.",
    ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Onion", "Biryani Masala", "Saffron", "Mint"],
    instructions: [
      "Marinate chicken in yogurt, ginger-garlic paste, and biryani spices for at least an hour.",
      "Par-boil basmati rice with whole spices (cardamom, cloves, cinnamon) until 70% cooked.",
      "Fry thinly sliced onions until deeply browned and crisp (birista).",
      "Layer the marinated chicken, par-boiled rice, fried onions, and mint in a heavy pot.",
      "Drizzle with saffron milk, seal the pot airtight with dough or foil, and cook on 'dum' (very low heat) for 30 minutes."
    ],
    nutrition: { calories: "650", protein: "38g", carbs: "60g", fat: "25g" }
  },
  {
    id: 33,
    title: "Classic Caprese Salad",
    time: "10 mins",
    difficulty: "Easy",
    match: "91% Match",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
    tags: ["Veg", "Italian", "Healthy"],
    description: "A ridiculously simple, elegant salad celebrating ripe tomatoes and fresh basil.",
    ingredients: ["Heirloom Tomatoes", "Fresh Mozzarella", "Basil Leaves", "Balsamic Glaze", "Extra Virgin Olive Oil"],
    instructions: [
      "Slice the tomatoes and mozzarella into even, thick rounds.",
      "Arrange them on a platter, alternating between tomato, cheese, and fresh basil leaves.",
      "Drizzle generously with high-quality extra virgin olive oil.",
      "Add a splash of sweet, reduction-style balsamic glaze.",
      "Sprinkle with flaky sea salt and freshly cracked black pepper."
    ],
    nutrition: { calories: "280", protein: "12g", carbs: "8g", fat: "22g" }
  },
  {
    id: 34,
    title: "Spicy Tofu Stir Fry",
    time: "20 mins",
    difficulty: "Medium",
    match: "85% Match",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    tags: ["Vegan", "Chinese"],
    description: "Crispy cubes of tofu and assorted crunchy veggies tossed in a fiery garlic-chili sauce.",
    ingredients: ["Firm Tofu", "Snow Peas", "Carrot", "Garlic", "Chili Paste", "Soy Sauce", "Sesame Oil"],
    instructions: [
      "Press the tofu, cut into cubes, and pan-fry until golden and crispy on all sides.",
      "Remove tofu and sauté minced garlic and vibrant chili paste.",
      "Add sliced carrots and snow peas, stir-frying over high heat for exactly 2 minutes.",
      "Toss the crispy tofu back into the wok.",
      "Pour over a mix of soy sauce and sesame oil, and serve over steamed jasmine rice."
    ],
    nutrition: { calories: "310", protein: "18g", carbs: "15g", fat: "18g" }
  },
  {
    id: 35,
    title: "Hearty Minestrone Soup",
    time: "45 mins",
    difficulty: "Easy",
    match: "89% Match",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    tags: ["Vegan", "Italian", "Healthy"],
    description: "A thick, rustic Italian vegetable soup featuring beans, pasta, and a rich tomato broth.",
    ingredients: ["Kidney Beans", "Ditalini Pasta", "Zucchini", "Carrot", "Celery", "Tomato Base", "Spinach"],
    instructions: [
      "Sauté diced onions, carrots, and celery in olive oil until a soft, fragrant base forms.",
      "Pour in crushed tomatoes and rich vegetable broth, bringing to a simmer.",
      "Add diced zucchini, kidney beans, and dried pasta.",
      "Simmer until the pasta is cooked and the vegetables are tender.",
      "Stir in fresh spinach leaves just before serving, letting them wilt in the residual heat."
    ],
    nutrition: { calories: "290", protein: "12g", carbs: "45g", fat: "5g" }
  }
];

export function getDynamicRecipes(cuisine: string, diet: string, ingredients: string[]): Recipe[] {
  // Simple filtering logic
  let filtered = recipeDatabase.filter(r => {
    const cuisineMatch = cuisine === "All" || r.tags.includes(cuisine);
    const dietMatch = r.tags.includes(diet) || (diet === "Veg" && r.tags.includes("Vegan"));
    return cuisineMatch && dietMatch;
  });

  // If no match, return some random ones from the database
  if (filtered.length === 0) {
    filtered = [...recipeDatabase];
  }

  // Shuffle the filtered array to ensure different results every click
  // and take a random sample of 3 recipes.
  filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  // Personalize title based on main ingredient
  const mainIng = ingredients[0] || "Chef's";
  return filtered.map(r => ({
    ...r,
    title: r.title.replace("Gourmet", mainIng).replace("Classic", mainIng),
    match: `${Math.floor(Math.random() * 10) + 85}% Match`
  }));
}
