# HiringSystem
project using node ts &amp; react ts &amp; mongo
## Description of Project
This project is a recruitment system that allows the employer to manage job lists, publish them and track successful candidates. The system is built using Node.js with Typescript, React with Typescript and Mongodb.

## Properties
- Jobs Registration Page:
 - Work characteristics include a name, status and date.
- on the side of the server:
 - CRUD operations for work entity with API:
 - Creating a job
 - update work
 - View all jobs
 - View a single job according to an ID card
 - Delete a job
- Customer side:
 - Table detailing all jobs
 - reading on the server side to bring a list of jobs
 - Clicking on a page opens a relevant candidate page
 - Clicking “Create Work” opens a job page

## start
To run the project local, follow the following steps:

### Prerequisites
- node.js installed on your computer
- Set up a Mongodb database

### Installation
1. Lie the repository.
2. Install dependence using NPM Install in customer libraries and server libraries.

### Enable app
1. Run the server:
   ``` cd server
   npm start
   ```
2. Run the customer:
   ``` bash
  npm start
  ```

3. Make an app at http: // Localhost: 3000.

### Use
- Jobs Registration Page:
 - View all jobs with their details.
- Creating a job:
 - Click "Create Work" to open the job creation form.
 -Add work and verification details using the React Hook Form (https://www.react-hook-ffork.com).
 - Rose a logo (stored in S3 or database).
 - Click "Save" to save the database work.
