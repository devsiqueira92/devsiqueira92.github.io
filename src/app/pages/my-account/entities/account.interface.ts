export interface Account {
  name?: string;
  identificationNumber?: string;

  photo?: string;
  createdAt?: string;
  accountType?: string;
  about?: string;
  address: any; //list of address
  contact: any; //list of contact
}
