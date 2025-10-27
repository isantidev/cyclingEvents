// type Difficulty = "easy" | "intermediate" | "hard";

export const Search = () => {
    return (
        <search>
            <input
                type="date"
                name="search-date-input"
                id="search-date-input"
            />
            <input type="text" name="search-text-input" />
            <select name="search-select-difficulty" id="search-select-input">
                <option value="easy">Principiante</option>
                <option value="intermediate">Intermedio</option>
                <option value="hard">Avanzado</option>
            </select>
        </search>
    );
};
