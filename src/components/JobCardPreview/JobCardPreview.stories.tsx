import { Story } from "@storybook/react";
import styled from "styled-components";
import JobCardPreview from "./JobCardPreview";
import Theme from "../Theme";
export default {
  title: "Components/JobCardPreview",
  component: JobCardPreview,
  argTypes: {
    topInformations: {
      defaultValue: ["5h ago", "Full Time"],
      table: {
        category: "Informations Text",
      },
    },
    title: {
      defaultValue: "Senior Software Engineer",
      control: "text",
      table: {
        category: "Informations Text",
      },
    },
    insertBy: {
      defaultValue: "John",
      control: "text",
      table: {
        category: "Informations Text",
      },
    },
    footer: {
      defaultValue: "Italy",
      control: "text",
      table: {
        category: "Informations Text",
      },
    },
    variant: {
        table: {
          category: "Style",
        },
        defaultValue: "light",
        control: {
          type: "select",
          options: ['dark', 'light'],
        },
      },
  },
};

const Template: Story<any> = (args) => (
  <Theme>
    <Container variant={args.variant}>
      <JobCardPreview {...args} />
    </Container>
  </Theme>
);

export const JobCardPreview_ = Template.bind({});
JobCardPreview_.args = {
  topInformations: ["5h ago", "Full Time"],
};

export const Container = styled.div<{variant: string}>`
  margin-top: 2em;
  width: 30%;
  background-color: ${(props) =>
    props.theme[props.variant].background.primaryColor};
  color: ${(props) => props.theme[props.variant].text.primaryColor};
`;
