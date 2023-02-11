import styled from 'styled-components';
import { Select } from 'antd';
import i18n from '../../localization';

import { languages } from '../../localization';
import { changeLanguage } from '../../utils/localization';

import Logo from '../UI/Logo';
import { Language } from '../../types/enums/localization';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 24px;
`;

const AuthHeader = () => {
	return (
		<Wrapper>
			<Logo />
			<Select
				defaultValue={i18n.language as Language}
				options={languages}
				onChange={changeLanguage}
				style={{
					width: '10%',
				}}
			/>
		</Wrapper>
	);
};

export default AuthHeader;
