"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { init, send } from "@emailjs/browser";
import "@/allStyleFile/email.css";  

// Initialize EmailJS
init("o_PDiDd2_SLFdj6JN");

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    setIsLoading(true); // Start loading state

    try {
      // Send email using EmailJS with correct field mapping
      await send("service_xp2ai2r", "template_gyv37ff", {
        from_name: name,
        to_name: "Taha",
        message: message,
        from_email: email,
      });

      // Set form state and success message
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setError(""); // Reset error state
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => setIsSent(false), 3000); // Clear message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  return (
    <section id="contact" className="email-section">
      <div className="email-header">
        <h5 className="email-title">Let&apos;s Connect</h5>
        <p className="email-description">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="social-icons">
          <Link href="https://github.com/Taha258" target="_blank">
            <Image src="/github-icon.svg" alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/taha-hussain-8a0732284/" target="_blank">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={24} height={24} />
          </Link>
          <h2 className="contact-info">Contact: 0346-2973219</h2>
        </div>
      </div>
      <div>
        <form className="email-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              name="name"
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-label">Your email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="abc@google.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`submit-button ${isLoading ? 'disabled' : ''}`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {isSent && <p className="success-message">Message sent successfully!</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
};

export default EmailSection;
