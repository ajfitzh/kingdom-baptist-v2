// src/app/ministries/page.tsx
import Link from 'next/link';

export default function Ministries() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ministries for Every Age</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          From the nursery to the empty nesters, there is a place for you to grow here.
        </p>
      </section>

      {/* 1. KINGDOM KIDS */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="text-blue-600 font-bold uppercase tracking-wider mb-2">Nursery - 5th Grade</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kingdom Kids</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We provide a safe, fun, and Gospel-centered environment for your children. 
            Our nursery is staffed by background-checked volunteers, and our elementary 
            program "The Gospel Project" walks kids through the Bible every 3 years.
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex items-center gap-2">✓ Safe Check-in System</li>
            <li className="flex items-center gap-2">✓ Background-Checked Staff</li>
            <li className="flex items-center gap-2">✓ Age-Appropriate Worship</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 bg-gray-200 rounded-2xl aspect-video relative overflow-hidden">
          {/* Placeholder for Kids Image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image: Kids Ministry</div>
        </div>
      </section>

      {/* 2. T.A.S.K. STUDENTS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-2xl aspect-video relative overflow-hidden">
            {/* Placeholder for Youth Image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image: Youth Group</div>
          </div>
          <div>
            <div className="text-blue-600 font-bold uppercase tracking-wider mb-2">Grades 6-12</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">T.A.S.K. Student Ministry</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Teens Actively Serving the Kingdom." Our student ministry isn't just about pizza and games 
              (though we have those too!). We focus on deep discipleship, apologetics, and 
              training the next generation of leaders.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <strong className="block text-gray-900">Youth Night</strong>
              <span className="text-gray-600">Wednesdays @ 6:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADULTS (Men & Women Combined) */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Adult Discipleship</h2>
          <p className="text-gray-500 mt-2">Iron sharpening iron.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Men's Card */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Men's Ministry</h3>
            <p className="text-gray-600 mb-6">
              Monthly prayer breakfasts and Bible studies designed to help men lead their families and serve their community.
            </p>
            <Link href="/events" className="text-blue-600 font-semibold hover:underline">See Upcoming Events →</Link>
          </div>

          {/* Women's Card */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Women's Ministry</h3>
            <p className="text-gray-600 mb-6">
              A community of women growing together through the Word. We host seasonal retreats, book clubs, and weekly prayer groups.
            </p>
            <Link href="/events" className="text-blue-600 font-semibold hover:underline">See Upcoming Events →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}