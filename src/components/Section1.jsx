import * as images from "../assets";
import { Users2, User, CalendarDays, Clock } from "lucide-react";
import "../App.css";
export function Section1() {
  return (
    <>
      <div
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${images.background})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 text-left">
          <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
          <h2 className="text-5xl md:text-6xl font-bold mt-2">Nature</h2>
        </div>

        {/* Statistics Section */}
        <div className="absolute bottom-0 left-0 p-6 z-10 text-gray-200">
          <p className="text-lg mb-4">India’s Largest Trekking Organization</p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Users2, text: "2,15,000+ Participants" },
              { icon: User, text: "2,750+ Volunteers" },
              { icon: CalendarDays, text: "68+ Events" },
              { icon: Clock, text: "1 Year" },
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
