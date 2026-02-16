import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../utils/axiosinstance";
import { API_PATHS } from "../utils/apiPaths";

export const StatsContext = createContext();

const StatsProvider = ({ children }) => {
    const [stats, setStats] = useState({
        isExpenseExceeded: false,
        totalIncome: 0,
        totalExpenses: 0,
        loading: false
    });

    const fetchStats = useCallback(async () => {
        try {
            setStats(prev => ({ ...prev, loading: true }));
            const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
            if (response.data) {
                setStats({
                    isExpenseExceeded: response.data.isExpenseExceeded,
                    totalIncome: response.data.totalIncome,
                    totalExpenses: response.data.totalExpenses,
                    loading: false
                });
            }
        } catch (error) {
            console.error("Error fetching stats:", error);
            setStats(prev => ({ ...prev, loading: false }));
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchStats();
        }
    }, [fetchStats]);

    return (
        <StatsContext.Provider
            value={{
                ...stats,
                refreshStats: fetchStats,
            }}
        >
            {children}
        </StatsContext.Provider>
    );
};

export default StatsProvider;
