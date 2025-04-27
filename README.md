# 🧠 Todo Task Organizer (React + OpenAI)

This is a lightweight React application that transforms a user's freeform brain dump of tasks into a clean, prioritized task list using OpenAI's GPT-3.5 API.

Built in a single focused evening, this project demonstrates:
- Full-stack (frontend + API) integration
- Async API handling with loading states and error management
- Secure environment variable usage for API keys
- Clean, functional component structure with React Hooks

---

## 🚀 Features

- Textarea input for freeform brain dumping
- "Organize Tasks" button to submit
- Loading indicator during API processing
- Output display of organized, prioritized task list
- Basic error handling for failed API calls

---

## 🛠 Tech Stack

- **Frontend:** React (Vite / Create React App)
- **API:** OpenAI GPT-3.5 Chat Completions
- **Deployment:** Local development (optional cloud deploy ready)
- **Version Control:** GitHub

---

## 📦 Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo.git
    cd todo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory:
    ```bash
    touch .env
    ```

4. Add your OpenAI API key to the `.env` file:
    ```env
    REACT_APP_OPENAI_API_KEY=your-openai-api-key-here
    ```

5. Start the development server:
    ```bash
    npm start
    ```

6. Visit `http://localhost:3000` to use the app.

---

## ⚡ Future Enhancements (Stretch Goals)

- Prompt improvement
- Local storage to preserve task lists between sessions
- "Start Over" button to reset the input and output
- Live deployment to Vercel or Netlify
- Usage tracking for token consumption per API call

---

## 🎯 Why This Project?

This project was built to demonstrate hands-on experience interacting with LLMs (Large Language Models) in a professional full-stack application, with a focus on clean development practices and rapid iteration.

It is part of a broader portfolio preparing for forward-deployed engineering roles working at the intersection of AI infrastructure and client-facing development.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

