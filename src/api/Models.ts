export interface Apartment {
    id: number;
    tenantAssociationId: number;
    name: string;
    ownerId: number;
    personNumber: number;
}

export interface Tennant {
    id: number;
    firstName: string;
    lastName: string;
}