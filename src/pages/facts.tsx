import Page from '@layouts/Page';
import Section from '@layouts/Section';
import Card from '@/components/Card';

export default function facts(): JSX.Element {
  return (
    <Page title="Facts">
      <Section className="flex items-center justify-center">
        <Card count="3" />
      </Section>
    </Page>
  );
}
