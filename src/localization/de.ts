export default {
	auth: {
		signIn: {
			header: 'Login',
			subtitle: 'Willkommen zurück, Sie wurden vermisst',
			question: 'Haben Sie noch keinen Account?',
			redirect: 'Erstellen ein Account',
			submit: 'Login',
			rememberMe: 'Angemeldet bleiben',
			forgotPassword: 'Passwort vergessen?',
		},
		signUp: {
			header: 'Erste Schritte',
			subtitle: 'Erstellen Sie ein Account, um sich mit Personen zu verbinden',
			question: 'Sie haben bereits ein Account?',
			redirect: 'Login',
			submit: 'Erstellen ein Account',
			male: 'Mann',
			female: 'Frau',
		},
		google: 'Login mit Google',
		facebook: 'Login mit Facebook',
		or: 'oder',
		forgotPassword: {
			header: 'Passwort vergessen?',
			subtitle:
				'Geben Sie Ihre Daten ein, um einen Link zum Zurücksetzen zu erhalten',
			submit: 'Senden',
			navigateBack: 'Zurück zu Login',
		},
		errors: {
			email: {
				invalid: 'Ungültige E-Mail',
				required: 'E-Mail erforderlich',
			},
			password: {
				invalid: 'Ungültige Password',
				required: 'Password erforderlich',
			},
			name: {
				invalid: 'Ungültige Name',
				required: 'Name erforderlich',
			},
		},
		placeholders: {
			email: 'Email',
			password: 'Password',
			name: 'Name',
			dob: 'Geburtsdatum',
		},
	},
};
