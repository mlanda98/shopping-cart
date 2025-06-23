# 🛒 Electronics Store - Shopping Cart Project

A responsive mock shopping cart for an electronics store built with React, using modern tools like React Router and React Testing Library. This project demonstrates component-based architecture, routing, state management, form inputs, API fetching, and UI testing.

---
🔗 Links

- [Live Demo](https://shopping-cart-production-15ea.up.railway.app)
- [Repository](https://github.com/mlanda98/shopping-cart)

---

🚀 Features

- Homepage with customizable content and navigation
- Shop page that displays products fetched from Fake Store API
- Add-to-cart functionality with quantity selectors (input, increment/decrement buttons)
- Dynamic cart indicator in the navigation bar (shared across all pages)
- Checkout button (UI only, no payment logic implemented)
- Modular component-based architecture
- Fully tested with React Testing Library & Vitest
- Styled UI (easily replaceable with your own design)
- Responsive Design
---

🛠️ Tech Stack

- React
- React Router
- Vite
- Vitest
- React Testing Library
- Jest DOM
- ESLint
- Prettier
- FakeStore API
- CSS (Responsive design)


---

🧪 Testing

- Vitest: test runner (vitest)
- Testing Library: 
  - @testing-library/react
  - @testing-library/jest-dom
  - @testing-library/user-event
- jsdom: stimulates the DOM in a Node.js environment

Example test cases include:
  - Rendering components (shop items, cart, etc.)
  - Handling button clicks (Add To Cart, Remove, etc.)
  - Updating cart state on user interaction
  - Ensuring API fetches are mocked correctly

---

💻 Run It Locally

- Clone the repository
  `git clone https://github.com/mlanda98/shopping-cart.git`
- cd shopping-cart
- Make sure you have Node.js installed, then run `npm install`
- Run the development server: `npm run dev`
- Run your Jest tests suite: `npm run test`
- Build for production: `npm run build`
- Lint: npm run lint
- Fix lint issues automatically: `npm run lint:fix`
- Format with Prettier: `npm run format`

---

🌱 Future Improvements
- Implement real checkout logic 
- User authentication 
- Dark mode toggle

---

📬 Contact

- Email: mlandae16@gmail.com

