import * as React from "react";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState,
} from "@react-stately/table";
import { mergeProps } from "@react-aria/utils";
import { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import {
  useTableSelectAllCheckbox,
  useTableSelectionCheckbox,
} from "@react-aria/table";
import {
  useTable,
  useTableRowGroup,
  useTableHeaderRow,
  useTableRow,
  useTableCell,
  useTableColumnHeader,
} from "@react-native-aria/table";
import { useToggleState } from "@react-stately/toggle";
import { useCheckbox } from "@react-aria/checkbox";

export default function App() {
  return (
    <Table
      accessibilityLabel="Example static collection table"
      style={{ height: "210px", maxWidth: "400px" }}
      selectionMode="multiple"
    >
      <TableHeader>
        <Column>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Games</Cell>
          <Cell>File folder</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
        <Row>
          <Cell>Program Files</Cell>
          <Cell>File folder</Cell>
          <Cell>4/7/2021</Cell>
        </Row>
        <Row>
          <Cell>bootmgr</Cell>
          <Cell>System file</Cell>
          <Cell>11/20/2010</Cell>
        </Row>
        <Row>
          <Cell>log.txt</Cell>
          <Cell>Text Document</Cell>
          <Cell>1/18/2016</Cell>
        </Row>
      </TableBody>
    </Table>
  );
}
function TableSelectAllCell({ column, state }) {
  let ref = useRef();
  let isSingleSelectionMode = state.selectionManager.selectionMode === "single";

  let { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );

  // console.log("####", columnHeaderProps);

  let { checkboxProps } = useTableSelectAllCheckbox(state);
  let inputRef = useRef(null);
  let { inputProps } = useCheckbox(
    checkboxProps,
    useToggleState(checkboxProps),
    inputRef
  );

  return (
    <th {...columnHeaderProps} ref={ref}>
      <input
        {...inputProps}
        ref={inputRef}
        style={{ visibility: isSingleSelectionMode ? "hidden" : "visible" }}
      />
    </th>
  );
}

function TableRow({ item, children, state }) {
  let ref = useRef();
  let isSelected = state.selectionManager.isSelected(item.key);

  let { rowProps } = useTableRow({ node: item }, state, ref);

  // console.log("$$$$", rowProps);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <tr
      style={{
        background: isSelected
          ? "blueviolet"
          : item.index % 2
          ? "var(--spectrum-alias-highlight-hover)"
          : "none",
        color: isSelected ? "white" : null,
        outline: isFocusVisible ? "2px solid orange" : "none",
      }}
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
    >
      {children}
    </tr>
  );
}

function TableCheckboxCell({ cell, state }) {
  let ref = useRef();
  let { gridCellProps } = useTableCell({ node: cell }, state, ref);
  let { checkboxProps } = useTableSelectionCheckbox(
    { key: cell.parentKey },
    state
  );

  let inputRef = useRef(null);
  let { inputProps } = useCheckbox(
    checkboxProps,
    useToggleState(checkboxProps),
    inputRef
  );

  return (
    <td {...gridCellProps} ref={ref}>
      <input {...inputProps} />
    </td>
  );
}

function TableCell({ cell, state }) {
  let ref = useRef();
  let { gridCellProps } = useTableCell({ node: cell }, state, ref);
  // console.log("!!!", gridCellProps);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <td
      {...mergeProps(gridCellProps, focusProps)}
      style={{
        padding: "5px 10px",
        outline: isFocusVisible ? "2px solid orange" : "none",
        cursor: "default",
      }}
      ref={ref}
    >
      {cell.rendered}
    </td>
  );
}

function TableRowGroup({ type: Element, style, children }) {
  let { rowGroupProps } = useTableRowGroup();

  // console.log("row group", rowGroupProps);
  return (
    <Element {...rowGroupProps} style={style}>
      {children}
    </Element>
  );
}

function TableHeaderRow({ item, state, children }) {
  let ref = useRef();
  let { rowProps } = useTableHeaderRow({ node: item });
  return (
    <tr {...rowProps} ref={ref}>
      {children}
    </tr>
  );
}

function TableColumnHeader({ column, state }) {
  let ref = useRef();

  let { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );

  // console.log("COL-HEADER", columnHeaderProps);

  let { isFocusVisible, focusProps } = useFocusRing();
  let arrowIcon = state.sortDescriptor?.direction === "ascending" ? "▲" : "▼";

  return (
    <th
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      style={{
        textAlign: column.colspan > 1 ? "center" : "left",
        padding: "5px 10px",
        outline: isFocusVisible ? "2px solid orange" : "none",
        cursor: "default",
      }}
      ref={ref}
    >
      {column.rendered}
      {column.props.allowsSorting && (
        <span
          aria-hidden="true"
          style={{
            padding: "0 2px",
            visibility:
              state.sortDescriptor?.column === column.key
                ? "visible"
                : "hidden",
          }}
        >
          {arrowIcon}
        </span>
      )}
    </th>
  );
}

function Table(props) {
  let state = useTableState({
    ...props,
    showSelectionCheckboxes: props.selectionMode === "multiple",
  });
  let ref = useRef();
  let { collection } = state;

  let { gridProps } = useTable(props, state, ref);
  // console.log("&&&&&", gridProps);

  return (
    <table {...gridProps} ref={ref} style={{ borderCollapse: "collapse" }}>
      <TableRowGroup
        type="thead"
        style={{
          borderBottom: "2px solid var(--spectrum-global-color-gray-800)",
        }}
      >
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) =>
              column.props.isSelectionCell ? (
                <TableSelectAllCell
                  key={column.key}
                  column={column}
                  state={state}
                />
              ) : (
                <TableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                />
              )
            )}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup style={{}} type="tbody">
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              cell.props.isSelectionCell ? (
                <TableCheckboxCell key={cell.key} cell={cell} state={state} />
              ) : (
                <TableCell key={cell.key} cell={cell} state={state} />
              )
            )}
          </TableRow>
        ))}
      </TableRowGroup>
    </table>
  );
}
