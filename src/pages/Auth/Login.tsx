import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { checkSubmitDisabled } from '../../utils/schemas';
import { SignInSchema } from '../../schemas/auth';
import { FieldName, ISignInSchema } from '../../schemas/types';
import { extractErrorTranslation } from '../../utils/localization';

import PageWrapper from '../../components/UI/PageWrapper';
import AuthIntro from '../../components/Auth/Intro';
import SocialAuth from '../../components/Auth/Social';
import AuthRedirect from '../../components/Auth/Redirect';
import InputField from '../../components/Form/InputField';
import Divider from '../../components/Auth/Divider';
import Text from '../../components/UI/Text';
import {
	AuthContainer,
	SignInControls,
	RememberMe,
	SubmitButton,
} from './styled';

const inputs = [
	{
		field: 'email',
		prefix: <MailOutlined />,
	},
	{
		field: 'password',
		secured: true,
		prefix: <LockOutlined />,
	},
];

const Login = () => {
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	const { t } = useTranslation();
	const {
		handleSubmit,
		formState: { errors, dirtyFields },
		control,
	} = useForm({
		resolver: yupResolver(SignInSchema),
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: ISignInSchema) => {
		console.log({
			...data,
			rememberMe,
		});
	};

	return (
		<PageWrapper>
			<AuthIntro mode="signIn" />
			<AuthContainer>
				<SocialAuth />
				<Divider />
				<form>
					{inputs.map((input) => (
						<Controller
							key={input.field}
							control={control}
							name={input.field as 'email' | 'password'}
							render={({ field: { onChange } }) => (
								<InputField
									prefix={input.prefix}
									secured={input.secured}
									onChange={onChange}
									size="large"
									error={extractErrorTranslation(
										t,
										errors,
										input.field as FieldName
									)}
									placeholder={t(`auth.placeholders.${input.field}`) as string}
								/>
							)}
						/>
					))}
					<SignInControls>
						<RememberMe>
							<Checkbox
								checked={rememberMe}
								onChange={() => setRememberMe(!rememberMe)}
							/>
							<Text size={16}>{t('auth.rememberMe')}</Text>
						</RememberMe>
					</SignInControls>
					<SubmitButton
						onClick={handleSubmit(onSubmit)}
						size="large"
						type="primary"
						disabled={checkSubmitDisabled(
							errors,
							['email', 'password'],
							dirtyFields
						)}
					>
						{t('auth.signIn.submit')}
					</SubmitButton>
				</form>
			</AuthContainer>
			<AuthRedirect mode="signIn" />
		</PageWrapper>
	);
};

export default Login;
