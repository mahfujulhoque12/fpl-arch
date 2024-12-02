
import Trand from  "/public/celing/celing4.png";
import Trand2 from"/public/celing/wall1.png";
import Trand3 from "/public/celing/mirror2.png";

import celing1 from "/public/celing/celing1.png";
import celing2 from "/public/celing/celing2.png";
import celing3 from "/public/celing/celing3.png";
import celing4 from "/public/celing/celing4.png";
import celing5 from "/public/celing/celing5.png";
import celing6 from "/public/celing/celing6.png";

import wall1 from "/public/celing/wall1.png";
import wall2 from "/public/celing/wall2.png";
import wall3 from "/public/celing/wall3.png";
import wall4 from "/public/celing/wall4.png";
import wall5 from "/public/celing/wall5.png";
import wall6 from "/public/celing/wall6.png";


import mirror1 from "/public/celing/mirror1.png";
import mirror2 from "/public/celing/mirror2.png";
import mirror3 from "/public/celing/mirror3.png";
import mirror4 from "/public/celing/mirror4.png";
import mirror5 from "/public/celing/mirror5.png";
import mirror6 from "/public/celing/mirror6.png";





export type CardData = {
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
      slug:createSlug("False Ceiling Cost in Kolkata: Designs, Materials and Inspirations"),
      imageUrl: Trand.src,
      title: "False Ceiling Cost in Dhaka: Designs, Materials and Inspirations",
      des: " Md Bijoy | September 20, 2024",
      oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      celing1.src,
      celing2.src,
      celing3.src,
      celing4.src,
      celing5.src,
      celing6.src,
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
      slug:createSlug("Beyond Royalty: Purple Two-Colour Combination for Bedroom Walls"),
      imageUrl: Trand2.src,
      title: "Beyond Royalty: Purple Two-Colour Combination for Bedroom Walls",
      des: " Md Alif | September 20, 2024",
      oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      wall1.src,
      wall2.src,
      wall3.src,
      wall4.src,
      wall5.src,
      wall6.src,
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
      slug:createSlug("Beyond Royalty: Purple Two-Colour Combination for Bedroom Walls 3"),
      imageUrl: Trand3.src,
      title:
        "Stylish Storage: Beautiful Mirrored Wardrobes with Sliding Door Designs For You",
      des: " Md Alam | September 20, 2024",
      oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      mirror1.src,
      mirror2.src,
      mirror3.src,
      mirror4.src,
      mirror5.src,
      mirror6.src,
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