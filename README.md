Express.js RESTful API – Products
Overview

This project is a RESTful API built using Express.js that manages a products resource. It includes CRUD operations, middleware for logging, authentication, validation, error handling, and advanced features like filtering, pagination, search, and product statistics.

Project Setup
Requirements

Node.js v18 or higher

npm

Postman, Insomnia, or curl (for testing API endpoints)

Installation
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

# Create a .env file based on .env.example
cp .env.example .env

Running the Server
# Start the server
node server.js


The server runs by default on http://localhost:3000

The root endpoint returns:

GET / 
Response: "Hello World"

Environment Variables

Create a .env file and define:

PORT=3000
API_KEY=your_api_key_here

API Endpoints
1. Products CRUD
Method	Endpoint	Description	Body / Query Parameters
GET	/api/products	List all products	Optional query: category, page, limit
GET	/api/products/:id	Get a single product	id – product ID
POST	/api/products	Create a new product	JSON body: name, description, price, category, inStock
PUT	/api/products/:id	Update an existing product	JSON body: same as POST
DELETE	/api/products/:id	Delete a product	id – product ID
2. Advanced Features
Method	Endpoint	Description	Query Parameters / Notes
GET	/api/products/search	Search products by name	name – partial or full product name
GET	/api/products/stats	Get product statistics by category	None

Filtering & Pagination Example:

GET /api/products?category=Electronics&page=1&limit=5

3. Middleware

Logger – logs request method, URL, and timestamp.

Authentication – checks for x-api-key header.

Validation – validates product creation & update data.

Error Handling – global error handling with proper status codes.

4. Example Requests & Responses

Create Product

POST /api/products
Headers: { "x-api-key": "your_api_key" }
Body:
{
  "name": "iPhone 15",
  "description": "Latest Apple smartphone",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}


Response:

{
  "id": "a1b2c3d4",
  "name": "iPhone 15",
  "description": "Latest Apple smartphone",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}


Search Products

GET /api/products/search?name=iphone
Headers: { "x-api-key": "your_api_key" }


Response:

[
  {
    "id": "a1b2c3d4",
    "name": "iPhone 15",
    "description": "Latest Apple smartphone",
    "price": 1200,
    "category": "Electronics",
    "inStock": true
  }
]


Get Product Stats

GET /api/products/stats
Headers: { "x-api-key": "your_api_key" }


Response:

{
  "Electronics": 5,
  "Clothing": 3,
  "Books": 7
}

Folder Structure
project-root/
│
├─ server.js
├─ routes/
│   └─ products.js
├─ middleware/
│   ├─ logger.js
│   ├─ auth.js
│   ├─ validateProduct.js
│   └─ errorHandler.js
├─ package.json
├─ .env.example
└─ README.md
