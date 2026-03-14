/* ================================================================
   ASHUTOSH KESARI PORTFOLIO — CONTENT CONFIG
   ================================================================

   👋 HEY ASHU! This is the ONLY file you need to edit.

   HOW TO UPDATE YOUR PORTFOLIO:
   ─────────────────────────────
   1. Edit the text values below (name, bio, links, etc.)
   2. Drop your photos into the correct folders inside assets/images/
   3. Update the image paths below to match your filenames
   4. Save → refresh your browser → done!

   IMAGE FOLDERS:
   ─────────────
   📁 assets/images/portrait/     → Your profile photo
   📁 assets/images/photography/  → Your photography gallery images
   📁 assets/images/personal/     → Your personal favourite photos
   📁 assets/images/poetry/       → Your poetry images (photos of handwritten/typed poems)
   📁 assets/images/projects/     → Project preview thumbnails
   📁 assets/images/design/       → Thumbnail/design work images

   SUPPORTED FORMATS: .jpg .jpeg .png .webp .avif

   ================================================================ */

var CONTENT = {

  /* ──────────────────────────────────────────
     PERSONAL INFO
  ────────────────────────────────────────── */
  name: "Ashutosh Kesari",
  tagline: "Creator • Historian • Photographer • Poet • Builder",
  heroSmall: "Hey, I'm a",
  heroLine1: "Ashutosh",
  heroLine2: "Kesari",
  heroQuote: "Jack of all trades, master of none — but often better than master of one",
  heroStatus: "✦ Available",           // shown on portrait badge
  followerCount: "5K+",               // shown on portrait stat card
  followerLabel: "Instagram Followers",

  /* ──────────────────────────────────────────
     YOUR PORTRAIT PHOTO
     → Drop your photo in: assets/images/portrait/
     → Change filename below to match
  ────────────────────────────────────────── */
  portrait: "assets/images/portrait/ashutosh.jpg",

  /* ──────────────────────────────────────────
     ABOUT ME
  ────────────────────────────────────────── */
  bio: "I'm <strong>Ashutosh Kesari</strong> — a creator, historian, photographer, and builder based in India. Passionate about Indian history and cinematic storytelling, I blend analytical depth with creative execution. From documentary scripts to web experiences, I build things that matter and tell stories worth remembering.",

  skills: [
    "Video Production",
    "Web Development",
    "Canva Design",
    "AI Tools",
    "Creative Writing",
    "Indian History",
    "Documentary",
    "Photography"
  ],

  education: [
    {
      label: "10",
      period: "Secondary School",
      title: "Class 10 — Board Examination",
      detail: "Built early foundations in science, history, and the arts."
    },
    {
      label: "12",
      period: "Senior Secondary",
      title: "Class 12 — Higher Secondary",
      detail: "Deepened interest in humanities, writing, and storytelling."
    },
    {
      label: "🎓",
      period: "Current",
      title: "College — Undergraduate Studies",
      detail: "Building projects, communities, and content in parallel."
    }
  ],

  /* ──────────────────────────────────────────
     SOCIAL LINKS
     → Replace # with your actual profile URLs
  ────────────────────────────────────────── */
  social: {
    youtube:   "https://youtube.com/@AshutoshKesari",
    instagram: "https://instagram.com/ashutosh.kesari",
    linkedin:  "https://linkedin.com/in/ashutoshkesari",
    github:    "https://github.com/ashutoshkesari"
  },

  socialCards: [
    {
      platform: "YouTube",
      handle:   "@AshutoshKesari",
      url:      "https://youtube.com/@AshutoshKesari",
      btnText:  "Subscribe",
      type:     "yt",
      icon:     "▶️"
    },
    {
      platform: "Instagram",
      handle:   "5,500+ Followers",
      url:      "https://instagram.com/ashutosh.kesari",
      btnText:  "Follow",
      type:     "ig",
      icon:     "📸"
    },
    {
      platform: "LinkedIn",
      handle:   "Ashutosh Kesari",
      url:      "https://linkedin.com/in/ashutoshkesari",
      btnText:  "Connect",
      type:     "li",
      icon:     "💼"
    }
  ],

  /* ──────────────────────────────────────────
     FEATURED PROJECTS
     → Add image: drop file in assets/images/projects/
     → Set image: "assets/images/projects/yourfile.jpg"
     → Or leave image: "" to use the emoji fallback
  ────────────────────────────────────────── */
  projects: [
    {
      tag:   "Web Experience",
      name:  "Bharatam Asmi",
      desc:  "Premium Indian history website — dynasties and battles from 3,300 BCE to 1857 CE. Ambient music, spotlight search, dark gold aesthetic, PWA support.",
      link:  "#",                // ← paste your live URL here
      image: "",                 // ← "assets/images/projects/bharatam.jpg"
      emoji: "🏛️",
      bg:    "linear-gradient(135deg, #1a0d00, #3d1a00, #7a3500)"
    },
    {
      tag:   "Productivity Tool",
      name:  "Tempus Focus Timer",
      desc:  "A clean, distraction-free focus timer built for deep work. Minimal interface, maximum output — built with restraint and purpose.",
      link:  "#",
      image: "",
      emoji: "⏱️",
      bg:    "linear-gradient(135deg, #001a1a, #003d3d, #005c5c)"
    },
    {
      tag:   "Documentary Series",
      name:  "Alexander's India — Hindi Series",
      desc:  "Multi-episode Hindi documentary on Alexander's invasion of India. Cinematic structure with citations from Arrian & Curtius Rufus.",
      link:  "#",
      image: "",
      emoji: "🎬",
      bg:    "linear-gradient(135deg, #100024, #280050, #3d0070)"
    },
    {
      tag:   "Published Book",
      name:  "How to Study More",
      desc:  "Self-help eBook on Amazon KDP — 96 pages, 25 study strategies, built for students who want results not motivation fluff.",
      link:  "#",
      image: "",
      emoji: "📚",
      bg:    "linear-gradient(135deg, #001500, #003000, #004500)"
    }
  ],

  /* ──────────────────────────────────────────
     PHOTOGRAPHY GALLERY
     → Drop photos in: assets/images/photography/
     → Add as many entries as you want
     → image: "" uses emoji placeholder until you add a real photo
  ────────────────────────────────────────── */
  photos: [
    {
      title:    "Golden Hour",
      location: "Gorakhpur, UP",
      year:     "2024",
      image:    "",              // ← "assets/images/photography/golden-hour.jpg"
      emoji:    "🌅",
      bg:       "linear-gradient(135deg, #2a1200, #5c2800, #8b4500)"
    },
    {
      title:    "Ancient Walls",
      location: "Rajasthan",
      year:     "2024",
      image:    "",
      emoji:    "🏯",
      bg:       "linear-gradient(135deg, #1a0a1a, #3d1a3d, #5c2a5c)"
    },
    {
      title:    "Still Waters",
      location: "Varanasi, UP",
      year:     "2023",
      image:    "",
      emoji:    "🌊",
      bg:       "linear-gradient(135deg, #001520, #003040, #004d60)"
    },
    {
      title:    "Into the Green",
      location: "Uttar Pradesh",
      year:     "2024",
      image:    "",
      emoji:    "🌿",
      bg:       "linear-gradient(135deg, #001500, #003000, #004500)"
    },
    {
      title:    "City Lights",
      location: "India",
      year:     "2024",
      image:    "",
      emoji:    "🌆",
      bg:       "linear-gradient(135deg, #1a1000, #3d2800, #5c3c00)"
    },
    {
      title:    "Stargazing",
      location: "Rural India",
      year:     "2023",
      image:    "",
      emoji:    "⭐",
      bg:       "linear-gradient(135deg, #080820, #10103d, #18185c)"
    }
    /* To add more photos, copy this block:
    ,{
      title:    "Your Photo Title",
      location: "City, State",
      year:     "2024",
      image:    "assets/images/photography/yourphoto.jpg",
      emoji:    "📷",
      bg:       "linear-gradient(135deg, #111, #222)"
    }
    */
  ],

  /* ──────────────────────────────────────────
     PERSONAL FAVOURITE PHOTOS
     → Drop your pics in: assets/images/personal/
     → Shows as a sub-section inside Photography
     → caption: casual label shown on hover
     → image: "" uses emoji until you add a real photo
  ────────────────────────────────────────── */
  personalPics: [
    {
      caption: "Random evening 😄",
      image:   "",              // ← "assets/images/personal/pic1.jpg"
      emoji:   "😄",
      bg:      "linear-gradient(135deg, #1a0d00, #3d1a10)"
    },
    {
      caption: "Favourite spot",
      image:   "",
      emoji:   "🌇",
      bg:      "linear-gradient(135deg, #0d1a2d, #1a2d4a)"
    },
    {
      caption: "With the squad 🤙",
      image:   "",
      emoji:   "🤙",
      bg:      "linear-gradient(135deg, #0d1a0d, #1a3a1a)"
    },
    {
      caption: "Late night vibes",
      image:   "",
      emoji:   "🌙",
      bg:      "linear-gradient(135deg, #0d0d1a, #1a1a3a)"
    },
    {
      caption: "That one trip",
      image:   "assets/images/personal/khandagiri.png",
      emoji:   "🏔️",
      bg:      "linear-gradient(135deg, #1a1000, #3a2800)"
    },
    {
      caption: "Just a moment",
      image:   "",
      emoji:   "✨",
      bg:      "linear-gradient(135deg, #1a0a1a, #3a1a3a)"
    }
    /* To add more, copy this block:
    ,{
      caption: "Your caption here",
      image:   "assets/images/personal/yourpic.jpg",
      emoji:   "📸",
      bg:      "linear-gradient(135deg, #111, #222)"
    }
    */
  ],

  /* ──────────────────────────────────────────
     GRAPHIC DESIGN / THUMBNAILS
     → Drop thumbnail images in: assets/images/design/
  ────────────────────────────────────────── */
  designs: [
    {
      title:  "Alexander in India — Ep 1",
      image:  "",                // ← "assets/images/design/alexander-ep1.jpg"
      link:   "#",
      emoji:  "🏛️",
      bg:     "linear-gradient(135deg, #1a0d00, #3d1a00)"
    },
    {
      title:  "History of Writing Materials",
      image:  "",
      link:   "#",
      emoji:  "📜",
      bg:     "linear-gradient(135deg, #001520, #003040)"
    },
    {
      title:  "Study Strategies That Work",
      image:  "",
      link:   "#",
      emoji:  "🎯",
      bg:     "linear-gradient(135deg, #001500, #003000)"
    },
    {
      title:  "Massaga — The Last Stand",
      image:  "",
      link:   "#",
      emoji:  "⚔️",
      bg:     "linear-gradient(135deg, #200010, #3d0025)"
    },
    {
      title:  "Bharatam Chronicles Intro",
      image:  "",
      link:   "#",
      emoji:  "🌏",
      bg:     "linear-gradient(135deg, #1a0a00, #3d2000)"
    },
    {
      title:  "Chhota Da Vinci — Trailer",
      image:  "",
      link:   "#",
      emoji:  "🎨",
      bg:     "linear-gradient(135deg, #100020, #28003d)"
    }
  ],

  /* ──────────────────────────────────────────
     POETRY GALLERY
     → Drop photos of your poems in: assets/images/poetry/
     → image: ""  → shows placeholder until you add a real photo
     → image: "assets/images/poetry/poem1.jpg"  → shows your image
     → mood picks the background colour of the card:
         "rose"   = warm pink-red
         "ink"    = deep navy-black
         "gold"   = amber-ochre
         "sage"   = muted green
         "dusk"   = purple-grey
  ────────────────────────────────────────── */
  poems: [
    {
      title:  "मिट्टी की खुशबू",          // poem title (Hindi or English)
      lang:   "Hindi",                    // language tag shown on card
      year:   "2024",
      image:  "",                         // ← "assets/images/poetry/poem1.jpg"
      emoji:  "🌸",
      mood:   "rose"
    },
    {
      title:  "The Last Emperor",
      lang:   "English",
      year:   "2023",
      image:  "",
      emoji:  "👑",
      mood:   "gold"
    },
    {
      title:  "रात के सितारे",
      lang:   "Hindi",
      year:   "2024",
      image:  "",
      emoji:  "🌙",
      mood:   "ink"
    },
    {
      title:  "Battlefield Silence",
      lang:   "English",
      year:   "2023",
      image:  "",
      emoji:  "⚔️",
      mood:   "dusk"
    },
    {
      title:  "घर की याद",
      lang:   "Hindi",
      year:   "2024",
      image:  "",
      emoji:  "🏡",
      mood:   "sage"
    },
    {
      title:  "Ink & Ashes",
      lang:   "English",
      year:   "2024",
      image:  "",
      emoji:  "✍️",
      mood:   "ink"
    }
    /* To add more poems, copy this block:
    ,{
      title:  "Your Poem Title",
      lang:   "Hindi",          // or "English"
      year:   "2024",
      image:  "assets/images/poetry/yourpoem.jpg",
      emoji:  "📜",
      mood:   "rose"            // rose | ink | gold | sage | dusk
    }
    */
  ],

  /* ──────────────────────────────────────────
     COMMUNITIES
  ────────────────────────────────────────── */
  communities: [
    {
      icon:  "🎭",
      name:  "Les Thespians",
      sub:   "Drama Society",
      desc:  "A theatre collective dedicated to bringing stories to life through performance, voice, and the ancient magic of drama.",
      link:  "#"
    },
    {
      icon:  "🤝",
      name:  "Icche",
      sub:   "Outreach Programme",
      desc:  "A grassroots outreach initiative working towards education, welfare, and opportunity for underserved communities.",
      link:  "#"
    },
    {
      icon:  "✍️",
      name:  "The Inklings",
      sub:   "Poetry Initiative",
      desc:  "A collective of writers, poets, and dreamers — creating space for words that heal, challenge, and ignite imagination.",
      link:  "#"
    }
  ],

  /* ──────────────────────────────────────────
     CONTACT
  ────────────────────────────────────────── */
  contactTagline: "Whether it's a collaboration, project, or just a conversation about history and ideas — I'm open to it. Reach out and let's create something worth remembering."

};
