import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "",
    suggestions: [],
    selectedCustomers: [],
    selectedCustomersSet: [],
    showSuggestions: false,
    templateData: "",
    templateId: 1,
}

export const multiSelectSlice = createSlice({
    name: "multiSelect",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSuggestions: (state, action) => {
            state.suggestions = action.payload;
        },
        setSelectedCustomers: (state, action) => {
            state.selectedCustomers = action.payload;
        },
        setSelectedCustomersSet: (state, action) => {
            state.selectedCustomersSet = action.payload;
        },
        setShowSuggestions: (state, action) => {
            state.showSuggestions = action.payload;
        },
        setTemplateData: (state, action) => {
            state.templateData = action.payload;
        },
        setTemplateId: (state, action) => {
            state.templateId = action.payload;
        },
    }
})

export const {
    setSearchTerm,
    setSuggestions,
    setSelectedCustomers,
    setSelectedCustomersSet,
    setShowSuggestions,
    setTemplateData,
    setTemplateId
} = multiSelectSlice.actions;

export default multiSelectSlice.reducer;