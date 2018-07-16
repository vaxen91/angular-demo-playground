import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 4),
    new Ingredient('Apple', 9),
    new Ingredient('Tomatoes', 4)
  ]
  constructor() { }

  ngOnInit() {
  }

}
