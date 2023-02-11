import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Text from '../UI/Text';
import colors from '../../style/colors';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin: 16px 0;
`;

const Line = styled.div`
	flex-grow: 1;
	height: 1px;
	background: ${colors.greySecondary};
`;

const OrText = styled(Text)`
	text-transform: uppercase;
`;

const Divider = () => {
	const { t } = useTranslation();
	return (
		<Wrapper>
			<Line />
			<OrText size={16} weight="500">
				{t('auth.or')}
			</OrText>
			<Line />
		</Wrapper>
	);
};

export default Divider;
