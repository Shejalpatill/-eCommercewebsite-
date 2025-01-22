import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookingForm from '../../Components/BookingForm';
import bgImage from "D:/React-websites/fullstackecommercewebsite/src/assests/images/des1.jpg";

const destinationData = [
{
  id: 1,
    title: "Tokyo",
    image: "tokyoImage.jpg",
    originalPrice: "₹15,999",
    price: "₹12,999",
    offer: "20% Off",
    days: 7,
    nights: 6,
    description:
      "Tradition collides with pop culture in Tokyo, where you can reverently wander ancient temples before rocking out at a karaoke bar...",
    details:
      "Great for historical tours, bars, cultural tours, rail tours, and more."
  },
  {
    id: 2,
    title: "Paris",
    image: "parisImage.jpg",
    originalPrice: "₹18,999",
    price: "₹14,999",
    offer: "21% Off",
    days: 6,
    nights: 5,
    description:
      "Paris is a city of beauty, romance, and historical significance, offering everything from art museums to gourmet cuisine...",
    details: "Ideal for romantic getaways, art tours, and historical sightseeing."
  },
  {
    id: 3,
    title: "New York City",
    image: "newYorkImage.jpg",
    originalPrice: "₹20,999",
    price: "₹16,999",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "New York City, the city that never sleeps, offers iconic landmarks like the Statue of Liberty, Central Park, and Times Square...",
    details:
      "Perfect for city tours, Broadway shows, museums, and vibrant nightlife."
  },
  {
    id: 4,
    title: "Sydney",
    image: "sydneyImage.jpg",
    originalPrice: "₹19,999",
    price: "₹15,999",
    offer: "20% Off",
    days: 7,
    nights: 6,
    description:
      "Sydney offers beautiful beaches, the iconic Opera House, and a buzzing nightlife, all set against stunning natural landscapes...",
    details:
      "Great for beach lovers, cultural events, and outdoor activities like hiking."
  },
  {
    id: 5,
    title: "Dubai",
    image: "dubaiImage.jpg",
    originalPrice: "₹25,999",
    price: "₹20,999",
    offer: "25% Off",
    days: 6,
    nights: 5,
    description:
      "Dubai is a city of luxury, known for its modern architecture, shopping malls, and desert adventures, where tradition meets modernity...",
    details:
      "Ideal for shopping, desert safaris, and luxury experiences with world-class hospitality."
  },
  {
    id: 6,
    title: "Rome",
    image: "romeImage.jpg",
    originalPrice: "₹17,999",
    price: "₹13,999",
    offer: "22% Off",
    days: 5,
    nights: 4,
    description:
      "Rome, a city filled with ancient history, stunning architecture, and delicious food, offers endless opportunities for exploration...",
    details:
      "Great for historical tours, museums, art, and indulging in Italian cuisine."
  },
  {
    id: 7,
    title: "London",
    image: "londonImage.jpg",
    originalPrice: "₹21,999",
    price: "₹17,999",
    offer: "18% Off",
    days: 7,
    nights: 6,
    description:
      "London blends rich history with modern culture, offering iconic landmarks like Big Ben, the Tower of London, and world-class museums...",
    details:
      "Perfect for history buffs, art lovers, and those looking to explore royal palaces."
  },
  {
    id: 8,
    title: "Bangkok",
    image: "bangkokImage.jpg",
    originalPrice: "₹14,999",
    price: "₹11,999",
    offer: "20% Off",
    days: 6,
    nights: 5,
    description:
      "Bangkok is a bustling city full of contrasts, from ornate temples to vibrant street markets, offering something for everyone...",
    details: "Ideal for food tours, shopping, and exploring local culture."
  },
  {
    id: 9,
    title: "Istanbul",
    image: "istanbulImage.jpg",
    originalPrice: "₹16,999",
    price: "₹13,499",
    offer: "20% Off",
    days: 5,
    nights: 4,
    description:
      "A melting pot of cultures, Istanbul offers historic sites like the Hagia Sophia and the Blue Mosque, along with vibrant bazaars and cuisine...",
    details:
      "Great for cultural tours, shopping, and exploring the rich history of Turkey."
  },
  {
    id: 10,
    title: "Cairo",
    image: "cairoImage.jpg",
    originalPrice: "₹15,499",
    price: "₹12,499",
    offer: "19% Off",
    days: 6,
    nights: 5,
    description:
      "Cairo offers a journey back in time to ancient Egypt with its pyramids, museums, and vibrant culture rooted in history...",
    details:
      "Ideal for historical tours, desert safaris, and exploring ancient civilizations."
  },
  {
    id: 11,
    title: "Bali",
    image: "baliImage.jpg",
    originalPrice: "₹19,499",
    price: "₹15,499",
    offer: "21% Off",
    days: 7,
    nights: 6,
    description:
      "Bali, an Indonesian paradise, offers stunning beaches, lush landscapes, and rich culture with temples and spiritual experiences...",
    details:
      "Perfect for beach lovers, yoga retreats, and cultural explorations."
  },
  {
    id: 12,
    title: "Cape Town",
    image: "capeTownImage.jpg",
    originalPrice: "₹22,999",
    price: "₹18,499",
    offer: "19% Off",
    days: 8,
    nights: 7,
    description:
      "Cape Town offers a mix of beautiful landscapes, from mountains to beaches, along with rich history and cultural diversity...",
    details:
      "Great for nature lovers, hiking, wildlife safaris, and cultural tours."
  },
  {
    id: 13,
    title: "Singapore",
    image: "singaporeImage.jpg",
    originalPrice: "₹16,999",
    price: "₹13,999",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Singapore, a modern city-state, offers an array of attractions from futuristic architecture to vibrant neighborhoods and delicious food...",
    details:
      "Ideal for city tours, food lovers, shopping, and exploring local culture."
  },
  {
    id: 14,
    title: "Santorini",
    image: "santoriniImage.jpg",
    originalPrice: "₹20,499",
    price: "₹16,499",
    offer: "19% Off",
    days: 6,
    nights: 5,
    description:
      "Santorini, a stunning Greek island, is known for its whitewashed buildings, blue-domed churches, and breathtaking sunsets...",
    details: "Perfect for romantic getaways, beach lovers, and cultural tours."
  },
  {
    id: 15,
    title: "Kyoto",
    image: "kyotoImage.jpg",
    originalPrice: "₹17,999",
    price: "₹14,499",
    offer: "19% Off",
    days: 6,
    nights: 5,
    description:
      "Kyoto offers a glimpse into Japan's ancient culture, with beautiful temples, traditional tea houses, and serene gardens...",
    details: "Great for historical tours, cultural experiences, and nature lovers."
  },
  {
    id: 16,
    title: "Rio de Janeiro",
    image: "rioImage.jpg",
    originalPrice: "₹21,999",
    price: "₹17,999",
    offer: "18% Off",
    days: 7,
    nights: 6,
    description:
      "Rio de Janeiro, famous for its beaches and the iconic Christ the Redeemer statue, offers a vibrant mix of culture and nature...",
    details: "Ideal for beach lovers, cultural events, and exploring local traditions."
  },
  {
    id: 17,
    title: "Venice",
    image: "veniceImage.jpg",
    originalPrice: "₹19,999",
    price: "₹16,499",
    offer: "17% Off",
    days: 6,
    nights: 5,
    description:
      "Venice, known for its canals, gondolas, and beautiful architecture, is one of the most romantic cities in the world...",
    details: "Perfect for romantic getaways, historical tours, and cultural experiences."
  },
  {
    id: 18,
    title: "Moscow",
    image: "moscowImage.jpg",
    originalPrice: "₹18,999",
    price: "₹14,999",
    offer: "21% Off",
    days: 6,
    nights: 5,
    description:
      "Moscow, Russia’s capital, offers a rich history, iconic architecture like the Kremlin, and a vibrant cultural scene...",
    details: "Great for historical tours, museums, and exploring Russian culture."
  },
  {
    id: 19,
    title: "Los Angeles",
    image: "losAngelesImage.jpg",
    originalPrice: "₹22,499",
    price: "₹18,499",
    offer: "18% Off",
    days: 6,
    nights: 5,
    description:
      "Los Angeles is known for its entertainment industry, with iconic sites like Hollywood, stunning beaches, and vibrant culture...",
    details: "Perfect for beach lovers, city tours, and exploring the film industry."
  },
  {
    id: 20,
    title: "Cancun",
    image: "cancunImage.jpg",
    originalPrice: "₹18,499",
    price: "₹14,999",
    offer: "19% Off",
    days: 7,
    nights: 6,
    description:
      "Cancun, a Mexican paradise, offers stunning beaches, vibrant nightlife, and ancient Mayan ruins for cultural explorations...",
    details: "Ideal for beach lovers, water sports, and exploring local culture."
  },
  {
    id: 21,
    title: "Lisbon",
    image: "lisbonImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Lisbon offers a blend of traditional charm and modern flair with its historic neighborhoods, stunning viewpoints, and lively culture...",
    details: "Great for city tours, historical sites, and enjoying local cuisine."
  },
  {
    id: 22,
    title: "Amsterdam",
    image: "amsterdamImage.jpg",
    originalPrice: "₹17,999",
    price: "₹14,499",
    offer: "19% Off",
    days: 6,
    nights: 5,
    description:
      "Amsterdam is renowned for its picturesque canals, vibrant art scene, and historic landmarks, providing a unique cultural experience...",
    details: "Ideal for exploring museums, canal cruises, and cultural tours."
  },
  {
    id: 23,
    title: "Barcelona",
    image: "barcelonaImage.jpg",
    originalPrice: "₹18,499",
    price: "₹15,499",
    offer: "16% Off",
    days: 7,
    nights: 6,
    description:
      "Barcelona offers stunning architecture by Gaudí, beautiful beaches, and a rich cultural heritage, making it a vibrant city to explore...",
    details: "Perfect for art tours, beach relaxation, and historical exploration."
  },
  {
    id: 24,
    title: "Prague",
    image: "pragueImage.jpg",
    originalPrice: "₹15,999",
    price: "₹12,499",
    offer: "22% Off",
    days: 5,
    nights: 4,
    description:
      "Prague is known for its charming old town, historic castles, and stunning architecture, offering a fairy-tale experience...",
    details: "Great for historical tours, cultural experiences, and scenic views."
  },
  {
    id: 25,
    title: "Vienna",
    image: "viennaImage.jpg",
    originalPrice: "₹19,499",
    price: "₹15,999",
    offer: "18% Off",
    days: 6,
    nights: 5,
    description:
      "Vienna, the city of music and imperial history, offers grand palaces, classical concerts, and a rich cultural heritage...",
    details: "Ideal for exploring historical sites, enjoying music, and cultural tours."
  },
  {
    id: 26,
    title: "Budapest",
    image: "budapestImage.jpg",
    originalPrice: "₹17,499",
    price: "₹13,999",
    offer: "20% Off",
    days: 5,
    nights: 4,
    description:
      "Budapest, with its stunning architecture and thermal baths, offers a unique blend of old-world charm and modern vibrancy...",
    details: "Great for thermal baths, historical tours, and exploring local culture."
  },
  {
    id: 27,
    title: "Edinburgh",
    image: "edinburghImage.jpg",
    originalPrice: "₹18,999",
    price: "₹14,999",
    offer: "21% Off",
    days: 6,
    nights: 5,
    description:
      "Edinburgh, Scotland’s capital, boasts a rich history, stunning architecture, and vibrant festivals set against a backdrop of rolling hills...",
    details: "Ideal for historical tours, cultural festivals, and exploring historic sites."
  },
  {
    id: 28,
    title: "Dublin",
    image: "dublinImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Dublin offers a rich cultural experience with its literary history, lively pubs, and historic landmarks like Trinity College and Dublin Castle...",
    details: "Perfect for cultural tours, pub experiences, and historical exploration."
  },
  {
    id: 29,
    title: "Reykjavik",
    image: "reykjavikImage.jpg",
    originalPrice: "₹19,499",
    price: "₹15,499",
    offer: "21% Off",
    days: 7,
    nights: 6,
    description:
      "Reykjavik, Iceland’s capital, is known for its stunning natural landscapes, hot springs, and vibrant city life, making it a unique destination...",
    details: "Ideal for exploring nature, hot springs, and experiencing Icelandic culture."
  },
  {
    id: 30,
    title: "Vancouver",
    image: "vancouverImage.jpg",
    originalPrice: "₹22,499",
    price: "₹18,999",
    offer: "16% Off",
    days: 7,
    nights: 6,
    description:
      "Vancouver offers breathtaking natural scenery, from mountains to ocean, and a diverse cultural scene with vibrant neighborhoods...",
    details: "Great for outdoor activities, city exploration, and enjoying local cuisine."
  },
  {
    id: 31,
    title: "Hong Kong",
    image: "hongKongImage.jpg",
    originalPrice: "₹21,499",
    price: "₹17,499",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "Hong Kong combines modern skyscrapers with traditional markets, offering a dynamic city experience with shopping, dining, and cultural attractions...",
    details: "Perfect for city tours, shopping, and exploring diverse neighborhoods."
  },
  {
    id: 32,
    title: "Seoul",
    image: "seoulImage.jpg",
    originalPrice: "₹19,999",
    price: "₹15,999",
    offer: "20% Off",
    days: 6,
    nights: 5,
    description:
      "Seoul offers a rich blend of modernity and tradition with its vibrant neighborhoods, palaces, and high-tech advancements...",
    details: "Ideal for exploring historic sites, shopping, and experiencing Korean culture."
  },
  {
    id: 33,
    title: "Athens",
    image: "athensImage.jpg",
    originalPrice: "₹18,499",
    price: "₹14,999",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "Athens, the cradle of Western civilization, offers ancient ruins, museums, and vibrant street life in a city rich with history...",
    details: "Great for historical tours, cultural exploration, and enjoying Greek cuisine."
  },
  {
    id: 34,
    title: "Lisbon",
    image: "lisbonImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Lisbon is a city of charm with its historic districts, beautiful viewpoints, and vibrant nightlife, offering a delightful European experience...",
    details: "Ideal for exploring historic sites, local cuisine, and scenic views."
  },
  {
    id: 35,
    title: "Warsaw",
    image: "warsawImage.jpg",
    originalPrice: "₹14,999",
    price: "₹11,999",
    offer: "20% Off",
    days: 5,
    nights: 4,
    description:
      "Warsaw, Poland’s capital, blends historical resilience with modern attractions, offering a rich cultural and historical experience...",
    details: "Great for historical tours, cultural experiences, and exploring local cuisine."
  },
  {
    id: 36,
    title: "Brussels",
    image: "brusselsImage.jpg",
    originalPrice: "₹16,999",
    price: "₹13,499",
    offer: "20% Off",
    days: 5,
    nights: 4,
    description:
      "Brussels, the heart of Europe, offers stunning architecture, delicious chocolates, and a vibrant cultural scene...",
    details: "Ideal for exploring historic sites, enjoying local cuisine, and cultural experiences."
  },
  {
    id: 37,
    title: "Shimonoseki",
    image: "shimonosekiImage.jpg",
    originalPrice: "₹12,999",
    price: "₹10,999",
    offer: "15% Off",
    days: 4,
    nights: 3,
    description:
      "Experience the city of Shimonoseki with its rich history, cultural sites, and beautiful landscapes...",
    details: "Great for historical tours, bars, cultural tours, rail tours, and more."
  },
  {
    id: 38,
    title: "Krakow",
    image: "krakowImage.jpg",
    originalPrice: "₹15,499",
    price: "₹12,499",
    offer: "19% Off",
    days: 6,
    nights: 5,
    description:
      "Krakow offers a beautifully preserved historic center, lively cultural scene, and rich Jewish heritage...",
    details: "Perfect for historical tours, cultural exploration, and enjoying Polish cuisine."
  },
  {
    id: 39,
    title: "Montreal",
    image: "montrealImage.jpg",
    originalPrice: "₹17,999",
    price: "₹14,499",
    offer: "19% Off",
    days: 6,
    nights: 5,
    description:
      "Montreal, a vibrant Canadian city, offers a rich mix of history, culture, and culinary delights, with a diverse and lively atmosphere...",
    details: "Great for exploring neighborhoods, cultural events, and enjoying local cuisine."
  },
  {
    id: 40,
    title: "Osaka",
    image: "osakaImage.jpg",
    originalPrice: "₹19,499",
    price: "₹16,499",
    offer: "16% Off",
    days: 5,
    nights: 4,
    description:
      "Osaka is known for its modern architecture, vibrant nightlife, and excellent street food, offering a dynamic urban experience...",
    details: "Ideal for food tours, city exploration, and enjoying modern attractions."
  },
  {
    id: 41,
    title: "Dubai",
    image: "dubaiImage.jpg",
    originalPrice: "₹23,499",
    price: "₹19,499",
    offer: "17% Off",
    days: 5,
    nights: 4,
    description:
      "Dubai offers luxury shopping, modern skyscrapers, and stunning desert landscapes, combining opulence with adventure...",
    details: "Perfect for shopping, luxury experiences, and desert excursions."
  },
  {
    id: 42,
    title: "Istanbul",
    image: "istanbulImage.jpg",
    originalPrice: "₹18,999",
    price: "₹15,499",
    offer: "18% Off",
    days: 6,
    nights: 5,
    description:
      "Istanbul bridges Europe and Asia with its rich history, stunning mosques, and vibrant markets, offering a unique cultural blend...",
    details: "Great for exploring historical sites, local markets, and experiencing diverse cuisine."
  },
  {
    id: 43,
    title: "Cairo",
    image: "cairoImage.jpg",
    originalPrice: "₹21,499",
    price: "₹17,499",
    offer: "19% Off",
    days: 7,
    nights: 6,
    description:
      "Cairo, with its ancient pyramids and rich history, offers a captivating journey into ancient Egyptian civilization...",
    details: "Ideal for historical tours, cultural experiences, and exploring ancient ruins."
  },
  {
    id: 44,
    title: "Singapore",
    image: "singaporeImage.jpg",
    originalPrice: "₹20,499",
    price: "₹16,499",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "Singapore is a modern city-state known for its stunning skyline, vibrant neighborhoods, and diverse cuisine...",
    details: "Perfect for city tours, culinary experiences, and exploring futuristic attractions."
  },
  {
    id: 45,
    title: "New Delhi",
    image: "newDelhiImage.jpg",
    originalPrice: "₹18,499",
    price: "₹14,499",
    offer: "21% Off",
    days: 5,
    nights: 4,
    description:
      "New Delhi, India's capital, offers a blend of historical landmarks, vibrant markets, and rich cultural experiences...",
    details: "Great for exploring historical sites, local markets, and experiencing Indian culture."
  },
  {
    id: 46,
    title: "Rio de Janeiro",
    image: "rioDeJaneiroImage.jpg",
    originalPrice: "₹23,499",
    price: "₹19,499",
    offer: "17% Off",
    days: 7,
    nights: 6,
    description:
      "Rio de Janeiro is famous for its stunning beaches, vibrant carnival, and iconic landmarks like the Christ the Redeemer statue...",
    details: "Ideal for beach lovers, cultural festivals, and exploring Brazilian culture."
  },
  {
    id: 47,
    title: "Cape Town",
    image: "capeTownImage.jpg",
    originalPrice: "₹22,499",
    price: "₹18,499",
    offer: "18% Off",
    days: 7,
    nights: 6,
    description:
      "Cape Town offers breathtaking landscapes, from Table Mountain to beautiful beaches, and a vibrant cultural scene...",
    details: "Perfect for outdoor adventures, scenic views, and exploring local culture."
  },
  {
    id: 48,
    title: "Buenos Aires",
    image: "buenosAiresImage.jpg",
    originalPrice: "₹20,999",
    price: "₹17,499",
    offer: "17% Off",
    days: 6,
    nights: 5,
    description:
      "Buenos Aires is known for its rich culture, historic architecture, and vibrant tango scene, offering a dynamic city experience...",
    details: "Great for cultural tours, historic sites, and enjoying local cuisine."
  },
  {
    id: 49,
    title: "Athens",
    image: "athensImage.jpg",
    originalPrice: "₹17,999",
    price: "₹14,499",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "Athens offers ancient ruins, beautiful architecture, and a lively atmosphere, making it a fascinating destination...",
    details: "Ideal for exploring historical sites, cultural experiences, and enjoying Greek cuisine."
  },
  {
    id: 50,
    title: "Amsterdam",
    image: "amsterdamImage.jpg",
    originalPrice: "₹18,499",
    price: "₹15,499",
    offer: "16% Off",
    days: 6,
    nights: 5,
    description:
      "Amsterdam combines historic charm with modern attractions, offering picturesque canals, vibrant art scene, and unique cultural experiences...",
    details: "Perfect for canal cruises, museum visits, and exploring local culture."
  },
  {
    id: 51,
    title: "Stockholm",
    image: "stockholmImage.jpg",
    originalPrice: "₹18,499",
    price: "₹14,999",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "Stockholm, built on 14 islands, offers a beautiful mix of historical sites, modern design, and stunning waterfront views...",
    details: "Ideal for exploring historic sites, city tours, and enjoying Scandinavian cuisine."
  },
  {
    id: 52,
    title: "Oslo",
    image: "osloImage.jpg",
    originalPrice: "₹19,999",
    price: "₹16,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Oslo offers stunning natural landscapes, modern architecture, and a rich cultural scene, making it a vibrant Nordic city to explore...",
    details: "Great for outdoor activities, cultural experiences, and exploring local cuisine."
  },
  {
    id: 53,
    title: "Helsinki",
    image: "helsinkiImage.jpg",
    originalPrice: "₹17,999",
    price: "₹13,499",
    offer: "25% Off",
    days: 5,
    nights: 4,
    description:
      "Helsinki, with its beautiful archipelago, modern design, and rich cultural heritage, offers a unique Scandinavian experience...",
    details: "Perfect for exploring city landmarks, enjoying local cuisine, and scenic views."
  },
  {
    id: 54,
    title: "Tallinn",
    image: "tallinnImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Tallinn offers a well-preserved medieval old town, charming streets, and a vibrant cultural scene, making it a captivating destination...",
    details: "Ideal for exploring historic sites, local markets, and enjoying Estonian cuisine."
  },
  {
    id: 55,
    title: "Vilnius",
    image: "vilniusImage.jpg",
    originalPrice: "₹15,999",
    price: "₹12,499",
    offer: "22% Off",
    days: 5,
    nights: 4,
    description:
      "Vilnius, with its baroque architecture and rich history, offers a unique blend of historical charm and vibrant culture...",
    details: "Great for exploring historical sites, enjoying local cuisine, and cultural experiences."
  },
  {
    id: 56,
    title: "Riga",
    image: "rigaImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Riga offers a rich blend of medieval and modern architecture, vibrant markets, and a lively cultural scene...",
    details: "Ideal for exploring historic sites, local markets, and enjoying Latvian cuisine."
  },
  {
    id: 57,
    title: "Dubrovnik",
    image: "dubrovnikImage.jpg",
    originalPrice: "₹20,499",
    price: "₹17,499",
    offer: "15% Off",
    days: 6,
    nights: 5,
    description:
      "Dubrovnik, known as the 'Pearl of the Adriatic', offers stunning coastal views, historic architecture, and vibrant city life...",
    details: "Perfect for beach relaxation, exploring historic sites, and enjoying local cuisine."
  },
  {
    id: 58,
    title: "Kotor",
    image: "kotorImage.jpg",
    originalPrice: "₹17,999",
    price: "₹14,499",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "Kotor, with its stunning fjord-like bay and well-preserved medieval architecture, offers a captivating experience...",
    details: "Great for exploring historic sites, scenic views, and enjoying local cuisine."
  },
  {
    id: 59,
    title: "Budva",
    image: "budvaImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Budva offers beautiful beaches, historic sites, and a vibrant nightlife, making it a great destination for both relaxation and exploration...",
    details: "Ideal for beach relaxation, exploring historical sites, and enjoying local cuisine."
  },
  {
    id: 60,
    title: "Zagreb",
    image: "zagrebImage.jpg",
    originalPrice: "₹15,499",
    price: "₹12,499",
    offer: "20% Off",
    days: 5,
    nights: 4,
    description:
      "Zagreb, Croatia's capital, offers a charming mix of historical architecture, vibrant street life, and cultural attractions...",
    details: "Perfect for exploring historic sites, local markets, and enjoying Croatian cuisine."
  },
  {
    id: 61,
    title: "Ljubljana",
    image: "ljubljanaImage.jpg",
    originalPrice: "₹16,999",
    price: "₹13,499",
    offer: "21% Off",
    days: 5,
    nights: 4,
    description:
      "Ljubljana offers a charming old town, vibrant cultural scene, and beautiful green spaces, making it a delightful destination...",
    details: "Ideal for exploring historic sites, enjoying local cuisine, and cultural experiences."
  },
  {
    id: 62,
    title: "Prague",
    image: "pragueImage.jpg",
    originalPrice: "₹18,499",
    price: "₹15,499",
    offer: "16% Off",
    days: 6,
    nights: 5,
    description:
      "Prague's fairy-tale architecture, historic castles, and vibrant cultural scene make it a captivating destination...",
    details: "Great for exploring historic sites, cultural experiences, and enjoying local cuisine."
  },
  {
    id: 63,
    title: "Bucharest",
    image: "bucharestImage.jpg",
    originalPrice: "₹14,499",
    price: "₹11,499",
    offer: "21% Off",
    days: 5,
    nights: 4,
    description:
      "Bucharest, Romania's capital, offers a blend of historical architecture, vibrant street life, and rich cultural heritage...",
    details: "Ideal for exploring historical sites, local markets, and cultural experiences."
  },
  {
    id: 64,
    title: "Sofia",
    image: "sofiaImage.jpg",
    originalPrice: "₹15,499",
    price: "₹12,499",
    offer: "19% Off",
    days: 5,
    nights: 4,
    description:
      "Sofia offers a mix of ancient history, modern attractions, and beautiful landscapes, making it an intriguing destination...",
    details: "Great for exploring historic sites, local markets, and enjoying Bulgarian cuisine."
  },
  {
    id: 65,
    title: "Tallinn",
    image: "tallinnImage.jpg",
    originalPrice: "₹17,499",
    price: "₹14,499",
    offer: "17% Off",
    days: 5,
    nights: 4,
    description:
      "Tallinn’s well-preserved medieval old town, vibrant culture, and charming streets make it a unique destination to explore...",
    details: "Perfect for exploring historic sites, local markets, and enjoying Estonian cuisine."
  },
  {
    id: 66,
    title: "Vilnius",
    image: "vilniusImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Vilnius, with its baroque architecture and rich history, offers a delightful European experience...",
    details: "Ideal for exploring historical sites, enjoying local cuisine, and cultural experiences."
  },
  {
    id: 67,
    title: "Riga",
    image: "rigaImage.jpg",
    originalPrice: "₹16,999",
    price: "₹13,499",
    offer: "21% Off",
    days: 5,
    nights: 4,
    description:
      "Riga’s blend of medieval and modern architecture, vibrant markets, and cultural scene make it an exciting destination...",
    details: "Great for exploring historic sites, local markets, and enjoying Latvian cuisine."
  },
  {
    id: 68,
    title: "Dubrovnik",
    image: "dubrovnikImage.jpg",
    originalPrice: "₹22,499",
    price: "₹18,499",
    offer: "18% Off",
    days: 6,
    nights: 5,
    description:
      "Dubrovnik, with its stunning coastal views and rich history, offers a captivating experience along the Adriatic Sea...",
    details: "Perfect for beach relaxation, exploring historic sites, and enjoying local cuisine."
  },
  {
    id: 69,
    title: "Kotor",
    image: "kotorImage.jpg",
    originalPrice: "₹18,999",
    price: "₹15,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Kotor’s picturesque bay, well-preserved medieval architecture, and stunning landscapes make it a charming destination...",
    details: "Ideal for exploring historic sites, enjoying scenic views, and local cuisine."
  },
  {
    id: 70,
    title: "Budva",
    image: "budvaImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Budva offers beautiful beaches, historic sites, and vibrant nightlife, making it a great destination for relaxation and exploration...",
    details: "Perfect for beach relaxation, exploring historic sites, and enjoying local cuisine."
  },
  {
    id: 71,
    title: "Zagreb",
    image: "zagrebImage.jpg",
    originalPrice: "₹15,999",
    price: "₹12,499",
    offer: "22% Off",
    days: 5,
    nights: 4,
    description:
      "Zagreb, with its charming mix of historic and modern elements, offers a vibrant cultural experience and beautiful cityscapes...",
    details: "Ideal for exploring historic sites, enjoying local cuisine, and cultural experiences."
  },
  {
    id: 72,
    title: "Ljubljana",
    image: "ljubljanaImage.jpg",
    originalPrice: "₹17,499",
    price: "₹14,499",
    offer: "17% Off",
    days: 5,
    nights: 4,
    description:
      "Ljubljana offers a picturesque old town, beautiful green spaces, and a vibrant cultural scene, making it a charming destination...",
    details: "Great for exploring historic sites, local cuisine, and cultural experiences."
  },
  {
    id: 73,
    title: "Helsinki",
    image: "helsinkiImage.jpg",
    originalPrice: "₹18,499",
    price: "₹14,499",
    offer: "22% Off",
    days: 5,
    nights: 4,
    description:
      "Helsinki’s beautiful archipelago, modern design, and rich cultural heritage make it a unique Scandinavian destination...",
    details: "Ideal for exploring city landmarks, enjoying local cuisine, and scenic views."
  },
  {
    id: 74,
    title: "Oslo",
    image: "osloImage.jpg",
    originalPrice: "₹21,499",
    price: "₹16,999",
    offer: "21% Off",
    days: 5,
    nights: 4,
    description:
      "Oslo offers stunning natural landscapes, modern architecture, and a vibrant cultural scene, making it a captivating Nordic city...",
    details: "Perfect for outdoor activities, cultural experiences, and exploring local cuisine."
  },
  {
    id: 75,
    title: "Stockholm",
    image: "stockholmImage.jpg",
    originalPrice: "₹19,999",
    price: "₹15,499",
    offer: "22% Off",
    days: 6,
    nights: 5,
    description:
      "Stockholm, spread across 14 islands, offers a beautiful blend of historic architecture, modern design, and stunning waterfront views...",
    details: "Ideal for exploring historic sites, city tours, and Scandinavian cuisine."
  },
  {
    id: 76,
    title: "Amsterdam",
    image: "amsterdamImage.jpg",
    originalPrice: "₹17,999",
    price: "₹13,999",
    offer: "22% Off",
    days: 5,
    nights: 4,
    description:
      "Amsterdam, with its charming canals, vibrant art scene, and historic charm, offers a unique European experience...",
    details: "Great for canal cruises, museum visits, and exploring local culture."
  },
  {
    id: 77,
    title: "Athens",
    image: "athensImage.jpg",
    originalPrice: "₹16,499",
    price: "₹13,499",
    offer: "18% Off",
    days: 5,
    nights: 4,
    description:
      "Athens offers a fascinating blend of ancient history and vibrant modern life, making it an exciting destination to explore...",
    details: "Perfect for exploring historical sites, enjoying Greek cuisine, and cultural experiences."
  },
  {
    id: 78,
    title: "Buenos Aires",
    image: "buenosAiresImage.jpg",
    originalPrice: "₹19,499",
    price: "₹15,499",
    offer: "21% Off",
    days: 6,
    nights: 5,
    description:
      "Buenos Aires, with its rich cultural scene, historic architecture, and vibrant tango, offers a dynamic city experience...",
    details: "Ideal for cultural tours, historic sites, and enjoying local cuisine."
  },
  {
    id: 79,
    title: "Cape Town",
    image: "capeTownImage.jpg",
    originalPrice: "₹22,999",
    price: "₹18,999",
    offer: "17% Off",
    days: 7,
    nights: 6,
    description:
      "Cape Town offers stunning landscapes, vibrant culture, and beautiful beaches, making it a captivating destination...",
    details: "Great for outdoor adventures, scenic views, and exploring local culture."
  },
  {
    id: 80,
    title: "Rio de Janeiro",
    image: "rioDeJaneiroImage.jpg",
    originalPrice: "₹24,999",
    price: "₹19,999",
    offer: "20% Off",
    days: 7,
    nights: 6,
    description:
      "Rio de Janeiro, known for its stunning beaches and vibrant carnival, offers a dynamic and exciting city experience...",
    details: "Ideal for beach relaxation, cultural festivals, and exploring Brazilian culture."
  }
]


const DestinationCard = ({
  title,
  image,
  description,
  price,
  offer,
  days,
  nights,
  originalPrice,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const MAX_LENGTH = 150;
  const truncatedDescription =
    description.length > MAX_LENGTH && !showFullDescription
      ? `${description.substring(0, MAX_LENGTH)}...`
      : description;

      const handleOpenForm = () => {
        window.open('/booking', '_blank');
      };
    
      const handleCloseForm = () => {
        setIsFormOpen(false);
      };
  return (

    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        height: "100%",
      }}
      className="container"
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 450 },
          height: { xs: 200, sm: 300 },
          objectFit: "cover",
        }}
        image={image}
      />
      <CardContent
        sx={{
          flex: "1 0 auto",
          display: "column",
          flexDirection: "row",
          ml: "12px",
          width: { xs: "100%", sm: 300 },
          height: { xs: "auto", sm: "auto" },
        }}
      >
        <Typography
          variant="body2"
          sx={{ mb: "2px", color: "text.secondary", fontSize: "11px" }}
        >
          {days} Days / {nights} Nights
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Ensures children are laid out in a row
            alignItems: "center",
            fontSize: "16px",
            fontWeight: 600,
            justifyContent: "space-between", // Distributes space between children
          }}
        >
          <Box
            sx={{
              width: "auto", // Ensure this width is appropriate for the content
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // Aligns content vertically
            }}
          >
            <Typography component="div" variant="h5" sx={{ mt: "8px" }}>
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Ensures children inside this box are laid out in a row
              alignItems: "center",
              justifyContent: "flex-end", // Aligns children to the end (right side)
              pl: "6px",
              pr: "6px",
              border: "1px solid black",
              borderRadius: "50px",
              width: "auto", // Adjust width to fit content
              minWidth: "fit-content", // Ensures the box is not smaller than its content
            }}
          >
            <Typography sx={{ mr: 0.5 }}>Save</Typography>
            <IconButton aria-label="save" sx={{ p: 0 }}>
              <FavoriteBorderIcon sx={{ fontSize: "18px" }} />
            </IconButton>
          </Box>
        </Box>
        <box>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{
              width: "auto",
              fontSize: "13px",
              mt: "7px",
            }}
            className="cardDescription"
          >
            {truncatedDescription}
            {description.length > MAX_LENGTH && !showFullDescription && (
              <>
                {/* 'Read more' link with a span component */}
                <Typography
                  component="span"
                  onClick={toggleDescription} // Adding onClick to 'Read more'
                  sx={{
                    cursor: "pointer",
                    color: "primary.main",
                    textDecoration: "underline",
                    ml: 1,
                  }}
                >
                  Read more
                </Typography>
                {/* Icon button for expanding */}
                <IconButton
                  onClick={toggleDescription}
                  sx={{
                    padding: 0,
                    marginLeft: 1,
                    verticalAlign: "middle",
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </>
            )}

            {/* Conditionally showing 'Show less' when description is fully expanded */}
            {showFullDescription && (
              <>
                <Typography
                  component="span"
                  onClick={toggleDescription}
                  sx={{
                    cursor: "pointer",
                    color: "primary.main",
                    textDecoration: "underline",
                    ml: 1,
                  }}
                >
                  Show less
                </Typography>
              </>
            )}
          </Typography>
        </box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textDecoration: "line-through",
            }}
          >
            {originalPrice}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "error.main",
              ml: 2,
              display: "inline-block",
              position: "relative",
              animation: "pulse 1.5s infinite", // Apply the pulse animation

              "@keyframes pulse": {
                "0%": {
                  transform: "scale(1)",
                  textShadow: "0 4px 8px rgba(255, 0, 0, 0.6)", // Initial red shadow
                },
                "50%": {
                  transform: "scale(1.1)",
                  textShadow: "0 8px 16px rgba(255, 0, 0, 0.8)", // Enlarged shadow
                },
                "100%": {
                  transform: "scale(1)",
                  textShadow: "0 4px 8px rgba(255, 0, 0, 0.6)", // Return to initial state
                },
              },
            }}
          >
            {offer}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ mt: 1, fontSize: "20px", fontWeight: 500 }}
        >
          {price}
        </Typography>
       <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        > 
          <Button
            size="small"
            variant="contained"
            sx={{
              borderRadius: '50px',
              backgroundColor: 'rgb(54, 172, 245)',
              mt: '12px',
              pt: '4px',
              pb: '4px',
              color: 'white',
            }}
            onClick={handleOpenForm}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
     
    </Card>
  );
};

const DestinationPage = () => {
  const { id } = useParams();
  const destination = destinationData[id];

  if (!destination) {
    return <Typography variant="h6">Destination not found</Typography>;
  }

  return (
    <Container sx={{ mt: 4}} className="container">
      <Box
        sx={{
          position: "relative",
          mb: 3,
          height: 400,
          backgroundImage: `url(${bgImage})`,      
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          textShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
          marginBottom:'50px'
        }}
      >
        <box sx={{float:'left' ,  backgroundColor: "rgba(0, 0, 0, 0.6)",}}>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontSize: "30px",
            fontWeight: 600,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding:'10px 25px' 

          }}
          gutterBottom
        >
          Best of the Best Destinations
        </Typography>
        </box>
      </Box>

      <Grid container spacing={3} direction="column">
        {Object.keys(destinationData).map((key) => {
          const dest = destinationData[key];
          return (
            <Grid item key={key}>
              <DestinationCard
                title={dest.title}
                image={dest.image}
                description={dest.description}
                price={dest.price}
                offer={dest.offer}
                days={dest.days}
                nights={dest.nights}
                originalPrice={dest.originalPrice}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default DestinationPage;
