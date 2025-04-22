const useSkinRec = ({acne,scar,darkspot,wrinkle,underEye}) => {
    const skinCareMap = {
        acne:{
            mild: {
                "day": ["Cleanser", "Moisturizer", "Sunscreen"],
                "night": ["Cleanser", "Moisturizer", "Sunscreen"] ,
                "suggestion": "Use acne cream only during occasional breakouts."
            },
            moderate: {
                "day": ["Cleanser", "Moisturizer", "Sunscreen"],
                "night": ["Cleanser", "Moisturizer", "Sunscreen","Acne Treatment (PM)"],
                "suggestion": "Use acne cream during night routine. (PM)"
            },
            severe: {
                "day": ["Cleanser", "Moisturizer", "Sunscreen"],
                "night": ["Cleanser", "Moisturizer", "Sunscreen","Acne Treatment (PM)"],
                "suggestion": "Use acne cream in both day and night routine. (AM&PM)"
            }
        }
    }
}

export default useSkinRec;