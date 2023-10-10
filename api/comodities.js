const items = [
  {
    id: 1,
    tam: "அரிசி",
    sin: "බර",
    eng: "Rice",
    quantity: 10,
    price: 500,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/rice_rjUkfspMqs.png?updatedAt=1696814724545",
  },
  {
    id: 2,
    tam: "கோதுமை மாவு",
    sin: "කුඹු පොතු",
    eng: "Wheat Flour",
    quantity: 5,
    price: 300,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/flour_SfJ49Wp91.png?updatedAt=1696814718461",
  },
  {
    id: 3,
    tam: "அரிசி மாவு",
    sin: "බර පොතු",
    eng: "Rice Flour",
    quantity: 5,
    price: 250,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/rice-flour_JtPGjqtId.png?updatedAt=1696814724190",
  },
  {
    id: 4,
    tam: "தேநீர்",
    sin: "තෙල්",
    eng: "Tea",
    quantity: 250,
    price: 150,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/tea_1ETJXJwoE.png?updatedAt=1696814730270",
  },
  {
    id: 5,
    tam: "சர்க்கரை",
    sin: "කඩුවෙල",
    eng: "Sugar",
    quantity: 1,
    price: 100,
    image: "sugar.png",
  },
  {
    id: 6,
    tam: "பெரிய வெங்காயம்",
    sin: "මැළුම් අණුරුව",
    eng: "Big onion",
    quantity: 2,
    price: 200,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/sugar_-r91qvSpYJ.png?updatedAt=1696814731959",
  },
  {
    id: 7,
    tam: "பச்சை பருப்பு",
    sin: "මුදු පලතුරු",
    eng: "Green Gramme",
    quantity: 1,
    price: 150,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/green_pS-BTt8Pl.png?updatedAt=1696814718843",
  },
  {
    id: 8,
    tam: "சிவப்பு பருப்பு",
    sin: "රතු දුල්",
    eng: "Red Dhal",
    quantity: 3500,
    price: 400,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/dhal_09vNGBln0.png?updatedAt=1696814718977",
  },
  {
    id: 9,
    tam: "கடலை பருப்பு",
    sin: "කඩල පලතුරු",
    eng: "Chick Pese",
    quantity: 1,
    price: 200,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/chick_7bH_EKoXr.png?updatedAt=1696814710252",
  },
  {
    id: 10,
    tam: "உருளைக்கிழங்கு",
    sin: "අලුත්ත",
    eng: "Potatoes",
    quantity: 2,
    price: 150,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/potatoe_UGnpym2U45.png?updatedAt=1696814719989",
  },
  {
    id: 11,
    tam: "உலர் மீன்",
    sin: "මාළු මාළු",
    eng: "Dry fish",
    quantity: "1 kg",
    price: 500,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/dryFish_NCR6dFnxx.png?updatedAt=1696814715906",
  },
  {
    id: 12,
    tam: "முட்டைகள்",
    sin: "බෝල් ඇටි",
    eng: "Eggs",
    quantity: 20,
    price: 120,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/egg_EdDy8rxjJ.png?updatedAt=1696814715933",
  },
  {
    id: 13,
    tam: "உப்பு (200 கிராம்)",
    sin: "ලුණු",
    eng: "Salt",
    quantity: 1,
    price: 20,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/salt_7Vw2qtSclb.png?updatedAt=1696814726865",
  },
  {
    id: 14,
    tam: "தேங்காய் எண்ணெய்",
    sin: "පොල් තෙල්",
    eng: "Coconut oil",
    quantity: 2,
    price: 400,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/coconut-oil_lGfWPTilOV.png?updatedAt=1696814709381",
  },
  {
    id: 15,
    tam: "சோயா (100 கிராம்)",
    sin: "මීනිස් මුදු",
    eng: "Soya",
    quantity: 4,
    price: 50,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/soya_TSnqdrqeY.jpg?updatedAt=1696814726868",
  },
  {
    id: 16,
    tam: "மிளகாய் தூள்",
    sin: "ලම්බෝලි පොඩි",
    eng: "Red Chilly Powder",
    quantity: 250,
    price: 80,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/red-chilly-powder_CJ_2f6-ftH.png?updatedAt=1696814721031",
  },
  {
    id: 17,
    tam: "மஞ்சள் தூள்",
    sin: "කහ මුදු",
    eng: "Turmeric",
    quantity: 50,
    price: 30,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/turmeric_QERixc1AN.png?updatedAt=1696814731602",
  },
  {
    id: 18,
    tam: "கறி பவுடர்",
    sin: "කරි පොඩි",
    eng: "Curry Powder",
    quantity: 250,
    price: 100,
    image: "turmeric.png",
  },
  {
    id: 19,
    tam: "வறுத்த மிளகாய்",
    sin: "මුදු මිරිස්",
    eng: "Dry Chilly",
    quantity: 250,
    price: 70,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/dry-chilly_EVjPkcoHV.png?updatedAt=1696814711255",
  },
  {
    id: 20,
    tam: "கொத்தமல்லி",
    sin: "කොමල්",
    eng: "Coriander",
    quantity: 250,
    price: 50,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/coriander_DZT0HELjpg.png?updatedAt=1696814719179",
  },
  {
    id: 21,
    tam: "மிளகு",
    sin: "මිරිස්",
    eng: "Pepper",
    quantity: 50,
    price: 40,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/pepper_ZloEcrt8W7.png?updatedAt=1696814719625",
  },
  {
    id: 22,
    tam: "பூண்டு",
    sin: "ලැස්තුවා",
    eng: "Garlic",
    quantity: 500,
    price: 60,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/garlic_f9116asNV.png?updatedAt=1696814711476",
  },
  {
    id: 23,
    tam: "சாப்பு",
    sin: "සප්",
    eng: "Soap",
    quantity: 4,
    price: 80,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/soap_9IyRG-cUM.png?updatedAt=1696814731433",
  },
  {
    id: 24,
    tam: "காப்பகம்",
    sin: "පොඩියක් පැක්",
    eng: "Disposable Pads",
    quantity: 2,
    price: 150,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/disposable-pads_bqTrvyLui.png?updatedAt=1696814706559",
  },
  {
    id: 25,
    tam: "பனதால் கார்டு",
    sin: "පැන්ඩොල්",
    eng: "Panadol",
    quantity: 1,
    price: 30,
    image:
      "https://ik.imagekit.io/qsfifxkbx/Comodities/Panadol_F4TrGoXOZz.jpg?updatedAt=1696814716558",
  },
];

export default items;
