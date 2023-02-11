import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons';
import colors from '../../style/colors';
import Text from '../UI/Text';

const SocialsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
`;

const StyledButton = styled.button`
	background: ${colors.greyTertiary};
	display: flex;
	align-items: center;
	padding: 0 24px;
	flex-grow: 1;
	border: none;
	border-radius: 8px;
	cursor: pointer;
`;

const SocialIcon = styled.div`
	margin-right: 24px;
	align-items: center;
	display: flex;
	justify-content: center;
`;

const providers = [
	{
		name: 'google',
		icon: (
			<GoogleOutlined
				style={{
					fontSize: 30,
				}}
			/>
		),
	},
	{
		name: 'facebook',
		icon: (
			<FacebookFilled
				style={{
					fontSize: 30,
				}}
			/>
		),
	},
];

const SocialAuth = () => {
	const { t } = useTranslation();
	return (
		<SocialsContainer>
			{providers.map((provider) => (
				<StyledButton key={provider.name}>
					<SocialIcon>{provider.icon}</SocialIcon>
					<Text weight="700" size={16}>
						{t(`auth.${provider.name}`)}
					</Text>
				</StyledButton>
			))}
		</SocialsContainer>
	);
};

export default SocialAuth;
