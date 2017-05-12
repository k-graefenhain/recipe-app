import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe("Just a test", "here comes the recipe description",
          "http://www.ottolenghi.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/resps0010008_b.jpg"),
      new Recipe("Just a test", "here comes the recipe description",
          "http://www.ottolenghi.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/resps0010008_b.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
