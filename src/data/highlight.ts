
import high1 from '/public/high/high1.png'
import high2 from '/public/high/high2.png'
import high3 from '/public/high/high3.png'
import high4 from '/public/high/high4.png'
import high5 from '/public/high/high5.png'
import high6 from '/public/high/high6.png'
import high7 from '/public/high/high7.png'
import high8 from '/public/high/high8.png'
import high9 from '/public/high/high9.png'
import high10 from '/public/high/high10.png'
import high11 from '/public/high/high11.png'

import high13 from '/public/high/high13.png'
import high14 from '/public/high/high14.png'
import high15 from '/public/high/high15.png'
import high16 from '/public/high/high16.png'

import hotel1 from '/public/high/hotel1.png'
import hotel2 from '/public/high/hotel2.png'
import hotel3 from '/public/high/hotel3.png'
import hotel4 from '/public/high/hotel4.png'
import hotel5 from '/public/high/hotel5.png'



 type CardData = {
    id: number;
    slug: string;
    imageUrl: string;
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
    titleTwo:string;
    desTwo:string,
  };
    
    const createSlug = (title: string): string =>
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

        
export const cardData: CardData[] = [
  {
      id:1,
      imageUrl:hotel3.src,
      slug:createSlug("False Ceiling Cost in Kolkata: Designs, Materials and Inspirations"),
      title: "False Ceiling Cost in Kolkata: Designs, Materials and Inspirations",
      des: " Anusha Kulal | September 20, 2024",
      oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      high1.src,
      high2.src,
      high3.src,
      high4.src,
      high5.src,
      high6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",
      titleTwo:"That is our most valuable projects",
      desTwo:"click the image and check all the assets. so let's check it out",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
      
  },

  {
      id:2,
      imageUrl:high10.src, 
      slug:createSlug("False Ceiling Cost in Kolkata: Designs, Materials and Inspirations ff"),
      title: "False Ceiling Cost in Kolkata: Designs, Materials and Inspirations",
      des: " Anusha Kulal | September 20, 2024",
      oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      hotel1.src,
      hotel2.src,
      hotel3.src,
      hotel4.src,
      hotel5.src,
      hotel1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
      titleTwo:"That is our most valuable projects",
      desTwo:"click the image and check all the assets. so let's check it out",
      
  },
  {
      id:3,
      imageUrl:high13.src,
      slug:createSlug("False Ceiling Cost in Kolkata: Designs, Materials and Inspirations ds"),
      title: "False Ceiling Cost in Kolkata: Designs, Materials and Inspirations",
      des: " Anusha Kulal | September 20, 2024",
      oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      high7.src,
      high8.src,
      high9.src,
      high10.src,
      high11.src,
      high13.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",
      titleTwo:"That is our most valuable projects",
      desTwo:"click the image and check all the assets. so let's check it out",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
      id:4,
      imageUrl:high2.src,
      slug:createSlug("False Ceiling Cost in Kolkata: Designs, Materials and Inspirations tf"),
      title: "False Ceiling Cost in Kolkata: Designs, Materials and Inspirations",
      des: " Anusha Kulal | September 20, 2024",
      oldPrice: "$2000",
    price: "$1000",
    type: "House",
    completeDate: "1 Month",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",
    allImageUrl: [
      high14.src,
      high15.src,
      high16.src,
      hotel1.src,
      hotel2.src,
      hotel3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
      titleTwo:"That is our most valuable projects",
      desTwo:"click the image and check all the assets. so let's check it out",
  },
 
]