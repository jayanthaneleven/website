"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Project data with detailed information
const projectsData = {
  "sweden-melody": {
    id: 1,
    title: "Sweden melody",
    location: "France, Paris",
    date: "Jun 10, 2021",
    heroImage: "/project/proimg1.png",
    category: "Home",
    teamMembers: 7,
    client: {
      name: "Marina Li",
      avatar: "https://framerusercontent.com/images/46pZyTt33EheY5tVRHk7ySHT21g.png",
    },
    designer: {
      name: "Victor Caruzo",
      role: "Designer",
      avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
      quote: "This project reinforced the importance of building user-centered features that offer value beyond aesthetics",
    },
    description: {
      main: "The inspiration from Scandinavian aesthetics, emphasizing simplicity, functionality, and natural beauty. The design combines neutral color palettes—such as whites, grays, and soft pastels—with warm wooden accents to create a cozy and inviting atmosphere.",
      secondary: "Decorative elements include subtle textures, such as wool throws, linen curtains, and plush rugs, paired with green indoor plants to add life and freshness. The design integrates modern lighting fixtures with a focus on warm tones, balancing contemporary and traditional Nordic influences.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "A comfortable and inviting space that embodies Scandinavian elegance. The centerpiece is a neutral-toned sofa with clean lines, layered with textured throws and cushions for added warmth. A soft wool or jute rug anchors the seating area, complemented by a sleek wooden coffee table with simple yet striking design. Large windows, dressed in sheer linen curtains, flood the room with natural light, emphasizing the airy and open feel.",
      kitchen: "A functional yet stylish space designed for effortless cooking and entertaining. The cabinetry, finished in light, neutral shades like white or soft gray, is paired with natural wooden countertops that add warmth to the clean design. Open shelving above the countertops showcases neatly arranged ceramic dishes, glass jars, and small potted herbs, blending beauty with functionality.",
      bedroom: "A serene sanctuary that prioritizes comfort and relaxation. The wooden bedframe, crafted from light oak or birch, is paired with layered bedding in soft tones like white, beige, or pastel blues and greens. Textured throws and accent pillows add depth and warmth.",
    },
    details: {
      colorPalette: "The project features a neutral color scheme with whites, beiges, and light grays as the foundation. These tones are paired with soft pastel accents, such as muted blues, greens, or blush pinks, to add subtle depth and warmth. This palette evokes calmness and mirrors the natural landscapes of Sweden.",
      materials: "Natural materials play a vital role in the design. Warm-toned woods like oak and birch are used for flooring, furniture, and wall panels, creating a sense of warmth. Soft textures, including wool, cotton, and linen, add tactile comfort, while touches of leather and ceramics provide contrast and sophistication.",
      furniture: "The furniture selection emphasizes clean lines and functionality, with pieces that blend seamlessly into the space without overpowering it. Multi-functional and space-saving designs, such as extendable tables or storage-integrated sofas, are prominent. Classic Scandinavian design icons, such as Hans Wegner-inspired chairs, are subtly incorporated.",
      lighting: "Natural light is maximized with large windows dressed in sheer linen curtains, allowing light to flow freely. Artificial lighting includes pendant lights, floor lamps, and wall sconces in minimalist, modern designs. Warm-toned LED lights are used to create a cozy ambiance during darker months.",
    },
  },
  "modern-mix": {
    id: 2,
    title: "Modern Mix",
    location: "Amsterdam, Netherlands",
    date: "Aug 6, 2023",
    heroImage: "/project/proimg2.png",
    category: "Other",
    teamMembers: 9,
    client: {
      name: "Nicola Jowicev",
      avatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png",
    },
    designer: {
      name: "Victor Caruzo",
      role: "Designer",
      avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
      quote: "This project reinforced the importance of building user-centered features that offer value beyond aesthetics",
    },
    description: {
      main: "The inspiration from Scandinavian aesthetics, emphasizing simplicity, functionality, and natural beauty. The design combines neutral color palettes—such as whites, grays, and soft pastels—with warm wooden accents to create a cozy and inviting atmosphere.",
      secondary: "Decorative elements include subtle textures, such as wool throws, linen curtains, and plush rugs, paired with green indoor plants to add life and freshness. The design integrates modern lighting fixtures with a focus on warm tones, balancing contemporary and traditional Nordic influences.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "A comfortable and inviting space that embodies Scandinavian elegance. The centerpiece is a neutral-toned sofa with clean lines, layered with textured throws and cushions for added warmth. A soft wool or jute rug anchors the seating area, complemented by a sleek wooden coffee table with simple yet striking design. Large windows, dressed in sheer linen curtains, flood the room with natural light, emphasizing the airy and open feel.",
      kitchen: "A functional yet stylish space designed for effortless cooking and entertaining. The cabinetry, finished in light, neutral shades like white or soft gray, is paired with natural wooden countertops that add warmth to the clean design. Open shelving above the countertops showcases neatly arranged ceramic dishes, glass jars, and small potted herbs, blending beauty with functionality.",
      bedroom: "A serene sanctuary that prioritizes comfort and relaxation. The wooden bedframe, crafted from light oak or birch, is paired with layered bedding in soft tones like white, beige, or pastel blues and greens. Textured throws and accent pillows add depth and warmth.",
    },
    details: {
      colorPalette: "The project features a neutral color scheme with whites, beiges, and light grays as the foundation. These tones are paired with soft pastel accents, such as muted blues, greens, or blush pinks, to add subtle depth and warmth. This palette evokes calmness and mirrors the natural landscapes of Sweden.",
      materials: "Natural materials play a vital role in the design. Warm-toned woods like oak and birch are used for flooring, furniture, and wall panels, creating a sense of warmth. Soft textures, including wool, cotton, and linen, add tactile comfort, while touches of leather and ceramics provide contrast and sophistication.",
      furniture: "The furniture selection emphasizes clean lines and functionality, with pieces that blend seamlessly into the space without overpowering it. Multi-functional and space-saving designs, such as extendable tables or storage-integrated sofas, are prominent. Classic Scandinavian design icons, such as Hans Wegner-inspired chairs, are subtly incorporated.",
      lighting: "Natural light is maximized with large windows dressed in sheer linen curtains, allowing light to flow freely. Artificial lighting includes pendant lights, floor lamps, and wall sconces in minimalist, modern designs. Warm-toned LED lights are used to create a cozy ambiance during darker months.",
    },
  },
  "airy-cave": {
    id: 3,
    title: "Airy cave",
    location: "Madrid, Spain",
    date: "Apr 9, 2020",
    heroImage: "/project/proimg3.png",
    category: "Home",
    teamMembers: 5,
    client: {
      name: "Alex Sarr",
      avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
    },
    designer: {
      name: "Victor Caruzo",
      role: "Designer",
      avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
      quote: "Creating spaces that breathe and inspire was the core philosophy behind this project",
    },
    description: {
      main: "The inspiration from Mediterranean aesthetics, emphasizing open spaces, natural light, and earthy tones. The design combines warm terracotta palettes with modern minimalist elements to create a harmonious living environment.",
      secondary: "Architectural details include arched doorways, textured walls, and abundant natural light. The design integrates indoor-outdoor living concepts with a focus on sustainable materials and timeless elegance.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "An airy, light-filled space featuring high ceilings and large windows that frame beautiful views. The neutral-toned furniture is complemented by textured textiles and statement lighting pieces.",
      kitchen: "A chef's dream with modern appliances seamlessly integrated into a clean, minimalist design. Natural stone countertops and custom cabinetry create a functional yet beautiful cooking space.",
      bedroom: "A peaceful retreat with soft, natural linens and a connection to the outdoors through floor-to-ceiling windows. The design prioritizes rest and relaxation.",
    },
    details: {
      colorPalette: "Warm earth tones including terracotta, sand, and olive greens form the foundation, accented by crisp whites and natural wood tones.",
      materials: "Local stone, reclaimed wood, and natural textiles create an authentic Mediterranean feel while maintaining modern comfort standards.",
      furniture: "Custom-designed pieces blend seamlessly with carefully curated vintage finds, creating a collected-over-time aesthetic.",
      lighting: "A combination of natural light, statement pendants, and subtle ambient lighting creates warmth throughout the space.",
    },
  },
  "pixy-agency-office": {
    id: 4,
    title: "Pixy Agency Office",
    location: "Berlin, Germany",
    date: "Dec 2, 2024",
    heroImage: "/project/proimg4.png",
    category: "Office",
    teamMembers: 12,
    client: {
      name: "Alisa Kim",
      avatar: "https://framerusercontent.com/images/MzK2YM80FMJmtVEeAv4QsmAmjT0.png",
    },
    designer: {
      name: "Victor Caruzo",
      role: "Designer",
      avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
      quote: "Modern workspaces should inspire creativity while maintaining functionality and employee wellbeing",
    },
    description: {
      main: "A contemporary office design that balances collaborative spaces with private work areas. The design emphasizes employee wellbeing through biophilic elements, ergonomic furniture, and thoughtful acoustics.",
      secondary: "The space features flexible work zones, from open collaborative areas to quiet focus rooms, all unified by a cohesive design language that reflects the agency's creative brand identity.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "The main collaborative hub features modular seating arrangements that can be reconfigured for different team sizes and meeting types. Large whiteboards and digital screens facilitate brainstorming sessions.",
      kitchen: "A modern break room with a fully equipped kitchen serves as a social hub. The space includes comfortable seating areas and a coffee bar, encouraging informal collaboration.",
      bedroom: "Private focus pods provide quiet spaces for concentrated work or video calls. Each pod features acoustic panels, adjustable lighting, and ergonomic seating.",
    },
    details: {
      colorPalette: "A sophisticated palette of charcoal, white, and warm wood tones is accented by the agency's brand colors for visual identity consistency.",
      materials: "Sustainable materials including recycled metals, FSC-certified woods, and low-VOC finishes prioritize both environmental responsibility and employee health.",
      furniture: "Height-adjustable desks, ergonomic chairs, and flexible meeting furniture support various work styles and promote physical wellbeing.",
      lighting: "Circadian lighting systems adjust throughout the day, while task lighting at individual workstations provides personalized illumination.",
    },
  },
  "old-cousine": {
    id: 5,
    title: "Old Cousine",
    location: "Copenhagen, Denmark",
    date: "Nov 20, 2024",
    heroImage: "/project/proimg5.png",
    category: "Commercial",
    teamMembers: 8,
    client: {
      name: "Morgan Dufresne",
      avatar: "https://framerusercontent.com/images/l8YnPfO1KlKps6bo2S4dz5wpFKs.png",
    },
    designer: {
      name: "Victor Caruzo",
      role: "Designer",
      avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
      quote: "Blending heritage with modernity creates spaces that tell stories while serving contemporary needs",
    },
    description: {
      main: "A restaurant design that honors culinary traditions while embracing modern dining experiences. The space balances intimate dining areas with an open kitchen concept that celebrates the art of cooking.",
      secondary: "Historical architectural elements are preserved and highlighted, while contemporary additions create a dialogue between past and present. The result is a warm, inviting atmosphere that feels both timeless and fresh.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "The main dining room features a mix of intimate two-tops and larger communal tables, accommodating various party sizes while maintaining an cohesive atmosphere.",
      kitchen: "The open kitchen serves as both functional workspace and theatrical stage, allowing diners to witness the culinary artistry. Premium equipment is seamlessly integrated into the design.",
      bedroom: "Private dining rooms offer exclusive experiences for special occasions, featuring customizable lighting and audio systems for personalized ambiance.",
    },
    details: {
      colorPalette: "Deep jewel tones and rich wood finishes create a sophisticated backdrop, while brass accents add warmth and elegance throughout the space.",
      materials: "Reclaimed wood, handmade tiles, and custom metalwork honor traditional craftsmanship while meeting modern durability requirements.",
      furniture: "Custom-designed tables and chairs balance comfort with aesthetic considerations, ensuring guests enjoy extended dining experiences.",
      lighting: "Layered lighting design creates distinct moods from bright lunch service to intimate evening dining, with statement fixtures serving as focal points.",
    },
  },
  "elegant-living-space": {
    id: 6,
    title: "Elegant Living Space",
    location: "Thiruvananthapuram, Kerala",
    date: "Jan 15, 2025",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&q=90",
    category: "Home",
    teamMembers: 6,
    client: {
      name: "Rahul Menon",
      avatar: "https://framerusercontent.com/images/46pZyTt33EheY5tVRHk7ySHT21g.png",
    },
    designer: {
      name: "Arun Kumar",
      role: "Lead Designer",
      avatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png",
      quote: "Kerala's natural beauty inspired every element of this contemporary living space",
    },
    description: {
      main: "A contemporary interpretation of Kerala's traditional architecture, this living space seamlessly blends modern comfort with cultural heritage. The design emphasizes natural ventilation, abundant greenery, and sustainable materials.",
      secondary: "The interiors feature a harmonious mix of traditional Kerala woodwork and contemporary furnishings. Large windows frame tropical gardens, while carefully curated art pieces celebrate local craftsmanship.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "An expansive living area featuring traditional Kerala furniture with contemporary comfort. The teak wood ceiling and polished concrete floors create a sophisticated backdrop for family gatherings.",
      kitchen: "A modern kitchen that respects traditional Kerala cooking while incorporating contemporary conveniences. Custom cabinetry in warm wood tones complements granite countertops.",
      bedroom: "Serene bedrooms with views of the tropical garden. Natural materials and soft textiles create restful spaces that connect inhabitants with nature.",
    },
    details: {
      colorPalette: "Earth tones inspired by Kerala's landscape—rich browns, forest greens, and warm terracotta—create a grounding atmosphere throughout the home.",
      materials: "Locally sourced teak, sustainable bamboo, and traditional Athangudi tiles honor regional craftsmanship while meeting modern performance standards.",
      furniture: "A blend of antique Kerala pieces and contemporary designs creates a collected aesthetic that tells the story of the region's rich heritage.",
      lighting: "Brass traditional lamps complement modern recessed lighting, creating layered illumination that adapts to various activities and moods.",
    },
  },
  "serene-bedroom-retreat": {
    id: 7,
    title: "Serene Bedroom Retreat",
    location: "Kochi, Kerala",
    date: "Feb 20, 2025",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&h=900&fit=crop&q=90",
    category: "Home",
    teamMembers: 4,
    client: {
      name: "Priya Nair",
      avatar: "https://framerusercontent.com/images/MzK2YM80FMJmtVEeAv4QsmAmjT0.png",
    },
    designer: {
      name: "Maya Krishnan",
      role: "Interior Designer",
      avatar: "https://framerusercontent.com/images/MzK2YM80FMJmtVEeAv4QsmAmjT0.png",
      quote: "A bedroom should be a sanctuary—a place where rest and beauty coexist harmoniously",
    },
    description: {
      main: "This master bedroom retreat prioritizes tranquility and restorative sleep. The design incorporates principles of biophilic design, soft textures, and a carefully curated color palette to promote relaxation.",
      secondary: "Every element, from the blackout curtains to the temperature-regulating bedding, has been selected to optimize sleep quality while maintaining aesthetic elegance.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "An adjoining sitting area provides a quiet space for reading or morning coffee, featuring a comfortable armchair and curated book collection.",
      kitchen: "The ensuite bathroom continues the spa-like aesthetic with a soaking tub, rain shower, and natural stone finishes.",
      bedroom: "The sleeping area features a custom upholstered headboard, premium bedding, and strategic lighting that supports natural circadian rhythms.",
    },
    details: {
      colorPalette: "Soft neutrals and muted pastels create a calming atmosphere. Dusty rose accents add warmth without overwhelming the serene space.",
      materials: "Natural linen, organic cotton, and sustainably harvested wood prioritize both comfort and environmental responsibility.",
      furniture: "Each piece is selected for both form and function, with hidden storage solutions maintaining the uncluttered aesthetic.",
      lighting: "Dimmable ambient lighting, reading lights with warm color temperatures, and blackout solutions support various activities and optimal sleep.",
    },
  },
  "modern-culinary-kitchen": {
    id: 8,
    title: "Modern Culinary Kitchen",
    location: "Kozhikode, Kerala",
    date: "Mar 5, 2025",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop&q=90",
    category: "Home",
    teamMembers: 5,
    client: {
      name: "Arun Kumar",
      avatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png",
    },
    designer: {
      name: "Vishnu Prasad",
      role: "Kitchen Specialist",
      avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
      quote: "A well-designed kitchen is the heart of the home—where nourishment and connection happen daily",
    },
    description: {
      main: "This contemporary kitchen design balances professional-grade functionality with warm residential aesthetics. The layout optimizes workflow while creating an inviting space for family gatherings.",
      secondary: "Smart storage solutions, premium appliances, and durable materials ensure this kitchen will serve the family beautifully for years to come. The design respects Kerala's culinary traditions while embracing modern convenience.",
    },
    gallery: {
      main: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop&q=90",
      images: [
        "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1556909190-6a3e5b4c9c77?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&h=900&fit=crop&q=90",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=90",
      ],
    },
    keySpaces: {
      livingRoom: "An adjacent breakfast nook provides casual dining space with built-in seating and views of the garden.",
      kitchen: "The main cooking area features a professional range, generous prep space, and an integrated spice storage system designed for Kerala cuisine.",
      bedroom: "A connected pantry provides ample storage for dry goods, small appliances, and traditional cooking vessels.",
    },
    details: {
      colorPalette: "Warm wood tones contrast with crisp white surfaces, while brass fixtures add elegant warmth to the functional space.",
      materials: "Granite countertops, solid wood cabinetry, and stainless steel appliances combine durability with timeless style.",
      furniture: "Custom cabinetry maximizes storage while bar seating at the island encourages family interaction during meal preparation.",
      lighting: "Task lighting illuminates work surfaces, while pendant lights over the island create ambiance for casual dining.",
    },
  },
};

// Logo mark component
const LogoMark = () => (
  <svg
    className="w-10 h-10 md:w-12 md:h-12"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

// Grid icon component
const GridIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="6" height="6" rx="1" />
    <rect x="12" y="2" width="6" height="6" rx="1" />
    <rect x="2" y="12" width="6" height="6" rx="1" />
    <rect x="12" y="12" width="6" height="6" rx="1" />
  </svg>
);

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;
  const project = projectsData[slug];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-black mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-gray-500 hover:text-black transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Header */}
        <Header variant="light" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          {/* Back Link */}
          <Link
            href="/projects"
            className="flex items-center gap-2 text-white text-[14px] mb-8 hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to projects
          </Link>

          {/* Title Area */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Date */}
            <div className="md:w-[200px]">
              <p className="text-white/70 text-[14px] md:text-[16px]">{project.date}</p>
            </div>

            {/* Title & Location */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-serif text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] text-white font-normal leading-[1] tracking-[-0.02em] mb-2">
                {project.title}
              </h1>
              <p className="text-white/80 text-[16px] md:text-[18px]">{project.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="bg-[#f5f5f5] py-8 md:py-10 px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          {/* Logo Mark */}
          <div className="text-gray-300">
            <LogoMark />
          </div>

          {/* Category */}
          <div>
            <p className="text-[12px] text-gray-400 mb-1">Category:</p>
            <p className="text-[16px] font-medium text-black">{project.category}</p>
          </div>

          {/* Team Members */}
          <div className="flex items-center gap-3">
            <span className="text-[40px] md:text-[48px] font-light text-black">{project.teamMembers}</span>
            <div>
              <p className="text-[13px] text-gray-500 leading-tight">Team members</p>
              <p className="text-[13px] text-gray-500 leading-tight">involved</p>
            </div>
          </div>

          {/* Client */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-gray-400">Client:</span>
            <div className="flex items-center gap-2">
              <img
                src={project.client.avatar}
                alt={project.client.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-[14px] font-medium text-black">{project.client.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Designer Quote & Description Section */}
      <section className="bg-[#f5f5f5] py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            {/* Designer Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={project.designer.avatar}
                  alt={project.designer.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-[16px] font-medium text-black">{project.designer.name}</p>
                  <p className="text-[14px] text-gray-400">{project.designer.role}</p>
                </div>
              </div>

              {/* Quote Mark */}
              <div className="text-[48px] text-gray-300 font-serif leading-none mb-4">"</div>
              
              {/* Quote Text */}
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {project.designer.quote}
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-black leading-[1.4] tracking-[-0.01em] mb-8">
                {project.description.main}
              </p>
              <p className="text-[16px] md:text-[18px] text-gray-500 leading-[1.7]">
                {project.description.secondary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="bg-[#f5f5f5] py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Header */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <h2 className="text-[18px] md:text-[20px] font-semibold text-black">Project gallery</h2>
            <GridIcon />
          </div>

          {/* Main Gallery Image */}
          <div className="mb-6">
            <img
              src={project.gallery.main}
              alt={`${project.title} main gallery`}
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.images.slice(0, 2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} gallery ${index + 1}`}
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Full Width Image */}
          {project.gallery.images[2] && (
            <div className="mt-6">
              <img
                src={project.gallery.images[2]}
                alt={`${project.title} gallery 3`}
                className="w-full h-[300px] md:h-[450px] object-cover rounded-lg"
              />
            </div>
          )}

          {/* Two Column Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {project.gallery.images.slice(3).map((image, index) => (
              <img
                key={index + 3}
                src={image}
                alt={`${project.title} gallery ${index + 4}`}
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Spaces Section */}
      <section className="bg-[#f5f5f5] py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
            {/* Section Title */}
            <div>
              <h2 className="text-[20px] md:text-[24px] font-semibold text-black">Key Spaces</h2>
            </div>

            {/* Content */}
            <div className="space-y-10">
              {/* Living Room */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-4">Living Room:</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7]">
                  {project.keySpaces.livingRoom}
                </p>
              </div>

              {/* Kitchen */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-4">Kitchen:</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7]">
                  {project.keySpaces.kitchen}
                </p>
              </div>

              {/* Bedroom */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-4">Bedroom:</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7]">
                  {project.keySpaces.bedroom}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-[#f5f5f5] py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
            {/* Section Title */}
            <div>
              <h2 className="text-[20px] md:text-[24px] font-semibold text-black">Details</h2>
            </div>

            {/* Content */}
            <div className="space-y-10">
              {/* Color Palette */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-4">Color Palette</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7]">
                  {project.details.colorPalette}
                </p>
              </div>

              {/* Materials and Textures */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-4">Materials and Textures</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7]">
                  {project.details.materials}
                </p>
              </div>

              {/* Furniture */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-4">Furniture</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7]">
                  {project.details.furniture}
                </p>
              </div>

              {/* Lighting */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black mb-4">Lighting</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7]">
                  {project.details.lighting}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
