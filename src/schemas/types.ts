import { FieldErrors, UseFormGetValues } from 'react-hook-form';

export type FieldName = 'email' | 'password' | 'firstName' | 'lastName';

export interface IUserCredentials {
	email: string;
	password: string;
}

export type ISignInSchema = IUserCredentials

export interface ISignUpSchema extends IUserCredentials {
	firstName: string;
	lastName: string;
}

type DirtyField = {
	[field in FieldName]: boolean | undefined;
};

export type TSchemaErrors = FieldErrors<any>;
export type TFormValues = UseFormGetValues<any>;
export type TDirtyFields = Partial<Readonly<DirtyField>>;
