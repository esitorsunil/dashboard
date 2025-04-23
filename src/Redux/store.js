import { configureStore } from '@reduxjs/toolkit';
import reportReducer from './slices/reportSlice';
import taskReducer from './slices/taskSlice';
import profileReducer from "./slices/profileSlice";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify({
      report: state.report,
      tasks: state.tasks,
      profile: state.profile,
    });
    localStorage.setItem("dashboardState", serializedState);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("dashboardState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    report: reportReducer,
    tasks: taskReducer,
    profile: profileReducer, // ✅ make sure this is included
  },
  preloadedState: loadFromLocalStorage(), // ✅ load saved state
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
