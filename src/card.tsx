import { h } from "preact";
import { styled } from "goober";
import CheckCircle from "./icon/checked-check";
import Circle from "./icon/empty-check";

interface PassedProps {
  className: string;
  title: string;
  description: string;
  cost: string;
  icon: string;
  selected: boolean;
  handleClick: () => void;
}

interface Props extends PassedProps {}

const Component = (props: Props) => (
  <div className={props.className} onClick={props.handleClick}>
    <div className="logo"></div>
    <div className="content">
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.cost}</p>
    </div>
    <div className="check">
      {props.selected ? <CheckCircle></CheckCircle> : <Circle></Circle>}
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  border: solid 1px black;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  & > .check {
    height: 16px;
    width: 16px;
  }
`;

const ContainerComponent = (props: PassedProps) => {
  return <StyledComponent {...props}></StyledComponent>;
};

export const Card = ContainerComponent;
