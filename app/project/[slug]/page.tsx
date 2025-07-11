// app/project/[slug]/page.tsx
import type { Metadata } from "next";

// 2. Fetch one project by slug
async function fetchProjectBySlug(slug: string) {
  const res = await fetch(
    `https://admin.falakey.com/api/v1/posts/show/${slug}?locale=ar`,
    {
      cache: "force-cache", // required for static export
    }
  );

  if (!res.ok) return null;
  return res.json();
}

// ✅ 4. Metadata generation (can be dynamic per slug)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await fetchProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: project.data.title,
    description: project.data.short_description || project.data.description,
    keywords: project.data.tags?.map((tag: any) => tag.name) || [],
    openGraph: {
      title: project.data.title,
      description: project.data.short_description || project.data.description,
      url: `https://yourwebsite.com/project/${project.data.slug}`,
      siteName: "Your Brand",
      images: [
        {
          url: project.data.media?.original,
          width: 1200,
          height: 630,
          alt: project.data.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.data.title,
      description: project.data.short_description || project.data.description,
      images: [project.data.media?.original],
    },
    alternates: {
      canonical: `https://yourwebsite.com/project/${project.data.slug}`,
    },
  };
}

// ✅ 5. The page component itself
export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await fetchProjectBySlug(params.slug);

  if (!project) {
    return <div className="p-8 text-center">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{project.data.title}</h1>
      <img
        src={project.data.media?.original}
        alt={project.data.title}
        className="w-full h-auto rounded-xl mb-6"
      />
      <p className="text-gray-700">{project.data.description}</p>
    </div>
  );
}
