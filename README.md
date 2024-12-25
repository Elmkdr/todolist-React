# Todo List Application

This project is a simple Todo List application built using React, TypeScript, Tailwind CSS, and Vite. It allows users to manage their tasks efficiently with features like adding, editing, and deleting todos.

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Add Todos**: Add new tasks to your list.
- **Edit Todos**: Modify existing tasks.
- **Delete Todos**: Remove tasks from the list.
- **Responsive Design**: Optimized for mobile and desktop screens.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-list-react-ts.git
    cd todo-list-react-ts
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to:
    ```
    http://localhost:5173
    ```

---

## Usage

- Add a new task using the input field and the "Add" button.
- Edit an existing task by clicking the "Edit" button next to it.
- Delete a task by clicking the "Delete" button.

---

## Tech Stack

### Frontend
- **React**: Library for building user interfaces
- **TypeScript**: Static typing for JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Build tool for blazing-fast development

---

## Folder Structure
```
.
├── public
├── src
│   ├── components
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   │   └── AddTodo.tsx
│   ├── hooks
│   │   └── useTodos.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature name'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
