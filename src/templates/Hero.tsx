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
        description="One of the renowned Maternity Hospitals in Kalaburagi"
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
            Call{' '}
            <a href="tel:6031112298">
              <strong>084722 25098</strong>{' '}
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
