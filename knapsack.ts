type Item = {
  weight: number
  value: number
}
export class ItemR {
  weight: number
  value: number
  relacion:number
  constructor(weight:number,value:number){
    this.weight=weight;
    this.value=value;
    this.relacion=value/weight;
  }
}
export class knapsack {
  value: number = 0;
}
export function maximumValue({
  maximumWeight,
  items,
}: {
  maximumWeight: number
  items: Item[]
}): number {
  let bolsa: knapsack = new knapsack();
  let itemsArr: ItemR[]=[];
  for(let item of items){
    let a:ItemR= new ItemR(item.weight,item.value);
    itemsArr.push(a);
  }
  let orderItems: ItemR[] = itemsArr.sort((a, b) => {
    if (b.relacion > a.relacion) return 1;
    if (b.relacion == a.relacion) return 0;
    return -1;
  });
  console.log(orderItems);
  for(let item of orderItems){
    if(maximumWeight- item.weight >= 0){
      maximumWeight -= item.weight
      bolsa.value += item.value
    }
  }
  return bolsa.value;
  /*var arr = new Array(items.length);
  let orderValue: Item[] = items.sort((a, b) => {
    if (b.value > a.value) return 1;
    if (b.value == a.value) return 0;
    return -1;
  });
  for (let i:number=0;i<orderValue.length; i++) {
    for (let j:number=0;j<orderValue.length; j++){

      for (let k:number=0;k<orderValue.length; k++){
      
      }
    }
  }
  for(let item of orderValue){
    if(item.weight <= maximumWeight){
      orderValue.shift();
      let restante:number= maximumWeight-item.weight
      let value:number=item.value;
      let sum:number=0;
      if(restante > 0){
        for(let item2 of orderValue){
          if(restante-item2.weight>0){
            value += item2.value;
            restante -= item2.weight
            let sum2:number=0;
            let peso2:number=0;
            for(let item3 of orderValue){
              
              peso2+=item3.weight;
              sum2+=item3.value;
              console.log(peso2)
              
            }
            console.log(restante+ "-" + peso2 +" = "+ (restante-peso2) +" " +(sum2+value))
            if(restante-peso2>0 && sum2 > bolsa.sum){
              bolsa.sum=sum2;
            }
            
          }
          }
        if(value>bolsa.value){
          bolsa.value=value;
        }
      }else if(restante == 0){
        for(let item2 of orderValue){
          if(maximumWeight-item2.weight>0){
            sum += item2.value;
            maximumWeight -= item2.weight
          }
        }if(value>sum){
          if(value>bolsa.value){
            bolsa.value=value;
          }
        }else{
          if(sum>bolsa.value){
            bolsa.value=sum;
          }
        }
      }
    }
    
  }
  return bolsa.value*/

}
