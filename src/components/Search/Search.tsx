import styled from "styled-components";
interface SearchProps {
  radius?: string;
  startAdornments?: JSX.Element;
  textIndent?:string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?:string;
  placeholder: string;
}
export default function Search({ radius, startAdornments, textIndent, onChange, value, placeholder }: SearchProps) {
  return (
    <InputSearchContainer>
      {startAdornments}
      <InputSearch radius={radius} textIndent={textIndent} placeholder={placeholder} value={value} onChange={onChange}></InputSearch>
    </InputSearchContainer>
  );
}

export const InputSearch = styled.input<{ radius: string | undefined, textIndent: string | undefined }>`
  padding: 1.5em;
  text-indent: ${(props) => (props.textIndent ? `${props.textIndent}em` : "0.5em")};
  width: -webkit-fill-available;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #c2c2c2;
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  :focus{
    outline: none;
  }
`;

export const InputSearchContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;
