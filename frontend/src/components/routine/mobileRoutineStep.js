const MobileRoutineStep = ({ stepData }) => (
  <div className="relative flex items-start space-x-2 w-full">
    <div className="absolute -left-3 top-1.5 w-3 h-3 bg-[#14213D] rounded-full"></div>
    <div className="flex-1">
      <div className="flex items-center mb-1">
        <div className="bg-[#14213D] text-white font-lato text-xs px-3 py-1 rounded-md">
          Step {stepData.step}
        </div>
        <h3 className="font-lato text-[#14213D] text-sm ml-2">
          {stepData.title}
        </h3>
      </div>
      <div className="flex items-start space-x-4">
        <div className="flex-1 max-w-[210px]">
          <p className="text-[#909090] font-lato font-light text-xs mb-2 mt-2 leading-5">
            {stepData.description}
          </p>
          <div className="mt-2">
            <p className="text-[#909090] font-lato text-[12px]">
              Product:&nbsp;
              <a
                href={stepData.product?.props?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500 hover:text-blue-600 transition"
              >
                {stepData.product?.props?.children}
              </a>
            </p>
          </div>
        </div>
        {stepData.image ? (
          <a
            href={stepData.product?.props?.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={stepData.image}
              alt={stepData.title}
              className="w-24 h-24 rounded-md mt-2 object-cover hover:opacity-80 transition"
            />
          </a>
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-md mt-2"></div>
        )}
      </div>
    </div>
  </div>
);

export default MobileRoutineStep;
