import DesktopRoutineStep from "./desktopRoutineStep";
const RoutineCard = ({ title, steps }) => (
    <div className="flex-1 bg-white shadow-md rounded-lg p-6 border border-[#CAC7C7]">
      <h2 className="font-lato font-normal text-xl mb-4">{title}</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <DesktopRoutineStep
            key={step.step}
            stepData={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
export default RoutineCard; 