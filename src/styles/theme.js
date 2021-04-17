import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
};

export const darkTheme = {
  body: '#080808',
  fontColor: '#fff',
  inputColor: '#ccc',
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
