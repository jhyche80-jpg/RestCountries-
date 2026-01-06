import { createContext } from "react";
import type { ApiDataType, ThemeType } from "../types/types";

export const CountryContext = createContext<ApiDataType<any> | null>(null)
export const ModeContext = createContext<ThemeType>({
    theme: "light",
    toggleTheme: () => { }

})
