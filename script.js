var seat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

function showTable() {
    //... 이하 코드는 동일합니다.
    // 현재 코드의 showTable() 함수 내용을 그대로 가져오시면 됩니다.
}

function randomSeat(num) {
    //... 이하 코드는 동일합니다.
    // 현재 코드의 randomSeat() 함수 내용을 그대로 가져오시면 됩니다.
}

function toggleRandomSeat() {
    if (document.querySelector('#selected').value === '좌석 배정') {
        randomSeat(36);
        document.querySelector('#selected').value = '다시 하기';
    } else {
        randomSeat(36);
    }
}
