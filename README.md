# Team Everglades: FEC-project-atelier

In this mockup project, we created a modern and user-friendly single-page shopping website. We focused on designing a clean and intuitive interface that will allow customers to easily browse through and should enhance the overall customer experience.

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Components

### Overview:

<img src="https://i.imgur.com/PdMy3C1.png" alt="image" style="width: 50%;">

### Related Items and Comparison:

<img src="https://i.imgur.com/nhvCtsk.png" alt="image" style="width: 50%;">

### Questions and Answers:
This component lets users search up existing questions on the selected item, add a question they may have, answer any questions, report any answers, and let users know if the question or answer was helpful.

<img src="https://i.imgur.com/iCIvSTy.png" alt="image" style="width: 50%;">

### Ratings and Reviews:

<img src="https://i.imgur.com/1HTRF5m.png" alt="image" style="width: 50%;">

## Installation & Use
1. Clone repo
```
git clone https://github.com/Team-Everglades/project-atelier.git
```
2. install node
```
npm install
```
3. Run server and react server
```
npm run dev
```
4. install all dependencies
```
//To install dependencies run:
npm install react-share --save
npm install cloudinary
npm install react-inner-image-zoom --force
npm install -S react-image-size --force
npm install cookie-parser --force
npm install react-icons
npm i vite-plugin-compression
```

```
//Install concurrently globally:
// this enables simultaneous operation of vite and nodemon via a single command
npm i -g concurrently
```
5. setup enviornmental variables files:

* using the example.env and config.example.js, create a copy of these two files and remove 'example' from the file name

* PORT - whichever port you want to run the backend server on, defaults to 3000 in 'server/index.js'

* DB_USERNAME and DB_PASSWORD -- you will need to create a new user for a new or existing MongoDB Atlas Cluster. Log in to cloud.mongodb.com, go to 'Database Access' under 'SECURITY' on the left sidebar, and click 'ADD NEW DATABASE USER.' Once you assign the new user at least one role or permission, you will be given the option to enter a password. Store the username and password under environmental variables DB_USERNAME and DB_PASSWORD, respectively.

6. Enjoy browsing!

## Testing:

To start the test monitoring:
```
npm test
```
To test coverage:
```
npm run coverage
```
To add tests:
(ref: https://vitest.dev/api/)
1. Create a new file in the 'spec' folder with the suffix 'spec.js'
2. import { it, expect } from 'vitest'
3. use the following format for all tests on the page:

```
it('Should perform expected action', () => {
  expect(firstResultOfTestedThing).toBe(firstExpectedResult)
  expect(resultOfTestedThing).to.equal(secondExpectedResult)
})                              ^
                                |
                                vitest supports all Chai and Jest assertion formats. See the following for details:
                                Chai: https://www.chaijs.com/api/bdd/
                                Jest: https://jestjs.io/docs/expect
```
