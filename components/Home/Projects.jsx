import Project from "./Project"

const Projects = ({ projects }) => {
  return (
    <section className="section-container last-projects">
      <h2>Últimos proyectos</h2>
      <div className="content-wrapper">
        {
          projects && projects.map(proj => (
            <Project
              key={proj.id}
              title={proj.title}
              description={proj.description}
              image={proj.image}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects