import React from "react";
import { storiesOf } from "@storybook/react-native";
import Table from "./Table";
import { Wrapper } from "../Wrapper";

export const Example = () => {
  return (
    <Wrapper>
      <Table aria-label="Example static collection table" />
    </Wrapper>
  );
};

storiesOf("Table", module).add("Basic", Example);
