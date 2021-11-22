import Image from "next/image"

const Project = ({ title, description, image, url }) => {
  return (
    <article className="card-project">
      <div className="image-container">
        <Image src={ image } alt={ title } layout="fill" placeholder="blur" blurDataURL={image} />
      </div>
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <a href={ url } target="_blank" rel="noreferrer">Ver proyecto</a>
      </div>
    </article>
  )
}

export default Project
