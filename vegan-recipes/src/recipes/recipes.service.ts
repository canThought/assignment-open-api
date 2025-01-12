import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecipesService {
    private readonly apiUrl = 'https://the-vegan-recipes-db.p.rapidapi.com/';
    private readonly apiHost = 'the-vegan-recipes-db.p.rapidapi.com';
    private readonly apiKey = '68a4a5e13bmsh9c3132abc375e52p1c3fa4jsn3411337554f8';
  
    async fetchRecipes(): Promise<any> {
      try {
        const response = await axios.get(this.apiUrl, {
          headers: {
            'x-rapidapi-host': this.apiHost,
            'x-rapidapi-key': this.apiKey,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(`Failed to fetch recipes: ${error.message}`);
      }
    }

    async fetchRecipeById(id: number): Promise<any> {
        try {
          const response = await axios.get(`${this.apiUrl}${id}`, {
            headers: {
              'x-rapidapi-host': this.apiHost,
              'x-rapidapi-key': this.apiKey,
            },
          });
          return response.data;
        } catch (error) {
          throw new Error(`Failed to fetch recipe with ID ${id}: ${error.message}`);
        }
    }
}
