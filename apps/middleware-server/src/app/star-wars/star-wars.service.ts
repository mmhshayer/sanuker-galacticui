import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs/promises';

@Injectable()
export class StarWarsService {
    private readonly swapiBaseUrl = 'https://swapi.dev/api';

    async searchCharactersByName(name: string) {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/people/?search=${name}`);
            const apiResults = response.data.results;
            const extraCharacters = await this.loadExtraCharacters();
            const filteredExtraCharacters = extraCharacters.filter(
                (character) => character.name.toLowerCase().includes(name.toLowerCase())
            );
            const allCharacters = [...apiResults, ...filteredExtraCharacters];
            return allCharacters;
        } catch (error) {
            throw new Error(`Error searching characters: ${error.message}`);
        }
    }

    async getFilms() {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/films/`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching films: ${error.message}`);
        }
    }

    async getPlanets() {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/planets/`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching planets: ${error.message}`);
        }
    }

    async getSpecies() {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/species/`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching species: ${error.message}`);
        }
    }

    async getStarships() {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/starships/`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching starships: ${error.message}`);
        }
    }

    async getVehicles() {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/vehicles/`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching vehicles: ${error.message}`);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private async loadExtraCharacters(): Promise<any[]> {
        try {
            const filePath = 'apps/middleware-server/extra_character.json';
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const extraCharacters = JSON.parse(fileContent);
            return extraCharacters;
        } catch (error) {
            console.error(`Error loading extra characters: ${error.message}`);
            return [];
        }
    }
}
