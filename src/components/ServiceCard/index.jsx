import React from "react";


const serviceList = [
  {
    id: 1,
    imgUrl:
      "https://www.pngall.com/wp-content/uploads/5/Construction-Maintenance.png",
    title: "Maintenance",
    description:
      "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    id: 2,
    imgUrl:
      "https://www.pngall.com/wp-content/uploads/5/Construction-Maintenance.png",
    title: "Electrical",
    description:
      "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
  {
    id: 3,
    imgUrl:
      "https://www.pngall.com/wp-content/uploads/5/Construction-Maintenance.png",
    title: "Plumbing",
    description:
      "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
  },
];

const ServiceCard = () => {
  return (
    <div>
      <h1 className="font-sans text-3xl font-bold text-black text-center pt-10 pb-10">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {serviceList.map((eachItem) => (
          <div
            key={eachItem.id}
            className="bg-white  shadow-lg text-center p-4 group hover:bg-orange-500 transition-colors duration-300"
          >
            <div className="flex justify-center mb-5">
              <img
                src={eachItem.imgUrl}
                alt={eachItem.title}
                className="w-16 h-16"
              />
            </div>
            <div className="px-6">
              <h1 className="text-[26px] font-semibold text-black mb-3 group-hover:text-white transition-colors duration-300">
                {eachItem.title}
              </h1>
              <p className="text-[16px] text-gray-600 text-center group-hover:text-white transition-colors duration-300">
                {eachItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <button className="bg-blue-600 text-white shadow-lg shadow-blue-300 h-10 w-40  font-medium text-center text-base mt-7">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

