import { getSermons, Sermon } from '@/lib/baserow';

// Helper to get the video ID so we can embed it
function getYoutubeEmbedUrl(url: string) {
  try {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return null;
  }
}

export default async function MediaPage() {
  let sermons: Sermon[] = [];

  try {
    sermons = await getSermons();
  } catch (e) {
    console.error("Failed to fetch sermons", e);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Sermon Archive</h1>
        <p className="text-slate-300">Catch up on past messages.</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => {
            const embedUrl = getYoutubeEmbedUrl(sermon.Video_URL);
            
            return (
              <div key={sermon.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                {/* Video Player */}
                <div className="aspect-video bg-slate-100">
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      No Video Available
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {sermon.Title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between text-sm text-slate-500">
                    <span>{new Date(sermon.Date).toLocaleDateString()}</span>
                    <span>{typeof sermon.Speaker === 'object' ? sermon.Speaker.value : sermon.Speaker}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {sermons.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No sermons found. Check your Baserow database!
          </div>
        )}
      </div>
    </div>
  );
}