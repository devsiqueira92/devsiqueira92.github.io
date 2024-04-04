import { BaseEntity } from './base-entity.interface';

export interface Patient extends BaseEntity {
  name: string;
  contact: string;
  address: string;
  birthDate: Date;
}
