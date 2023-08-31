import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MissionPayload, PayloadActionSort } from '../../types/missions';

const initialState: MissionPayload = {
  query: {
    static_fire_date_utc: {
      $gte: '2015-01-01T00:00:00.000Z',
      $lte: '2019-12-31T23:59:59.999Z',
    },
    success: true,
  },
  options: {
    select: ['id', 'name', 'static_fire_date_utc', 'details', 'links'],
    sort: {},
    page: 1,
    populate: [
      {
        path: 'rocket',
        select: ['flickr_images', 'name'],
      },
    ],
  },
};

export const payloadSlice = createSlice({
  name: 'payload',
  initialState,
  reducers: {
    sort: (state, action: PayloadAction<PayloadActionSort>) => {
      state.options.sort = action.payload;
      state.options.page = 0;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.options.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sort, setPage } = payloadSlice.actions;

export default payloadSlice.reducer;
