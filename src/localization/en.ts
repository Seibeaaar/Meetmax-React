export default {
	auth: {
		signIn: {
			header: 'Sign In',
			subtitle: 'Welcome back, you\'ve been missed',
			question: 'Don\'t have an account yet?',
			redirect: 'Create an account',
			submit: 'Sign In',
			rememberMe: 'Remember me',
			forgotPassword: 'Forgot password?',
		},
		signUp: {
			header: 'Getting Started',
			subtitle: 'Create an account to connect with people',
			question: 'Already have an account?',
			redirect: 'Sign In',
			submit: 'Create an account',
			male: 'Male',
			female: 'Female',
		},
		google: 'Log in with Google',
		facebook: 'Log in with Facebook',
		or: 'or',
		rememberMe: 'Remember me',
		forgotPassword: {
			header: 'Forgot password?',
			subtitle: 'Enter your details to receive a reset link',
			submit: 'Send',
			navigateBack: 'Back to Sign In',
		},
		errors: {
			email: {
				invalid: 'Invalid email',
				required: 'Email required',
			},
			password: {
				invalid:
					'Password should be at least 6 characters long, including 1 digit, 1 special character, 1 uppercase & 1 lowercase letter',
				required: 'Password required',
				tooLong: 'Password shouldn\'t be longer than 16 characters',
			},
			firstName: {
				invalid: 'Invalid first name',
				required: 'First name required',
			},
			lastName: {
				invalid: 'Invalid last name',
				required: 'Last name required',
			},
		},
		placeholders: {
			email: 'Email',
			password: 'Password',
			firstName: 'First name',
			lastName: 'Last name',
			dob: 'Date of birth',
		},
	},
};
