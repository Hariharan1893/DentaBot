"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message. Try again later.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b min-h-[82vh] from-purple-100 to-white flex justify-center items-center px-6 ">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">Contact the Developer</h2>
        <p className="text-gray-600 mb-6 text-center">Need a custom solution? Get in touch with me!</p>

        {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full p-3 placeholder-gray-500 text-gray-800 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 placeholder-gray-500 text-gray-800 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Enter your message.."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 placeholder-gray-500 text-gray-800 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition duration-200"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-600 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}