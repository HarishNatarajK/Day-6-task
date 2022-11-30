//To calculate the uber price

class uber{
    constructor(startPoint, endPoint, discount){
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.rate = 10;
        this.discount = 25;
    }
    gettotal(value){
        var distance = Math.abs(value.startPoint - value.endPoint);
        var totalPrice = distance * value.rate;
        var discountedPrice = totalPrice - (totalPrice*value.discount /100)
        console.log('Total price:',totalPrice);
        console.log('Discounted price:', discountedPrice);
    }

}
var u1 = new uber(10, 20)
console.log(u1)

u1.gettotal(u1)
