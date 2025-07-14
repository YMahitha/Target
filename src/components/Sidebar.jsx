import React, { useState } from "react";
import {
  Menu, Home, ShoppingCart, RotateCw, BarChart2, DollarSign,
  Briefcase, Package, Calendar, AlertTriangle, Info,
  Users, HelpCircle, X, MessageSquare
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  { label: "Dashboard", icon: Home, path: "/" },
  { label: "Orders", icon: ShoppingCart, path: "/orders" },
  { label: "Returns", icon: RotateCw, path: "/returns" },
  { label: "Reports", icon: BarChart2, path: "/reports" },
  { label: "Payouts & Account", icon: DollarSign, path: "/payouts" },
  { label: "Services", icon: Briefcase, path: "/services" },
  {
    label: "Items", icon: Package, sub: [
      { name: "All Items", path: "/items/all" },
      { name: "Attributes & Values", path: "/items/attributes" }
    ]
  },
  {
    label: "Planning", icon: Calendar, sub: [
      { name: "Promotions", path: "/planning/promotions" },
      { name: "Calendar", path: "/planning/calendar" }
    ]
  },
  {
    label: "Performance", icon: AlertTriangle, sub: [
      { name: "Order Defect Rate", path: "/performance/defects" },
      { name: "Sales Metrics", path: "/performance/sales" }
    ]
  },
  {
    label: "Business Info", icon: Info, sub: [
      { name: "Basic Info", path: "/business/basic" },
      { name: "Shipping Details", path: "/business/shipping" },
      { name: "Return Policies", path: "/business/returns" },
      { name: "Forms & Agreements", path: "/business/forms" },
      { name: "Referral Fees", path: "/business/referral" }
    ]
  },
  {
    label: "Partner Settings", icon: Users, sub: [
      { name: "Users & Contacts", path: "/settings/users" },
      { name: "Authentications", path: "/settings/auth" },
      { name: "Item Listings Settings", path: "/settings/listing" },
      { name: "Notification Settings", path: "/settings/notifications" }
    ]
  },
  {
    label: "Support", icon: HelpCircle, sub: [
      { name: "Help Center", path: "/support/help" },
      { name: "Open Cases", path: "/support/cases" },
      { name: "Return Disputes", path: "/support/disputes" },
    ]
  },
  { label: "Feedback", icon: MessageSquare, path: "/feedback" },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [openMobile, setOpenMobile] = useState(false);

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const SidebarContent = () => (
    <div className="w-72 bg-[#1a1a1a] text-white h-full fixed md:static z-50 overflow-y-auto scrollbar-thin">
      <div className="flex justify-between items-center px-6 py-4 text-white font-bold text-xl bg-[#111]">
        <span>Target +</span>
        <button onClick={() => setOpenMobile(false)} className="md:hidden"><X /></button>
      </div>
      <nav className="text-base space-y-1">
        {menu.map((item, idx) => (
          <div key={idx}>
            <div
              className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex justify-between items-center"
              onClick={() => item.sub ? toggleMenu(item.label) : null}
            >
              <NavLink to={item.path || "#"} className="flex items-center gap-3 text-gray-200">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
              {item.sub && <span className="text-xs">{openMenus[item.label] ? "▲" : "▼"}</span>}
            </div>
            {item.sub && openMenus[item.label] && (
              <div className="pl-12 py-1 space-y-1 text-gray-400 text-sm">
                {item.sub.map((subItem, subIdx) => (
                  <NavLink key={subIdx} to={subItem.path} className="hover:text-white block">
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <button className="md:hidden p-2 fixed top-2 left-2 z-50" onClick={() => setOpenMobile(true)}>
        <Menu className="text-black" />
      </button>
      <div className="hidden md:block">
        <SidebarContent />
      </div>
      {openMobile && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setOpenMobile(false)}>
          <SidebarContent />
        </div>
      )}
    </>
  );
};

export default Sidebar;
