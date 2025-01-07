import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice  from "./slices/counter";

export default configureStore({
    reducer: {
      //name:nameofsclice
      favoritemovie:FavouriteSlice ,
    },
  });
  