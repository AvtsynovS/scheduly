import { Card } from './BaseCard';
import { Content, Footer, Label, TopRight, Trend } from './BaseCard.slots';

export const BaseCard = Object.assign(Card, {
  Content,
  Label,
  TopRight,
  Footer,
  Trend,
});
