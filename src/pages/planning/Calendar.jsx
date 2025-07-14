// SeasonalCalendarPage.jsx
import React, { useState } from 'react';
import { CalendarDays, List } from 'lucide-react';
import { format, differenceInDays, parseISO } from 'date-fns';

const events = [
  {
    name: "Baby Month",
    mindset: "child care",
    value: "baby gear, nursery, baby clothing",
    start: new Date('2025-08-25'),
    end: new Date('2025-09-25'),
  },
  {
    name: "Christmas",
    mindset: "Holiday Cheers",
    value: "gifts, decor, party supplies",
    start: new Date('2025-09-07'),
    end: new Date('2025-12-25'),
  },
  {
    name: "Health & Wellness",
    mindset: "fitness, health",
    value: "gym gear, vitamins, wellness",
    start: new Date('2025-12-26'),
    end: new Date('2026-02-01'),
  },
  {
    name: "Valentine's Day",
    mindset: "Gifting & Celebration",
    value: "candy, flowers, cards",
    start: new Date('2025-12-29'),
    end: new Date('2026-02-15'),
  },
  {
    name: "St. Patrick's Day",
    mindset: "Seasonal Celebration",
    value: "green outfits, party decor",
    start: new Date('2026-02-16'),
    end: new Date('2026-03-17'),
  },
  {
    name: "Easter",
    mindset: "Spring Celebration",
    value: "candy, baskets, decor",
    start: new Date('2026-02-16'),
    end: new Date('2026-04-20'),
  },
  {
    name: "Mother's Day",
    mindset: "Gifting",
    value: "flowers, cards, beauty",
    start: new Date('2026-04-26'),
    end: new Date('2026-05-11'),
  },
  {
    name: "Father's Day",
    mindset: "Gifting",
    value: "tools, gadgets, cards",
    start: new Date('2026-05-31'),
    end: new Date('2026-06-21'),
  },
  {
    name: "4th of July",
    mindset: "Patriotic",
    value: "flags, fireworks, red-white-blue",
    start: new Date('2026-06-01'),
    end: new Date('2026-07-05'),
  },
];

const startTimeline = new Date('2025-07-01');
const endTimeline = new Date('2026-07-31');
const totalDays = differenceInDays(endTimeline, startTimeline);

export default function SeasonalCalendarPage() {
  const [view, setView] = useState('calendar');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">SEASONAL CALENDAR</h1>
      <p className="text-sm mb-4">
        Target amplifies seasonal events to help the guest prepare for special moments. Refer to the calendar below and plan your assortment and inventory accordingly.
      </p>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setView('calendar')}
          className={`flex items-center gap-2 px-4 py-2 rounded ${view === 'calendar' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
        >
          <CalendarDays size={16} /> Calendar View
        </button>
        <button
          onClick={() => setView('list')}
          className={`flex items-center gap-2 px-4 py-2 rounded ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
        >
          <List size={16} /> List View
        </button>
      </div>

      {view === 'calendar' ? (
        <div className="overflow-x-auto">
          <div className="grid grid-cols-[200px_1fr] gap-4">
            <div>
              {events.map((event, i) => (
                <div key={i} className="h-12 flex items-center text-blue-600 font-medium border-b">
                  <div>
                    <div>{event.name}</div>
                    <div className="text-xs text-gray-500">
                      {format(event.start, 'MMM d')} - {format(event.end, 'MMM d (yyyy)')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              {events.map((event, i) => {
                const left = (differenceInDays(event.start, startTimeline) / totalDays) * 100;
                const width = (differenceInDays(event.end, event.start) / totalDays) * 100;
                return (
                  <div
                    key={i}
                    className="absolute h-10 bg-cyan-700 rounded"
                    style={{ top: `${i * 48}px`, left: `${left}%`, width: `${width}%` }}
                  ></div>
                );
              })}
              <div className="absolute w-full border-t border-gray-300 top-0 z-[-1]">
                {/* Month Labels */}
                <div className="flex text-xs text-gray-400">
                  {Array.from({ length: 13 }, (_, i) => {
                    const date = new Date(startTimeline);
                    date.setMonth(date.getMonth() + i);
                    return (
                      <div key={i} className="w-[8.33%] text-center">
                        {format(date, 'MMM')}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border rounded p-4">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2">Event Name</th>
                <th className="p-2">Mindset</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
                <th className="p-2">Suggested Assortment</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-2 text-blue-600 font-medium">{event.name}</td>
                  <td className="p-2">{event.mindset}</td>
                  <td className="p-2">{format(event.start, 'MMM d, yyyy')}</td>
                  <td className="p-2">{format(event.end, 'MMM d, yyyy')}</td>
                  <td className="p-2">{event.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
