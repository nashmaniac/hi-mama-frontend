import Login from '../components/Login';
import Signup from '../components/Signup';
const authRoutes = [
    {
        path: '/auth/login',
        component: Login
    },
		{
			path: '/auth/signup',
			component: Signup
		}
];

export default authRoutes;