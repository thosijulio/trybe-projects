def study_schedule(permanence_period, target_time):
    if type(target_time) != int:
        return None

    student_in_target_time = 0

    for period in permanence_period:
        if not isinstance(period[0], int) or not isinstance(period[1], int):
            return None

        if period[0] <= target_time <= period[1]:
            student_in_target_time += 1

    return student_in_target_time


# isinstance é mais performatica que type. Lido em:
# https://www.pylenin.com/blogs/type-vs-isinstance/
