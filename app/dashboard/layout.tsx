"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Award, ChartBarStacked, Contact, Grid, Home, Info, Layout, LogOut, Menu, MessageSquare, Settings, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/sonner"



interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Header",
    href: "/dashboard/header",
    icon: <Layout className="h-5 w-5" />,
  },
  {
    title: "Portfolio Category",
    href: "/dashboard/portfolio-category",
    icon: <ChartBarStacked className="h-5 w-5" />,
  },
  {
    title: "Portfolio",
    href: "/dashboard/portfolio",
    icon: <Grid className="h-5 w-5" />,
  },
  {
    title: "About Studio",
    href: "/dashboard/about",
    icon: <Info className="h-5 w-5" />,
  },
  {
    title: "Services",
    href: "/dashboard/services",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Testimonials",
    href: "/dashboard/testimonials",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Awards",
    href: "/dashboard/awards",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Contact",
    href: "/dashboard/contact",
    icon: <Contact className="h-5 w-5" />,
  },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const auth = localStorage.getItem("isAuthenticated")
      setIsAuthenticated(auth === "true")
      setIsLoading(false)

      // If not authenticated and not on login page, redirect to login
      if (auth !== "true" && pathname !== "/dashboard/login") {
        router.push("/dashboard/login")
      }
    }

    checkAuth()
  }, [pathname, router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    setIsAuthenticated(false)
    router.push("/dashboard/login")
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    })
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  // Show login page if not authenticated
  if (!isAuthenticated && pathname === "/dashboard/login") {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-4 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-xs">
            <div className="flex h-16 items-center border-b px-6">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <Layout className="h-6 w-6" />
                <span>Studio Admin</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto"
                onClick={() => document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close navigation menu</span>
              </Button>
            </div>
            <nav className="grid gap-2 px-2 py-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
              <Button
                variant="ghost"
                className="flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Layout className="h-6 w-6" />
          <span>Studio Admin</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handleLogout} className="hidden md:flex">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-muted-foreground">admin@studio.com</div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
            <Button
              variant="ghost"
              className="flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

