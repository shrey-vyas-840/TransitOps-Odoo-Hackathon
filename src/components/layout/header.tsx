import { Bell, Menu, Search, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { NavItem } from "@/constants/navigation";

interface HeaderProps {
  currentItem: NavItem;
  onMenuClick: () => void;
}

export function Header({ currentItem, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <Button
        aria-label="Open navigation"
        className="lg:hidden"
        size="icon"
        variant="ghost"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </Button>

      <div className="min-w-0 flex-1">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>TransitOps</span>
          <span aria-hidden="true">/</span>
          <span className="truncate text-foreground">{currentItem.title}</span>
        </nav>
        <h1 className="truncate text-lg font-semibold">{currentItem.title}</h1>
      </div>

      <div className="hidden min-w-72 items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground md:flex">
        <Search className="h-4 w-4" aria-hidden="true" />
        <span>Search operations</span>
      </div>

      <div className="flex items-center gap-1">
        <ThemeToggle />
        <Button aria-label="Notifications" size="icon" variant="ghost">
          <Bell className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button aria-label="Settings" size="icon" variant="ghost">
          <Settings className="h-5 w-5" aria-hidden="true" />
        </Button>
        <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          TO
        </div>
      </div>
    </header>
  );
}
