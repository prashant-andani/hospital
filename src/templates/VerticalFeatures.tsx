import { Section } from '../layout/Section';
import Stars from '../stars/Stars';
import { AppConfig } from '../utils/AppConfig';

const VerticalFeatures = () => (
  <Section
    title=""
    description="The hospital boasts a team of highly skilled and experienced obstetrician, gynecologist, pediatrician, and nurses who are dedicated to ensuring the well-being of both mother and child. They provide personalized and comprehensive care throughout the entire pregnancy journey, from prenatal consultations and check-ups to labor and delivery."
  >
    <section>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet your doctors
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600"></p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src="" alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Nandini Bhosgi
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Obstetrics and Gynecology
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-20 w-20 rounded-full"
                  src="/assets/images/revanasiddappa_bhosgi.jpeg"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Revanasiddappa Bhosgi
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Child care, Neonatologist
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Section>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Testimonials
      </h2>
      <section>
        <figure className="max-w-screen-md">
          <div className="flex items-center mb-4 text-yellow-300">
            <Stars></Stars>
          </div>
          <blockquote>
            <p className="text-1xl font-semibold text-gray-900 dark:text-white">
              My experience of visiting {AppConfig.title} is very satisfying.
              Doctor is a good listener and provides a good treatment.
            </p>
          </blockquote>
          <figcaption className="flex items-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                Shravani
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                Fashion Designer
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>
      <br />
      <section>
        <figure className="max-w-screen-md">
          <div className="flex items-center mb-4 text-yellow-300">
            <Stars></Stars>
          </div>
          <blockquote>
            <p className="text-1xl font-semibold text-gray-900 dark:text-white">
              {AppConfig.title} has very professional doctors and staff, patient
              friendly. We had caesarean delivery there and are fully satisfied.
              5 stars to this hospital.
            </p>
          </blockquote>
          <figcaption className="flex items-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                Suhasini
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                Homemaker
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>
    </Section>
    {/* <VerticalFeatureRow
      title="FAQs"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Address"
      description="<strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */}
  </Section>
);

export { VerticalFeatures };
