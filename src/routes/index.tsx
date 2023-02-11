import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/signUp',
		element: <SignUp />,
	},
]);

export default router;
