import Link from "next/link";
import {
  Award,
  ChartBarStacked,
  Contact,
  Grid,
  Info,
  Layout,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  const stats = [
    { title: "Total Projects", value: "24", change: "+2 this month" },
    { title: "Testimonials", value: "18", change: "+3 this month" },
    { title: "Inquiries", value: "12", change: "+5 this week" },
    { title: "Awards", value: "7", change: "+1 this year" },
  ];

  const sections = [
    {
      title: "Header",
      description: "Manage your website header content",
      icon: <Layout className="h-8 w-8" />,
      href: "/dashboard/header",
    },
    {
      title: "Portfolio Category",
      description: "Add, edit, or remove portfolio projects",
      icon: <ChartBarStacked className="h-8 w-8" />,
      href: "/dashboard/portfolio-category",
    },
    {
      title: "Portfolio",
      description: "Add, edit, or remove portfolio projects",
      icon: <Grid className="h-8 w-8" />,
      href: "/dashboard/portfolio",
    },
    {
      title: "About Studio",
      description: "Update your studio information and team",
      icon: <Info className="h-8 w-8" />,
      href: "/dashboard/about",
    },
    {
      title: "Services",
      description: "Manage the services you offer",
      icon: <Settings className="h-8 w-8" />,
      href: "/dashboard/services",
    },
    {
      title: "Testimonials",
      description: "Add or edit client testimonials",
      icon: <MessageSquare className="h-8 w-8" />,
      href: "/dashboard/testimonials",
    },
    {
      title: "Awards",
      description: "Showcase your achievements and recognition",
      icon: <Award className="h-8 w-8" />,
      href: "/dashboard/awards",
    },
    {
      title: "Contact",
      description: "Update your contact information",
      icon: <Contact className="h-8 w-8" />,
      href: "/dashboard/contact",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your website management dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Manage Website Content</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => (
            <Card key={i} className="transition-all hover:shadow-md">
              <Link href={section.href}>
                <CardHeader>
                  <div className="mb-2 text-primary">{section.icon}</div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
