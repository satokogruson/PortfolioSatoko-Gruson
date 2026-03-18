export type ProjectCategory = "UI/UX" | "Frontend" | "Challenges" | "Others";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  link: string;
  image?: string;
}

export const projectsData: Project[] = [
  // FRONTEND
  {
    id: "savor-the-globe",
    title: "Savor the Globe",
    description: "From local favorites to global sensations, find the top five dishes that define dining around the world.",
    category: "Frontend",
    link: "https://gruson-top-5-dishes.netlify.app/",
    image: "https://satokogruson.github.io/img/savor_the_globe.png"
  },
  {
    id: "world-clock",
    title: "World Clock App",
    description: "A dynamic tool to view global time zones efficiently. Designed to improve productivity and global communication.",
    category: "Frontend",
    link: "https://gruson-world-clock.netlify.app/",
    image: "https://satokogruson.github.io/img/world-clock.png"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Get real-time weather updates with this highly interactive and customizable weather application.",
    category: "Frontend",
    link: "https://gruson-weather-app.netlify.app/",
    image: "https://satokogruson.github.io/img/weather-app.png"
  },
  {
    id: "sweet-macarons",
    title: "Sweet Macarons",
    description: "Check out my sweet and tasty Macaron mini-website, my very first coding project with SheCodes.",
    category: "Frontend",
    link: "https://gruson-sweet-macarons.netlify.app/",
    image: "https://satokogruson.github.io/img/sweet-macarons.png"
  },
  
  // UI/UX
  {
    id: "freshfusion",
    title: "FreshFusion",
    description: "An e-grocery and meal kit delivery service that differentiates itself from competitors by a strong brand that appeals to busy families and professionals.",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167855361/FreshFusion-Online-grocery-shopping-app",
    image: "https://satokogruson.github.io/img/FreshFusion.png"
  },
  {
    id: "studybuddy",
    title: "StudyBuddy",
    description: "A study planning app for high school and college students who want to manage their assignments and tasks and collaborate with their peers.",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167855179/StuddyBuddy-Connect-with-your-studdybuddies/",
    image: "https://satokogruson.github.io/img/StuddyBuddy.png"
  },
  {
    id: "findmydoc",
    title: "findMyDoc",
    description: "Tired of constantly searching and booking doctor appointments and managing your prescription medications?",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167856825/findMyDoc-One-stop-shop-for-doctor-appointments",
    image: "https://satokogruson.github.io/img/findMyDoc.png"
  },
  {
    id: "traveco",
    title: "Traveco",
    description: "A location-based services travel app for the eco-conscious traveler, who want simple and map-centric navigation.",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167863591/Traveco-The-travel-app-for-the-eco-conscious/",
    image: "https://satokogruson.github.io/img/Traveco.png"
  },

  // CHALLENGES
  {
    id: "must-have-accessory",
    title: "My Must-have Accessory",
    description: "The SheCodes Monthly challenge for 'Must-have Accessory' to celebrate the accessory I can't live without.",
    category: "Challenges",
    link: "https://www.shecodes.io/contests/must-have-accessory-challenge/contest_entries/satoko-gruson-japanese-fe2911b6-6f45-4a2f-b15a-6328e629266e/preview"
  },
  {
    id: "urban-garden",
    title: "Urban Garden",
    description: "The SheCodes Monthly challenge for 'Urban Garden' that brings the essence of an urban garden.",
    category: "Challenges",
    link: "https://www.shecodes.io/contests/urban-garden-challenge/contest_entries/satoko-gruson-japanese-200a1a8c-09c6-4363-9407-ad5bc8ddc580/preview/"
  },
  {
    id: "trendy-clothing",
    title: "Trendy Clothing Brand",
    description: "The SheCodes monthly challenge for 'Trendy Clothing Brand' to showcase a trendy clothing brand.",
    category: "Challenges",
    link: "https://www.shecodes.io/contests/trendsetting-clothing-brands-challenge/contest_entries/satoko-gruson-japanese-b6708107-983a-4f99-9999-b994c72a9440/preview"
  },
  {
    id: "coding-journey",
    title: "My Coding Journey",
    description: "The SheCodes monthly challenge for 'Your Coding Journey' to unleash my coding skills.",
    category: "Challenges",
    link: "https://www.shecodes.io/contests/your-coding-journey/contest_entries/satoko-gruson-japanese-6001ffdb-eefb-4f72-8143-b1fb136de885/preview"
  },
  
  // OTHERS
  {
    id: "coming-soon-1",
    title: "Coming soon",
    description: "An exciting project is coming soon. Stay tuned!",
    category: "Others",
    link: "https://satokogruson.github.io/",
    image: "https://satokogruson.github.io/img/coming%20soon.jpeg"
  }
];
