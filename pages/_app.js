import '../styles/normalize.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        description="Este es el sitio de la empresa EDsoft"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'EDsoft company',
          description: 'Este es el sitio de la empresa EDsoft',
          images: [
            {
              url: '/images/project-1.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/images/project-2.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: '/images/project-3.jpg' },
            { url: '/images/project-4.jpg' },
          ],
          site_name: 'EDsoft',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
