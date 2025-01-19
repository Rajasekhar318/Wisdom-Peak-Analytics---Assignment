
# User Directory

A React-based user directory application that allows users to browse, search, filter, sort user information. This project is built with **React**, **Redux Toolkit**, and **Tailwind CSS**.

## Features

- **View Users**: Display a list of users fetched from an API.
- **Search**: Search users by name.
- **Filter**: Filter users based on their city.
- **Sort**: Sort users by name (A-Z or Z-A).
- **Pagination**: Pagination for large datasets, optimized for small screen devices.
- **Dark Mode**: Toggle between light and dark modes.

https://jsonplaceholder.typicode.com/users is a mock API and does not allow persistent changes. I wanted to add CRUD operations but changes will not be saved to the server.
You can integrate with a real backend API for persistent CRUD operations.
---

## Project Structure

```plaintext
user-directory/
├── public/
├── src/
│   ├── components/        # Reusable React components (Header, SearchBar, UserCard)
│   ├── context/           # Context API for global state 
│   ├── pages/             # Page components (Home, UserDetail)
│   ├── redux/             # Redux Toolkit slice and store configuration
│   ├── styles/            # Global CSS (Tailwind CSS setup)
│   ├── App.js             # Root React component
│   ├── index.js           # React entry point
│   ├── tailwind.config.js # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
```

---

## Installation

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** or **yarn**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-directory.git
   cd user-directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```plaintext
   http://localhost:3000
   ```

---

## Usage


### Search
- Use the search bar to filter users by name.

### Filter by City
- Use the filter input to filter users based on their city.

### Sort
- Use the sort dropdown to sort users by name (A-Z or Z-A).

### Pagination
- Navigate between pages using the pagination controls at the bottom.

### Dark Mode
- Toggle between light and dark modes using the "Dark Mode" button in the header.

---

## Technologies Used

- **React**: UI library for building the application.
- **Redux Toolkit**: State management for handling users and actions.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For navigation and routing.
- **JSONPlaceholder API**: Mock API for user data.

---

## Tailwind CSS Setup

1. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. Update `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
       "./public/index.html",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Add Tailwind imports in `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## Future Enhancements

- Integrate with a real backend API for persistent CRUD operations.
- Add user authentication and role-based access.
- Implement advanced filtering and multi-column sorting.

---


## Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for mock API data.
- [Tailwind CSS](https://tailwindcss.com/) for effortless styling.
- [React](https://reactjs.org/) for building the application.

---
