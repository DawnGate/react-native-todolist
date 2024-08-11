import { Snackbar } from "@/components/Snackbar";
import { ImplSnackItem } from "@/types";
import { createContext, ReactNode, useEffect, useState } from "react";

import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

type ContextValues = {
  setData?: (data: ImplSnackItem) => void;
  clearData?: () => void;
};

export const SnackbarContext = createContext<ContextValues>({});

const AnimatedSnackbar = ({ data }: { data: ImplSnackItem }) => {
  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
      <Snackbar data={data} />
    </Animated.View>
  );
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [currentData, setCurrentData] = useState<ImplSnackItem | null>(null);
  const [newData, setNewData] = useState<ImplSnackItem | null>(null);

  const setData = (data: ImplSnackItem) => {
    if (currentData) {
      setNewData(data);
      setCurrentData(null);
    } else {
      setCurrentData(data);
    }
  };

  const clearData = () => {
    setCurrentData(null);
    setNewData(null);
  };

  useEffect(() => {
    let timeoutRef: null | NodeJS.Timeout;
    if (currentData) {
      timeoutRef = setTimeout(() => {
        setCurrentData(null);
      }, 3000);
    }
    return () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
    };
  }, [currentData]);

  useEffect(() => {
    let timeoutRef: null | NodeJS.Timeout;
    if (newData) {
      timeoutRef = setTimeout(() => {
        setNewData(null);
      }, 3000);
    }
    return () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
    };
  }, [newData]);

  return (
    <SnackbarContext.Provider
      value={{
        setData,
        clearData,
      }}
    >
      {children}
      {!!currentData && <AnimatedSnackbar data={currentData} />}
      {!!newData && <AnimatedSnackbar data={newData} />}
    </SnackbarContext.Provider>
  );
};
