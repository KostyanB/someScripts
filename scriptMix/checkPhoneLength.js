const correctBase = {
    correctName: true,
    correctTel: true,
};

const chekPhone = () => {
    let value = input.current.value;
    value = value.replace(/^\+\d{1}\s/g, '+7 ');
    // проверка на количество цифр
    const corrNum = value.replace(/[\s\+\(\)-]*/g, '');
    if (corrNum.length < 11) {
        correctBase.correctTel = false;
        showError(true);
    } else {
        correctBase.correctTel = true;
        showError(false);
    }

};