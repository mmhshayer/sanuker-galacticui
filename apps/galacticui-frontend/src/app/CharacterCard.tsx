import React, { useEffect, useState } from 'react';
import Character from './character.interface';

import styles from './CharacterCard.module.scss';
import Planet from './planet.interface';
import Species from './species.interface';
import Starship from './starship.interface';
import Vehicle from './vehicle.interface';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const [homeworld, setHomeworld] = useState<string>('');
    const [species, setSpecies] = useState<Species[]>([]);
    const [starships, setStarships] = useState<Starship[]>([]);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        async function fetchData() {
            // Fetch homeworld data
            const homeworldResponse = await fetch(character.homeworld);
            const homeworldData = await homeworldResponse.json();
            setHomeworld(homeworldData.name);

            // Fetch species data
            const speciesPromises = character.species.map(async (speciesUrl) => {
                const speciesResponse = await fetch(speciesUrl);
                const speciesData = await speciesResponse.json();
                return speciesData.name;
            });
            const speciesNames = await Promise.all(speciesPromises);
            setSpecies(speciesNames);

            // Fetch starships data
            const starshipsPromises = character.starships.map(async (starshipUrl) => {
                const starshipResponse = await fetch(starshipUrl);
                const starshipData = await starshipResponse.json();
                return starshipData.name;
            });
            const starshipNames = await Promise.all(starshipsPromises);
            setStarships(starshipNames);

            // Fetch vehicles data
            const vehiclesPromises = character.vehicles.map(async (vehicleUrl) => {
                const vehicleResponse = await fetch(vehicleUrl);
                const vehicleData = await vehicleResponse.json();
                return vehicleData.name;
            });
            const vehicleNames = await Promise.all(vehiclesPromises);
            setVehicles(vehicleNames);
        }

        fetchData();
    }, [character]);

    return (
        <div className={styles['character-card']}>
            <h2 className={styles['character-name']}>{character.name}</h2>
            <p className={styles['character-info']}>
                <span >Gender:</span> {character.gender}
            </p>
            <p className={styles['character-info']}>
                <span >Birth Year:</span> {character.birth_year}
            </p>
            <p className={styles['character-info']}>
                <span >Eye Color:</span> {character.eye_color}
            </p>
            <p className={styles['character-info']}>
                <span >Hair Color:</span> {character.hair_color}
            </p>
            <p className={styles['character-info']}>
                <span >Height:</span> {character.height}
            </p>
            <p className={styles['character-info']}>
                <span >Mass:</span> {character.mass}
            </p>
            <br />
            <p className={styles['character-info']}>
                <span >Homeworld:</span> {homeworld || 'N/A'}
            </p>
            <p className={styles['character-info']}>
                <span >Species:</span> {species.length > 0 ? species.join(', ') : 'N/A'}
            </p>
            <p className={styles['character-info']}>
                <span >Starships:</span> {starships.length > 0 ? starships.join(', ') : 'N/A'}
            </p>
            <p className={styles['character-info']}>
                <span >Vehicles:</span> {vehicles.length > 0 ? vehicles.join(', ') : 'N/A'}
            </p>
            <br />
        </div>

    );
};

export default CharacterCard;
