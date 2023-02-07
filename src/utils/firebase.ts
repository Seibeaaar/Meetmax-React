export const extractErrorFromRequest = (error: any) => {
	const errorCode = error.code;
	const errorMessage = error.message;
	return {
		message: errorMessage,
		code: errorCode,
	};
};
