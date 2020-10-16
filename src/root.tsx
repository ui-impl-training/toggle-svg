import { h } from "preact";
import { useState } from "preact/compat";
import { styled } from "goober";
import { Card } from "./card";
import PersonalImage from "./icon/personal.png";
import EnterpriseImage from "./icon/enterprise.png";

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
      icon={PersonalImage}
      selected={props.selectedCard === "Personal"}
      handleClick={() => {
        props.selectCard("Personal");
      }}
    ></Card>
    <Card
      className="card"
      title="With my team"
      description="Wikis, docs, tasks & projects, all in one place."
      cost="Start for free"
      icon={EnterpriseImage}
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
