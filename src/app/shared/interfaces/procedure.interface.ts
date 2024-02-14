import { BaseEntity } from "./base-entity.interface";

export interface Procedure extends BaseEntity {
    name: string;
    steps: string;
    member: string;
}
