import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('demooo', 'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXfwUNVbrA9Z3NY4NXPxhIo9Ggxipbz-4Clt08_U04YvoKBI'
    ),
    new Recipe('A test recipe', 'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXfwUNVbrA9Z3NY4NXPxhIo9Ggxipbz-4Clt08_U04YvoKBI'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
