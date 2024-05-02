import { BaseEntity } from './base-entity.interface';

export interface Settings extends BaseEntity {
  startTime?: Date;
  endTime?: Date;
}
