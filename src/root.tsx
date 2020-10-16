import { h } from "preact";
import { useState } from "preact/compat";
import { styled } from "goober";
import { Card } from "./card";

type CardType = "Personal" | "Enterprise";

interface ContainerProps {
  selectedCard: CardType;
  selectCard: (card: CardType) => void;
}

interface Props extends ContainerProps {
  className?: string;
}

const Component = (props: Props) => (
  <div className={props.className}>
      {props.selectedCard}
    <Card
      title="s"
      description="e"
      cost="e"
      icon="g"
      selected={props.selectedCard === "Personal"}
      handleClick={() => {
        props.selectCard("Personal");
      }}
    ></Card>
    <Card
      title="s"
      description="e"
      cost="e"
      icon="g"
      selected={props.selectedCard === "Enterprise"}
      handleClick={() => {
        props.selectCard("Enterprise");
      }}
    ></Card>
  </div>
);

const StyledComponent = styled(Component)``;

const ContainerComponent = () => {
  const [selectedCard, selectCard] = useState<CardType>("Personal");
  const containerComponent = { selectCard, selectedCard };
  return <StyledComponent {...containerComponent}></StyledComponent>;
};

export const Root = ContainerComponent;
