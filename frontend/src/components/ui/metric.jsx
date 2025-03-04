const MetricCard = ({ color, title, percentage, description }) => (
    <div className="p-4 md:p-6 bg-white shadow-lg rounded-xl border">
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <div className={`w-5 h-5 md:w-6 md:h-6 ${color} rounded-full`}></div>
        <h2 className="font-lato text-md md:text-lg">{title}</h2>
      </div>
      <div className="font-lato text-xl md:text-2xl mb-1 md:mb-2">{percentage}%</div>
      <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5">
        <div
          className={`${color} h-2 md:h-2.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="font-lato font-light mt-2 md:mt-3 text-gray-500 text-xs md:text-sm">
        {description}
      </p>
    </div>
  );

export default MetricCard