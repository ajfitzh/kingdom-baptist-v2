export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Our Mission</h4>
        <blockquote className="font-serif italic text-xl text-slate-300 mb-8">
          &ldquo;To demonstrate that love by making disciples of all nations for His kingdom and glory.&quot;
        </blockquote>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm mt-12 pt-12 border-t border-slate-800">
          <div>
            <strong className="block text-white mb-1">Visit Us</strong>
            1717 Stafford Avenue<br/>Fredericksburg, VA 22401
          </div>
          <div>
            <strong className="block text-white mb-1">Contact</strong>
            (540) 368-8050 <br/>
            info@kingdombaptist.com
          </div>
        </div>
        
        <div className="mt-12 text-xs text-slate-600">
          © {new Date().getFullYear()} Kingdom Baptist Church. Built with ❤️.
        </div>
      </div>
    </footer>
  );
}