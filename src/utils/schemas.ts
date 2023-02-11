import _ from 'lodash';

import { FieldName, TDirtyFields, TSchemaErrors } from '../schemas/types';

export const checkSubmitDisabled = (
	errors: TSchemaErrors,
	formFields: FieldName[],
	dirtyFields: TDirtyFields
) => {
	return (
		!_.isEmpty(errors) ||
		!formFields.every((field) => Object.keys(dirtyFields).includes(field))
	);
};
