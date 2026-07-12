import type { ReactNode } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";

interface AuthLayoutProps {
  children: ReactNode;
  description: string;
  title: string;
}

export function AuthLayout({ children, description, title }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[minmax(360px,0.9fr)_minmax(480px,1.1fr)]">
        <section className="hidden border-r border-border bg-card px-10 py-8 lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
              TO
            </div>
            <div>
              <p className="text-sm font-semibold">TransitOps</p>
              <p className="text-xs text-muted-foreground">
                Smart Transport Operations Platform
              </p>
            </div>
          </div>

          <div className="my-auto max-w-md">
            <p className="text-sm font-medium text-primary">ERP workspace</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal">
              Secure access for transport operations teams
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              A focused authentication entry point for operations staff,
              dispatch teams, and administrators.
            </p>
          </div>
        </section>

        <section className="flex min-h-screen flex-col">
          <header className="flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 lg:justify-end lg:px-8">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
                TO
              </div>
              <span className="text-sm font-semibold">TransitOps</span>
            </div>
            <ThemeToggle />
          </header>

          <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-small sm:p-8">
                {children}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
