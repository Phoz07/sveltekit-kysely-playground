export interface DB {
  user: userTable;
}

export interface userTable {
  id: number;
  email: string;
  name: string | null;
  avatar_url: string | null;
}
