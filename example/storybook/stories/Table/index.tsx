import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState,
} from "@react-stately/table";
import Table from "./Table";
import React from "react";

export default function TableExample() {
  return (
    <Table
      aria-label="Example static collection table"
      style={{ height: "210px", maxWidth: "400px" }}
    >
      <TableHeader>
        <Column>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
        <Column>Date</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Games</Cell>
          <Cell>File folder</Cell>
          <Cell>6/7/2020</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
        <Row>
          <Cell>Program Files</Cell>
          <Cell>File folder</Cell>
          <Cell>4/7/2021</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
        <Row>
          <Cell>bootmgr</Cell>
          <Cell>System file</Cell>
          <Cell>11/20/2010</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
        <Row>
          <Cell>log.txt</Cell>
          <Cell>Text Document</Cell>
          <Cell>1/18/2016</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
      </TableBody>
    </Table>
  );
}
