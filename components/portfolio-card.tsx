import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import ImageCarousel from "./image-carousel";

interface ProjectCardProps {
  project: any; // Replace `any` with your actual project type
  onEdit: (project: any) => void;
  onDelete: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onEdit,
  onDelete,
}) => {

  return (
    <Card className="overflow-hidden">
      {/* Image Carousel */}
      <div className="h-fit">

      <ImageCarousel
        images={project.ProjectImage?.map((img: any) => img.path)}
        />
        </div>

      {/* Card Content */}
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold">{project.title}</h3>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {project.category.title}
          </span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => onEdit(project)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(project.id)}
            className="text-destructive hover:bg-destructive/10"
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
