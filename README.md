# 🚀 REACT LLD: MEME App

### **Objective**

To build a production-ready MEME Application using **ReactJS** and **Tailwind CSS**. This project is a hands-on exploration of **Low-Level Design (LLD)** and advanced React patterns, focusing on building high-performance, reusable components from scratch.

---

### **🏗️ Technical Roadmap**

We are implementing core features using **React Router DOM** and specialized logic. Each feature is isolated into its own route for modular testing:

- ✅ **Shimmer UI (Cards)** - Efficient loading states using `Array.fill`.
- ✅ **API Integration** - Live data fetching with error handling.
- ✅ **Protected Routes** - Authentication-based navigation guards.
- ✅ **Multi-Language Support (i18n)** - Global state management using **Context API**.
- ✅ **Custom Hooks Architecture** - Abstracted data logic for better reusability.
- ✅ **Infinite Scroll** - Implemented using manual scroll event listeners and viewport calculations.
- [ ] **Input Search with Debouncing** - Optimizing performance for user input.
- [ ] **Reddit-style Nested Comments** - Mastering recursion in components.
- [ ] **YouTube Live Comments** - Managing high-frequency state updates.

---

### **📈 Progress Log**

- **Feb 19-22:** Project initialized. Built custom **Deep Copy** utility and **Shimmer UI** architecture.
- **Feb 23-24:** Integrated live API and optimized for **Cumulative Layout Shift (CLS)** using fixed-aspect containers.
- **Feb 25:** **Auth Logic:** Developed a reusable `ProtectedRoute` wrapper component for navigation guards.
- **Feb 26-27:** **Global State & i18n:** Implemented `LangContext` and a dynamic `LangConfig` to support English, Telugu, and Hindi across the entire app. Refactored architecture to "One Route Per LLD Question." \* Moved data fetching logic from UI components into a dedicated `useFetchData` custom hook.
- **Feb 28 (Late Night):** **Infinite Scroll Engine:**
    * Implemented manual scroll detection using `window.innerHeight`, `window.scrollY`, and `document.body.scrollHeight`.
    * Mastered the viewport math required to detect the end of a dynamic list.
    * Integrated state updates to append new data to the existing list (`[...memesList, ...memes]`).

---

### **🛠️ Tech Stack**

- **Core:** React.js (Hooks, Context API)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Data:** Fetch API

---

### **How to Run**

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Anmir12/React-LLD-with-MEME-APP.git](https://github.com/Anmir12/React-LLD-with-MEME-APP.git)
   ```
