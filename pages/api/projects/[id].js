import { projectDatabase } from "../../../data/data";

export default function handler(req, res) {
  const id = req.query.id;
  const filtered = projectDatabase.filter((project) => project.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Project #${id} not found` });
  }
}
