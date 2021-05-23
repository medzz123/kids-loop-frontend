import { styled } from '@theme/config';

export const AuthenticationTemplateContainer = styled('div', {
  m: 'auto',
  maxWidth: '$xs',
  minWidth: '$xs',
});

export const ImageContainer = styled('div', {
  size: '$60',
  mb: '$40',
});

export const Elevation = styled('div', {
  backgroundColor: '$loContrast',
  boxShadow: '$colors$shadow',
  padding: '$20',
  borderRadius: '$sizes$12',
  display: 'flex',
  flexDirection: 'column',
  mb: '$12',
});

export const ActionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  a: {
    marginLeft: '$12',
  },
});
