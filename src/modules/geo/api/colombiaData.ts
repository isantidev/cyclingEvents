import supabase from "@core/api/supabase-client";
import type { AppResult } from "@core/types/api";
import type { Department } from "@modules/geo/colombiaData.types";

export async function fetchDepartments(): Promise<AppResult<Department[]>> {
    try {
        const { data, error } = await supabase
            .from("Deparments")
            .select("id, department_name");

        if (error) return { success: false, data: null, error: error.message };

        const mappedData: Department[] = data.map((item) => ({
            id: item.id,
            department_name: item.department_name,
        }));

        return { success: true, data: mappedData, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: "Unexpected network failure",
        };
    }
}
