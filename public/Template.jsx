import * as images from "../assets";
import { Users2, User, CalendarDays, Clock } from "lucide-react";
import "../App.css";

export function LandingPage() {
  return (
    <>
      {/* Fullscreen Background Section */}
      <div
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${images.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6">
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
            <h2 className="text-5xl md:text-6xl font-bold mt-2">Nature</h2>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <div className="flex flex-col space-y-2 text-white">
            <p className="text-lg text-gray-200 mb-4">
              India’s Largest Trekking Organization
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center gap-2">
                <Users2 size={20} />
                <span>2,15,000+ Participants</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>2,750+ Volunteers</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={20} />
                <span>68+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>1 Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Snow Treks Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Highlighted Events
          </h2>
          <p className="mb-8 text-gray-600">
            Recommended camps by our instructors
          </p>
          {/* Add your event cards or other content here */}
        </div>
        {/* Snow Treks Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Snow Treks</h2>
          <p className="mb-8 text-gray-600">
            Experience the magic of winter landscapes with our guided snow treks
          </p>
          {/* Add your event cards or other content here */}
        </div>

        {/* Summer Events Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Summer Events
          </h2>
          <p className="mb-8 text-gray-600">
            Join our exciting range of summer activities
          </p>
          {/* Add your event cards or other content here */}
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Epic Adventure
          </h2>
          <p className="mb-8 text-gray-600">
            Push your limits with our most thrilling outdoor challenges.
          </p>
          {/* Add your event cards or other content here */}
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Special Events
          </h2>
          <p className="mb-8 text-gray-600">
            Join us for unique, limited-time gatherings that celebrate
            remarkable occasions
          </p>
          {/* Add your event cards or other content here */}
        </div>
        <div className="p-8 bg-lightRed">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Experience yourself
          </h2>
          <p className="mb-8 text-gray-600">Exclusive footage from our camps</p>
          {/* Add your event cards or other content here */}
        </div>
        <div className="p-8 bg-gray-50">
          <div className="container mx-auto">
            {/* Heading and Subheading */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why people ❤️ Invincible
              </h2>
              <p className="text-lg text-gray-600">
                Experience the best with us
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Milton Austin
                    </h3>
                    <p className="text-gray-600">Sales Manager, ABC</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800">Annie</h3>
                  <p className="text-gray-600">Head of Sales, ABC</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Sandra
                  </h3>
                  <p className="text-gray-600">Head of Sales, ABC</p>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★★</div>
                <p className="text-gray-600">
                  This trekking organization is excellent. Their costs are
                  minimal due to their NGO’s non-profit efforts. You can have
                  the experience of trekking at the lowest cost with basic
                  amenities and the best available trek leaders. The best part
                  is the food they provide during the trek. Their cooks are the
                  best I have experienced so far with different organizations.
                  The food they serve is healthy and a balanced diet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
