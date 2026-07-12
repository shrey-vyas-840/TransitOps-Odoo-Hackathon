import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Sheet } from "@/components/ui/sheet";
import { navItems } from "@/constants/navigation";

export function AppLayout() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const currentItem =
    navItems.find((item) => item.path === location.pathname) ?? navItems[0];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar className="hidden lg:flex" />
      <Sheet
        open={isMobileNavOpen}
        title="TransitOps"
        onOpenChange={setMobileNavOpen}
      >
        <Sidebar isMobile onNavigate={() => setMobileNavOpen(false)} />
      </Sheet>
      <div className="lg:pl-72">
        <Header
          currentItem={currentItem}
          onMenuClick={() => setMobileNavOpen(true)}
        />
        <main className="min-h-[calc(100vh-4rem)] px-4 py-5 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
