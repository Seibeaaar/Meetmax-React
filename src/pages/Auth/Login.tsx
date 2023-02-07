import PageWrapper from '../../components/UI/PageWrapper';
import AuthIntro from '../../components/Auth/Intro';

const Login = () => {
	return (
		<PageWrapper>
			<AuthIntro mode="signIn" />
		</PageWrapper>
	);
};

export default Login;
