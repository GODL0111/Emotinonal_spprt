export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export interface Appointment {
    id: string;
    userId: string;
    date: Date;
    time: string;
    details: string;
}

export interface Story {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
}