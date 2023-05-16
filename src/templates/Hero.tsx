import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-20">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">{AppConfig.site_name}</span>
          </>
        }
        description="Goal of our treatment is to adhere to natural process until there is an absolute requirement of scientific intervention."
        button={
          <Link href="">
            <a></a>
          </Link>
        }
      />

      <HeroOneButton
        title={<></>}
        description={
          <>
            Call at{' '}
            <a href="tel:9916116698">
              <strong>9916116698</strong>{' '}
            </a>
            for appointment
          </>
        }
        button={
          <Link href="">
            <a></a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
