import React from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';
import AuthHeader from '../Auth/Header';

const Wrapper = styled.div`
	background: ${colors.white};
	width: 100vw;
	height: 100vh;
`;

interface IPageWrapperProps {
	children: React.ReactNode;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => (
	<Wrapper>
		<AuthHeader />
		{children}
	</Wrapper>
);

export default PageWrapper;
