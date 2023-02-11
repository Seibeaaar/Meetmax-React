import styled from 'styled-components';
import { Button } from 'antd';

export const AuthContainer = styled.div`
	max-width: 33vw;
	-webkit-box-shadow: 0px -6px 30px -30px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px -6px 30px -30px rgba(0, 0, 0, 0.75);
	box-shadow: 0px -6px 30px -30px rgba(0, 0, 0, 0.75);
	border-radius: 16px;
	padding: 24px;
	margin: 0 auto;
`;

export const SignInControls = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const RememberMe = styled.div`
	margin-left: 24px;
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const SubmitButton = styled(Button)`
	width: 100%;
	margin-top: 12px;
`;
