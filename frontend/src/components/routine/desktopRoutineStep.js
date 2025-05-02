const DesktopRoutineStep = ({ stepData, isLast }) => (
    <div className="relative flex items-start space-x-4">
      <div className="relative flex flex-col items-center">
        {!isLast && (
          <div className="absolute top-5 bottom-[-125px] w-0.5 bg-gray-300"></div>
        )}
        <span className="relative z-10 bg-[#14213D] text-white px-2 py-1 text-xs font-lato rounded-full">
          Step {stepData.step}
        </span>
      </div>
      <div className="flex-1 max-w-[310px]">
        <h3 className="font-lato text-[#14213D]">{stepData.title}</h3>
        <p className="font-lato font-light text-[#909090] text-sm mt-1">
          {stepData.description}
        </p>
        <p className="font-lato text-[#909090] text-sm mt-2">
          Product: {stepData.product}
        </p>
      </div>
      <div className="w-28 h-28 bg-gray-300 rounded-md relative left-[-4px]"></div>
    </div>
  );

export default DesktopRoutineStep;