from function import check_result


def test_check_result_true():
    report = check_result(10, 10)
    assert "Parabéns, você acertou!" in report


def test_check_result_false():
    report = check_result(9, 10)
    assert "Que pena, você errou!" in report
