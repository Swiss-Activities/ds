export declare const useGeolocation: () => {
    isAvailable: boolean;
    isDenied: boolean;
    isLoading: boolean;
    coordinates: {
        latitude: number;
        longitude: number;
    } | null;
    error: string | null;
    getCurrentPosition: () => Promise<{
        latitude: number;
        longitude: number;
    }>;
};
