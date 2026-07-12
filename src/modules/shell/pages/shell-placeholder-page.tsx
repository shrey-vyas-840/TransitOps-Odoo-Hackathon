import type { NavItem } from "@/constants/navigation";

interface ShellPlaceholderPageProps {
  navItem: NavItem;
}

export function ShellPlaceholderPage({ navItem }: ShellPlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="rounded-lg border border-border bg-card p-6 shadow-small">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
            <navItem.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-muted-foreground">
              Application shell route
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-normal">
              {navItem.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {navItem.description}. This placeholder verifies routing,
              breadcrumbs, navigation state, and responsive shell behavior
              without implementing business module functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
