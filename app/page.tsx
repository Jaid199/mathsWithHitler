import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Header />

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Become a{" "}
            <span className="relative inline-block">
              <span className="text-orange-500 font-handwriting">Math</span>
            </span>{" "}
            Geek,
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            learn mathematics for{" "}
            <span className="text-orange-500 italic">Fun</span>
          </h2>

          <p className="text-lg text-gray-600 mb-12">
            Free online gamethetics learning tool for 15 to 16 year olds.
          </p>

          {/* Video placeholder - you can add your video here */}
          <div className="w-full aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl shadow-xl flex items-center justify-center border-4 border-orange-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-400 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Video coming soon</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
