import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Text from '../UI/Text';

const IntroWrapper = styled.div`
	text-align: center;
`;

interface IAuthIntroProps {
	mode: 'signIn' | 'signUp';
}

const AuthIntro: React.FC<IAuthIntroProps> = ({ mode }) => {
	const { t } = useTranslation();
	return (
		<IntroWrapper>
			<Text size={42} as={'h1'} weight="700">
				{t(`auth.${mode}.header`)}
			</Text>
			<Text size={24} as={'h4'} weight="500">
				{t(`auth.${mode}.subtitle`)}
			</Text>
		</IntroWrapper>
	);
};

export default AuthIntro;
