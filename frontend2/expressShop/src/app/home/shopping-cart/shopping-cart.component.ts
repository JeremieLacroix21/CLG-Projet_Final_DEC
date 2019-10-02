import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product.entity';
 //items = TABelement;
  
    
    //var allo = new elements("1","img","allo",1);


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  headElements : string[] = ["image","id","nom","prix","quantité","sous-total"];
  NOMPAGE = "Votre Panier";
  TABelement : product[] = [
    {
      id: 1,
      nom: "allo",
      prix: 900,
      photo:"allo.jpg",
      qty: 10
    },
    {
      id: 2,
      nom: "allo2",
      prix: 40,
      photo:"allo.jpg",
      qty: 10
    },
    {
      id: 3,
      nom: "allo3",
      prix: 10,
      photo:"allo.jpg",
      qty: 10
    },
  
  ];

  total : number;


  placeholder : string = "allo"
  constructor() { 
      this.Total();
  }

  ngOnInit() {
  }
  increment(column)
  {
    this.TABelement[column].qty += 1;    
    this.Total();
      
  }
  decrement(column)
  {
    if(this.TABelement[column].qty - 1 > 0)
    {
    this.TABelement[column].qty -= 1;
    }
    else 
    {
      this.delete(column);
    }
    this.Total();
  }
  set(i)  
  {


  } 


  delete(column)
  {
    const index = this.TABelement.indexOf(column, 0);
    if (index > -1) {
       this.TABelement.splice(index, 1);
    }
  }
  SousTotal(i) : string
  {
    return (this.TABelement[i].prix * this.TABelement[i].qty).toString();
  }

  Total()
  {
    this.total = 0;
    for(let i = 0;i<this.TABelement.length;i++)
    {
        this.total += this.TABelement[i].prix * this.TABelement[i].qty;
    }
  }

}



