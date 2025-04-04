import * as images from "./assets";
import { Card1 } from "./components/Card1";
import { Section1 } from "./components/Section1";
import { Testimonial } from "./components/testimonial";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Card2 } from "./components/Card2";
import Video from "./components/Video";
import { useState, useRef } from "react";

function App() {
  const highlightedEvents = [
    { id: 1, image: images.kilimanjaro, title: "Kilimanjaro" },
    { id: 2, image: images.madagascar, title: "Madagascar" },
    { id: 3, image: images.capeTown, title: "Cape Town" },
  ];

  const snowTreks = [
    {
      id: 1,
      title: "KILIMANJARO",
      location: "Killmanjaro Trek",
      image: images.kilimanjaro,
    },
    {
      id: 2,
      title: "MOUNT KENYA",
      location: "Mount Kenya Trek",
      image: images.kenya,
    },
    {
      id: 3,
      title: "RWENZORI",
      location: "Rwenzori Trek",
      image: images.rwenzori,
    },
    {
      id: 4,
      title: "ATLAS",
      location: "Atlas Trek",
      image: images.atlas,
    },
  ];

  const summerEvents = [
    {
      id: 1,
      title: "KRUGER PARK",
      location: "Kruger Park",
      image: images.kruger,
    },
    {
      id: 2,
      title: "WESTERN CAPE",
      location: "Western Cape",
      image: images.westernCape,
    },
    {
      id: 3,
      title: "ADDO PARK",
      location: "Addo Park",
      image: images.addoPark,
    },
    {
      id: 4,
      title: "MASAI MARA",
      location: "Masai Mara",
      image: images.masaiMara,
    },
  ];

  const epicAdventure = [
    {
      id: 1,
      title: "KILIMANJARO",
      location: "Kilimanjaro Trek",
      image: images.kilimanjaro,
    },
    {
      id: 2,
      title: "HWANGE PARK",
      location: "Hwange Park",
      image: images.hwangePark,
    },
    {
      id: 3,
      title: "BOTSWANA",
      location: "Botswana",
      image: images.botswana,
    },
  ];

  const specialEvents = [
    {
      id: 1,
      title: "HUNTING",
      location: "Hunting",
      image: images.hunting,
    },
    {
      id: 2,
      title: "TRAINING CAMP",
      location: "Training Camp",
      image: images.trainingCamp,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Milton Austin",
      role: "Sales Manager, ABC",
      image: images.milton,
    },
    {
      id: 2,
      name: "Annie",
      role: "Head of Sales, ABC",
      image: images.annie,
    },
    {
      id: 3,
      name: "Sandra",
      role: "Head of Sales, ABC",
      image: images.sandra,
    },
  ];

  const youTubeVideos = [
    {
      id: 1,
      image: images.youTube1,
      link: "https://youtu.be/s3G2kLruJJo?si=JK-25YAbCClAlb0p",
    },
    {
      id: 2,
      image: images.youTube2,
      link: "https://youtu.be/366ooN49spY?si=R631QjO5Qqkz5OVu",
    },
    {
      id: 3,
      image: images.youTube3,
      link: "https://youtu.be/qYu7L08GV0k?si=ti8DD2NFHZiqpD-P",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <Header />
        <Section1 />

        {/* Highlighted Events */}
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-brownish">
            Highlighted Events
          </p>
          <p className="mb-4 md:mb-8 text-darkBrown">
            Recommended camps by our instructors
          </p>
          <div className="relative">
            <div
              ref={highlightedRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth"
            >
              {highlightedEvents.map((event) => (
                <div key={event.id} className="flex-none w-64 md:w-80">
                  <Card1 image={event.image} title={event.title} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(highlightedRef, "left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(highlightedRef, "right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Snow Treks */}
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-brownish">
            Snow Treks
          </p>
          <p className="mb-4 md:mb-8 text-darkBrown">
            Experience the magic of winter landscapes with our guided snow treks
          </p>
          <div className="relative">
            <div
              ref={snowTreksRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth"
            >
              {snowTreks.map((event) => (
                <div key={event.id} className="flex-none w-64 md:w-72">
                  <Card2
                    image={event.image}
                    title={event.title}
                    location={event.location}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(snowTreksRef, "left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(snowTreksRef, "right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Summer Events */}
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-brownish">
            Summer Events
          </p>
          <p className="mb-4 md:mb-8 text-darkBrown">
            Join our exciting range of summer activities
          </p>
          <div className="relative">
            <div
              ref={summerEventsRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth"
            >
              {summerEvents.map((event) => (
                <div key={event.id} className="flex-none w-64 md:w-72">
                  <Card2
                    image={event.image}
                    title={event.title}
                    location={event.location}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(summerEventsRef, "left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(summerEventsRef, "right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Epic Adventures */}
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-brownish">
            Epic Adventure
          </p>
          <p className="mb-4 md:mb-8 text-gray-600">
            Push your limits with our most thrilling outdoor challenges.
          </p>
          <div className="relative">
            <div
              ref={epicAdventureRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth"
            >
              {epicAdventure.map((event) => (
                <div key={event.id} className="flex-none w-64 md:w-72">
                  <Card2
                    image={event.image}
                    title={event.title}
                    location={event.location}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(epicAdventureRef, "left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(epicAdventureRef, "right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Special Events */}
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-brownish">
            Special Events
          </p>
          <p className="mb-4 md:mb-8 text-darkBrown">
            Join us for unique, limited-time gatherings that celebrate
            remarkable occasions
          </p>
          <div className="relative">
            <div
              ref={specialEventsRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth"
            >
              {specialEvents.map((event) => (
                <div key={event.id} className="flex-none w-64 md:w-72">
                  <Card2
                    image={event.image}
                    title={event.title}
                    location={event.location}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(specialEventsRef, "left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(specialEventsRef, "right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* YouTube Videos */}
        <div className="p-4 md:p-8 bg-red-100">
          <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-brownish">
            Experience Yourself
          </p>
          <p className="mb-4 md:mb-8 text-black">
            Exclusive footage from our camps
          </p>
          <div className="relative">
            <div
              ref={youTubeVideosRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth"
            >
              {youTubeVideos.map((video) => (
                <div key={video.id} className="flex-none w-64 md:w-72">
                  <Video
                    image={video.image}
                    link={video.link}
                    altText={video.title || "YouTube video thumbnail"}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(youTubeVideosRef, "left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(youTubeVideosRef, "right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Testimonials */}
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-brownish">
            Why people <span className="text-red-500">❤️</span> Invincible
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-8 text-black">
            Experience the best with us
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Testimonial Cards */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              {testimonials.map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              ))}
            </div>

            {/* Star Rating Section */}
            <div className="w-full md:w-1/2 mt-0 md:mt-6">
              <div className="text-yellow-500 text-xl mb-2 flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                This trekking organization is excellent. Their costs are minimal
                due to their NGO's non-profit efforts. You can have the
                experience of trekking at the lowest cost with basic amenities
                and the best available trek leaders. The best part is the food
                they provide during the trek. Their cooks are the best I have
                experienced so far with different organizations. The food they
                serve is healthy and a balanced diet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
