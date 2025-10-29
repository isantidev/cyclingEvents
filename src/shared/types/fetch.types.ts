export interface FetchState<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
}
