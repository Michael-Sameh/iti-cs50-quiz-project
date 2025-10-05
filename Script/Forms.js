const form = [
  {
    name: "Mathematics",
    questions: [
      {
        question: "What is the derivative of x^3?",
        answers: ["3x^2", "x^2", "x^3", "3x"],
        correct: "3x^2",
      },
      {
        question: "Solve for x: 2x + 5 = 13",
        answers: ["3", "4", "5", "6"],
        correct: "4",
      },
      {
        question: "Which of the following is a prime number?",
        answers: ["21", "29", "35", "39"],
        correct: "29",
      },
      {
        question:
          "If the angles of a triangle are in the ratio 2:3:4, what is the largest angle?",
        answers: ["40°", "60°", "80°", "100°"],
        correct: "80°",
      },
      {
        question: "What is the sum of the interior angles of a hexagon?",
        answers: ["360°", "540°", "720°", "900°"],
        correct: "720°",
      },
    ],
  },
  {
    name: "Physics",
    questions: [
      {
        question:
          "If a car accelerates from 0 to 20 m/s in 4 seconds, what is its acceleration?",
        answers: ["4 m/s²", "5 m/s²", "6 m/s²", "8 m/s²"],
        correct: "5 m/s²",
      },
      {
        question: "Which law states that force equals mass times acceleration?",
        answers: [
          "Newton's 1st Law",
          "Newton's 2nd Law",
          "Newton's 3rd Law",
          "Law of Conservation of Energy",
        ],
        correct: "Newton's 2nd Law",
      },
      {
        question:
          "A ball is thrown vertically upward. At its highest point, its velocity is ___ and acceleration is ___.",
        answers: [
          "0 m/s, 9.8 m/s²",
          "9.8 m/s, 0 m/s²",
          "0 m/s, 0 m/s²",
          "9.8 m/s, 9.8 m/s²",
        ],
        correct: "0 m/s, 9.8 m/s²",
      },
      {
        question: "What type of lens is used to correct nearsightedness?",
        answers: ["Convex lens", "Concave lens", "Bifocal lens", "Plano lens"],
        correct: "Concave lens",
      },
      {
        question: "The unit of electric current is:",
        answers: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: "Ampere",
      },
    ],
  },
  {
    name: "Chemistry",
    questions: [
      {
        question: "Which element is a halogen?",
        answers: ["Oxygen", "Chlorine", "Iron", "Calcium"],
        correct: "Chlorine",
      },
      {
        question: "What is the molar mass of H2O?",
        answers: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
        correct: "18 g/mol",
      },
      {
        question: "Which type of bond is formed by the transfer of electrons?",
        answers: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        correct: "Ionic",
      },
      {
        question: "Which gas is responsible for global warming?",
        answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correct: "Carbon Dioxide",
      },
      {
        question: "pH 1 is ___ and pH 13 is ___.",
        answers: [
          "Acidic, Basic",
          "Basic, Acidic",
          "Neutral, Acidic",
          "Neutral, Basic",
        ],
        correct: "Acidic, Basic",
      },
    ],
  },
  {
    name: "Biology",
    questions: [
      {
        question: "Which organelle is the powerhouse of the cell?",
        answers: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correct: "Mitochondria",
      },
      {
        question: "Which macromolecule stores genetic information?",
        answers: ["Protein", "Carbohydrate", "DNA", "Lipid"],
        correct: "DNA",
      },
      {
        question: "Which blood type is the universal donor?",
        answers: ["A", "B", "AB", "O"],
        correct: "O",
      },
      {
        question: "Which hormone regulates blood sugar?",
        answers: ["Insulin", "Adrenaline", "Thyroxine", "Cortisol"],
        correct: "Insulin",
      },
      {
        question: "What is the process by which plants make their food?",
        answers: [
          "Respiration",
          "Photosynthesis",
          "Transpiration",
          "Fermentation",
        ],
        correct: "Photosynthesis",
      },
    ],
  },
  {
    name: "Computer Science",
    questions: [
      {
        question: "Which of these is a high-level programming language?",
        answers: ["Assembly", "C", "Python", "Machine code"],
        correct: "Python",
      },
      {
        question: "What does HTML stand for?",
        answers: [
          "HyperText Markup Language",
          "Hyper Tool Markup Language",
          "Hyper Transfer Markup Language",
          "HyperText Make Language",
        ],
        correct: "HyperText Markup Language",
      },
      {
        question: "Which data structure uses LIFO principle?",
        answers: ["Queue", "Stack", "Array", "Linked List"],
        correct: "Stack",
      },
      {
        question: "Which of the following is used to store data permanently?",
        answers: ["RAM", "ROM", "Cache", "Register"],
        correct: "ROM",
      },
      {
        question:
          "Which sorting algorithm has the best average-case performance?",
        answers: [
          "Bubble Sort",
          "Merge Sort",
          "Insertion Sort",
          "Selection Sort",
        ],
        correct: "Merge Sort",
      },
    ],
  },
  {
    name: "History",
    questions: [
      {
        question: "Who was the first emperor of Rome?",
        answers: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
        correct: "Augustus",
      },
      {
        question: "The French Revolution began in which year?",
        answers: ["1789", "1776", "1804", "1812"],
        correct: "1789",
      },
      {
        question:
          "Who led the Indian independence movement using non-violent methods?",
        answers: [
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Bhagat Singh",
          "Subhas Chandra Bose",
        ],
        correct: "Mahatma Gandhi",
      },
      {
        question: "Which empire was ruled by Genghis Khan?",
        answers: [
          "Ottoman Empire",
          "Mongol Empire",
          "Roman Empire",
          "Persian Empire",
        ],
        correct: "Mongol Empire",
      },
      {
        question: "The Cold War was primarily between which countries?",
        answers: [
          "USA and Germany",
          "USA and USSR",
          "UK and USSR",
          "USA and China",
        ],
        correct: "USA and USSR",
      },
    ],
  },
  {
    name: "Geography",
    questions: [
      {
        question: "Which desert is the largest in the world?",
        answers: ["Sahara", "Gobi", "Kalahari", "Arabian"],
        correct: "Sahara",
      },
      {
        question: "Which is the deepest ocean?",
        answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correct: "Pacific",
      },
      {
        question: "Which country has the most time zones?",
        answers: ["USA", "China", "Russia", "France"],
        correct: "France",
      },
      {
        question:
          "Which line divides the Earth into Northern and Southern Hemispheres?",
        answers: [
          "Prime Meridian",
          "Equator",
          "Tropic of Cancer",
          "International Date Line",
        ],
        correct: "Equator",
      },
      {
        question: "Which country is landlocked?",
        answers: ["Bolivia", "Chile", "Peru", "Brazil"],
        correct: "Bolivia",
      },
    ],
  },
  {
    name: "English",
    questions: [
      {
        question: "Choose the correct passive form: 'She writes a letter.'",
        answers: [
          "A letter is written by her.",
          "A letter wrote by her.",
          "A letter is wrote by her.",
          "A letter written by her.",
        ],
        correct: "A letter is written by her.",
      },
      {
        question: "Which word is a synonym of 'Quick'?",
        answers: ["Slow", "Fast", "Lazy", "Heavy"],
        correct: "Fast",
      },
      {
        question: "Select the correct comparative form: 'Good'",
        answers: ["Gooder", "Better", "Best", "Well"],
        correct: "Better",
      },
      {
        question: "Identify the verb in the sentence: 'He runs every morning.'",
        answers: ["He", "Runs", "Every", "Morning"],
        correct: "Runs",
      },
      {
        question: "Which is a preposition?",
        answers: ["On", "Run", "Blue", "Quickly"],
        correct: "On",
      },
    ],
  },
  {
    name: "Economics",
    questions: [
      {
        question:
          "Which market structure has many sellers with identical products?",
        answers: [
          "Monopoly",
          "Oligopoly",
          "Perfect Competition",
          "Monopolistic Competition",
        ],
        correct: "Perfect Competition",
      },
      {
        question: "What is fiscal policy?",
        answers: [
          "Government spending and taxation",
          "Interest rate control",
          "Printing money",
          "Setting prices",
        ],
        correct: "Government spending and taxation",
      },
      {
        question: "What does CPI measure?",
        answers: ["Inflation", "GDP", "Unemployment", "Wealth"],
        correct: "Inflation",
      },
      {
        question: "Which is an example of a renewable resource?",
        answers: ["Coal", "Oil", "Solar Energy", "Natural Gas"],
        correct: "Solar Energy",
      },
      {
        question: "Opportunity cost is defined as:",
        answers: [
          "The money spent on a project",
          "The value of the next best alternative",
          "The price of goods",
          "Government tax",
        ],
        correct: "The value of the next best alternative",
      },
    ],
  },
  {
    name: "Art",
    questions: [
      {
        question: "Which art movement is Salvador Dali associated with?",
        answers: ["Impressionism", "Surrealism", "Cubism", "Baroque"],
        correct: "Surrealism",
      },
      {
        question: "Which medium is used in fresco painting?",
        answers: ["Oil", "Watercolor", "Plaster", "Acrylic"],
        correct: "Plaster",
      },
      {
        question: "Which composer is known for the 'Four Seasons'?",
        answers: ["Beethoven", "Vivaldi", "Mozart", "Bach"],
        correct: "Vivaldi",
      },
      {
        question: "Which color is complementary to blue?",
        answers: ["Green", "Red", "Yellow", "Orange"],
        correct: "Orange",
      },
      {
        question:
          "Which era is known for dramatic art and architecture after Renaissance?",
        answers: ["Baroque", "Classical", "Romantic", "Modern"],
        correct: "Baroque",
      },
    ],
  },
  {
    name: "Astronomy",
    questions: [
      {
        question: "Which planet is closest to the Sun?",
        answers: ["Venus", "Mercury", "Earth", "Mars"],
        correct: "Mercury",
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Jupiter", "Saturn", "Venus"],
        correct: "Mars",
      },
      {
        question: "What is the main component of the Sun?",
        answers: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        correct: "Hydrogen",
      },
      {
        question: "Which galaxy is closest to the Milky Way?",
        answers: ["Andromeda", "Triangulum", "Whirlpool", "Sombrero"],
        correct: "Andromeda",
      },
      {
        question: "What is the term for a moon that appears to grow larger?",
        answers: ["Waning", "Crescent", "Gibbous", "Waxing"],
        correct: "Waxing",
      },
    ],
  },
  {
    name: "Geology",
    questions: [
      {
        question: "What is the hardest naturally occurring mineral?",
        answers: ["Quartz", "Diamond", "Corundum", "Topaz"],
        correct: "Diamond",
      },
      {
        question:
          "Which type of rock is formed under high pressure and temperature?",
        answers: ["Igneous", "Sedimentary", "Metamorphic", "Basalt"],
        correct: "Metamorphic",
      },
      {
        question: "Which layer of Earth is liquid?",
        answers: ["Crust", "Mantle", "Outer Core", "Inner Core"],
        correct: "Outer Core",
      },
      {
        question: "Which scale measures earthquake intensity?",
        answers: ["Richter", "Beaufort", "Celsius", "Mohs"],
        correct: "Richter",
      },
      {
        question: "Which type of rock is formed by sedimentation?",
        answers: ["Igneous", "Sedimentary", "Metamorphic", "Obsidian"],
        correct: "Sedimentary",
      },
    ],
  },
  {
    name: "Music",
    questions: [
      {
        question: "Which note is higher in pitch: C4 or C5?",
        answers: ["C4", "C5", "Both same", "Cannot determine"],
        correct: "C5",
      },
      {
        question: "Which musical term indicates speed?",
        answers: ["Tempo", "Pitch", "Scale", "Harmony"],
        correct: "Tempo",
      },
      {
        question: "Which instrument is part of a string quartet?",
        answers: ["Flute", "Violin", "Trumpet", "Trombone"],
        correct: "Violin",
      },
      {
        question: "Which composer wrote the 9th Symphony?",
        answers: ["Beethoven", "Mozart", "Chopin", "Bach"],
        correct: "Beethoven",
      },
      {
        question: "Which clef is commonly used for cellos?",
        answers: ["Treble", "Bass", "Alto", "Tenor"],
        correct: "Bass",
      },
    ],
  },
  {
    name: "Philosophy",
    questions: [
      {
        question: "Who said 'The unexamined life is not worth living'?",
        answers: ["Plato", "Aristotle", "Socrates", "Kant"],
        correct: "Socrates",
      },
      {
        question: "Which philosopher is associated with Utilitarianism?",
        answers: ["Kant", "Mill", "Descartes", "Plato"],
        correct: "Mill",
      },
      {
        question: "Epistemology is the study of:",
        answers: ["Morality", "Knowledge", "Existence", "Beauty"],
        correct: "Knowledge",
      },
      {
        question: "Existentialism emphasizes:",
        answers: [
          "Collective identity",
          "Individual freedom and choice",
          "Government laws",
          "Economic systems",
        ],
        correct: "Individual freedom and choice",
      },
      {
        question: "Which philosopher wrote 'Critique of Pure Reason'?",
        answers: ["Kant", "Hume", "Nietzsche", "Socrates"],
        correct: "Kant",
      },
    ],
  },
];
