// src/app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* HERO */}
      <section className="bg-white border-b border-gray-200 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Kingdom Baptist</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are a community of believers in Fredericksburg, Virginia, committed to Bible-based preaching, 
          authentic worship, and making disciples.
        </p>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center uppercase tracking-widest">Our Leadership</h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gray-200 min-h-[300px] relative">
            {/* Pastor Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">Pastor Jonathan</div>
          </div>
          <div className="p-8 md:w-2/3 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900">Jonathan Williams</h3>
            <p className="text-blue-600 font-medium mb-4">Senior Pastor</p>
            <p className="text-gray-600 leading-relaxed">
              Pastor Jonathan has served KBC since [Year]. He has a passion for expository preaching 
              and seeing families strengthened by the Gospel. He and his wife reside in Fredericksburg.
            </p>
          </div>
        </div>
      </section>

      {/* BELIEFS (Accordion Style) */}
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
              The Holy Bible was written by men divinely inspired and is God's revelation of Himself to man. 
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