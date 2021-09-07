import styled from "styled-components";
export default function CardsBadge() {
  let randomColor = require("randomcolor");
  let color = randomColor();
  return (
    <CardsBadgeContainer badgeColor={color}>
      <div>gfff</div>
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
