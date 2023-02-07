import i18n from '../localization';
import { Language } from '../types/enums/localization';

export const changeLanguage = (ln: Language) => i18n.changeLanguage(ln);
