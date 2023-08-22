import { Controller, Get, Param } from '@nestjs/common';
import { StarWarsService } from './star-wars.service';

@Controller('star-wars')
export class StarWarsController {
    constructor(private readonly starWarsService: StarWarsService) { }

    @Get('search/:name')
    async searchCharacterByName(@Param('name') name: string) {
        try {
            const characters = await this.starWarsService.searchCharactersByName(name);
            return characters;
        } catch (error) {
            // Handle error appropriately
        }
    }

    @Get('films')
    async getFilms() {
        try {
            const films = await this.starWarsService.getFilms();
            return films;
        } catch (error) {
            // Handle error appropriately
        }
    }

    @Get('planets')
    async getPlanets() {
        try {
            const planets = await this.starWarsService.getPlanets();
            return planets;
        } catch (error) {
            // Handle error appropriately
        }
    }

    @Get('species')
    async getSpecies() {
        try {
            const species = await this.starWarsService.getSpecies();
            return species;
        } catch (error) {
            // Handle error appropriately
        }
    }

    @Get('starships')
    async getStarships() {
        try {
            const starships = await this.starWarsService.getStarships();
            return starships;
        } catch (error) {
            // Handle error appropriately
        }
    }

    @Get('vehicles')
    async getVehicles() {
        try {
            const vehicles = await this.starWarsService.getVehicles();
            return vehicles;
        } catch (error) {
            // Handle error appropriately
        }
    }
}
