"use client";
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface GlobalStateContextType {
    tripSelectedId: string;
    setTripSelectedId: (id: string) => void;
    authToken: string;
    setAuthToken: (token: string) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const [tripSelectedId, setTripSelectedId] = useState<string>(() => {
        // Initialize from localStorage or default to empty string
        if (typeof window !== "undefined") {
            return localStorage.getItem("tripSelectedId") || "";
        }
        return "";
    });
    const [authToken, setAuthToken] = useState<string>("");

    // Update localStorage whenever tripSelectedId changes
    useEffect(() => {
        if (tripSelectedId) {
            localStorage.setItem("tripSelectedId", tripSelectedId);
        }
    }, [tripSelectedId]);

    return (
        <GlobalStateContext.Provider
            value={{ tripSelectedId, setTripSelectedId, authToken, setAuthToken }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }
    return context;
};
