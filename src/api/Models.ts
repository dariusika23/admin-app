export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    isAdminChecked: boolean;
    tennantId?: number
}

export interface UserState {
    user: User;
    setUser: (user: User) => void
}

export interface Admin {
    id: string;
    userId: string;
    email: string;
    password: string
}

export interface Apartment {
    id: number;
    tenantAssociationId?: number;
    name?: string;
    ownerId?: number;
    personNumber?: number;
    hotwater1?: number;
    hotwater2?: number;
    coldwater1?: number;
    coldwater2?: number;
    trash?: number;
    adminsalary?: number;
    subscriptions?: number;
    intercom?: number;
    misc?: number;
    repairs?: number;
    totalmonth?: number;
    remaining?: number;
    penalties?: number;
    total?: number;
    note?: string;
    date?: string;
}

export interface Tennant {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    email?: string;
    isAdminChecked?: boolean
}

export interface TennantAssociation {
    id: number;
    name: string;
    address: string;
}

export interface Units {
    mWh: number;
    mc: number;
}