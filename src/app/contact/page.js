"use client"; // Ensure this runs on the client side
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage({ text: result.message, type: "success" });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setMessage({ text: result.error, type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Something went wrong. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#7F5539]">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">Have questions? We'd love to hear from you!</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4 text-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4 text-gray-800"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-4 text-gray-800"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#9C6644] text-white font-medium rounded px-6 py-2 hover:bg-[#7F5539]"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <p
            className={`mt-4 text-sm text-center ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}

        <p className="mt-4 text-gray-700">
          Or reach us via email:{" "}
          <a href="mailto:rohitdoddapani97@gmail.com" className="underline">
            rohitdoddapani97@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </main>
  );
}