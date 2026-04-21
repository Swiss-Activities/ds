"use client";
import { useState, useEffect } from "react";
export const useGeolocation = () => {
    const [state, setState] = useState({
        isAvailable: false,
        isDenied: false,
        isLoading: false,
        coordinates: null,
        error: null,
    });
    useEffect(() => {
        const isSecureContext = typeof window !== "undefined" && window.isSecureContext;
        if (!navigator.geolocation || !isSecureContext) {
            setState((prev) => ({ ...prev, isAvailable: false }));
            return;
        }
        setState((prev) => ({ ...prev, isAvailable: true }));
        if (navigator.permissions) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then((result) => {
                setState((prev) => ({ ...prev, isDenied: result.state === "denied" }));
                result.addEventListener("change", () => {
                    setState((prev) => ({ ...prev, isDenied: result.state === "denied" }));
                });
            })
                .catch(() => { });
        }
    }, []);
    const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Geolocation is not supported"));
                return;
            }
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            navigator.geolocation.getCurrentPosition((position) => {
                const coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    coordinates,
                    error: null,
                }));
                resolve(coordinates);
            }, (error) => {
                const errorMessage = error.message || "Failed to get location";
                const isPermissionDenied = error.code === 1;
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    error: errorMessage,
                    isDenied: isPermissionDenied ? true : prev.isDenied,
                }));
                reject(new Error(errorMessage));
            }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
        });
    };
    return {
        isAvailable: state.isAvailable,
        isDenied: state.isDenied,
        isLoading: state.isLoading,
        coordinates: state.coordinates,
        error: state.error,
        getCurrentPosition,
    };
};
