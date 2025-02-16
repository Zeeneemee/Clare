import uploaded_photo from "../../../backend/uploads/latest-image.png";

const Result = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-7xl font-serif tracking-wide">Your Skin Report</h1>
        <p className="text-xl mt-2 font-light text-[#A8A8A8]">
          Our Al has analyzed your skin and generated a detailed report with
          personalized insights and recommendations.
        </p>
      </div>
      <div>
        <img
          src={uploaded_photo}
          alt="uploaded_photo"
          className="flex justify-center item-align"
        />
      </div>
    </div>
  );
};
export default Result;
