interface IProject {
  name: string;
  accent: string;
  tags: {
    name: string;
    color: 'black' | "blue" | 'brown' | 'green' | 'grey' | 'olive' | 'orange' | 'pink' | 'purple' | 'red' | "teal" | 'violet' | 'yellow'
  }[];
  description: string;
  url: string;
  source_url: string

}

const projects: IProject[] = [
  {
    "name": "Notes",
    "accent": "#202021",
    "tags": [
      {
        "name": "React",
        "color": "teal"
      },
      {
        "name": "TypeScript",
        "color": "blue"
      }
    ],
    "description": "Um simples bloco de anotações que utiliza Markdown.",
    "url": "https://viniciusp78.github.io/notes-app/",
    "source_url": "https://github.com/ViniciusP78/notes-app/"
  }
]

export default projects;