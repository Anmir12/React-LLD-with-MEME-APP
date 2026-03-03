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
- ✅ **Reddit-style Nested Comments** - Mastering recursion in components.
- [ ] **Input Search with Debouncing** - Optimizing performance for user input (Next Stop!).
- [ ] **YouTube Live Comments** - Managing high-frequency state updates.

---

### **📈 Progress Log**
- **Feb 19 - Mar 2:** (Previous milestones: Shimmer, API, Auth, Infinite Scroll, Accordion, and Slider).
- **Mar 3-4:** **LLD Pattern: Recursive Nested Comments**
  - **Component Recursion:** Engineered a self-referencing `Comments` component to handle n-level deep data trees.
  - **Hierarchical Threading:** Developed a "thread-line" UI using Tailwind borders and dynamic margins to represent comment depth visually.
  - **Data Modeling:** Designed a robust tree-based JSON structure to mock complex, real-world social media conversations.

---

### **💡 Core LLD Concepts Mastered**
* **Recursion & Trees:** Navigating hierarchical data structures within the React component tree.
* **Mathematical Logic:** Using Modulo operator for circular data navigation.
* **Race Condition Handling:** Synchronizing manual user input with background intervals.
* **Performance:** Avoiding Cumulative Layout Shift (CLS) and optimizing recursive renders.

---

### **🛠️ Tech Stack**
- **Core:** React.js (Hooks, Context API)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Data:** Fetch API