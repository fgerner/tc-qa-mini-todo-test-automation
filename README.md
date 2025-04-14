# mini-todo-app


# 📝 Mini To-Do App – Test Automation Challenge

This is a simple HTML+JS To-Do app built for automation test candidates. It has basic features like adding, completing, and deleting tasks. Your challenge is to write automated tests for this app using JavaScript.

---

## 🚀 Getting Started

You can run the app in two ways:

#### Option A – Open Directly

Just open the `index.html` file in your browser.

#### Option B – Run on Local Server (Recommended for Automation)

If you have Node.js installed:

```bash
npx serve
```

Or install globally:

```bash
npm install -g serve
serve .
```

Then go to: [http://localhost:3000](http://localhost:3000)

## Run Tests

Node.js needs to be installed, and
the web server needs to be running the app on http://localhost:3000

```bash
npx serve
```

Test that are covered:

Mini To-Do App - UI Tests
- [x] should add a new task to the list
- [x] should mark a task as completed
- [x] should delete a task from the list
- [x] should not add an empty task

### Install WebdriverIO
Install the project dependencies:
```npm
npm install
```
### Run tests
```npm
npm run wdio
```


---

## ✅ App Features

- Add task
- Mark task as completed
- Delete task
- Tasks appear dynamically in a list

---

## 🎯 Automation Task

Your job is to write test automation for this app using Typescript/Javascript and Cypress, Playwright, or WebdriverIO (This will depend on the role, please ask our Team which one to use).

### 📋 What to Automate

1. Open the app
2. Add a new task 
3. Verify it appears in the list
4. Mark the task as completed and check `.completed` class is added
5. Delete the task and verify it's removed from the list


### 🔨 What We Expect
- Use at least one utility/helper function
- Clean, readable JavaScript
- Basic assertions
- A useful README

### 💡 Bonus
- Good selector strategy
- Test reusability
- Extra validations
- Production Checklist

## Evaluation Criteria
- Tooling best practice
- Show us your work through your commit history
- Looking for you to produce working code, with enough room to demonstrate how you would structure a real-project
- Completeness: did you complete the requirements?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?

## Deliverables
Make sure to include all source code in the repository.

## Submission
Please organisee, design and document your code as if it were going into production - then push your changes to the main branch. After you have completed everything please share a link with our Team.

Have fun building! 🚀

The Terem Technologies Team
