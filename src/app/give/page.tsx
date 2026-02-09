export default function GivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-blue-50 py-16 px-4 text-center border-b border-blue-100">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Grace Giving</h1>
        <p className="text-xl text-blue-800 max-w-2xl mx-auto leading-relaxed">
          &quot;When you give online you are deciding in advance to faithfully give. God wants the first part of our increase.&ldquo;
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: The "Why" (Advantages) */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Advantages to Giving Online
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <strong className="block text-gray-900">Simplicity</strong>
                <p className="text-sm text-gray-600">
                  It can be done anywhere. You won&apos;t need to send in an offering by mail when you’re on a trip.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">🔒</div>
              <div>
                <strong className="block text-gray-900">Security</strong>
                <p className="text-sm text-gray-600">
                  PayPal is a trusted name. Online giving is more secure than cash because an electronic gift can’t be lost or stolen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">🙏</div>
              <div>
                <strong className="block text-gray-900">Focus</strong>
                <p className="text-sm text-gray-600">
                  Instead of writing a check during the service, you can be fully focused on worship, knowing you have already given.
                </p>
              </div>
            </div>
          </div>

          {/* DEBT WARNING (Important!) */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-8">
            <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wide mb-1">
              A Note on Stewardship
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Kingdom Baptist Church promotes biblical stewardship through the avoidance of debt. 
              <strong> We do not want to encourage anyone to go into debt </strong> 
              and pay interest on gifts given to the church. Please use credit/debit cards responsibly.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The "How" (Donation Options) */}
        <div className="flex flex-col gap-6">
          
          {/* ONLINE OPTION */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-blue-600 font-bold">
              $
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Give Online</h2>
            <p className="text-gray-500 text-sm mb-6">
              Securely processed by PayPal.<br/>
              <span className="text-xs opacity-75">(Transaction fees: 1.99% + $0.49)</span>
            </p>
            
            {/* REAL LINK INSERTED HERE */}
            <a 
              href="https://www.paypal.com/donate/?hosted_button_id=JX5GL9LXK9X58" 
              target="_blank"
              className="block w-full bg-[#0070BA] hover:bg-[#003087] text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-200"
            >
              Donate via PayPal →
            </a>
          </div>

          {/* MAIL OPTION */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">By Mail</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Prefer to write a check? You can mail your tithe directly to the church office.
            </p>
            <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm text-gray-700 select-all">
              Kingdom Baptist Church<br/>
              1717 Stafford Avenue<br/>
              Fredericksburg, VA 22401
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}