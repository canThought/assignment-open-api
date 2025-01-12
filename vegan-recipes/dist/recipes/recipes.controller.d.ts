import { RecipesService } from './recipes.service';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    getRecipes(): Promise<any>;
    getRecipeById(id: number): Promise<any>;
}
