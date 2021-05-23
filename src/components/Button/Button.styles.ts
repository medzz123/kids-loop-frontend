import { styled } from '@theme/config';

export const ButtonContainer = styled('button', {
  padding: '$12 $20',
  boxShadow: 'none',
  border: 'none',
  backgroundColor: '$main',
  color: '$background',
  fontSize: '$normal',
  fontWeight: '$regular',
  cursor: 'pointer',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 $sizes$2 $colors$success',
  },
});
