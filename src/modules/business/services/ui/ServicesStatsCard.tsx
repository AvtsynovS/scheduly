import { BaseCard } from '@shared';

const { Footer, Content } = BaseCard;

type ServicesStatsCardProps = { value: string; description: string };

export const ServicesStatsCard = ({
  value,
  description,
}: ServicesStatsCardProps) => {
  return (
    <BaseCard>
      <Content>{value}</Content>
      <Footer>{description}</Footer>
    </BaseCard>
  );
};
