import { getSermons, getEvents, Sermon, ChurchEvent } from '@/lib/baserow';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  // 1. Typed Variables for Safety
  let latestSermon: Sermon | null = null;
  let upcomingEvents: ChurchEvent[] = [];

  // 2. Data Fetching
  try {
    const [sermons, events] = await Promise.all([getSermons(), getEvents()]);
    latestSermon = sermons[0] || null;
    upcomingEvents = events.slice(0, 3);
  } catch (e) {
    console.error("Baserow connection failed:", e);
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Note: Navbar is handled in layout.tsx */}

      {/* --- HERO SECTION --- */}
      <section className="relative bg-blue-900 text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Welcome Home
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            &ldquo;To love the Lord our God with all of our heart, soul, mind and strength.&ldquo;
          </p>
          
          {/* Critical Info Badges */}
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm font-medium">
            <div className="bg-blue-800/50 backdrop-blur border border-blue-700 px-6 py-2 rounded-full flex items-center gap-2">
              <span>📍 1717 Stafford Ave, Fredericksburg</span>
            </div>
            <div className="bg-blue-800/50 backdrop-blur border border-blue-700 px-6 py-2 rounded-full flex items-center gap-2">
              <span>🕙 Sundays @ 10:30 AM</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC DASHBOARD (The "App" Part) --- */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: LATEST SERMON (Takes up 2 columns on desktop) */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-slate-900 w-full md:w-1/3 min-h-[200px] flex items-center justify-center text-slate-500">
               {/* Placeholder for Sermon Thumbnail */}
               <span className="text-6xl">▶</span>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <div className="uppercase tracking-wider text-xs font-bold text-blue-600 mb-2">Latest Message</div>
              <h2 className="text-2xl font-bold mb-2">
                {latestSermon ? latestSermon.Title : "Loading Sermon..."}
              </h2>
              <p className="text-slate-500 mb-6">
                {latestSermon ? `${new Date(latestSermon.Date).toLocaleDateString()} • ${typeof latestSermon.Speaker === 'object' ? latestSermon.Speaker.value : latestSermon.Speaker}` : "Please wait..."}
              </p>
              <div className="flex gap-3">
                {latestSermon?.Video_URL && (
                  <a href={latestSermon.Video_URL} target="_blank" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    Watch Now
                  </a>
                )}
                <button className="px-6 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition">
                  Notes
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: UPCOMING EVENTS (Takes up 1 column) */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
            <h3 className="text-lg font-bold border-b border-slate-100 pb-4 mb-4 flex justify-between items-center">
              <span>Happening Soon</span>
              <span className="text-xs font-normal text-blue-600 cursor-pointer">View All</span>
            </h3>
            <div className="space-y-4">
              {upcomingEvents.length > 0 ? upcomingEvents.map((event) => (
                <div key={event.id} className="flex gap-3 items-start">
                  <div className="bg-blue-50 text-blue-800 rounded-lg px-2.5 py-1 text-center min-w-[50px]">
                    <div className="text-xs font-bold uppercase">{new Date(event.Date).toLocaleString('default', { month: 'short' })}</div>
                    <div className="text-lg font-bold leading-none">{new Date(event.Date).getDate()}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm leading-tight">{event['Event Name']}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{event.Description}</p>
                  </div>
                </div>
              )) : (
                <div className="text-slate-400 text-sm text-center py-4">No upcoming events found.</div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* --- CONNECT SECTION (2 Cards Only) --- */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 text-center">
          
          {/* Pathway 1: About/Expect */}
          <Link href="/about" className="group block">
            <div className="aspect-video bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100 group-hover:scale-105 transition duration-500">Image: Open Bible</div>
            </div>
            <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-700">What to Expect</h3>
            <p className="text-slate-500 text-sm mt-2">A simple, bible-focused service.</p>
          </Link>

{/* Pathway 2: Connect */}
          <Link href="/connect" className="group block">
            <div className="aspect-video bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
              {/* REAL IMAGE: Use the church building here */}
<Image 
    src="/church-exterior.jpg" 
    alt="Kingdom Baptist Exterior" 
    fill
    className="object-cover group-hover:scale-105 transition duration-500"
  />
              
              {/* Optional: Add a subtle gradient so it looks more 'pro' */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-700">Plan a Visit</h3>
            <p className="text-slate-500 text-sm mt-2">1717 Stafford Avenue</p>
          </Link>

        </div>
      </section>

      {/* Note: Footer is handled in layout.tsx */}

    </div>
  );
}