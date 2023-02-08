import Page from '@layouts/Page';
import Section from '@layouts/Section';
import { FactCard } from '@components/index';

export default function facts(): JSX.Element {
  return (
    <Page title="Facts">
      <Section className="flex items-center justify-center">
        <FactCard count="3" />
      </Section>
    </Page>
  );
}
