import { styled } from '@theme/config';

export const ButtonContainer = styled('button', {
  padding: '$10 $28',
  boxShadow: 'none',
  border: 'none',
  backgroundColor: '$primary',
  borderRadius: '$sizes$12',
  color: '$loContrast',
  fontSize: '$info',
  fontWeight: '$normal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 $sizes$2 $colors$success',
  },
});
