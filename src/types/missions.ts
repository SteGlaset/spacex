export interface MissionPayload {
  query: {
    static_fire_date_utc: {
      $gte: string;
      $lte: string;
    };
    success: boolean;
  };
  options: {
    select: string | string[];
    sort?: PayloadActionSort;
    page: number;
    populate: {
      path: string;
      select: string | string[];
    }[];
  };
}

export interface MissionResult {
  docs: MissionDoc[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface MissionDoc {
  static_fire_date_utc: string;
  links: {
    flickr: {
      small: string[];
      original: string[];
    };
  };
  rocket: {
    flickr_images: string[];
    name: string;
    id: string;
  };
  details: string;
  name: string;
  id: string;
}

export type PayloadActionSort = {
  [key: string]: string;
};
