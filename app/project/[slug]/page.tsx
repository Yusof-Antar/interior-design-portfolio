// app/project/[slug]/page.tsx
import type { Metadata } from "next";

// Example fetch from API (replace with your real API)
async function fetchProjectBySlug(slug: string) {
  const res = await fetch(
    `admin.falakey.com/api/v1/posts/show/architectural-beauty-of-sheikh-zayed-mosque?locale=ar`,
    {
      // Enable ISR if needed
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return null;
  return res.json();
}

// ✅ Generate metadata dynamically using slug from URL
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
    title: project.title,
    description: project.short_description || project.description,
    keywords: project.tags[0].name || ["interior design", "portfolio"],
    authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
    creator: "Your Brand",
    metadataBase: new URL("https://yourwebsite.com"),
    openGraph: {
      title: project.title,
      description: project.short_description || project.description,
      url: `https://yourwebsite.com/project/${project.slug}`,
      siteName: "Your Brand",
      images: [
        {
          url: project.media?.orginal || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.short_description || project.description,
      images: [project.media?.original || "/og-image.jpg"],
      creator: "@your_twitter_handle",
    },
    alternates: {
      canonical: `https://yourwebsite.com/project/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await fetchProjectBySlug(params.slug);

  if (!project) return <div className="p-8 text-center">Project not found</div>;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.media?.original}
        alt={project.title}
        className="w-full h-auto rounded-xl mb-6"
      />
      <p className="text-gray-700">{project.description}</p>
    </div>
  );
}
