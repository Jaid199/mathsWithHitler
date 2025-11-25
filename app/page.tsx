// import { Header } from "@/components/header";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
//       <Header />

//       {/* Hero Section */}
//       <main className="pt-32 pb-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
//             Become a{" "}
//             <span className="relative inline-block">
//               <span className="text-orange-500 font-handwriting">Math</span>
//             </span>{" "}
//             Geek,
//           </h1>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             learn mathematics with{" "}
//             <span className="text-orange-500 italic">Hitler</span>
//           </h2>

//           <p className="text-lg text-gray-600 mb-12">
//             Free online gamethetics learning tool for 15 to 16 year olds.
//           </p>

//           {/* Video placeholder - you can add your video here */}
//           <div className="w-full aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl shadow-xl flex items-center justify-center border-4 border-orange-200">
//             <div className="text-center">
//               <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-400 flex items-center justify-center">
//                 <svg
//                   className="w-10 h-10 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="/vids/intro.mov" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
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
            learn mathematics with{" "}
            <span className="text-orange-500 italic">fun</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Free online gamified learning tool for 15 to 16 year olds.
          </p>
          {/* Video player */}
          <div className="w-full aspect-video rounded-2xl shadow-xl overflow-hidden border-4 border-orange-200">
            <video
              className="w-full h-full object-cover"
              controls
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fed7aa;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fef3c7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad)'/%3E%3Ccircle cx='400' cy='225' r='60' fill='%23fb923c' opacity='0.8'/%3E%3Cpolygon points='380,205 380,245 420,225' fill='white'/%3E%3C/svg%3E"
            >
              <source src="/vids/intro.mov" type="video/quicktime" />
              <source src="/vids/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}
