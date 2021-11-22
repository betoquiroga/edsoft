import Image from "next/image"
import { NextSeo } from 'next-seo'

const QuienesSomos = () => {
  return (
    <>
      <NextSeo
        title="Quienes somos | EDsoft"
        description="Informacion sobre la empresa EDsoft"
      />
      <main className="main">
        <section className="about-us section-container">
          <h1>¿Quienes somos?</h1>
          <div className="content-wrapper">

            <article className="about-item">
              <div className="image-container">
                <Image src="/images/about-1.jpg" alt="Sobre nosotros" layout="fill" placeholder="blur" blurDataURL="/images/about-1.jpg" />
              </div>
              <div>
                <h2>Sobre nosotros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam, neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>
            </article>

            <article className="about-item">
              <div className="image-container">
                <Image src="/images/about-2.jpg" alt="Sobre nosotros" layout="fill" placeholder="blur" blurDataURL="/images/about-2.jpg" />
              </div>
              <div>
                <h2>Misión</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam, neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant egestas.</p>
              </div>
            </article>

            <article className="about-item">
              <div className="image-container">
                <Image src="/images/about-3.jpg" alt="Sobre nosotros" layout="fill" placeholder="blur" blurDataURL="/images/about-3.jpg" />
              </div>
              <div>
                <h2>Visión</h2>
                <p>Neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>
            </article>

          </div>
        </section>

      </main>
    </>
  )
}

export default QuienesSomos
