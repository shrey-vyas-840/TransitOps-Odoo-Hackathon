import {
  BarChart3,
  Bell,
  CarFront,
  CircleGauge,
  ClipboardList,
  Fuel,
  LayoutDashboard,
  LucideIcon,
  ReceiptText,
  Route,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

export interface NavItem {
  title: string;
  path: string;
  icon: LucideIcon;
  group: "Workspace" | "Operations" | "Admin";
  description: string;
}

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    group: "Workspace",
    description: "Operational summary shell placeholder",
  },
  {
    title: "Vehicle Registry",
    path: "/vehicles",
    icon: CarFront,
    group: "Operations",
    description: "Vehicle registry navigation placeholder",
  },
  {
    title: "Driver Registry",
    path: "/drivers",
    icon: Users,
    group: "Operations",
    description: "Driver registry navigation placeholder",
  },
  {
    title: "Trip Management",
    path: "/trips",
    icon: Route,
    group: "Operations",
    description: "Trip management navigation placeholder",
  },
  {
    title: "Maintenance",
    path: "/maintenance",
    icon: Wrench,
    group: "Operations",
    description: "Maintenance navigation placeholder",
  },
  {
    title: "Fuel Logs",
    path: "/fuel-logs",
    icon: Fuel,
    group: "Operations",
    description: "Fuel log navigation placeholder",
  },
  {
    title: "Expense Logs",
    path: "/expense-logs",
    icon: ReceiptText,
    group: "Operations",
    description: "Expense log navigation placeholder",
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
    group: "Workspace",
    description: "Analytics navigation placeholder",
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
    group: "Workspace",
    description: "Notification center navigation placeholder",
  },
  {
    title: "Authentication",
    path: "/authentication",
    icon: ShieldCheck,
    group: "Admin",
    description: "Authentication flow shell placeholder",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
    group: "Admin",
    description: "Settings navigation placeholder",
  },
  {
    title: "Audit Queue",
    path: "/audit-queue",
    icon: ClipboardList,
    group: "Admin",
    description: "Mock navigation item for shell stress testing",
  },
  {
    title: "Operations Health",
    path: "/operations-health",
    icon: CircleGauge,
    group: "Workspace",
    description: "Mock navigation item for shell stress testing",
  },
];
