import { h } from "preact";
import { styled } from "goober";

interface PassedProps {
  title: string;
  description: string;
  cost: string;
  icon: string;
  selected: boolean;
  handleClick: () => void;
}

interface Props extends PassedProps {
  className?: string;
}

const Component = (props: Props) => <div className={props.className} onClick={props.handleClick}>
{props.title}
</div>;

const StyledComponent = styled(Component)``;

const ContainerComponent = (props: PassedProps) => {
  return <StyledComponent {...props}></StyledComponent>;
};

export const Card = ContainerComponent;
