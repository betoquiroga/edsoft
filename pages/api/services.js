export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": 1,
        "name": "Servicio 1",
        "detail": "Diseñamos tu presencia en internet con apariencia profesional"
      },
      {
        "id": 2,
        "name": "Servicio 2",
        "detail": "Diseñamos tu presencia en internet con apariencia profesional"
      },
      {
        "id": 3,
        "name": "Servicio 3",
        "detail": "Diseñamos tu presencia en internet con apariencia profesional"
      }
    ]
  )
}