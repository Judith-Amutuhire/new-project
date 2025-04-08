import { useState } from 'react';
import { FaStar } from 'react-icons';

const testimonials = [
  {
    name: 'Milton Austin',
    role: 'Sales Manager, ABC',
    image: 'https://via.placeholder.com/100',
    rating: 5,
    testimonial:
      "This trekking organization is excellent. Their costs are minimal due to their NGO’s non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and a balan.",
  },
  {
    name: 'Annie',
    role: 'Head of Sales, ABC',
    image: 'https://via.placeholder.com/100',
    rating: 5,
    testimonial:
      'Amazing experience! The team was supportive and well-organized throughout. Highly recommend this for first-time trekkers.',
  },
  {
    name: 'Sandra',
    role: 'Head of Sales, ABC',
    image: 'https://via.placeholder.com/100',
    rating: 4,
    testimonial:
      'Very efficient service, and the food provided was very healthy and balanced. Will definitely book again.',
  },
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 md:px-8">
      <h2 className="text-xl text-[#8B3D6F] font-semibold mb-2">Why people ❤️ Invincible</h2>
      <h3 className="text-2xl font-bold mb-6">Experience the best with us</h3>
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-xl shadow p-4 md:p-6">
        <div className="md:w-1/3 space-y-4">
          {testimonials.map((person, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedIndex === index ? 'bg-white shadow-md' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{person.name}</p>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-2">
            <button
              onClick={handleNext}
              className="text-2xl text-gray-500 hover:text-gray-700"
            >
              ⬇️
            </button>
          </div>
        </div>
        <div className="md:w-2/3 mt-6 md:mt-0 md:pl-6">
          <div className="flex items-center mb-4">
            {[...Array(testimonials[selectedIndex].rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 mr-1" />
            ))}
          </div>
          <p className="text-gray-700 text-lg">
            {testimonials[selectedIndex].testimonial}
          </p>
        </div>
      </div>
    </section>
  );
}
