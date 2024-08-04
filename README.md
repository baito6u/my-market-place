# my-market-place
React exam project for SoftUni

My Market Place
My Market Place is a modern, responsive web application for buying and selling products built using Vite and connecting to the SoftUni practice server. It features a home page displaying the latest products, a detailed product page, a cart for managing selected items, a contact page, and a 404 error page for handling invalid routes. 
The application consists of both public and private sections, with features for browsing products, viewing product details, managing a shopping cart, user authentication, and managing user-specific products. Additionally, users can leave comments on product pages.
Setup Instructions:
Clone the Repository:

git clone <https://github.com/baito6u/my-market-place.git>
cd my-market-place
Install Dependencies:

npm install

Start the Development Server:
cd server
node ./server.js

Server is running: Open your web browser and go to http://localhost:3000

Open the Application:
cd client
npm run dev

Project is running: Open your web browser and go to http://localhost:5173
.

Key Features:
Home Page: Displays the latest products in a responsive grid layout.
![image](https://github.com/user-attachments/assets/5d9bbe76-67f1-4644-b68f-d732cfc82977)

Product Details Page: Shows detailed information about a product, including comments and an option to add the product to the cart.
![image](https://github.com/user-attachments/assets/831dc14b-e2cc-4a2e-9670-e5d62547444b)

Cart: Allows users to view and manage products they intend to purchase, with a counter displayed in the navigation bar.
![image](https://github.com/user-attachments/assets/23b2c004-bb22-4881-9c4c-cffc63d68c23)


Catalog Page: 
![image](https://github.com/user-attachments/assets/65554e8f-1e0f-4c42-ac24-ffbed3bc847f)

404 Page: Displays a custom error message for invalid routes.
Authentication: Users can register, log in, and manage their own products.
Responsive Design: Ensures the application looks great on all devices, from desktops to mobile phones.
How to Start the Project
Prerequisites:
Node.js: Ensure you have Node.js installed. You can download it from nodejs.org.
npm: Node Package Manager comes with Node.js. Verify the installation by running npm -v in your terminal.

Project Structure:
src/: Main source code directory.
api/: Contains API utility files for interacting with the backend.
components/: Contains reusable React components.
contexts/: Provides context for global state management.
hooks/: Custom hooks for various functionalities.
pages/: Contains the main page components (e.g., HomePage, DetailsPage, ContactPage).
styles/: Global styles and CSS modules.

Key Files:
src/index.js: Entry point of the React application.
src/App.js: Main component that includes the Router and defines routes.
src/pages/HomePage.js: Home page component displaying the latest products.
src/pages/DetailsPage.js: Detailed product page component.
src/pages/ContactPage.js: Contact page component.
src/pages/NotFoundPage.js: 404 error page component.
src/components/navigation/Navigation.js: Navigation bar component with a cart counter.
src/components/product/ProductItem.js: Individual product item card component.
src/contexts/: Context providers for authentication and cart state management.

Additional Notes:
Responsive Design: The application uses CSS modules for scoped styles and media queries to ensure a responsive design.
Modern Practices: The project follows modern React practices, including hooks and context API for state management.
Error Handling: The application includes a 404 page for handling invalid routes gracefully.
By following the setup instructions and utilizing the provided project structure, you should be able to get the My Market Place application up and running efficiently.
