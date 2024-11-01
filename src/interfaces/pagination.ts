export interface PaginatedResponse<T> {
    info: Info;
    results: T;
  }

  export interface Info {
    count: number;
      pages: number;
      next: string | null;
      prev: string | null;
  }
