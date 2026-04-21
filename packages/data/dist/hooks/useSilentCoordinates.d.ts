type Coords = {
    latitude: number;
    longitude: number;
} | null;
export declare const useSilentCoordinates: () => {
    coords: Coords;
    ready: boolean;
};
export {};
