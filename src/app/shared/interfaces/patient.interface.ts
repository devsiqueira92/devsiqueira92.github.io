import { BaseEntity } from "./base-entity.interface";

export interface Patient extends BaseEntity {
    name: string;
    phone: string;
    address: string;
    birthDate: string;
}
