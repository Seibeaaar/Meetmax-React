import styled from 'styled-components';
import LogoSource from '../../assets/Logo.png';
import Text from './Text';

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

const StyledLogo = styled.img`
	width: 50px;
	height: 50px;
`;

const Logo = () => (
	<LogoWrapper>
		<StyledLogo src={LogoSource} alt="Logo" />
		<Text size={16} weight="500">
			Meetmax
		</Text>
	</LogoWrapper>
);

export default Logo;
