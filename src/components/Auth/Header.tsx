import styled from 'styled-components';
import { Select } from 'antd';

import { languages } from '../../localization';
import { changeLanguage } from '../../utils/localization';

import Logo from '../UI/Logo';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 24px;
`;

const AuthHeader = () => (
	<Wrapper>
		<Logo />
		<Select
			defaultValue="en"
			options={languages}
			onChange={changeLanguage}
			style={{
				width: '10%',
			}}
		/>
	</Wrapper>
);

export default AuthHeader;
