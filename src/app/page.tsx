import { getSermons, getEvents } from '@/lib/baserow';
import Link from 'next/link';

export default async function Home() {
  // Parallel data fetching (faster!)
  const [sermons, events] = await Promise.all([getSermons(), getEvents()]);
  
  const latestSermon = sermons[0];
  const upcomingEvents = events.slice(0, 3); // Only show top 3

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header / Navbar */}
      <header className="bg-blue-900 text-white p-6 pb-12">
        <h1 className="text-2xl font-bold tracking-tight">Kingdom Baptist</h1>
        <p className="text-blue-200 text-sm">Welcome to worship!</p>
      </header>

      <div className="px-4 -mt-6 space-y-6">
        
        {/* 1. The "Featured" Card (Latest Sermon) */}
        {latestSermon && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-1 bg-red-500 w-full" /> {/* Accent Strip */}
            <div className="p-5">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Latest Message</span>
              <h2 className="text-xl font-bold text-gray-900 mt-1">{latestSermon.Title}</h2>
              <p className="text-gray-500 text-sm mt-1">
                {new Date(latestSermon.Date).toLocaleDateString()} • {typeof latestSermon.Speaker === 'string' ? latestSermon.Speaker : latestSermon.Speaker?.value}
              </p>
              
              <div className="mt-4 flex gap-3">
                 {/* Only show button if URL exists */}
                {latestSermon.Video_URL && (
                  <a href={latestSermon.Video_URL} className="flex-1 bg-gray-900 text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
                    Watch Now
                  </a>
                )}
                <button className="flex-1 bg-gray-100 text-gray-700 text-center py-2.5 rounded-lg text-sm font-semibold">
                  Notes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Upcoming Events List */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 px-1">Coming Up</h3>
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
              {/* Date Badge */}
              <div className="flex flex-col items-center bg-blue-50 text-blue-800 px-3 py-2 rounded-lg min-w-[60px]">
                <span className="text-xs font-bold uppercase">{new Date(event.Date).toLocaleString('default', { month: 'short' })}</span>
                <span className="text-xl font-bold leading-none">{new Date(event.Date).getDate()}</span>
              </div>
              
              {/* Info */}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{event['Event Name']}</h4>
                <p className="text-xs text-gray-500 line-clamp-1">{event.Description}</p>
              </div>
            </div>
          ))}
          
          {upcomingEvents.length === 0 && (
            <p className="text-gray-500 italic p-4 text-center">No upcoming events scheduled.</p>
          )}
        </div>

        {/* 3. The "Connect" Call to Action */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-center space-y-3">
          <h3 className="font-bold text-blue-900">New Here?</h3>
          <p className="text-sm text-blue-700">We'd love to get to know you and your family.</p>
          <Link href="/connect" className="block w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
            Fill out Connection Card
          </Link>
        </div>

      </div>
    </main>
  );
}