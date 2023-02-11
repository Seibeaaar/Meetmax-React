import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import colors from '../../style/colors';
import Text from '../UI/Text';

const RedirectWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	margin: 12px 0;
`;

const RedirectLink = styled(Link)`
	text-decoration: none;
`;

interface IAuthRedirectProps {
	mode: 'signIn' | 'signUp';
}

const redirectRoutes = {
	signIn: '/signUp',
	signUp: '/',
};

const AuthRedirect: React.FC<IAuthRedirectProps> = ({ mode }) => {
	const { t } = useTranslation();
	return (
		<RedirectWrapper>
			<Text size={16}>{t(`auth.${mode}.question`)}</Text>
			<RedirectLink to={redirectRoutes[mode]}>
				<Text color={colors.primary} size={16}>
					{t(`auth.${mode}.redirect`)}
				</Text>
			</RedirectLink>
		</RedirectWrapper>
	);
};

export default AuthRedirect;
