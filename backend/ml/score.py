def acne_score(confidences: list) -> list:
    valid_confidences = [c for c in confidences if c > 0.1]
    score = (sum(valid_confidences)/7.46) * 10
    if score > 10: 
        return 10
    return score
    
print(acne_score([0.4354201555252075, 0.41815418004989624, 0.3818167746067047, 0.34742090106010437, 0.31301623582839966, 0.29416733980178833]))  # 10.0
    
    