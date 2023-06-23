import * as Yup from 'yup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Snackbar, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
// components
import { useTranslation } from 'react-i18next';
import Iconify from '../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../components/hook-form';
import CustomInputIcon from '../../components/CustomInputIcon';

import emailIcon from '../../assets/images/icon-email.svg';
import passwordIcon from '../../assets/images/icon-password.svg';
import userIcon from '../../assets/images/icon-user.svg';
import { register } from '../../store/authSlice';

// ----------------------------------------------------------------------

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    const { name, surname, email, password, confirmPassword } = methods.getValues();

    const registerData = {
      name,
      surname,
      email,
      password,
      user_type_id: 1,
      entity_id: 1,
    };

    await dispatch(register(registerData))
      .unwrap()
      .then((response) => {
        console.log('register', response);
        if (!response.user) {
          console.log(response, 'response');
        } else {
          toast.success('Registration Successful', { id: 1 });
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error, 'error');
        setError('email', { type: 'AuthFail', message: 'Email already taken' });
      });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} alignItems={'center'}>
        {/* <RHFTextField id='name' startIcon={<InputAdornment position="start">$</InputAdornment>} name="name" label="Name" /> */}
        <RHFTextField
          sx={{
            border: '1px solid #00000014',
            borderRadius: '5px',
            px: 2,
            py: 1.5,
            boxShadow: '0px 6px 26px #00000014',
          }}
          placeholder={t('enterUsername')}
          startIcon={<CustomInputIcon position="start" imageIcon={userIcon} />}
          name="name"
          label={t('name')}
        />
        <RHFTextField
          sx={{
            border: '1px solid #00000014',
            borderRadius: '5px',
            px: 2,
            py: 1.5,
            boxShadow: '0px 6px 26px #00000014',
          }}
          placeholder={t('Enter surname')}
          startIcon={<CustomInputIcon position="start" imageIcon={userIcon} />}
          name="surname"
          label={t('surname')}
        />
        <RHFTextField
          sx={{
            border: '1px solid #00000014',
            borderRadius: '5px',
            px: 2,
            py: 1.5,
            boxShadow: '0px 6px 26px #00000014',
          }}
          placeholder={t('enterUserEmail')}
          startIcon={<CustomInputIcon position="start" imageIcon={emailIcon} />}
          name="email"
          label={'Email'}
        />

        <RHFTextField
          sx={{
            border: '1px solid #00000014',
            borderRadius: '5px',
            px: 2,
            py: 1.5,
            boxShadow: '0px 6px 26px #00000014',
          }}
          placeholder={t('enterThePassword')}
          startIcon={<CustomInputIcon position="start" imageIcon={passwordIcon} />}
          name="password"
          label={t('password')}
          type={showPassword ? 'text' : 'password'}
          endIcon={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify sx={{ color: 'gray' }} icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
              </IconButton>
            </InputAdornment>
          }
        />
        <RHFTextField
          sx={{
            border: '1px solid #00000014',
            borderRadius: '5px',
            px: 2,
            py: 1.5,
            boxShadow: '0px 6px 26px #00000014',
          }}
          placeholder={t('enterPasswordForConfirmation')}
          startIcon={<CustomInputIcon position="start" imageIcon={passwordIcon} />}
          name="confirmPassword"
          label={t('passwordRepetition')}
          type={showPassword ? 'text' : 'password'}
          endIcon={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify sx={{ color: 'gray' }} icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
              </IconButton>
            </InputAdornment>
          }
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 4 }}>
        {/* <RHFCheckbox name="remember" label={'rememberMe'} /> */}
        <Typography sx={{ textDecoration: 'underline', color: '#0066A4' }}>{t('recoverAccess')}</Typography>
        {/* <Link variant="subtitle2" underline="hover">
          forgotPassword
        </Link> */}
        <LoadingButton
          sx={{ width: '40%', background: '#0066A4' }}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          // loading={isSubmitting}
        >
          {'register'}
        </LoadingButton>
      </Stack>
      <Stack sx={{ my: 2 }} direction="row" alignItems="center" gap={1}>
        <Typography>{t('alreadyHaveAnAccount?SignIn')}</Typography>
        <Link to="/login">
          <Typography sx={{ textDecoration: 'underline', color: '#0066A4', cursor: 'pointer' }}>
            {' '}
            {t('here')}
          </Typography>
        </Link>
      </Stack>

      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </FormProvider>
  );
};

export default RegisterForm;
