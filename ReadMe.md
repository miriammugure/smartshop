<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [SMART-SHOP PRODUCTS API](#smart-shop-products-api) - [In this assignment, you will be developing a RESTful API using Express.js and PostgreSQL to manage a collection of products. This API will allow clients to perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database. You will start with a given set of data and implement the necessary endpoints to interact with this data.](#in-this-assignment-you-will-be-developing-a-restful-api-using-expressjs-and-postgresql-to-manage-a-collection-of-products-this-api-will-allow-clients-to-perform-crud-create-read-update-delete-operations-on-the-products-stored-in-a-postgresql-database-you-will-start-with-a-given-set-of-data-and-implement-the-necessary-endpoints-to-interact-with-this-data)
  - [Provided Data](#provided-data)
    - [You will be provided with a PostgreSQL table named products containing the following fields:](#you-will-be-provided-with-a-postgresql-table-named-products-containing-the-following-fields)
  - [Instructions](#instructions)
    - [Setting up the project](#setting-up-the-project)
  - [Implement the endpoints](#implement-the-endpoints)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# SMART-SHOP PRODUCTS API

#### In this assignment, you will be developing a RESTful API using Express.js and PostgreSQL to manage a collection of products. This API will allow clients to perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database. You will start with a given set of data and implement the necessary endpoints to interact with this data.

## Provided Data

#### You will be provided with a PostgreSQL table named products containing the following fields:

<ul>  
<li>productThumbnail: URL of the product's thumbnail image.  
<li>productTitle:Title of the product.  
<li>productDescription: description of the product.  
<li>productCost: cost of the product.  
<li>onOffer: a boolean indicating whether the product is on offer or not, true means the products is on offer and false means the product is not on offer.
</ul>

## Instructions

### Setting up the project

 <ol>
 <li>Initialize a new Node.js project. Use npm init to create a new project with your own settings or npm init -y to set up a new project with the deafault instructions.  
 <li>Install the necessary dependencies <b>(express, pg, dotenv).</b>  
   
   - Install express: <b>npm install express</b>  
   - Install pg: <b>npm install pg</b>  
   - Install dotenv: <b>npm install dotenv</b>  
   - If you want, install nodemon: <b>npm install nodemon</b>  
   <li>Set up PostgreSQL

- Ensure PostgreSQL is installed and running on your machine.
- Create a new database for this project.
- Use the provided SQL to create the products table and insert the initial data.
</ol>

## Implement the endpoints

Implement endpoints to perform the following operations:

 <ol>
 <li><b>Get All Products</b>: retrieve a list of all products from the database.  
 <li><b>Get a Single Product</b>: retrieve a single product from the database based on its id.  
 <li><b>Create a Product</b>: create a new product and write it to the PostgreSQL database.  
 <li><b>Update a Products</b>; update a product based on it's id.  
 <li><b>Dele a Product</b> - delete a product based on it's id.
 </ol>
