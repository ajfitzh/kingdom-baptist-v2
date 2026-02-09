export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* HERO */}
      <section className="bg-white border-b border-gray-200 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">A Church That Feels Like Family</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are a close-knit community in Fredericksburg committed to the Bible, 
          authentic discipleship, and caring for one another. You won&lsquo;t get lost in the crowd here.
        </p>
      </section>

      {/* WEEKLY RHYTHMS (Now with 4 Items) */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center uppercase tracking-widest">
          Our Weekly Rhythms
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1. Sunday School */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Sundays @ 9:30 AM • Bible Study</h3>
            <p className="text-gray-600">
              Before service, we gather for coffee and a deep dive into Scripture. 
              This is where we share life, pray for each other, and grow in our understanding of God&lsquo;s Word.
            </p>
          </div>

          {/* 2. Worship */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Sundays @ 10:30 AM • Worship</h3>
            <p className="text-gray-600">
              Our main gathering focuses on expository preaching—going verse by verse through the Bible—and sincere worship.
            </p>
          </div>

          {/* 3. Wednesday Night */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Wednesdays @ 6:30 PM • Midweek Study</h3>
            <p className="text-gray-600">
              A casual midweek recharge. We meet for prayer and an informal study of the Bible. It&lsquo;s the perfect place to ask questions and go deeper.
            </p>
          </div>

          {/* 4. Community Meal */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-blue-500">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Monthly • Community Meal</h3>
            <p className="text-gray-600">
              We believe in feeding the hungry—body and soul. Once a month, we open our doors to serve a hot, homemade meal to our neighbors in need.
            </p>
          </div>
        </div>
      </section>

      {/* KIDS & YOUTH (The Honest Partnership Section) */}
      <section className="py-16 px-4 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Your Family</h3>
            <div className="space-y-6">
              <div>
                <strong className="block text-lg text-blue-900">Kingdom Kids</strong>
                <p className="text-gray-600">
                  We provide a safe, caring nursery environment during the service for infants and toddlers, 
                  allowing parents to focus on the sermon with peace of mind.
                </p>
              </div>
              <div>
                <strong className="block text-lg text-blue-900">Youth (Grades 6-12)</strong>
                <p className="text-gray-600">
                  We believe in the importance of teen fellowship. For youth group activities, 
                  we proudly partner with our friends at <strong>Temple Baptist Church</strong> to provide 
                  a vibrant community for middle and high schoolers.
                </p>
              </div>
            </div>
          </div>
          {/* Simple Image Placeholder */}
          <div className="bg-slate-100 rounded-xl aspect-square flex items-center justify-center text-slate-400">
            Image: Small Group
          </div>
        </div>
      </section>

      {/* BELIEFS ACCORDION */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">What We Believe</h2>
        <p className="text-center text-gray-500 mb-10">
          We affirm the Baptist Faith & Message 2000. Here are our core convictions:
        </p>

        <div className="space-y-4">
          <details className="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary className="font-bold text-gray-900 flex justify-between items-center list-none">
              <span>The Scriptures</span>
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The Holy Bible was written by men divinely inspired and is God&lsquo;s revelation of Himself to man. 
              It is a perfect treasure of divine instruction. It has God for its author, salvation for its end, 
              and truth, without any mixture of error, for its matter.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary className="font-bold text-gray-900 flex justify-between items-center list-none">
              <span>God</span>
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              There is one and only one living and true God. He is an intelligent, spiritual, and personal Being, 
              the Creator, Redeemer, Preserver, and Ruler of the universe.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary className="font-bold text-gray-900 flex justify-between items-center list-none">
              <span>Salvation</span>
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Salvation involves the redemption of the whole man, and is offered freely to all who accept 
              Jesus Christ as Lord and Saviour, who by His own blood obtained eternal redemption for the believer.
            </p>
          </details>
        </div>
        
        <div className="text-center mt-8">
          <a href="https://bfm.sbc.net/bfm2000/" target="_blank" className="text-sm text-gray-400 hover:text-blue-600 transition">
            Read the full Baptist Faith & Message 2000 →
          </a>
        </div>
      </section>

    </div>
  );
}