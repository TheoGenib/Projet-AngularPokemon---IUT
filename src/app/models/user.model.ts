export interface UserModel {
  name: string;
}

export interface UserPlusModel extends UserModel {
  coins: number | null;
  deck: Array<string> | null;
}
