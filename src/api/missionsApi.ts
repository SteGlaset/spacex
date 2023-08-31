import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MissionPayload, MissionResult } from '../types/missions';

const BASE_URL = 'https://api.spacexdata.com';

export const missionsApi = createApi({
  reducerPath: 'missionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMissions: builder.query<MissionResult, MissionPayload>({
      query: (payload) => ({
        url: '/v5/launches/query',
        method: 'POST',
        body: payload,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.docs.push(...newItems.docs);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetMissionsQuery } = missionsApi;
