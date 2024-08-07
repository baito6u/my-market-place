# my-market-place
React exam project for SoftUni

Project Name: My Market Place

Description:
"My Market Place" is a web application that serves as an online marketplace where users can browse, create, and manage products. The application is built using React with Vite for development and utilizes a practice server from SoftUni. The project is divided into public and private sections, ensuring certain features are only accessible to authenticated users.

Features
Public Features:

Home Page: Introduction to the marketplace.
Catalog Page: Browse all available products.
About Page: Information about the marketplace.
Login/Register Pages: User authentication.
Product Details Page: View detailed information about a product.
Private Features:

Create Product: Authenticated users can add new products.
My Products Page: Users can view all products they have created.
Edit Product: Product owners can edit their products.
My Cart: Users can view and manage the products in their cart.
Logout: End the user session.

Setup Instructions:
Clone the Repository:

git clone <https://github.com/baito6u/my-market-place.git>
cd my-market-place
Install Dependencies:

npm install

Start the Development Server:
cd server
node server.js

Server is running: Open your web browser and go to http://localhost:3000

Open the Application:
cd client
npm run dev

Project is running: Open your web browser and go to http://localhost:5173
.

Key Features:
Home Page: Displays the latest products in a responsive grid layout.
![alt text](image-1.png)

Product Details Page: Shows detailed information about a product, including comments and an option to add the product to the cart.
![alt text](image-2.png)

Cart: Allows users to view and manage products they intend to purchase, with a counter displayed in the navigation bar.
![alt text](image-3.png)

Catalog Page: 
![alt text](image-4.png)

My Products Page: Users can view all products they have created.
![alt text](image-5.png)

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
