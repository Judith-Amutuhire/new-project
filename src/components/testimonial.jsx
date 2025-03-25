export function Testimonial(props) {
    return (
      <>
        <div className="flex flex-col w-80 h-30 rounded-lg justify-center bg-white p-6">
          <div className="flex items-center mb-4">
            <img
              src={props.image}
              alt={props.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {props.name}
              </h3>
              <p className="text-gray-600 text-sm">{props.role}</p>
            </div>
          </div>
        </div>
      </>
    );
  }