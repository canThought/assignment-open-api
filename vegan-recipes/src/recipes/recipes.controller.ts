import { Controller, Get, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController { 
    constructor(private readonly recipesService: RecipesService) {}
  
    @Get()
    async getRecipes() {
      return await this.recipesService.fetchRecipes();
    }
    @Get(':id')
    async getRecipeById(@Param('id') id: number) {
      return await this.recipesService.fetchRecipeById(id);
    }
  }
