import React, { useRef } from "react";
import { Button, Text, View } from "react-native";
import {
  useTable,
  useTableRowGroup,
  useTableHeaderRow,
  useTableColumnHeader,
  useTableRow,
  useTableCell,
} from "@react-native-aria/table";
import { useTableState } from "@react-stately/table";

export default function NewTable(props) {
  console.log(props, "PROPS");
  const ref = useRef();
  let { gridProps } = useTable(props, {}, ref);
  // console.log(collection, gridProps, state, "COLLECTION");

  return (
    <View {...gridProps}>
      {/* <TableRowGroup>
        <TableHeader>
          <TableHeaderData>Name</TableHeaderData>
          <TableHeaderData>Age</TableHeaderData>
          <TableHeaderData>City</TableHeaderData>
        </TableHeader>
      </TableRowGroup>
      <TableRowGroup>
        <TableRow>
          <TableData>Ankit</TableData>
          <TableData>21</TableData>
          <TableData>Gujrat</TableData>
        </TableRow>
        <TableRow>
          <TableData>Mayank</TableData>
          <TableData>21</TableData>
          <TableData>Nashik</TableData>
        </TableRow>
      </TableRowGroup> */}
    </View>
  );
}

export function TableRowGroup({ style, children }) {
  let { rowGroupProps } = useTableRowGroup();
  return (
    <View {...rowGroupProps} style={style}>
      {children}
    </View>
  );
}

export function TableHeader({ children, ...props }) {
  const ref = useRef();
  let { columnHeaderProps } = useTableColumnHeader(
    {
      node: undefined,
    },
    undefined,
    ref
  );
  return (
    <View {...columnHeaderProps} style={{ flexDirection: "row", flex: "1" }}>
      {children}
    </View>
  );
}

export function TableHeaderData({ children, ...props }) {
  const ref = React.useRef();
  let { rowProps } = useTableHeaderRow({ node: undefined }, undefined, ref);

  return (
    <Text style={{ flex: "1", fontWeight: "700" }} {...rowProps} ref={ref}>
      {children}
    </Text>
  );
}

export function TableRow({ children, ...props }) {
  const ref = useRef();
  let { rowProps } = useTableRow(
    {
      node: undefined,
    },
    undefined,
    ref
  );

  return (
    <View {...props} {...rowProps} style={{ flexDirection: "row" }}>
      {children}
    </View>
  );
}

export function TableData({ children, ...props }) {
  const ref = React.useRef();
  let { gridCellProps } = useTableCell({ node: children }, undefined, ref);
  console.log("gridCellProps", { ...gridCellProps });

  return (
    <Text style={{ flex: "1" }} {...props} {...gridCellProps} ref={ref}>
      {children}
    </Text>
  );
}
