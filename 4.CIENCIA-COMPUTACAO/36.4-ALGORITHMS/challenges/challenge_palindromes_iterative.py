def is_palindrome_iterative(word):
    if not word:
        return False

    inverse_word = ""
    for letter in word:
        inverse_word = letter + inverse_word

    if inverse_word == word:
        return True

    return False
