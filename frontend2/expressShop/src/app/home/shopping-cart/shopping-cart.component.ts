import { Component, OnInit } from '@angular/core';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    id: 2,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    id: 3,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    id: 4,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];


interface items {
  id: number;
  image: string;
  name: string;
  qty: number;
}



  
 
  //items = TABelement;
  
    
    //var allo = new elements("1","img","allo",1);


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  headElements : string[] = ["id","image","nom","quantité"];
  NOMPAGE = "Votre Panier";
  country1 = COUNTRIES;
  TABelement : items[] = [
    {
      id: 1,
      image: 'f/f3/Flag_of_Russia.svg',
      name: "item1",
      qty: 146989754
    }];
  constructor() { 

   
  }

  ngOnInit() {
  }

}



