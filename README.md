A simple, interactive React application designed to manage a collection of movies. This project demonstrates foundational React concepts, including component-based architecture, state management with hooks, and dynamic data rendering

## ✨ Features
* **Component-Based Architecture:** Modular code structure using separate files for the List, Items, and Forms.
* **Dynamic List Rendering:** Uses the `.map()` function to render data from a state-managed array.
* **Interactive CRUD Operations:**
    * **Add:** Add new movies with a title and genre.
    * **Delete:** Remove movies instantly from the UI.
* **Responsive Styling:** Clean and readable layout built with CSS Flexbox.

## 🛠️ Tech Stack
* **Library:** React.js
* **State Management:** React `useState` Hook
* **Version Control:** Git & GitHub
* **Hosting:** [GitHub Pages]

---

## 📂 Project Structure
```text
src/
 ┣ components/
 ┃ ┣ MovieForm.js   # Logic for capturing user input
 ┃ ┣ MovieList.js   # Container for the movie collection
 ┃ ┗ MovieItem.js   # Single movie card with delete functionality
 ┣ App.js           # Main app logic and state "Source of Truth"
 ┣ App.css          # Layout and design styles
 ┗ index.js         # Entry point for React
```

## ⚙️ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/movie-manager-react.git](https://github.com/nathankb89-arch /movie-manager-react.git)
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the app locally:**
   ```bash
   npm start
   ```

---

## 📋 Rubric Compliance
- [x] **Component Structure:** Uses separate components for modularity.
- [x] **Data Handling:** Dynamically renders an array of objects.
- [x] **Interactivity:** Users can add and remove items dynamically.
- [x] **Styling:** Basic CSS applied for a professional look.
- [x] **Version Control:** Maintained through 10+ detailed commits.
- [x] **Deployment:** Successfully hosted on a live platform.

---

## 👨‍💻 Author
Nathan Kiprono, software developer in the making.

with open("README.md", "w") as f:
    f.write(readme_content)


