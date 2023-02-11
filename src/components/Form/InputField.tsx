import React from 'react';
import { Input, InputProps } from 'antd';
import styled from 'styled-components';

import Text from '../UI/Text';
import colors from '../../style/colors';

const InputContainer = styled.div`
	margin: 12px 0;
	.ant-input-prefix {
		margin-right: 12px;
	}
`;

interface IInputFieldProps extends InputProps {
	secured?: boolean;
	error?: string;
}

const InputField: React.FC<IInputFieldProps> = (props) => {
	const InputComponent = props.secured ? Input.Password : Input;
	return (
		<InputContainer>
			<InputComponent {...props} />
			{props.error ? (
				<Text size={16} color={colors.danger}>
					{props.error}
				</Text>
			) : (
				<br />
			)}
		</InputContainer>
	);
};

export default InputField;
