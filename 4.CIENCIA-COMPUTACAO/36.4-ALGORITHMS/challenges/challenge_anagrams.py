def is_anagram(first_string, second_string):
    if len(first_string) == len(second_string):
        for index, letter in enumerate(first_string):
            if (
                letter.lower() in second_string.lower()
                and first_string.lower().count(letter) ==
                second_string.lower().count(letter)
            ):
                if index == len(first_string) - 1:
                    return True
            else:
                return False

    return False
