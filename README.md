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
- ✅ **Backend Pagination (Dynamic)** - Engineered offset-based data fetching.
- [ ] **Input Search with Debouncing** - Optimizing performance for user input (Next Stop!).
- [ ] **YouTube Live Comments** - Managing high-frequency state updates.

---

### **📈 Progress Log**

- **Feb 19-22: Project Architecture**
  - Project initialized with Tailwind CSS. Built custom **Deep Copy** utility and **Shimmer UI** skeleton architecture for high perceived performance.
- **Feb 23-24: Data & UI Optimization**
  - Integrated live API and optimized for **Cumulative Layout Shift (CLS)** using fixed-aspect containers.
- **Feb 25: Auth Logic**
  - Developed a reusable `ProtectedRoute` wrapper component for navigation guards.
- **Feb 26-27: Global State & i18n**
  - Implemented `LangContext` for dynamic English, Telugu, and Hindi support. Refactored architecture to "One Route Per LLD Question."
  - Abstracted logic into a dedicated `useFetchData` custom hook.
- **Feb 28: Infinite Scroll Engine**
  - Mastered viewport math (`window.innerHeight + window.scrollY`) to implement a manual infinite scroll trigger.
- **Mar 1-2: Accordion & Image Slider**
  - **Lifting State Up:** Centralized toggle logic for a "Single-Open" Accordion.
  - **Circular Indexing:** Built a Carousel using modulo arithmetic `(i + 1) % length`.
- **Mar 3-4: Recursive Nested Comments**
  - **Component Recursion:** Engineered a self-referencing `Comments` component to handle n-level deep data trees.
  - **Hierarchical Threading:** Developed a "thread-line" UI using Tailwind borders.
- **Mar 5-6: Scalable Pagination**
  - **Backend Pagination:** Implemented `limit` and `skip` logic to fetch only 10 items per request.
  - **Dynamic Metadata:** Derived total page counts dynamically from API response headers (`json.total`).

---

### **💡 Core LLD Concepts Mastered**
* **Recursion & Trees:** Navigating hierarchical data structures.
* **Offset-based Pagination:** Implementing scalable data fetching using `skip` and `limit`.
* **Mathematical Logic:** Modulo arithmetic for sliders and `Math.ceil` for page indexing.
* **Performance:** Network optimization and avoiding massive upfront data loads.

---

### **🛠️ Tech Stack**
- **Core:** React.js (Hooks, Context API)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Data:** Fetch API (Paginated)