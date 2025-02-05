import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ThisWeekSummaryProps } from "@/components/ThisWeekSummary";
import { LastWeekSummaryProps } from "@/components/LastWeekSummary";
import { Currency } from "@/constants/CurrencyTypes";

export interface AppContextProps {
  userId: string;
  listViewTab: number;
  thisWeek: ThisWeekSummaryProps;
  lastWeek: LastWeekSummaryProps;
}

export interface AppContextState {
  appContext: AppContextProps;
  setAppContext: Dispatch<SetStateAction<AppContextProps>>;
}

const defaultAppState: AppContextProps = {
  userId: "",
  listViewTab: 0,
  thisWeek: {
    allocatedBudget: 0,
    totalExpenses: 0,
    extraPurchased: 0,
    remainingItems: 0,
    currencyType:
      Object.keys(Currency)[
        Object.values(Currency).indexOf(
          "Sri Lankan Rupee" as unknown as Currency
        )
      ],
  },
  lastWeek: {
    allocatedBudget: 0,
    totalExpenses: 0,
    extraPurchased: 0,
    remainingItems: 0,
    currencyType:
      Object.keys(Currency)[
        Object.values(Currency).indexOf(
          "Sri Lankan Rupee" as unknown as Currency
        )
      ],
  },
};

const AppContext = createContext<AppContextState | undefined>(undefined);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [appContext, setAppContext] = useState(defaultAppState);
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
