import { createContext } from "react";
import type { ApiDataType } from "../types/types";

export const CountryContext = createContext<ApiDataType<any> | null>(null)
export const ModeContext = createContext(null)
