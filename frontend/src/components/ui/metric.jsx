const MetricCard = ({ color, title, value, description, isWrinkles }) => {
  const displayValue = isWrinkles
    ? `${(value * 100).toFixed(0)}%`
    : `${value}/10`;
  const progressWidth = isWrinkles ? `${value * 100}%` : `${value * 10}%`;

  return (
    <div className="p-5 bg-white shadow-xl rounded-2xl border border-gray-200 min-h-[180px] md:min-w-[340px]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-5 h-5 ${color} rounded-full`}
          aria-hidden="true"
        ></div>
        <h2 className="font-lato font-medium text-md md:text-lg text-[#14213D]">
          {title}
        </h2>
      </div>

      {/* Value */}
      <div className="text-2xl font-lato text-[#14213D] mb-2">
        {displayValue}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 relative overflow-hidden">
        <div
          className={`${color} h-2.5 rounded-full transition-all duration-500`}
          style={{ width: progressWidth }}
        ></div>
      </div>

      {/* Description */}
      <p className="font-lato font-light mt-3 text-sm text-gray-600 leading-snug">
        {description}
      </p>
    </div>
  );
};

export default MetricCard;
