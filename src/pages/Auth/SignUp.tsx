import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import {
	MailOutlined,
	LockOutlined,
	SmileOutlined,
	UserOutlined,
} from '@ant-design/icons';

import { checkSubmitDisabled } from '../../utils/schemas';
import { FieldName, ISignUpSchema } from '../../schemas/types';
import { extractErrorTranslation } from '../../utils/localization';
import { SignUpSchema } from '../../schemas/auth';

import PageWrapper from '../../components/UI/PageWrapper';
import AuthIntro from '../../components/Auth/Intro';
import SocialAuth from '../../components/Auth/Social';
import InputField from '../../components/Form/InputField';
import Divider from '../../components/Auth/Divider';
import Text from '../../components/UI/Text';
import {
	AuthContainer,
	SignInControls,
	RememberMe,
	SubmitButton,
} from './styled';
import AuthRedirect from '../../components/Auth/Redirect';

const inputs = [
	{
		field: 'email',
		prefix: <MailOutlined />,
	},
	{
		field: 'firstName',
		prefix: <SmileOutlined />,
	},
	{
		field: 'lastName',
		prefix: <UserOutlined />,
	},
	{
		field: 'password',
		secured: true,
		prefix: <LockOutlined />,
	},
];

const SignUp = () => {
	const { t } = useTranslation();
	const {
		handleSubmit,
		formState: { errors, dirtyFields },
		control,
	} = useForm({
		resolver: yupResolver(SignUpSchema),
		mode: 'onChange',
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			password: '',
		},
	});

	const onSubmit = (data: ISignUpSchema) => {
		console.log({
			...data,
		});
	};

	return (
		<PageWrapper>
			<AuthIntro mode="signUp" />
			<AuthContainer>
				<SocialAuth />
				<Divider />
				<form>
					{inputs.map((input) => (
						<Controller
							key={input.field}
							control={control}
							name={input.field as FieldName}
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
					<SubmitButton
						onClick={handleSubmit(onSubmit)}
						size="large"
						type="primary"
						disabled={checkSubmitDisabled(
							errors,
							['email', 'password', 'firstName', 'lastName'],
							dirtyFields
						)}
					>
						{t('auth.signUp.submit')}
					</SubmitButton>
				</form>
			</AuthContainer>
			<AuthRedirect mode="signUp" />
		</PageWrapper>
	);
};

export default SignUp;
