const Level = () => {
    return (
      <div className="flex items-center flex-col w-full p-5 bg-[#FDFDFD] 
                      /* mobile */ text-xs 
                      /* ≥640px (sm) */ sm:text-sm 
                      /* ≥768px (md) */ md:text-base
                      ">
        <div className="flex flex-col items-center w-full ">
          <p className="font-medium /* you can also tweak weight */">
            Skin Health Severity Levels
          </p>
          <div className="relative flex h-[14px] w-[100%] rounded-lg bg-gray-300 mt-5">
            <div className="absolute left-0  h-[14px] w-1/4 rounded-l-lg bg-[#F0EA47]" />
            <div className="absolute left-1/4 h-[14px] w-1/4 bg-[#FFD857]" />
            <div className="absolute left-1/2 h-[14px] w-1/4 bg-[#FFA35D]" />
            <div className="absolute left-3/4 h-[14px] w-1/4 rounded-r-lg bg-[#FF7D5D]" />
          </div>
        </div>
        
        <div className="flex justify-center w-full mt-5 gap-2">
            <div className="flex flex-col">
                <p className="font-semibold">1-3</p>
                <p className="font-semibold">Mild</p>
                <p>
                Slight pigmentation, faint scars, or fine lines. Manageable with a
                consistent skincare routine.
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">4-6</p>
                <p className="font-semibold">Moderate</p>
                <p>
                Noticeable dark spots, acne scars, wrinkles, or under-eye circles.
                Requires targeted treatments like serums and exfoliation.
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">7-9</p>
                <p className="font-semibold">Significant</p>
                <p>
                Deep pigmentation, stubborn acne scars, pronounced wrinkles, or
                persistent dark circles. May need advanced skincare products and
                clinical treatments.
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">10</p>
                <p className="font-semibold">Severe</p>
                <p>
                Severe skin damage, deep-set wrinkles, resistant pigmentation, or
                extreme acne scarring.
                </p>
            </div>
        </div>
    
        
      </div>
    );
  };
  
  export default Level;
  