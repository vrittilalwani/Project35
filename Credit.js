class Credit {
    constructor(){

    this.image=loadImage('Images/Coin.png');
    }

    display(){
        var CreditS;
       imageMode(CENTER);
       image(this.image,300,100,200,200);
     
       var CreditStock=database.ref('Credit');
       CreditStock.on("value",function (data){
         CreditS=data.val();
       });

       textSize(40);
       stroke("black");
       strokeWeight(5);
       text(CreditS,270,100);
      
    }
}
