interface Skill {
  id: number;
  name: string;
  level: string; // e.g., "Advanced", "Intermediate", "Beginner"
}

export const skills: Skill[] = [
  { id: 1, name: "JavaScript", level: "Advanced" },
  { id: 2, name: "TypeScript", level: "Advanced" },
  { id: 3, name: "React", level: "Advanced" },
  { id: 4, name: "Next.js", level: "Advanced" },
  { id: 5, name: "Tailwind CSS", level: "Advanced" },
  { id: 6, name: "Node.js", level: "Intermediate" },
  { id: 7, name: "Express", level: "Intermediate" },
  { id: 8, name: "GraphQL", level: "Intermediate" },
  // Add more skills as needed
];
