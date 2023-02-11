import { TFunction } from 'i18next';

import i18n from '../localization';
import { Language } from '../types/enums/localization';

import { TSchemaErrors, FieldName } from '../schemas/types';

export const changeLanguage = (ln: Language) => i18n.changeLanguage(ln);

export const extractErrorTranslation = (
	t: TFunction<'translation', undefined, 'translation'>,
	errors: TSchemaErrors,
	field: FieldName
) => {
	return t((errors[field]?.message as string) || '');
};
