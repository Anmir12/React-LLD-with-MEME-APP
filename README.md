# 🚀 REACT LLD: MEME App

### **Objective**
To build a production-ready MEME Application using **ReactJS** and **Tailwind CSS**. This project is a hands-on exploration of **Low-Level Design (LLD)** and advanced React patterns, focusing on building high-performance, reusable components from scratch.

---

### **🏗️ Technical Roadmap**
We are implementing the following core features using **React Router DOM** and specialized logic:

* ✅ **Shimmer UI (Cards)** - Efficient loading states using `Array.fill`.
* ✅ **API Integration** - Live data fetching with error handling.
* [ ] **Input Search with Debouncing** - Optimizing performance for user input.
* [ ] **Infinite Scroll** - Handling large data sets with Intersection Observer.
* [ ] **Reddit-style Nested Comments** - Mastering recursion in components.
* [ ] **YouTube Live Comments** - Managing high-frequency state updates.
* ✅ **Protected Routes** - Authentication-based navigation.
* [ ] **Accordion & Image Slider** - Reusable UI components.
* [ ] **Pagination** - Structured data navigation.

---

### **📈 Progress Log**

* **Feb 19:** Project initialized with React Router DOM and Tailwind CSS setup.
* **Feb 20:** Built a custom Deep Copy utility to handle immutable state updates.
* **Feb 21:** Configured the `MemeCard` component architecture and layout.
* **Feb 22:** Developed the initial `Shimmer` component for the loading state.
* **Feb 23:** Integrated the live API (`meme-api.com`) and established the data flow.
* **Feb 24:** Implemented Conditional Rendering and fixed Shimmer layout shifts using fixed-height containers.
* **Feb 25:** **Auth Logic:** Developed a reusable `ProtectedRoute` wrapper component to handle navigation guards.
---

### **🛠️ Tech Stack**
* **Core:** React.js
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Data:** Fetch API

---

### **How to Run**
```bash
npm install
npm start