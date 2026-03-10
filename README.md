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
- ✅ **YouTube Live Chat Clone** - Managing high-frequency state updates with memory safety.
- [ ] **Input Search with Debouncing** - Optimizing performance for user input (**Next Stop!**).

---

### **📈 Progress Log**

#### **Feb 19-22: Project Architecture**
- Project initialized with Tailwind CSS. Built custom **Deep Copy** utility and **Shimmer UI** skeleton architecture for high perceived performance.

#### **Feb 23-24: Data & UI Optimization**
- Integrated live API and optimized for **Cumulative Layout Shift (CLS)** using fixed-aspect containers.

#### **Feb 25: Auth Logic**
- Developed a reusable `ProtectedRoute` wrapper component for navigation guards.

#### **Feb 26-27: Global State & i18n**
- Implemented `LangContext` for dynamic English, Telugu, and Hindi support. Refactored architecture to "One Route Per LLD Question."
- Abstracted logic into a dedicated `useFetchData` custom hook.

#### **Feb 28: Infinite Scroll Engine**
- Mastered viewport math (`window.innerHeight + window.scrollY`) to implement a manual infinite scroll trigger.

#### **Mar 1-2: Accordion & Image Slider**
- **Lifting State Up:** Centralized toggle logic for a "Single-Open" Accordion.
- **Circular Indexing:** Built a Carousel using modulo arithmetic `(i + 1) % length`.

#### **Mar 3-4: Recursive Nested Comments**
- **Component Recursion:** Engineered a self-referencing `Comments` component to handle n-level deep data trees.
- **Hierarchical Threading:** Developed a "thread-line" UI using Tailwind borders.

#### **Mar 5-6: Scalable Pagination**
- **Backend Pagination:** Implemented `limit` and `skip` logic to fetch only 10 items per request.
- **Dynamic Metadata:** Derived total page counts dynamically from API response headers (`json.total`).

#### **Mar 7-8: High-Frequency Data Streams (Live Chat)**
- **API Polling Simulation:** Built a `setInterval` engine to mock real-time message delivery every 1.5s.
- **Memory Optimization (Splicing):** Implemented a "Fixed-Buffer" array logic. Used `splice(0, 1)` to remove the oldest messages from the top (Index 0) while pushing new ones to the bottom, preventing DOM memory leaks.
- **Layout Architecture:** Mastered `flex-col-reverse` and Coordinate System Mastery to ensure messages flow from bottom-to-top, mimicking production chat apps like YouTube and Twitch.
- **Mar 9-10: Optimized Search Architecture**
  - **Debouncing:** Implemented a `setTimeout` cleanup pattern in `useEffect` to reduce API calls by 80%.
  - **Caching (O(1) Retrieval):** Engineered a local `cache` object state to store previous search results, enabling instant suggestion rendering for repeated queries.
  - **UX Optimization:** Managed `onFocus`/`onBlur` state transitions and absolute positioning to prevent Cumulative Layout Shift (CLS).
---

### **💡 Core LLD Concepts Mastered**
* **Recursion & Trees:** Navigating hierarchical data structures for nested comments.
* **Buffer Management:** Using `splice` and `slice` to maintain a constant-size data structure (O(1) growth) for high-frequency streams.
* **State Synchronization:** Merging automated polling (pull) and user-generated events (push) into a unified state source.
* **Mathematical Logic:** Modulo arithmetic for sliders and `Math.ceil` for page indexing.
* **Performance:** Network optimization and avoiding massive upfront data loads.

---

### **🛠️ Tech Stack**
- **Core:** React.js (Hooks, Context API)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Data:** Fetch API, DiceBear Avatar API (Dynamic Assets)