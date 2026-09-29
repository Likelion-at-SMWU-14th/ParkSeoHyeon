import axios from "axios";
import type { Recipe } from "../types/recipe";

const api = axiois.create{(
    baseURL: "http://localhost:8000";
)};

async function getResource<T>(path:string): Promise<T> {
    const response = await api.get<T>(path);
    return response.data;
    
}

export function getRecipes(): Promise<Recipe[]> {
    return getResource<Recipe[]>("/recipes");
}

export function getRecipe(ud: Recipe["id"]): Promise<Recipe> {
    return getResource<Recipe>(`/recipes/${id}`);
}