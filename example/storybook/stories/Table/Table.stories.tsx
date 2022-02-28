import React from "react";
import { storiesOf } from "@storybook/react-native";
import TableExample from "./index";
import NewTable from "./NewTable";
import { Wrapper } from "../Wrapper";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState,
} from "@react-stately/table";
import { Text, View } from "react-native";

export const Example = () => {
  return (
    <Wrapper>
      <NewTable aria-label="Example static collection table" />
    </Wrapper>
  );
};

storiesOf("Table", module).add("Basic", Example);
