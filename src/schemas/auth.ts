import * as yup from 'yup';

const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
const nameRegex = /^[a-z ,.'-]+$/i;

export const SignInSchema = yup.object().shape({
	email: yup
		.string()
		.email('auth.errors.email.invalid')
		.required('auth.errors.email.required'),
	password: yup.string().required('auth.errors.password.required'),
});

export const SignUpSchema = yup.object().shape({
	email: yup
		.string()
		.email('auth.errors.email.invalid')
		.required('auth.errors.email.required'),
	password: yup
		.string()
		.required('auth.errors.password.required')
		.matches(passwordRegex, 'auth.errors.password.invalid')
		.max(16, 'auth.errors.password.tooLong'),
	firstName: yup
		.string()
		.required('auth.errors.firstName.required')
		.matches(nameRegex, 'auth.errors.firstName.invalid'),
	lastName: yup
		.string()
		.required('auth.errors.lastName.required')
		.matches(nameRegex, 'auth.errors.lastName.invalid'),
});
