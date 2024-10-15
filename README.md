
# Nest.js-technical-assignment
 
Product Endpoints:
GET '/product/getAll': Get all products.
GET '/product/getProduct/:id' : Get a single product by ID.
POST '/product/postProduct' : Create a new product.
PUT '/product/edit/:id': Update an existing product by ID.

Vendor Endpoints:
GET '/vendor/getAll' : Get all vendors.
GET '/vendor/getOneVendor/:id' : Get a single vendor by ID.
POST '/vendor/postNewVendor' : Create a new vendor.
PUT '/vendor/:id' : Update an existing vendor by ID.

User Endpoints:
GET '/users' : Get all users.
GET '/users/getOne/:id': Get a single user by ID.
POST '/users/postNewUser': Create a new user.
PUT'/users/edit/:id' : Update an existing user by ID.

Cart Endpoints:
GET '/cart/getAll' : Get all carts.
GET '/cart/getOne/:id' : Get a single cart by ID.
POST '/cart/postNewCart' : Create a new cart.
PUT '/cart/edit/:id' : Update a cart (add or remove products).



## . env Setup

To run this project, create a `.env` file in the root directory and set the following variable in the .env.example file