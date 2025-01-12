export declare class RecipesService {
    private readonly apiUrl;
    private readonly apiHost;
    private readonly apiKey;
    fetchRecipes(): Promise<any>;
    fetchRecipeById(id: number): Promise<any>;
}
