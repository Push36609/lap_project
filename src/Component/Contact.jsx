import React, { useState } from "react";
 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-156 bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100">
    <div className = "max-w-125 mx-[30%] mt-[4%] p-5">
      <h2 className="text-center text-3xl mb-5">Contact Us</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        
        <label className="mb-1.25 ">Name</label>
        <input
          className="p-2 mb-4 border bg-white border-gray-600 rounded-[5px]"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          className="p-2 mb-4 border bg-white border-gray-600 rounded-[5px]"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          className="p-2 mb-4 border bg-white border-gray-600 rounded-[5px]"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        ></textarea>

        <button className="p-2.5 bg-blue-600 text-white border-none rounded-[5px] cursor-pointer text-[16px] hover:bg-blue-600"
         type="submit">Submit</button>
      </form>
    </div>
  </div>
  )
}

