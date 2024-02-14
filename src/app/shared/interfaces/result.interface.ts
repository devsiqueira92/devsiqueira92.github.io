interface Result<V> {
  list: V[];
}

interface Filters {
  pageIndex: number;
  pageSize: number;
}

export { Result, Filters };
