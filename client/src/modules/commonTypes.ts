import React from 'react';

export enum RequestActionType {
    GET = 'GET',
    POST = 'POST',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
}

export type AnyAction = {
    type: string;
    payload: any;
};


export type ErrorType = {
    status?: number;
    error?: string;
    message?: string;
};

export type CredentialType = {
    username: string;
    password: string;
    remember: boolean;
};

export type UserType = {
    id: number;
    username: string;
    role: 'user' | 'admin';
    access_token?: string;
    token_type?: string;
};

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;
