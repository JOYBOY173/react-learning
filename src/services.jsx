const services = [
  {
    title: "Web Development",
    description: "We build modern, responsive websites for businesses.",
  },
  {
    title: "UI/UX Design",
    description: "We design clean and intuitive digital experiences.",
  },
  {
    title: "Web Applications",
    description: "We build powerful web applications tailored to your needs.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;