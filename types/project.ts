export interface Project {
  id: string;

  title: string;
  description?: string | null;

  image?: string | null;

  liveUrl?: string | null;
  githubUrl?: string | null;

  techStack?: string | null;

  createdAt: Date;
}
