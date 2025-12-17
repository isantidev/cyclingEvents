export type AppResult<T> =
    | { success: true; data: T; error: null }
    | { success: false; data: null; error: string };
