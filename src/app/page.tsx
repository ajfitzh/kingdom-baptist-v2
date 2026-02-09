import { getSermons } from '@/lib/baserow';

export default async function Home() {
  const sermons = await getSermons();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Latest Sermons</h1>

        <div className="space-y-4">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{sermon.Title}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(sermon.Date).toLocaleDateString()} • {typeof sermon.Speaker === 'object' ? sermon.Speaker.value : sermon.Speaker}
                  </p>
                </div>
                {sermon.Video_URL && (
                  <a
                    href={sermon.Video_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                  >
                    Watch
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}