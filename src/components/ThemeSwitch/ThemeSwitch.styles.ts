import { styled } from '@theme/config';

export const ThemeSwitchContainer = styled('button', {
  backgroundColor: 'transparent',
  color: '$primary',
  padding: '$0',
  size: '$24',
  br: '$sizes$half',
  center: 'row',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  transition: 'all 200ms ease',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 $sizes$2 $colors$success',
  },
});
