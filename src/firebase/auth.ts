import {
	getAuth,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import app from '.';
import { SignInPayload } from '../types/user';
import { extractErrorFromRequest } from '../utils/firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const authWithCredentials = async (credentials: SignInPayload) => {
	const { email, password } = credentials;
	try {
		return await signInWithEmailAndPassword(auth, email, password);
	} catch (e) {
		extractErrorFromRequest(e);
	}
};

const useGoogleAuth = async () => {
	try {
		const authResult = await signInWithPopup(auth, googleProvider);
		return authResult.user;
	} catch (e) {
		extractErrorFromRequest(e);
	}
};

export default {
	authWithCredentials,
	useGoogleAuth,
};
