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
    <div className="logoWrapper">
      <img src={props.icon}></img>
    </div>
    <div className="content">
      <p className="title">{props.title}</p>
      <p>{props.description}</p>
      <p className="cost">{props.cost}</p>
    </div>
    <div className="check">
      {props.selected ? <CheckCircle></CheckCircle> : <Circle></Circle>}
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  border: solid 1px black;
  border-color: ${(props) => (props.selected ? "blue" : "gray")};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  & > .logoWrapper {
    width: 33%;
    height: 33%;
    > img {
      width: 100%;
    }
  }
  & > .content {
    width: 57%;
    & > .title {
      font-size: 20px;
      font-weight: bold;
    }
    & > .cost {
      color: ${(props) => (props.selected ? "blue" : "gray")};
    }
  }
  & > .check {
    width: 10%;
  }
`;

const ContainerComponent = (props: PassedProps) => {
  return <StyledComponent {...props}></StyledComponent>;
};

export const Card = ContainerComponent;
