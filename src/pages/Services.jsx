// src/pages/Services.jsx

import React from "react";
import {
  Truck,
  BadgeDollarSign,
  Tv2,
  Eye,
  Image,
  Star,
  Layout,
  HeartHandshake,
  Video,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, by, description, buttons }) => (
  <div className="bg-white rounded-md p-4 shadow-md w-full md:w-[48%] space-y-2">
    <div className="flex items-center gap-3">
      <Icon className="w-6 h-6 text-red-600" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">by {by}</p>
      </div>
    </div>
    <p className="text-sm text-gray-700">{description}</p>
    <div className="flex gap-2 flex-wrap">
      {buttons.map((btn, i) => (
        <button
          key={i}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
        >
          {btn}
        </button>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="p-6 space-y-10">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h1 className="text-2xl font-semibold">Services</h1>
        <div className="flex gap-2">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
            Download Overview PDF
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Contact Us To Get Started
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping Services</h2>
        <ServiceCard
          icon={Truck}
          title="Target+ Buy Shipping"
          by="Target"
          description="Save on shipping! We’ll meet you wherever you’re already rate shopping. Leverage our account number for always-on rates or integrate our shipping APIs with your rate shopper for a seamless experience."
          buttons={["Overview"]}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Advertising Services</h2>
        <div className="flex flex-wrap gap-4">
          <ServiceCard
            icon={BadgeDollarSign}
            title="Target Product Ads"
            by="Roundel™"
            description="Give your product a boost with native, cost-per-click sponsored product ads on Target.com and the Target app by reaching high-intent bottom-funnel shoppers."
            buttons={["Manage Ads", "Overview"]}
          />
          <ServiceCard
            icon={Tv2}
            title="Digital Media Campaigns"
            by="Roundel™"
            description="Drive awareness and conversion for your brands with world-class customer data, best-in-class media network, and actionable insights."
            buttons={["Roundel"]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Content Services</h2>
        <div className="flex flex-wrap gap-4">
          <ServiceCard
            icon={Image}
            title="3D Imaging Service"
            by="Target"
            description="Offer guests an interactive experience with your products through 3D Imaging. Utilize our in-house service to enrich your PDP with features like 'View in 3D' and 'See it in your space'."
            buttons={["Access 3D Service", "Overview"]}
          />
          <ServiceCard
            icon={Star}
            title="Ratings & Reviews"
            by="PowerReviews, Bazaarvoice, Yotpo and Sozie"
            description="Collect and share consumer generated reviews to give Target guests the confidence to choose your products."
            buttons={["Review Syndication", "Review Seeding"]}
          />
          <ServiceCard
            icon={Layout}
            title="Enhanced Content"
            by="Syndigo and Salsify"
            description="Engage guests with buying guides, 360° views, and comparison charts published seamlessly to all of your Product Detail Pages on Target.com."
            buttons={["Syndigo", "Salsify"]}
          />
          <ServiceCard
            icon={HeartHandshake}
            title="Social Content"
            by="Bazaarvoice"
            description="Source and display brand and user-generated social media content on product detail pages and select listing pages to inspire guests."
            buttons={["Bazaarvoice"]}
          />
          <ServiceCard
            icon={Video}
            title="Video"
            by="StoryXpress"
            description="Convert product images and descriptions into educational and high-performing video animations in just minutes."
            buttons={["StoryXpress"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
