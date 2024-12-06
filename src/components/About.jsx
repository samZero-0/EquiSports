import { useState } from 'react';
import { Play, Clock } from 'lucide-react';
import { RiTeamFill } from "react-icons/ri";
import { IoIosFootball } from "react-icons/io";
export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="  mb-14">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center ">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                Professional sports products
              </h1>
              <p className="text-gray-600 dark:text-white">
                We specialize in a variety of professional sports products.
              </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
              {/* Feature 1 */}
              <div className="bg-sky-500 dark:bg-blue-900 rounded-xl p-6 text-white">
              <RiTeamFill className="w-8 h-8 mb-4"></RiTeamFill>
                <h3 className="font-semibold mb-2">A friendly team works for you</h3>
                <p className="text-sm text-sky-100">
                  Some team members will help your team, while others are trying to support.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-sky-500 dark:bg-blue-900 rounded-xl p-6 text-white">
                    <IoIosFootball className="w-8 h-8 mb-4"></IoIosFootball>
                <h3 className="font-semibold mb-2">Professional grade equipment</h3>
                <p className="text-sm text-sky-100">
                  Our equipment not only meets expectations but also surpasses them.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-sky-500 dark:bg-blue-900 rounded-xl p-6 text-white">
                <Clock className="w-8 h-8 mb-4 " />
                <h3 className="font-semibold mb-2">Time-tested product manufacturers</h3>
                <p className="text-sm text-sky-100">
                  The best products from manufacturers deliver reliable goods.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Video Section */}
<div className="relative rounded-2xl overflow-hidden lg:top-14">
  {isPlaying ? (
    <iframe
      width="100%"
      height="400"
      src="https://www.youtube.com/embed/xuas_Yc7VNQ?autoplay=1"  
      title="Sports Training Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-[400px] object-cover"
    ></iframe>
  ) : (
    <>
      <img 
        src="https://img.youtube.com/vi/xuas_Yc7VNQ/maxresdefault.jpg"  
        alt="Sports Training"
        className="w-full h-[400px] object-cover"
      />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-black rounded-full p-4 shadow-lg hover:bg-white 
                   transition-all duration-300 group"
      >
        <Play className="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform" />
      </button>
    </>
  )}
</div>

        </div>
      </div>
    </div>
  );
}