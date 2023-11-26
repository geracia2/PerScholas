# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





# Assignment: Map and Filter in JavaScript

## Task Details:

You are provided two arrays, `names` and `lastNames`:

```javascript
const names = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Christopher', 'Olivia', 'Daniel', 'Emma', 'Andrew', 'Sophia', 'Matthew', 'Ava', 'Ethan', 'Isabella', 'William', 'Mia', 'Alexander', 'Abigail'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
```

### Part 1:

Use the `map` function to create a new array where each element will be interpreted as `"LastName is a student at Perscholas"`.

**For example:** `"Smith is a student at Perscholas"`.

### Part 2:

Combine the arrays `names` and `lastNames`:

1. Use the `map` function to create a new array of strings. Each element should be a combination of a name and a lastname.

**For example:** `"John Smith is a student at Perscholas"`.

2. Use the `map` function to create a new array of objects. Each object should contain two properties: `name` and `lastName`.

**For example:** `{name:'John', lastName:'Smith'}`.

3. Use the `map` function to add an `id` property to each student object. The `id` should be a random number between `1` and `20`.

**For example:** `{name:'John', lastName:'Smith', id: 5}`.

### Part 3: Filtering Students:

1. Use the `filter` function to create a new array that contains only students whose first names start with the letter 'M'.

2. Use the `filter` function to create a new array that contains only students whose `id` is less than `10`.

**Note:** While solving the tasks, remember to not mutate or modify the original `names` and `lastNames` arrays. You are required to create a new array for each subtask.