export interface Portfolio {
  id: string;
  title: string;
  description: string;
  link: string;
  ProjectImage: { path: string }[];
  category: {
    id: string;
    title: string;
  };
}
