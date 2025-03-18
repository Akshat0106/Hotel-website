import { useState } from "react";
import emailjs from "@emailjs/browser";

export function EnquiryForm({ selectedRoom, closeEnquiryForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      room_name: selectedRoom?.name, // Pass room name
    };

    emailjs
      .send(
        "your_service_id", // ✅ Replace with EmailJS Service ID
        "your_template_id", // ✅ Replace with EmailJS Template ID
        templateParams,
        "your_public_key" // ✅ Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your enquiry has been sent!");
          closeEnquiryForm(); // Close form after submission
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button
          onClick={closeEnquiryForm}
          className="absolute top-2 right-3 text-xl text-gray-600"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded h-20"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
