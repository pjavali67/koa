// components/admin/Layout.tsx
"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  title: string;
  href?: string;
  icon: React.ReactNode;
  label?: string;
  items?: NavItem[];
}

interface AdminLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  title: string;
}

export function AdminLayout({ children, navItems, title }: AdminLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const renderNavItems = (items: NavItem[], level = 0) => {
    return items.map((item, index) => {
      if (item.items) {
        return (
          <CollapsibleNavItem
            key={index}
            item={item}
            isCollapsed={isCollapsed}
            isActive={isActive}
            level={level}
          />
        );
      }

      return (
        <Tooltip key={index} disableHoverableContent={!isCollapsed}>
          <TooltipTrigger asChild>
            <Button
              variant={isActive(item.href) ? "secondary" : "ghost"}
              size="sm"
              className={cn(
                "w-full justify-start gap-2",
                isCollapsed && "justify-center",
                level > 0 && "pl-8"
              )}
              onClick={() => {
                if (item.href) {
                  router.push(item.href);
                  setIsMobileOpen(false);
                }
              }}
            >
              <span className={cn(isCollapsed ? "mr-0" : "mr-2")}>
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="flex-1 text-left">{item.title}</span>
              )}
              {!isCollapsed && item.label && (
                <span className="ml-auto text-xs text-muted-foreground">
                  {item.label}
                </span>
              )}
            </Button>
          </TooltipTrigger>
          {isCollapsed && (
            <TooltipContent side="right">{item.title}</TooltipContent>
          )}
        </Tooltip>
      );
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col border-r h-full transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && <h1 className="text-lg font-semibold">{title}</h1>}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="p-2"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {renderNavItems(navItems)}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed md:hidden z-50 flex flex-col border-r h-full transition-all duration-300 ease-in-out bg-background",
          isMobileOpen ? "left-0 w-64" : "-left-full w-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-lg font-semibold">{title}</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileSidebar}
            className="p-2"
          >
            <X size={16} />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {renderNavItems(navItems)}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileSidebar}
              className="md:hidden p-2"
            >
              <Menu size={16} />
            </Button>
            <h2 className="text-xl font-semibold">
              {navItems
                .flatMap((item) => [item, ...(item.items || [])])
                .find((item) => isActive(item.href))?.title || "Dashboard"}
            </h2>
          </div>
          <div>User Menu</div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}

interface CollapsibleNavItemProps {
  item: NavItem;
  isCollapsed: boolean;
  isActive: (href?: string) => boolean;
  level: number;
}

function CollapsibleNavItem({
  item,
  isCollapsed,
  isActive,
  level,
}: CollapsibleNavItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isCollapsed) {
      setIsOpen(false);
    }
  }, [isCollapsed]);

  const hasActiveChild = item.items?.some((subItem) => isActive(subItem.href));

  React.useEffect(() => {
    if (hasActiveChild && !isCollapsed) {
      setIsOpen(true);
    }
  }, [hasActiveChild, isCollapsed]);

  function renderNavItems(items: NavItem[] | undefined, arg1: number): React.ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="space-y-1">
      <Tooltip disableHoverableContent={!isCollapsed}>
        <TooltipTrigger asChild>
          <Button
            variant={hasActiveChild ? "secondary" : "ghost"}
            size="sm"
            className={cn(
              "w-full justify-start gap-2",
              isCollapsed && "justify-center",
              level > 0 && "pl-8"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={cn(isCollapsed ? "mr-0" : "mr-2")}>{item.icon}</span>
            {!isCollapsed && (
              <>
                <span className="flex-1 text-left">{item.title}</span>
                {item.label && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.label}
                  </span>
                )}
                <ChevronRight
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    isOpen && "rotate-90"
                  )}
                />
              </>
            )}
          </Button>
        </TooltipTrigger>
        {isCollapsed && (
          <TooltipContent side="right">{item.title}</TooltipContent>
        )}
      </Tooltip>

      {!isCollapsed && isOpen && (
        <div className="ml-4 space-y-1">{renderNavItems(item.items, level + 1)}</div>
      )}
    </div>
  );
}