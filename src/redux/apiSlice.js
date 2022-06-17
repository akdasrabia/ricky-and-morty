import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";

export const getCharactersAsync = createAsyncThunk(
  "api/getCharactersAsync",
  async () => {
    const res = await axios(`${baseUrl}/character`);
    return await res.data;
  }
);

export const getLocationAsync = createAsyncThunk(
  "api/getLocationAsync",
  async () => {
    const res = await axios(`${baseUrl}/location`);
    console.log("efsdfds")
    console.log(res.data)
    return await res.data;
  }
);

export const getEpisodeAsync = createAsyncThunk(
  "api/getEpisodeAsync",
  async () => {
    const res = await axios(`${baseUrl}/episode`);
    return await res.data;
  }
);

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    characters: [],
    episode: [],
    location: [],
    isLoading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: {
    //get characters
    [getCharactersAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCharactersAsync.fulfilled]: (state, action) => {
        console.log(action.payload.results)
      state.characters = action.payload.results;
      state.isLoading = false;
    },
    [getCharactersAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.name;
    },
    //get episode
    [getEpisodeAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getEpisodeAsync.fulfilled]: (state, action) => {
      state.episode = action.payload.results;
      state.isLoading = false;
    },
    [getEpisodeAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.name;
    },
    //get location
    [getLocationAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getLocationAsync.fulfilled]: (state, action) => {
      state.location = action.payload.results;
      state.isLoading = false;
    },
    [getLocationAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.name;
    },
  },
});


export default apiSlice.reducer;
