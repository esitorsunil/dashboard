// Redux/slices/reportSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reports");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load reports from localStorage", e);
    return undefined;
  }
};

const initialState = {
  reports: loadFromLocalStorage() || [
    { id: 1, name: "Product A", type: "Sales", status: "Completed", date: "2025-04-10" },
    { id: 2, name: "Product B", type: "Revenue", status: "Pending", date: "2025-04-12" },
    { id: 3, name: "Product C", type: "Orders", status: "Completed", date: "2025-04-15" },
    { id: 4, name: "Product D", type: "Traffic", status: "In Review", date: "2025-04-17" },
  ],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    updateReport: (state, action) => {
      const index = state.reports.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state.reports[index] = action.payload;
      }
    },
    addReport: (state, action) => {
      state.reports.push(action.payload);
    },
    deleteReport: (state, action) => {
      state.reports = state.reports.filter(report => report.id !== action.payload);
    },
  },
});

export const { updateReport, addReport, deleteReport } = reportSlice.actions;
export default reportSlice.reducer;
