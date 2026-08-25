import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSubmitted(false);
  }

  async function handleSubmit(event) {
  event.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's build something great together.</h2>

        <p>
          Have a project in mind? Tell us what you're looking to build and
          we'll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>

        {submitted && (
          <p className="success-message">
            Thanks! Your message has been received.
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;