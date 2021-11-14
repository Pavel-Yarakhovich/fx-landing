import React, { useReducer, createContext, useContext, useRef } from "react";
export const AppStoreContext = createContext();

const AppStore = (prosp) => {
  const [AppState, AppStateDispatch] = useReducer(
    (state, action) => {
      switch (action?.type) {
        case "setRobots":
          return {
            ...state,
            robots: action.payload,
          };
        case "setSelectedRobots":
          return {
            ...state,
            selectedRobots: action.payload,
          };
        default:
          return state;
      }
    },
    {
      robots: [],
      selectedRobots: [],
      upperFormRef: useRef(),
      bottomFormRef: useRef(),
    }
  );

  return (
    <AppStoreContext.Provider value={{ AppState, AppStateDispatch }}>
      {prosp.children}
    </AppStoreContext.Provider>
  );
};

export const useAppState = () => useContext(AppStoreContext);

export default AppStore;
