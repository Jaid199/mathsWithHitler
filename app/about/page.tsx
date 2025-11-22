import { Header } from "@/components/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main content with top padding to account for fixed header */}
      <main className="pt-24 px-6 pb-12 max-w-7xl mx-auto">
        {/* About the application section */}
        <section className="mb-8 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About the application
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            This is an interactive educational web application designed for
            Grade 10 students using Adobe Animate. It blends visual learning
            with problem-solving by using animations to introduce geometry
            basics, perimeter/area, and real-world trigonometry applications.
            The application focuses on interactive exploration and immediate
            feedback to reinforce concepts, culminating in a dynamic,
            mixed-format assessment.
          </p>
        </section>

        {/* About the developers section */}
        <section className="bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            About the developers
          </h2>

          <div className="flex items-center justify-around gap-8">
            {/* Developer 1 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <Image
                  src="/cartoon-stick-figure-with-hijab.jpg"
                  alt="Junaidha"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Junaidha</h3>
            </div>

            {/* Developer 2 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <Image
                  src="/cartoon-stick-figure-with-hijab.jpg"
                  alt="Jaid"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Jaid</h3>
            </div>

            {/* Developer 3 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <Image
                  src="/cartoon-stick-figure-with-hijab.jpg"
                  alt="Amin"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Amin</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
