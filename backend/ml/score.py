def acne_score(confidences: list) -> list:
    valid_confidences = [c for c in confidences if c > 0.1]
    score = (sum(valid_confidences)/7.46) * 10
    if score > 10: 
        return 10
    elif not score:
        return 0
    return score
    
    
    