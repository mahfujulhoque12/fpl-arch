import blog1 from "/public/blog/blog1.png";
import blog2 from "/public/blog/blog2.png";
import blog3 from "/public/blog/blog3.png";
import blog4 from "/public/blog/blog4.png";
import blog5 from "/public/blog/blog5.png";
import blog6 from "/public/blog/blog6.png";
import blog7 from "/public/blog/blog7.png";
import blog8 from "/public/blog/blog8.png";
import blog9 from "/public/blog/blog9.png";
import blog10 from "/public/blog/blog10.png";

import blogClinet from "/public/blog/client.png";

type CardData = {
  id: number;
  slug: string;
  imageUrl: string;
  date: string;
  title: string;
  des: string;
  clinetImg: string; 
  name: string;
  min: string;
  detailsDes?: string;
  detailsInfo?: { id: number; title?: string; info?: string }[];
  tranding?: { id: number; imageUrl?: string; title?: string }[];
};
const createSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: blog1.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path one"
    ),
    title: "How Sustainable Architecture is Changing the Building Industry",
    des: "Sustainable architecture is transforming the building industry by emphasizing eco-friendly design, energy efficiency, and the use of renewable materials. Architects are increasingly incorporating green roofs, solar panels, and efficient systems to reduce environmental impact, while promoting the use of recyclable materials and designs that lower operational costs and support long-term sustainability",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.,which is the most convenient way ",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets,which is the most convenient way .",
      },
    ],
  
  },
  {
    id: 2,
    imageUrl: blog2.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path tow"
    ),
    title: "Building a Sustainable Future: Green Architecture Solutions",
    des: "Building a sustainable future through green architecture focuses on designing buildings that minimize environmental impact while maximizing energy efficiency. By incorporating renewable materials, energy-saving technologies, and eco-friendly systems like solar panels and rainwater harvesting, green architecture aims to create healthier living spaces that conserve resources and reduce carbon footprints, paving the way for a more sustainable and resilient built environment.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 7 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 3,
    imageUrl: blog3.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path three"
    ),
    title: "From Concept to Completion: The Journey of a Building Project",
    des: "The journey of a building project starts with conceptualizing the design, followed by planning, budgeting, and obtaining permits. Construction then begins, with ongoing inspections to ensure quality and compliance. Finally, the project is completed, checked, and handed over, turning the initial vision into a fully realized, functional space.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 4,
    imageUrl: blog4.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path four"
    ),
    title: "Maximizing Space: Innovative Ideas for Small Apartments",
    des: "Maximizing space in small apartments requires creative design solutions that optimize functionality without compromising on style. By using multi-functional furniture, built-in storage, and open layouts, homeowners can make the most of limited space. Additionally, incorporating light colors, mirrors, and vertical storage can make rooms appear larger, while smart organization systems help reduce clutter, creating a more spacious and comfortable living environment.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 8 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 5,
    imageUrl: blog5.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path five"
    ),
    title: "The Role of Technology in Modern Architecture",
    des: "Technology plays a crucial role in modern architecture by enabling innovative design solutions and improving construction efficiency. Advanced software like Building Information Modeling (BIM) allows architects to visualize and modify designs in real-time, while sustainable technologies such as solar panels, smart lighting, and energy-efficient materials contribute to eco-friendly buildings. Additionally, automation and smart home systems enhance the functionality and comfort of modern spaces, creating homes and commercial buildings that are more efficient, adaptable, and connected.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.",
      },
    ],
   
  },
  {
    id: 6,
    imageUrl: blog6.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path six"
    ),
    title: "Exploring the Beauty of Modern Minimalist Architecture",
    des: "Modern minimalist architecture focuses on simplicity, clean lines, and open spaces, creating a sense of calm and elegance. By emphasizing functionality and reducing unnecessary details, this design style uses neutral colors, natural materials, and a clutter-free approach to create a serene and timeless environment. The beauty of minimalist architecture lies in its ability to create visually stunning spaces that highlight form, light, and texture, offering a peaceful and harmonious living experience.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 7,
    imageUrl: blog7.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "How to Choose the Right Architect for Your Next Project"
    ),
    title: "How Architecture Affects Mental Health and Well-Being",
    des: "Architecture greatly affects mental health by influencing mood and well-being. Thoughtful design, such as natural light, open spaces, and calming materials, can reduce stress and promote relaxation, while poorly designed environments can contribute to discomfort and anxiety.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],

  },
  {
    id: 8,
    imageUrl: blog8.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Why Good Design Matters: The Impact of Architecture on Daily Life"
    ),
    title: "Why Good Design Matters: The Impact of Architecture on Daily Life",
    des: "Good design in architecture plays a vital role in enhancing daily life by creating functional, comfortable, and aesthetically pleasing spaces. Well-designed buildings improve productivity, foster well-being, and provide a sense of safety and connection, while also reflecting cultural values and personal identity. The impact of architecture extends beyond aesthetics, shaping how we live, work, and interact within our environments.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 7 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 9,
    imageUrl: blog9.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path nine"
    ),
    title: "Transforming Small Spaces: Creative Solutions for Urban Living",
    des: "Transforming small spaces in urban living requires creative design solutions that maximize functionality without sacrificing style. Using multi-purpose furniture, smart storage, and open floor plans, small apartments can feel spacious and organized. Incorporating vertical storage, light colors, and mirrors can further enhance the sense of space, while efficient layouts create a comfortable and functional living environment in even the most compact areas.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 10,
    imageUrl: blog10.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path ten"
    ),
    title: "How Sustainable Architecture is Changing the Building Industry",
    des: "Sustainable architecture is transforming the building industry by prioritizing eco-friendly design, energy efficiency, and the use of renewable materials. Architects are integrating green technologies like solar panels, energy-efficient systems, and sustainable building materials, reducing a building's carbon footprint and operating costs. This shift towards sustainability is not only helping to conserve resources but also promoting healthier, more environmentally conscious living spaces for the future.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 8 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 11,
    imageUrl: blog5.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path yelleven"
    ),
    title: "Creating Timeless Designs: The Art of Blending Modern and Traditional Styles",
    des: "Creating timeless designs involves blending modern and traditional styles to achieve a harmonious balance between innovation and heritage. By combining contemporary elements like clean lines and open spaces with classic features such as intricate details, natural materials, and warm textures, designers create spaces that feel both fresh and enduring. This fusion honors the past while embracing the future, resulting in a design that remains relevant and appealing across generations.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 12,
    imageUrl: blog3.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path twlbe"
    ),
    title: "Why Every Home Needs Thoughtful, Customized Design",
    des: "Every home needs thoughtful, customized design to reflect its occupants' unique needs, preferences, and lifestyle. Tailored design solutions create functional, comfortable spaces that enhance daily living, improve efficiency, and foster a sense of belonging. By considering aspects like layout, lighting, and storage, customized design ensures that a home is not only aesthetically pleasing but also practical and well-suited to its inhabitants.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 13,
    imageUrl: blog10.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path tirteen"
    ),
    title: "Architectural Mistakes to Avoid in Your Next Project",
    des: "To avoid common architectural mistakes, ensure proper planning, consider natural light and ventilation, choose durable materials, and create a cohesive design that meets the needs of the occupants. Failing to do so can lead to inefficiencies and a lack of harmony in your project.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 14,
    imageUrl: blog9.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path fourteen"
    ),
    title: "How Architecture Can Improve Your Quality of Life",
    des: "Architecture can significantly improve your quality of life by creating functional, comfortable, and aesthetically pleasing spaces that enhance daily living. Thoughtful design promotes well-being through natural light, efficient layouts, and mindful use of materials, fostering a sense of tranquility, productivity, and connection within the environment.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 15,
    imageUrl: blog6.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path fiveteen"
    ),
    title: "The Importance of Functionality in Architectural Design",
    des: "Functionality in architectural design is crucial as it ensures that spaces are practical, efficient, and tailored to the needs of the people who use them. A well-designed building balances aesthetics with usability, optimizing layouts, flow, and accessibility to enhance daily life while maintaining a comfortable and organized environment.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 16,
    imageUrl: blog8.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path sixteen"
    ),
    title: "Designing for Comfort: Balancing Aesthetics and Functionality",
    des: "Designing for comfort involves balancing aesthetics with functionality to create spaces that are both visually appealing and practical. Thoughtful design considers the layout, materials, and lighting to ensure a comfortable atmosphere, while also addressing the specific needs of the occupants, resulting in a space that feels welcoming, efficient, and easy to live in.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
 
  },
  {
    id: 17,
    imageUrl: blog1.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path seventeen"
    ),
    title: "How to Create a Seamless Indoor-Outdoor Living Experience",
    des: "To create a seamless indoor-outdoor living experience, use large windows, sliding doors, and consistent materials that blend the interior with the exterior. Incorporating outdoor spaces like patios and gardens helps create a natural flow between both areas.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest,which is the most convenient way , I ventured out to explore the neighborhood. Walking through the narrow streets.",
      },
    ],
   
  },
  {
    id: 18,
    imageUrl: blog7.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path 18"
    ),
    title: "The Evolution of Architecture: How Design Styles Have Changed Over Time",
    des: "Architecture has evolved from ancient classical designs to modern minimalism, with each era introducing new materials, techniques, and aesthetic ideals. Today, the focus is on sustainability, technology, and personalized designs, shaping how we live and interact with spaces.",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
];
