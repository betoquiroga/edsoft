import Service from "./Service"

const Services = ({ services }) => {
  return (
    <section className="services-section section-container">
      <h2>Nuestros servicios</h2>
      <div className="content-wrapper">
        {
          services && services.map(serv => (
            <Service key={serv.id} name={serv.name} detail={serv.detail} />
          ))
        }
      </div>
    </section>
  )
}

export default Services