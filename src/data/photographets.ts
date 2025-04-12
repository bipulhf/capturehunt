export interface Photographer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  location: string;
  bio: string;
  color: string;
}

export const photographers: Photographer[] = [
  {
    id: "1",
    name: "John Doe",
    specialty: "Wedding Photography",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    rating: 4.8,
    location: "New York, USA",
    bio: "A passionate wedding photographer with over 10 years of experience capturing beautiful moments. Specializing in candid and natural shots that tell your unique love story.",
    color: "bg-amber-900",
  },
  {
    id: "2",
    name: "Jane Smith",
    specialty: "Portrait Photography",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    rating: 4.9,
    location: "Los Angeles, USA",
    bio: "Portrait photographer dedicated to bringing out the best in every subject. Known for creating stunning, timeless images that capture personality and emotion.",
    color: "bg-rose-900",
  },
  {
    id: "3",
    name: "Mike Johnson",
    specialty: "Landscape Photography",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    rating: 4.7,
    location: "Seattle, USA",
    bio: "Landscape photographer with a keen eye for nature's beauty. Specializing in capturing breathtaking scenes from around the world.",
    color: "bg-emerald-900",
  },
  {
    id: "4",
    name: "David Kim",
    specialty: "Street Photography",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 4.6,
    location: "Tokyo, Japan",
    bio: "Street photographer capturing the raw essence of urban life. Specializing in candid moments and the beauty of everyday scenes.",
    color: "bg-slate-900",
  },
  {
    id: "5",
    name: "Lisa Rodriguez",
    specialty: "Fashion Photography",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    rating: 4.9,
    location: "Paris, France",
    bio: "Fashion photographer with a unique vision for style and elegance. Known for creating striking editorial images that push creative boundaries.",
    color: "bg-purple-900",
  },
  {
    id: "6",
    name: "James Wilson",
    specialty: "Wildlife Photography",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 4.8,
    location: "Sydney, Australia",
    bio: "Wildlife photographer dedicated to capturing the beauty and majesty of nature. Specializing in rare and endangered species photography.",
    color: "bg-teal-900",
  },
];
