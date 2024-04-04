export interface Token {
  uid: string; // User id
  ut: string; //
  cid: string; // Client Account id
  un: string; // UserName
  accType: string;
  eupk: string; //
  mfa: boolean; // Multi Factor Authentication activated
  ra: number; //
  r: string[]; // Roles
  exp: number; // Expiration time
  iat: number; // Issued at time
}
