import styled from 'styled-components';
import { FontWeight, TextTag } from '../../types/enums/styles';
import colors from '../../style/colors';

interface ITextProps {
	tag?: TextTag;
	size: number;
	lineHeight?: number;
	weight?: FontWeight;
	color?: string;
}

const Text = styled.p<ITextProps>`
	font-size: ${(props) => props.size}px;
	line-height: ${(props) => props.lineHeight || props.size * 1.2}px;
	font-weight: ${(props) => props.weight || '400'};
	color: ${(props) => props.color || colors.greyPrimary};
`;

export default Text;
