/*
Knapsack ใช้เทคนิค Greedy 

1.โขมย ต้องการที่จะขโมยของ เพื่อเก็บวัตถุที่มีค่าให้มากที่สุดและมีน้ำหนักน้อยที่สุดลงใส่ถุงบรรจุ
        weight : 10 , 15 , 7 , 20 , 12 , 5 , 10 , 11
        price    :  5  ,   3 , 9 ,  4  ,  8  , 3 ,  2  ,  7
        capacity  ( ความจุของเป้ ):  32
*/
let capacity = 32
let item = [{
    weight: 10,
    price: 5
  }, {
    weight: 15,
    price: 3
  }, {
    weight: 7,
    price: 9
  },
  {
    weight: 20,
    price: 4
  },
  {
    weight: 12,
    price: 8
  },
  {
    weight: 5,
    price: 3
  },
  {
    weight: 10,
    price: 2
  },
  {
    weight: 11,
    price: 7
  }
]

let itemClone = [...item]
//calculate
console.log('----------------------calculate-----------------');
for (let index in itemClone) {
  itemClone[index].calculate = itemClone[index].price / itemClone[index].weight
  console.log(itemClone[index]);
}

//Sort max to min
console.log('----------------------sort max to min-----------------');
itemClone.sort((itemCurrent, itemNext) => itemCurrent.calculate < itemNext.calculate ? 1 : -1)
console.log(itemClone);

// Select Item
console.log('----------------------Select Item-----------------');

let selectItem = []
itemClone.map((items) => {
  capacity -= items.weight
  if (capacity <= 0) {
    return false
  }
  selectItem.push(items)
  console.log('capacity : ' + capacity);
})
console.log(selectItem);

console.log('----------------------Index Item-----------------');
selectItem.map(items => {
  console.log('Item is selected :  No. ' + item.indexOf(items));
})