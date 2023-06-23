import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Snackbar, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { useTranslation } from 'react-i18next';
import Iconify from '../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../components/hook-form';
import CustomInputIcon from '../../components/CustomInputIcon';

import emailIcon from '../../assets/images/icon-email.svg';
import passwordIcon from '../../assets/images/icon-password.svg';
import { logInApi } from '../../api/auth';
import { logIn } from '../../store/authSlice';

// ----------------------------------------------------------------------

const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
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
    await dispatch(logIn(methods.getValues()))
      .unwrap()
      .then((response) => {
        if (!response.user) {
          console.log(response, 'response');
        } else {
          toast.success('Login Successful', { id: 1 });
          navigate(state?.path || '/');
        }
      })
      .catch((error) => {
        setError('email', { type: 'AuthFail', message: 'Incorrect Email' });
        setError('password', { type: 'AuthFail', message: 'Incorrect Password' });
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
          placeholder={t('enterUserEmail')}
          startIcon={<CustomInputIcon position="start" imageIcon={emailIcon} />}
          name="email"
          label={t('email')}
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
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 4 }}>
        <Typography sx={{ textDecoration: 'underline', color: '#0066A4' }}>{t('recoverAccess')}</Typography>

        <LoadingButton
          sx={{ width: '40%', background: '#0066A4' }}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          {t('Enter')}
        </LoadingButton>
      </Stack>
      <Stack sx={{ my: 2 }} direction="row" alignItems="center" gap={1}>
        <Typography>{t('dontHaveAnAccountYet?register')}</Typography>
        <Link to="/register">
          <Typography sx={{ textDecoration: 'underline', color: '#0066A4', cursor: 'pointer' }}>{t('here')}</Typography>
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

export default LoginForm;
