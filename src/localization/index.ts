import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import de from './de';

export const languages = [
	{
		label: 'English',
		value: 'en',
	},
	{
		label: 'Deutsch',
		value: 'de',
	},
];

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		de: {
			translation: de,
		},
	},
	fallbackLng: 'en',
});

export default i18n;
