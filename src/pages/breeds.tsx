import Page from '@layouts/Page';
import Section from '@layouts/Section';
import { BreedCard } from '@components/index';

export default function breeds(): JSX.Element {
  return (
    <Page title="Breeds">
      <Section className="flex items-center justify-center">
        <BreedCard />
      </Section>
    </Page>
  );
}
