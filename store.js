import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './src/app/Slice/BasketSlice';
import restaurantReducer from './src/app/Slice/RestaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
