
export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* HERO */}
      <section className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Plan Your Visit</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          We know visiting a new church can be intimidating. We want to make your first visit as easy as possible.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: The Logistics */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Service Times & Location</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg text-2xl">📍</div>
                <div>
                  <strong className="block text-slate-900">Address</strong>
                  <p className="text-slate-600">
                    1717 Stafford Avenue<br/>
                    Fredericksburg, VA 22401
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=1717+Stafford+Ave,+Fredericksburg,+VA+22401" 
                    target="_blank"
                    className="text-blue-600 text-sm font-bold mt-2 inline-block hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg text-2xl">TX</div>
                <div>
                  <strong className="block text-slate-900">Weekly Schedule</strong>
                  <ul className="text-slate-600 text-sm space-y-2 mt-2">
                    <li><span className="font-bold w-24 inline-block">Sundays:</span> 9:30 AM Bible Study</li>
                    <li><span className="font-bold w-24 inline-block"></span> 10:30 AM Worship Service</li>
                    <li><span className="font-bold w-24 inline-block">Wednesdays:</span> 6:30 PM Midweek Study</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-6">
              Have a question before you come? Need prayer? We&lsquo;d love to hear from you.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-slate-700">
                <span>📞</span> (540) 368-8050
              </p>
              <p className="flex items-center gap-3 text-slate-700">
                <span>✉️</span> <a href="mailto:info@kingdombaptist.com" className="hover:text-blue-600">info@kingdombaptist.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The "Connection Card" */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Digital Connection Card</h2>
            <p className="text-slate-500 text-sm mt-2">
              Let us know you&lsquo;re coming or send a message to Pastor Jonathan.
            </p>
          </div>

          {/* NOTE: Since we don't have a backend yet, we use a simple "mailto" form.
            This opens the user's email client with the message pre-filled.
            It is the robust, "no-code" solution for today.
          */}
          <form 
            action="mailto:info@kingdombaptist.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
              <input type="text" name="name" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input type="email" name="email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
              <textarea name="message" rows={4} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="I'm planning to visit this Sunday..."></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
            <p className="text-xs text-center text-slate-400 mt-2">
              This will open your email app to send the message.
            </p>
          </form>
        </div>

      </div>

      {/* MAP EMBED */}
      <div className="w-full h-96 bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.6669926442686!2d-77.48767968466645!3d38.28784497966904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c20573e8e7c1%3A0x6d80840509657053!2s1717%20Stafford%20Ave%2C%20Fredericksburg%2C%20VA%2022401!5e0!3m2!1sen!2sus!4v1649104598000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}