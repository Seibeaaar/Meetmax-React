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
		rememberMe: 'Angemeldet bleiben',
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
				invalid:
					'Passwort sollte mindestens 6 Zeichen lang sein, einschließlich 1 Ziffer, 1 Sonderzeichen, 1 Großbuchstabe und 1 Kleinbuchstabe',
				required: 'Password erforderlich',
				tooLong: 'Passwort sollte nicht länger als 16 Zeichen sein',
			},
			firstname: {
				invalid: 'Ungültige Vorname',
				required: 'Vorname erforderlich',
			},
			lastName: {
				invalid: 'Ungültige Nachname',
				required: 'Nachname erforderlich',
			},
		},
		placeholders: {
			email: 'Email',
			password: 'Password',
			firstName: 'Vorname',
			lastName: 'Nachname',
			dob: 'Geburtsdatum',
		},
	},
};
