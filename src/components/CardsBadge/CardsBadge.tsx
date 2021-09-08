import styled from "styled-components";

interface CardsBadgeProps {
  content?: JSX.Element | string;
}
export default function CardsBadge({content}:CardsBadgeProps) {
  let randomColor = require("randomcolor");
  let color = randomColor();
  return (
    <CardsBadgeContainer badgeColor={color}>
      <div>{content}</div>
    </CardsBadgeContainer>
  );
}

export const CardsBadgeContainer = styled.div<{ badgeColor: string }>`
  background-color: ${(props) => props.badgeColor};
  width: fit-content;
  padding: 0.7em;
  position: relative;
  top: -2.5em;
  border-radius: 20%;
  color: black;
`;
