# Ecom Backend Challenge! For Module 13!
![license badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description

In this Module 13 Challenge, we were tasked to build the back-end for an e-commerce website! We took an [existing working Express.js API](https://github.com/coding-boot-camp/fantastic-umbrella) and configured it to interact with MySQL using the npm package Sequelize. you can peep my walkthrough video here: [Walkthrough Video](GOOGLE DRIVE LINK).

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Sources](#sources)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: 
```
npm i
```

## Usage

*ADD USAGE HERE*

## License

This project is licensed under the MIT license.

## Contributing

None! This is a Full Stack Web Development Bootcamp homework challenge. See starter code @ [fantastic-umbrella](https://github.com/coding-boot-camp/fantastic-umbrella).

## Tests

There are no tests for this project.

## Sources

Please note that my tutor, [Andrew Mason](https://github.com/atmason90), helped me complete this challenge.

## Questions

If you have any questions about this project, you can contact me at acst52@gmail.com.

You can find more of my work at [acst52](https://github.com/acst52/). Thanks for reading!

---

**NOTES FROM CHALLENGE - TO BE REMOVED**

# Ecom-Backend

Your challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Database Models

Your database should contain the following four models, including the requirements listed for each model: ***DONE***

## Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them: ***DONE***

## Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js to perform create, read, update, and delete operations using your Sequelize models. the functionality to create many-to-many already done for you.

Be sure to look at your module project's code for syntax help and use your model's column definitions to figure out what req.body will be for POST and PUT routes!

## Seed the Database

After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes.

## Sync Sequelize to the Database on Server Start

Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.
