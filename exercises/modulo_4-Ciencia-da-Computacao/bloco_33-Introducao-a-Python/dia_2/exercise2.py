import random

array_of_words = ["banana", "morango", "melancia", "castanha"]


def correct_word(words):
    word = random.choice(words)
    return word


def random_word(word):
    return "".join(random.sample(word, len(word)))


def collect_aswer(scrambled):
    return input(f'Desembaralhe a palavra "{scrambled}": ')


def check_result(word, answer):
    if word == answer:
        return "Parabéns, você acertou!"
    else:
        return "Que pena, você errou!"


if __name__ == "__main__":
    word = correct_word(array_of_words)
    scrambled = random_word(word)
    answer = collect_aswer(scrambled)
    print(check_result(word, answer))
