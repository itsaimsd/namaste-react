import { CDN_URL } from "../utils/constant";

const RestaurentCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
    areaName,
  } = resData?.info;

  return (
    <div className="res-card w-30 p-4 group relative">
      <div className="w-full max-w-sm p-0">
        <img
          className="w-full h-40 rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <h3 className="font-semibold text-md mt-2 truncate w-full block overflow-hidden whitespace-nowrap">
          {name}
        </h3>

        <div className="text-sm flex justify-between items-center font-semibold mt-2">
          <h4 className="text-green-600">
            <span className="mr-1">★{avgRating}</span>
            <span className="ml-4 text-black">{costForTwo}</span>
          </h4>
        </div>
        <h4 className="text-sm text-gray-500 truncate w-full block overflow-hidden whitespace-nowrap">
          {cuisines.join(" , ")}
        </h4>
        <h4 className="text-sm text-gray-500">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;

// import { CDN_URL } from "../utils/constant";

// const RestaurentCard = ({ resData }) => {
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     costForTwo,
//     avgRating,
//     sla,
//     areaName,
//   } = resData?.info;
//   return (
//     <div className="res-card">
//       <img src={CDN_URL + cloudinaryImageId} />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(" , ")}</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{avgRating}</h4>
//       <h4>{sla?.slaString}</h4>
//       <h4>{areaName}</h4>
//     </div>
//   );
// };

// export default RestaurentCard;
