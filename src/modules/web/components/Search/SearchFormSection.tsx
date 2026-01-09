import type { InitialValuesSearchForm } from "@shared/types/searchInput.types";

export const SearchForm = () => {
    const initialValues: InitialValuesSearchForm = {
        date: new Date(),
        difficulty: null,
        category: null,
        location: null,
    };

    return (
        <form action="">
            {/* Form fields will go here */}
            <label htmlFor=""></label>
        </form>
    );
};
