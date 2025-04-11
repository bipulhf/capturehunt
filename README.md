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

- **Navbar**:  
  ➤ Import from: `/src/components/resizable-navbar.tsx`  
  ➤ Based on Aceternity UI

- **Hero Section**:  
  ➤ Uses background effect from: `/src/components/background-lines.tsx`  
  ➤ Includes a hero image + text styled with Aceternity components

- **Testimonials (Our Happy Customers)**:  
  ➤ Import from: `/src/components/animated-testimonials.tsx`

- **Footer**:  
  ➤ Wrapped with meteor effect from: `/src/components/meteors.tsx`

---

### 2. **Find Photographers**

Helps users search for and discover photographers based on filters or location.

> 💡 Design suggestion: Include cards/grid layout for profiles, filter sidebar or dropdown, and responsive results.

---

### 3. **Photographers Portfolio**

Showcases individual photographer’s profile, gallery, and details.

> 💡 Design suggestion: Use modals or lightboxes for gallery viewing, and include CTA to book/contact.

---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
pnpm install
```
