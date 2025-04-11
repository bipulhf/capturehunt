# 📸 CaptureHunt

A sleek, dark-themed and fully responsive sample site for finding and showcasing photographers. Built using **Next.js 15**, **Tailwind CSS**, and **Aceternity UI** components.

![Logo](./public/images/logo_white.png)

## ✨ Features

- ⚡ Built with **Next.js 15**
- 🎨 Styled with **Tailwind CSS**
- 🌌 Uses **Aceternity UI** for stunning UI components
- 📱 Mobile responsive
- 🧭 Pages:
  - Landing Page
  - Find Photographers
  - Photographers Portfolio

## 🌈 Theme Colors

| Name              | Color Code |
| ----------------- | ---------- |
| Light             | `#ffffff`  |
| Dark (Background) | `#37404d`  |
| Action Button     | `#e18c03`  |

## 📄 Page Structure

---

### 1. **Landing Page**

This is the home page and introduces users to the CaptureHunt platform.

#### Components Used:

- **Navbar**  
  ➤ Import from: `/src/components/resizable-navbar.tsx`  
  ➤ Based on Aceternity UI

- **Hero Section**  
  ➤ Uses background effect from: `/src/components/background-lines.tsx`  
  ➤ Includes a hero image + text styled with Aceternity components

- **Testimonials (Our Happy Customers)**  
  ➤ Import from: `/src/components/animated-testimonials.tsx`

- **Footer**  
  ➤ Wrapped with meteor effect from: `/src/components/meteors.tsx`

---

### 2. **Find Photographers**

Helps users search for and discover photographers based on filters or location.

#### Components Used:

- **Photographer Cards**  
  ➤ Import from: `/src/components/direction-aware-hover.tsx`  
  ➤ Direction-aware animated hover effects from Aceternity UI  
  ➤ Each card displays photographer's image, name, and a hover overlay for actions or preview

> 💡 Design Suggestion: Display cards in a responsive grid. Optionally include filters or a search bar above the grid.

---

### 3. **Photographers Portfolio**

Showcases individual photographer’s profile, gallery, and details.

> 💡 Design Suggestion: Use a responsive gallery layout with modal/lightbox, detailed bio, and a call-to-action button (e.g., "Hire Now").

---

## Folder Structure

public/
└── images/
└── logo_white.png

src/
└── components/
├── resizable-navbar.tsx
├── background-lines.tsx
├── animated-testimonials.tsx
├── meteors.tsx
└── direction-aware-hover.tsx

👨‍💻 Made with ❤️ using Aceternity UI, Next.js, and Tailwind CSS
