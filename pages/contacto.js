import { NextSeo } from 'next-seo'

const Contacto = () => {
  return (
    <>
      <NextSeo
        title="Contacto | EDsoft"
        description="Nos interesa que nos contactes"
      />
      <main className="main">
        <section className="contact-section section-container">
          <h1>Contacto</h1>
          <div className="content-wrapper">
            <div>
              <h3>¿Tienes algo que decir?</h3>
              <p>
                Escríbenos en cualquier momento
              </p>
            </div>
      
            <address>
              <div className="contact-item">
                <h4>Teléfono</h4>
                <p>
                  <span className="jam jam-phone"></span>
                  <a href="tel:1234567890">(123) - 456 - 7890</a>
                </p>
              </div>
        
              <div className="contact-item">
                <h4>Correo electrónico</h4>
                <p>
                  <span className="jam jam-newsletter"></span>
                  <a href="mailto:contacto@edsoft.com">contacto@edsoft.com</a>
                </p>
              </div>
        
              <div className="contact-item">
                <h4>Redes sociales</h4>
                <div className="social-networks">
                  <a href="#"><span className="jam jam-twitter"></span></a>
                  <a href="#"><span className="jam jam-facebook"></span></a>
                  <a href="#"><span className="jam jam-whatsapp"></span></a>
                  <a href="#"><span className="jam jam-instagram"></span></a>
                </div>
              </div>
        
              <div className="contact-item">
                <h4>Dirección</h4>
                <p>
                  <span className="jam jam-map-marker"></span>
                  <a href="https://www.google.com/maps/place/Groenlandia/@67.8825871,-73.8807304,3z/data=!3m1!4b1!4m5!3m4!1s0x4ea20dbbe3c07715:0x34cf9d830114e218!8m2!3d65.8747247!4d-46.1425781" target="_blank" rel="noreferrer">Calle Falsa #123, Springfield, Óregon, Estados Unidos</a>
                </p>
              </div>    
            </address>
          
          </div>
        </section>
      </main>
    </>
  )
}

export default Contacto
