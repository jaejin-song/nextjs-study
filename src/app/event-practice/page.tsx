"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    alert(`${username}: ${message}`);
    setForm({ username: "", message: "" });
  };

  return (
    <div className="p-12">
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
}
