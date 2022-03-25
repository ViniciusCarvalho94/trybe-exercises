from exercise2 import correct_word, random_word, collect_aswer, check_result


def format_words(file):
    return [word.strip() for word in file]


if __name__ == "__main__":
    with open("words.txt") as txt_file:
        words = format_words(txt_file)
    word = correct_word(words)
    scrambled = random_word(word)
    answer = collect_aswer(scrambled)
    print(check_result(word, answer))
