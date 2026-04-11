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
let wallet =Number(("현재 보유하신 금액을 입력해주세요."));
console.log(`금액:${wallet}`);

//랜덤 선택 기능
function random(arr){
    return arr[Math.floor(Math.random()*arr.length)]
};

//문자열 반환 함수 구현
function message(drink,Success){
    if(Success){
        return `${drink.name}가 나왔어요!(가격:${drink.price})
                잔액:${wallet}원`;
    } else{
        return`돈이 부족해요! 음료를 살 수 없어요.`;
    }
    
}

function buyDrink(){
    console.log(`----------랜덤자판기 작동 시작-----------`)
    for(let i=1; i<=3; i++) {
        const selected = random(drinkList); 
        
        if (selected.price <= wallet) {
            wallet -= selected.price;
            console.log(message(selected,true));
        } else {
            console.log(message(selected,false));
        }
    }
     console.log(`----------랜덤자판기 작동 종료-----------`);
 }

buyDrink();

