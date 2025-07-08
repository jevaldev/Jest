# 📝 React ToDo App Testing Practice

This project is a practice application built with **React**, focused on learning unit testing, integration testing, and behavior testing using **Jest** and **React Testing Library**.

The application simulates a simple **ToDo List** and allows working with different test cases to validate component behavior and their interaction with simulated data.

---

## What I learned

- Thanks to this project, I learned the difference between **getBy** and **queryBy**. If you use the **getBy** query and no match is found, it will throw an **error**. Meanwhile, **queryBy** returns **null**, giving you the possibility to check for something that might not exist on the page without causing the test to fail immediately.
- Group similar test cases using the **describe** function, making it possible to be more specific with your tests. This makes it easier to identify errors in your project.
- Run a specific function before executing multiple tests or test groups with the **beforeEach** function.
- Search for the parent of an element using the **closest** function. This helps you locate an element when querying by text or role that might be duplicated in the project, so you can properly target the one you need for your test.

---

## 📌 Features

✅ Rendering of a task list (ToDo items).  
✅ Adding new items.  
✅ Deleting existing tasks.  
✅ Simulating data loading.  
✅ Simulating loading errors.  
✅ Handling edge-case states: no data, infinite loading, and server error.

---

## 📦 Technologies Used

- **React**
- **Vite**
- **Jest**
- **React Testing Library**
- **@testing-library/jest-dom**
- **@testing-library/user-event**

---

## 🎯 Practice Objectives

- Learn to write unit tests for React components.
- Simulate user interactions such as clicks and text input.
- Mock data fetching requests.
- No data.
- Check test coverage (`--coverage`).

## 🧪 Tests to be Implemented

The following test cases will be written for this application:

- ✅ Initial rendering of the component.
- ✅ Adding new ToDo items.
- ✅ Removing ToDo items.
- ✅ Displaying error messages when operations fail.
- ✅ No data.

## 📚 Resources

- [React Testing Library Queries Documentation](https://testing-library.com/docs/queries/about/)
- [Youtube: 🧪 Introducción al Testing desde Cero con JEST ✅ (Bootcamp FullStack Gratuito) - (Midudev)](https://www.youtube.com/watch?v=_DzBez4qMi0)
- [Youtube: TESTING en REACT 🧪 ¡Aprende DESDE CERO! Con react-testing-library y Jest (FullStack Bootcamp JS) - (Midudev)](https://www.youtube.com/watch?v=KYjjtRgg_H0)
