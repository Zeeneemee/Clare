import MobileRoutineStep from "./mobileRoutineStep";
const MobileRoutineCard = ({ steps }) => (
  <div className="relative pl-8 space-y-8">
    <div
      className="absolute left-6 top-4 w-1 bg-gray-300"
      style={{ height: `calc(100% - 16px)` }}
    ></div>
    {steps.map((step, index) => (
      <MobileRoutineStep key={index} stepData={step} />
    ))}
  </div>
);
export default MobileRoutineCard;
