import type { Race } from "@shared/types/race.types";

export const raceService = {
    getAll: async (): Promise<Race[]> => {
        const response = await fetch("http://localhost:3000/api/carreras");
        const data = await response.json();
        return data;
    },

    getByLimit: async (num = 6): Promise<Race[]> => {
        const response = await fetch(
            `http://localhost:3000/api/carreras?limit=${num}`
        );
        const data = await response.json();
        return data;
    },
};
