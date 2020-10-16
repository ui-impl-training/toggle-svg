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
    <Card
      className="card"
      title="For myself"
      description="write better. Think more clearly. Stay organized."
      cost="Free for 1 person"
      icon="g"
      selected={props.selectedCard === "Personal"}
      handleClick={() => {
        props.selectCard("Personal");
      }}
    ></Card>
    <Card
      className="card"
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

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  > .card {
    margin-top: 12px;
  }
`;

const ContainerComponent = () => {
  const [selectedCard, selectCard] = useState<CardType>("Personal");
  const containerComponent = { selectCard, selectedCard };
  return <StyledComponent {...containerComponent}></StyledComponent>;
};

export const Root = ContainerComponent;
