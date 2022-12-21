// korean won to number
function koreanWonToNumber(koreanWon) {
  const number = koreanWon.replace(/[^0-9]/g, '');
  return parseInt(number, 10);
}

// number to korean won
function numberToKoreanWon(number) {
  return number.toLocaleString('ko-KR');
}

function solution(price) {
  if (price >= 500000) {
    return price * 0.8;
  } else if (price >= 300000) {
    return price * 0.9;
  } else if (price >= 100000) {
    return price * 0.95;
  } else return price;
}
