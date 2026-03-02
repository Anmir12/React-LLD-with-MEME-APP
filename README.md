# 🚀 REACT LLD: MEME App

### **Objective**
To build a production-ready MEME Application using **ReactJS** and **Tailwind CSS**. This project is a hands-on exploration of **Low-Level Design (LLD)** and advanced React patterns, focusing on building high-performance, reusable components from scratch.

---

### **🏗️ Technical Roadmap**
- ✅ **Shimmer UI (Cards)** - Efficient loading states using `Array.fill`.
- ✅ **API Integration** - Live data fetching with error handling.
- ✅ **Protected Routes** - Authentication-based navigation guards.
- ✅ **Multi-Language Support (i18n)** - Global state management using **Context API**.
- ✅ **Accordion (FAQ)** - Managed "Single-Open" logic by lifting state up.
- ✅ **Image Slider (Carousel)** - Built with Circular Logic and Auto-play.
- [ ] **Reddit-style Nested Comments** - Mastering recursion in components (Next Stop!).
- [ ] **Input Search with Debouncing** - Optimizing performance for user input.
- [ ] **YouTube Live Comments** - Managing high-frequency state updates.

---

### **📈 Progress Log**
- **Feb 19 - Mar 1:** (Previous milestones: Shimmer, API, Auth, Infinite Scroll, and Accordion).
- **Mar 2-3:** **LLD Pattern: Image Slider & Lifecycle Syncing**
  - **Circular Indexing:** Implemented modulo arithmetic `(i + 1) % length` to create an infinite loop slider.
  - **Effect Synchronization:** Mastered `useEffect` cleanup with `setInterval` to prevent memory leaks.
  - **UX Optimization:** Integrated a "Reset on Click" logic (dependency array tracking) to prevent race conditions between manual clicks and auto-play timers.
  - **Interactive States:** Added "Pause on Hover" functionality using state-driven flag logic.

---

### **💡 Core LLD Concepts Mastered**
* **Mathematical Logic:** Using Modulo operator for circular data navigation.
* **Race Condition Handling:** Synchronizing manual user input with background intervals.
* **Recursive Components:** (Upcoming) Handling deeply nested data structures.
* **Performance:** Avoiding Cumulative Layout Shift (CLS) through fixed aspect-ratio containers.

---

### **🛠️ Tech Stack**
- **Core:** React.js (Hooks, Context API)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Data:** Fetch API