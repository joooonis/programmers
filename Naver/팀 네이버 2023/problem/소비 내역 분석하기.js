function solution(x, y, pays) {
  let [cashIn, cashOut, moneyPoint, milePoints] = [0, 0, 0, 0];
  let miles = Array(31).fill(0);
  let day = -1;
  for (let pay of pays) {
    let [day, time, money] = pay.split(' ');
    day = Number(day);
    money = Number(money);
    for (let i = 1; i <= day; i++) {
      milePoints += miles[i];
      miles[i] = 0;
    }

    if (money > 0) {
      let gome = money;
      if (money > moneyPoint + milePoints) {
        let cash = Math.ceil((money - moneyPoint - milePoints) / x) * x;
        cashIn += cash;

        moneyPoint += cash;
        if (milePoints > 0) {
          let price = money;
          money = money - milePoints > 0 ? money - milePoints : 0;
          milePoints = milePoints - price > 0 ? milePoints - price : 0;
        }
        moneyPoint -= money;
      } else {
        if (milePoints > 0) {
          let price = money;
          money = money - milePoints < 0 ? 0 : money - milePoints;
          milePoints = milePoints - price > 0 ? milePoints - price : 0;
        }
        moneyPoint = moneyPoint - money;
      }
      miles[day + y] += gome * 0.1;
    } else {
      money = -money;
      if (money > moneyPoint) {
        // 전부 출금

        cashOut += moneyPoint;
        moneyPoint = 0;
      } else {
        // 즉시 출금
        cashOut += money;
        moneyPoint -= money;
      }
    }
  }

  for (let i = 0; i <= 30; i++) {
    milePoints += miles[i];
    miles[i] = 0;
  }
  return [cashIn, cashOut, moneyPoint, milePoints];
}
