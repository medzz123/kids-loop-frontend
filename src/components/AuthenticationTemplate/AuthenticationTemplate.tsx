import { Box } from '@components/Box';
import Link from '@components/Link';
import Menu from '@components/Menu';
import Text from '@components/Text';
import ThemeSwitch from '@components/ThemeSwitch';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';

import { AuthenticationTemplateProps } from './AuthenticationTemplate.models';
import {
  ActionsContainer,
  AuthenticationTemplateContainer,
  Elevation,
  ImageContainer,
} from './AuthenticationTemplate.styles';

const AuthenticationTemplate: FunctionComponent<AuthenticationTemplateProps> = (props) => {
  const { title, children } = props;

  const router = useRouter();

  const changeLocale = (locale: 'en' | 'de') => {
    router.push(router.asPath, router.asPath, { locale: locale });
  };

  return (
    <AuthenticationTemplateContainer>
      <Elevation data-testid="authenticationTemplate">
        <ImageContainer>
          <Image src="/logo.svg" width="60px" height="60px" />
        </ImageContainer>
        <Text variant="h1" level="h2" weight="bold" mb="large">
          {title}
        </Text>
        {children}
      </Elevation>
      <ActionsContainer>
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <Box css={{ mr: '$12' }}>
            <ThemeSwitch />
          </Box>
          <Menu
            label="Select Language"
            items={[
              {
                label: 'English',
                onClick: () => changeLocale('en'),
              },
              {
                label: 'Danish',
                onClick: () => changeLocale('de'),
              },
            ]}
          />
        </Box>
        <Box css={{ display: 'flex' }}>
          <Link href="/help" variant="secondary">
            Help
          </Link>
          <Link href="/privacy" variant="secondary">
            Privacy
          </Link>
          <Link href="/term" variant="secondary">
            Term
          </Link>
        </Box>
      </ActionsContainer>
    </AuthenticationTemplateContainer>
  );
};

export default AuthenticationTemplate;
