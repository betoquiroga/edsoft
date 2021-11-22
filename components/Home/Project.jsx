import Image from "next/image"

const Project = ({ title, description, image }) => {
  return (
    <a href="#" className="project-item">
      <article>
        <div>
          <h4>{ title }</h4>
          <p>{ description }</p>
        </div>
        <div className="image-container">
          <Image src={ image } alt={ title } layout="fill" placeholder="blur" blurDataURL={image} />
        </div>
      </article>
    </a>
  )
}

export default Project
