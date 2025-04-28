def compute_score(confidences):
    valid = [c for c in confidences if c >= 0.5]
    if not valid:
        return 0  # Default when no valid confidences

    conf_average = sum(valid) / len(valid)

    if conf_average > 0.9:
        return 10
    else:
        # Spread 0.5–0.9 across 9 scores (1–9)
        return int((conf_average - 0.5) / (0.4 / 9)) + 1
