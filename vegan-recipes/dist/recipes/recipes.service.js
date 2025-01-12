"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let RecipesService = class RecipesService {
    constructor() {
        this.apiUrl = 'https://the-vegan-recipes-db.p.rapidapi.com/';
        this.apiHost = 'the-vegan-recipes-db.p.rapidapi.com';
        this.apiKey = '68a4a5e13bmsh9c3132abc375e52p1c3fa4jsn3411337554f8';
    }
    async fetchRecipes() {
        try {
            const response = await axios_1.default.get(this.apiUrl, {
                headers: {
                    'x-rapidapi-host': this.apiHost,
                    'x-rapidapi-key': this.apiKey,
                },
            });
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch recipes: ${error.message}`);
        }
    }
    async fetchRecipeById(id) {
        try {
            const response = await axios_1.default.get(`${this.apiUrl}${id}`, {
                headers: {
                    'x-rapidapi-host': this.apiHost,
                    'x-rapidapi-key': this.apiKey,
                },
            });
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch recipe with ID ${id}: ${error.message}`);
        }
    }
};
exports.RecipesService = RecipesService;
exports.RecipesService = RecipesService = __decorate([
    (0, common_1.Injectable)()
], RecipesService);
//# sourceMappingURL=recipes.service.js.map