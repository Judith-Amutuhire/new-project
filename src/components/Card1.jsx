import "../App.css";
import {
  BusFront,
  UtensilsCrossed,
  Tent,
  Footprints,
  ClipboardPlus,
} from "lucide-react";

export function Card1(props) {
  return (
    <div className="flex flex-col w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-full">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-[160px] left-0 right-0 p-4">
          <h3 className="text-2xl font-bold font-serif text-white font-loader">
            {props.title}
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-6 items-center">
          <BusFront className="text-white w-6 h-6" />
          <UtensilsCrossed className="text-white w-6 h-6" />
          <Tent className="text-white w-6 h-6" />
          <Footprints className="text-white w-6 h-6" />
          <ClipboardPlus className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
