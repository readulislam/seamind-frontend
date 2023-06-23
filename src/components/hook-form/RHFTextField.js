import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Label } from '@mui/icons-material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextField({ name, id, startIcon, sx, endIcon, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel sx={{ fontWeight: 500, color: '#7E7E7E' }} htmlFor={id}>
            {label}
          </InputLabel>
          <Input
            name={name}
            id={id}
            {...field}
            fullWidth
            value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            error={!!error}
            sx={sx}
            startAdornment={startIcon}
            endAdornment={endIcon}
            {...other}
          />

          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
