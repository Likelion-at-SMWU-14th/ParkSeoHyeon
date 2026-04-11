//음료 리스트 배열로 저장
const drinkList=[
    {name:"콜라",price:1500},
    {name:"사이다",price:1200},
    {name:"요구르트",price:500},
    {name:"아메리카노",price:2000},
    {name:"카페라떼",price:2200},
    {name:"환타",price:1400},
    {name:"알로에 주스",price:1900}
];
//지갑 금액 변수 설정(사용자에게 금액 입력받기)
let wallet =(prompt("현재 보유하신 금액을 입력해주세요."));
console.log(`금액:${wallet}`);
