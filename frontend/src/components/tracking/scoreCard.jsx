const ScoreCard = ({ title, score, spots }) => {
    // Define colors for each title
    const colors = {
        "Acne": "#9CDA8A",
        "Dark Circles": "#7F7DFF",
        "Dark Spots": "#FFA500",
        "Scar": "#FF8181",
        "Wrinkles": "#FFEB40",
    };

    // Clamp score between 0 and 10 for safety
    const displayScore = Math.max(0, Math.min(score, 10));

    // Determine severity label
    let severity = "";
    if (displayScore === 0) {
        severity = "Healthy";
    } else if (displayScore > 0 && displayScore <= 3) {
        severity = "Mild";
    } else if (displayScore > 3 && displayScore <= 6) {
        severity = "Moderate";
    } else if (displayScore > 6 && displayScore <= 9) {
        severity = "Significant";
    } else {
        severity = "Severe";
    }

    // Determine severity background color
    const severityColor = 
        displayScore === 0 ? "#9CDA8A"
        : displayScore > 0 && displayScore <= 3 ? "#F0EA47"
        : displayScore > 3 && displayScore <= 6 ? "#FFD857"
        : displayScore > 6 && displayScore <= 9 ? "#FFA35D"
        : "#FF7D5D";
    const textColor = displayScore > 0 && displayScore <= 3 ? "#B0AA00" : 
        displayScore > 3 && displayScore <= 6 ? "#AD8501"
        : displayScore > 6 && displayScore <= 9 ? "#BA2727"
        : displayScore === 10 ? "#BF2600"
        : "#fff";

    return (
        <div className=" flex flex-col p-2 rounded-[24px] w-full border border-[#EAEAEA]">
            {/* Title */}
            <div className="flex items-center gap-2 mb-4 ml-2">
                <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colors[title] }}
                ></div>
                <span className="text-[14px]">{title}</span>
            </div>
            {/* Score */}
            <h2 className="text-lg font-bold mb-2 ml-2">{displayScore}/10</h2>
            {/* spot count get Local storage len array  */}
            {title !== 'Dark Circles' ? <p className="text-sm text-gray-500 mb-4 ml-2">
                {displayScore === 0 ? "No spots detected" : `${spots} spots detected`}
            </p>: title === 'Wrinkles' ? <p className="text-sm text-gray-500 mb-4 ml-2">
                {displayScore === 0 ? "No wrinkles detected" : `${spots}% detected`}
            </p> :''}
            
            {/* Severity */}
            <div
                className="flex ml-2 justify-center text-center rounded-[14px] w-[120px] py-1 text-center font-semibold"
                style={{ backgroundColor: severityColor,
                    color: textColor,}
                    }
            >
                {severity}
            </div>
        </div>
    );
};

export default ScoreCard;
