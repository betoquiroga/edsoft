export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": 1,
        "title": "Proyecto 1",
        "description": "Descripción del proyecto 1",
        "image": "/images/project-1.jpg",
        "url": "https://ed.team/cursos"
      },
      {
        "id": 2,
        "title": "Proyecto 2",
        "description": "Descripción del proyecto 2",
        "image": "/images/project-2.jpg",
        "url": "https://ed.team/cursos"
      },
      {
        "id": 3,
        "title": "Proyecto 3",
        "description": "Descripción del proyecto 3",
        "image": "/images/project-3.jpg",
        "url": "https://ed.team/cursos"
      },
      {
        "id": 4,
        "title": "Proyecto 4",
        "description": "Descripción del proyecto 4",
        "image": "/images/project-4.jpg",
        "url": "https://ed.team/cursos"
      },
      {
        "id": 5,
        "title": "Proyecto 5",
        "description": "Descripción del proyecto 5",
        "image": "/images/project-5.jpg",
        "url": "https://ed.team/cursos"
      }
    ]
  )
}