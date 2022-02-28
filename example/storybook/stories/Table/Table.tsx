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
  useTable,
  useTableRowGroup,
  useTableHeaderRow,
  useTableColumnHeader,
  useTableRow,
  useTableCell,
} from "@react-native-aria/table";
import React from "react";

export default function Table(props) {
  let { selectionMode, selectionBehavior } = props;
  let state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  let ref = useRef();
  let { collection } = state;
  let { gridProps } = useTable(props, state, ref);

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
            {[...headerRow.childNodes].map((column) => (
              <TableColumnHeader
                key={column.key}
                column={column}
                state={state}
              />
            ))}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup type="tbody">
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) => (
              <TableCell key={cell.key} cell={cell} state={state} />
            ))}
          </TableRow>
        ))}
      </TableRowGroup>
    </table>
  );
}

function TableRowGroup({ type: Element, style, children }) {
  let { rowGroupProps } = useTableRowGroup();
  return (
    <Element {...rowGroupProps} style={style}>
      {children}
    </Element>
  );
}

function TableHeaderRow({ item, state, children }) {
  let ref = useRef();
  let { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  console.log(rowProps, "TABLE HEADER ROW PROPS");

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

function TableRow({ item, children, state }) {
  let ref = useRef();
  console.log(item, children, "FROM ROW");
  let { rowProps, isPressed } = useTableRow(
    {
      node: item,
    },
    state,
    ref
  );
  //   let { isFocusVisible, focusProps } = useFocusRing();
  console.log(rowProps, "ROW PROPS");
  return (
    <tr style={{}} {...rowProps} ref={ref}>
      {children}
    </tr>
  );
}

function TableCell({ cell, state }) {
  let ref = useRef();
  //   console.log(cell, state, "CELL");
  let { gridCellProps } = useTableCell({ node: cell }, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  //   console.log(gridCellProps, "GRIDCELLPROPS");

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
