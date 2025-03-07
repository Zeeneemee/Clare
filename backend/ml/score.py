def acne_score(confidences: list) -> list:
    score_mapping = {
        1: "",
        2:"",
        3:"",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",
        10:""
    }
    valid_confidences = [c for c in confidences if c > 0.1]
    total_confidences = sum(valid_confidences)
    