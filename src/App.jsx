import { useState } from "react";
import * as images from "./assets";
import { Card1 } from "./components/Card1";
import { Section1 } from "./components/Section1";
import { Testimonial } from "./components/testimonial";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Card2 } from "./components/Card2";
import Video from "./components/Video";

function App() {
  const [highlightedEvents, setHighlightedEvents] = useState([
    { id: 1, image: images.kilimanjaro, title: "Kilimanjaro" },
    { id: 2, image: images.madagascar, title: "Madagascar" },
    { id: 3, image: images.capeTown, title: "Cape Town" },
  ]);

  const [snowTreks, setSnowTreks] = useState([
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
    { id: 4, title: "ATLAS", location: "Atlas Trek", image: images.atlas },
  ]);

  const [summerEvents, setSummerEvents] = useState([
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
  ]);

  const [epicAdventure, setEpicAdventure] = useState([
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
    { id: 3, title: "BOTSWANA", location: "Botswana", image: images.botswana },
  ]);

  const [specialEvents, setSpecialEvents] = useState([
    { id: 1, title: "HUNTING", location: "Hunting", image: images.hunting },
    {
      id: 2,
      title: "TRAINING CAMP",
      location: "Training Camp",
      image: images.trainingCamp,
    },
  ]);



  const [youTubeVideos, setYouTubeVideos] = useState([
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
  ]);

  return (
    <div className="bg-white">
      <Header />
      <Section1 />

      {/* Highlighted Events */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
          Highlighted Events
        </p>
        <div className="flex overflow-x-auto space-x-4 p-2 scroll-smooth">
          {highlightedEvents.map((event) => (
            <Card1 key={event.id} image={event.image} title={event.title} />
          ))}
        </div>
      </div>

      {/* Snow Treks */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Snow Treks</p>
        <div className="flex overflow-x-auto space-x-4 p-2 scroll-smooth">
          {snowTreks.map((event) => (
            <Card2
              key={event.id}
              image={event.image}
              title={event.title}
              location={event.location}
            />
          ))}
        </div>
      </div>

      {/* Summer Events */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Summer Events
        </p>
        <p className="mb-4 md:mb-8 bg-darkBrown">
          Join our exciting range of summer activities
        </p>
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth">
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
        </div>
      </div>
      {/* Epic Adventures */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Epic Adventure
        </p>
        <p className="mb-4 md:mb-8 bg-darkBrown">
          Push your limits with our most thrilling outdoor challenges.
        </p>
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth">
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
        </div>
      </div>
      {/* Special Events */}
      <div className="p-4 md:p-8">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Special Events
        </p>
        <p className="mb-4 md:mb-8 bg-darkBrown">
          Join us for unique, limited-time gatherings that celebrate remarkable
          occasions
        </p>
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth">
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
        </div>
      </div>
      {/* YouTube Videos */}
      <div className="p-4 md:p-8 bg-red-100">
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 bg-brownish">
          Experience Yourself
        </p>
        <p className="mb-4 md:mb-8 text-black">
          Exclusive footage from our camps
        </p>
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-8 p-2 scroll-smooth">
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
        </div>
      </div>
      {/* Testimonials */}
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default App;