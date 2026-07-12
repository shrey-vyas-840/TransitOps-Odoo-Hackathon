import { NavLink } from "react-router-dom";
import { ChevronLeft, TrainFront } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, type NavItem } from "@/constants/navigation";
import { cn } from "@/utils/cn";

interface SidebarProps {
  className?: string;
  isMobile?: boolean;
  onNavigate?: () => void;
}

const navGroups = navItems.reduce<Record<NavItem["group"], NavItem[]>>(
  (groups, item) => {
    groups[item.group].push(item);
    return groups;
  },
  {
    Workspace: [],
    Operations: [],
    Admin: [],
  },
);

export function Sidebar({ className, isMobile = false, onNavigate }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 flex-col border-r border-border bg-card",
        isMobile && "static h-full w-full border-r-0",
        className,
      )}
      aria-label="Primary navigation"
    >
      <div className="flex h-16 items-center gap-3 border-b border-border px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <TrainFront className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">TransitOps</p>
          <p className="truncate text-xs text-muted-foreground">
            Smart Transport Operations
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {Object.entries(navGroups).map(([groupName, items]) => (
          <div key={groupName} className="mb-6">
            <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {groupName}
            </p>
            <div className="space-y-1">
              {items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive && "bg-primary-light text-primary",
                    )
                  }
                >
                  <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{item.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
          <div>
            <p className="text-sm font-medium">Ops Console</p>
            <p className="text-xs text-muted-foreground">Shell only</p>
          </div>
          <Button aria-label="Collapse sidebar" size="icon" variant="ghost">
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </aside>
  );
}
