const MetricCard = ({ color, title, value, description, isAge }) => (
  <div className="p-4 md:p-5 bg-white shadow-lg rounded-xl border md:min-h-[170px] md:min-w-[340px]">
    <div className="flex items-center gap-3 mb-3 md:mb-3">
      <div className={`w-5 h-5 md:w-6 md:h-6 ${color} rounded-full`}></div>
      <h2 className="font-lato text-md md:text-lg">{title}</h2>
    </div>
    <div className="font-lato text-xl md:text-2xl mb-1 md:mb-2">
      {isAge ? `${value} years` : `${value}/10`}
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5">
      {!isAge &&
      <div
        className={`${color} h-2 md:h-2.5 rounded-full`}
        style={{ width: `${value*10}%` }}
      ></div>
      }
      {isAge &&
      <div
        className={`${color} h-2 md:h-2.5 rounded-full`}
        style={{ width: `${value}%` }}
      ></div>
      }
    </div>
    <p className="font-lato font-light mt-2 md:mt-3 text-gray-500 text-xs md:text-sm leading-snug">
      {description}
    </p>
  </div>
)

  

export default MetricCard