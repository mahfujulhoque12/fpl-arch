
import Shop1 from "/public/intorior/home1.png";
import Shop3 from "/public/intorior/home2.png";
import Shop4 from "/public/intorior/home4.png";

import luxjary1 from "/public/shopCard/luxjary1.png";
import luxjary2 from "/public/shopCard/luxjary2.png";
import luxjary3 from "/public/shopCard/luxjary3.png";
import luxjary4 from "/public/shopCard/luxjary4.png";
import luxjary5 from "/public/shopCard/luxjary5.png";
import luxjary6 from "/public/shopCard/luxjary6.png";


import moduler1 from "/public/shopCard/moduler1.png";
import moduler2 from "/public/shopCard/moduler6.png";
import moduler3 from "/public/shopCard/moduler3.png";
import moduler4 from "/public/shopCard/moduler4.png";
import moduler5 from "/public/shopCard/moduler5.png";
import moduler6 from "/public/shopCard/moduler2.png";

import renovations1 from "/public/shopCard/renovations1.png";
import renovations2 from "/public/shopCard/renovations2.png";
import renovations3 from "/public/shopCard/renovations3.png";
import renovations4 from "/public/shopCard/renovations4.png";
import renovations5 from "/public/shopCard/renovations5.png";
import renovations6 from "/public/shopCard/renovations6.png";






 type CardData = {
    id: number;
    slug: string;
    imageUrl?: string;
    title: string;
    des: string;
    price?: string;
    type?: string;
    completeDate?: string;
    companyInfo?: string;
    oldPrice?: string;
    feature?: string;
    allImageUrl?: string[];
    sustainabilityFeatures?: string;
    caseStudies?: string;
    floorPlans?: string;
    designFeatures?: string;
  };
    
  const createSlug = (title: string): string =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

export const cardData: CardData[] = [
  {
    id: 1,
    slug:createSlug("Modular Interiors 1"),
    title: "Modular Interiors",
    des:"Transform your space with modular interiors that blend style and adaptability. Our designs offer flexibility and functionality, perfect for both modern homes and offices.",
    imageUrl: Shop1.src,
    oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      moduler1.src,
      moduler2.src,
      moduler3.src,
      moduler4.src,
      moduler5.src,
      moduler6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 2,
    slug:createSlug("Luxury Interiors 2"),
    title: "Luxury Interiors",
    des:"Indulge in the elegance of luxury interiors that redefine sophistication. Our designs combine high-end materials and exquisite craftsmanship to create spaces that exude opulence and comfort.",
    imageUrl: Shop3.src,
    oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      luxjary1.src,
      luxjary2.src,
      luxjary3.src,
      luxjary4.src,
      luxjary5.src,
      luxjary6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 3,
    slug:createSlug("Renovations Interiors 3"),
    title: "Renovations",
    des:"Revitalize your space with expert renovations that blend modern design with timeless appeal. Whether upgrading a single room or transforming your entire home, we bring new life to your existing spaces",
    imageUrl: Shop4.src,
    oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      renovations1.src,
      renovations2.src,
      renovations3.src,
      renovations4.src,
      renovations5.src,
      renovations6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
];