import uploaded_photo from "../../../backend/uploads/latest-image.png";

const Result = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="m-5  font-fanwood text-[48px]  tracking-wide">
          Your Skin Report
        </h1>
        <p className=" mt-2 mb-5 font-lato text-[26px] font-medium italic text-[#A8A8A8]">
          Our AI has analyzed your skin and generated a detailed report with
          personalized
          <br /> insights and recommendations.
        </p>
      </div>
      <div className="flex justify-center item-align ">
        <img
          src={uploaded_photo}
          alt="uploaded_photo"
          className=" rounded-[16px] mt-30 w-[379px] h-[346px] object-cover "
        />
      </div>
    </div>
  );
};
export default Result;
