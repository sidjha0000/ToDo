import React from "react";

export default function About() {
  return (
    <div className="container my-4">
      <h2>About This App</h2>
      <p className="lead">
        This is a simple and powerful Todo List application built using React JS.
        It allows users to add, view, and delete their daily tasks in an easy and clean interface.
      </p>

      <h4>Main Features</h4>
      <ul className="list-group list-group-flush mb-3">
        <li className="list-group-item">✅ Add new todos with a title and description</li>
        <li className="list-group-item">🗑️ Delete todos once they’re completed</li>
        <li className="list-group-item">⚛️ Built with functional React components</li>
        <li className="list-group-item">🧠 Uses React Hooks like <code>useState</code> and <code>useEffect</code></li>
        <li className="list-group-item">🛣️ Client-side routing using React Router</li>
      </ul>

      <p className="text-muted mt-4">
        <strong>Made by Siddharth Jha</strong> 💻 | Built for learning and practice.
      </p>
    </div>
  );
}
