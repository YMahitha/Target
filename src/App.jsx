import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickHelp from "./components/QuickHelp";

// Core Pages
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Returns from "./pages/Returns";
import Reports from "./pages/Reports";
import Payouts from "./pages/Payouts";
import Services from "./pages/Services";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";

// Items
import AllItems from "./pages/items/AllItems";
import Attributes from "./pages/items/Attributes";

// Planning
import Promotions from "./pages/planning/Promotions";
import Calendar from "./pages/planning/Calendar";

// Performance
import Defects from "./pages/performance/Defects";
import Sales from "./pages/performance/Sales";

// Business Info
import BasicInfo from "./pages/business/BasicInfo";
import Shipping from "./pages/business/Shipping";
import ReturnPolicies from "./pages/business/ReturnPolicies";
import Forms from "./pages/business/Forms";
import Referral from "./pages/business/Referral";

// Partner Settings
import UsersPage from "./pages/settings/Users";
import Auth from "./pages/settings/Auth";
import Listing from "./pages/settings/Listing";
import Notifications from "./pages/settings/Notifications";

// Support
import Help from "./pages/support/Help";
import Cases from "./pages/support/Cases.jsx";
import Disputes from "./pages/support/Disputes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/payouts" element={<Payouts />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/feedback" element={<Feedback />} />

                    {/* Items */}
                    <Route path="/items/all" element={<AllItems />} />
                    <Route path="/items/attributes" element={<Attributes />} />

                    {/* Planning */}
                    <Route path="/planning/promotions" element={<Promotions />} />
                    <Route path="/planning/calendar" element={<Calendar />} />

                    {/* Performance */}
                    <Route path="/performance/defects" element={<Defects />} />
                    <Route path="/performance/sales" element={<Sales />} />

                    {/* Business Info */}
                    <Route path="/business/basic" element={<BasicInfo />} />
                    <Route path="/business/shipping" element={<Shipping />} />
                    <Route path="/business/returns" element={<ReturnPolicies />} />
                    <Route path="/business/forms" element={<Forms />} />
                    <Route path="/business/referral" element={<Referral />} />

                    {/* Partner Settings */}
                    <Route path="/settings/users" element={<UsersPage />} />
                    <Route path="/settings/auth" element={<Auth />} />
                    <Route path="/settings/listing" element={<Listing />} />
                    <Route path="/settings/notifications" element={<Notifications />} />

                    {/* Support */}
                    <Route path="/support/help" element={<Help />} />
                    <Route path="/support/cases" element={<Cases />} />
                    <Route path="/support/disputes" element={<Disputes />} />
                  </Routes>
                </main>
                <QuickHelp />
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
