export default function GivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Trust Header */}
      <section className="bg-blue-50 py-20 px-4 text-center border-b border-blue-100">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Giving</h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto leading-relaxed">
          &quot;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&quot;
          <span className="block text-sm mt-2 font-bold opacity-75">— 2 Corinthians 9:7</span>
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Option 1: Online */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            💻
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Give Online</h2>
          <p className="text-slate-600 mb-8">
            Simple, secure, and instant. You can set up recurring giving or make a one-time donation.
          </p>
          <a 
            href="#" // <--- PASTE THEIR PAYPAL/TITHE.LY LINK HERE LATER
            className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-blue-200 shadow-xl"
          >
            Give Now Securely →
          </a>
          <p className="text-xs text-slate-400 mt-4">
            *You will be redirected to our secure payment provider.
          </p>
        </div>

        {/* Option 2: In Person / Mail */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            ✉️
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">By Mail</h2>
          <p className="text-slate-600 mb-6 text-center">
            Prefer to write a check? You can mail your tithe directly to the church office.
          </p>
          
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center font-mono text-sm text-slate-600">
            <strong>Kingdom Baptist Church</strong><br/>
            Attn: Finance<br/>
            1717 Stafford Avenue<br/>
            Fredericksburg, VA 22401
          </div>

          <div className="mt-8 text-center">
            <h3 className="font-bold text-slate-900">In Person</h3>
            <p className="text-sm text-slate-500 mt-1">
              Offering boxes are located at the back of the sanctuary during every Sunday service.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}