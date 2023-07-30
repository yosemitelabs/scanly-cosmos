import { Accordion, Badge, Progress, Table, Text } from "@mantine/core";
import React, { useMemo } from "react";
import type { SortingState } from "@tanstack/react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface AssetTableNewProps {
  elements?: any;
  label: string;
}

const defaultData: any[] = [
  {
    customer: "bandit",
    invoice_number: "1",
    box_number: "1",
    tobacco_box_status: "delivered",
    delivered_weight_lbs: 4.0,
    progress_sample: 80,
  },
  {
    customer: "bandit",
    invoice_number: "447",
    box_number: "99",
    tobacco_box_status: "production",
    delivered_weight_lbs: 2.0,
    progress_sample: 100,
  },
];

const columnData: any[] = [
  {
    column_label: "Customer",
    prop_ref: "Asset.tobacco_box.props.customer",
    //assuming we get asset,
    asset: {
      prop_name: "customer",
    },
  },
  {
    column_label: "Invoice",
    prop_ref: "Asset.tobacco_box.props.invoice_number",
    asset: {
      prop_name: "invoice_number",
    },
  },
  {
    column_label: "Box number",
    prop_ref: "Asset.tobacco_box.props.box_number",
    asset: {
      prop_name: "box_number",
    },
  },
  {
    column_label: "Status",
    prop_ref: "Asset.tobacco_box.props.tobacco_box_status",
    component_type: "badge",
    component_props: {
      color: "green",
    },
    asset: {
      prop_name: "tobacco_box_status",
    },
  },
  {
    column_label: "Delivered weight",
    prop_ref: "Asset.tobacco_box.props.delivered_weight_lbs",
    asset: {
      prop_name: "delivered_weight_lbs",
    },
  },
  {
    column_label: "Progress sample",
    prop_ref: "Asset.tobacco_box.props.progress_sample",
    component_type: "progress",
    component_props: {
      color: "red",
    },
    asset: {
      prop_name: "progress_sample",
    },
  },
];

const columnHelper = createColumnHelper<any>();

const AssetTableNew: React.FC<AssetTableNewProps> = ({ label }) => {
  const [data] = React.useState(() => [...defaultData]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const renderColumnCell = (value: any, info: any) => {
    if (value?.component_type) {
      switch (value?.component_type) {
        case "badge":
          return <Badge {...value?.component_props}>{info?.getValue()}</Badge>;
        case "progress":
          return (
            <Progress value={info?.getValue()} {...value?.component_props} />
          );
        default:
          break;
      }
    }

    return info?.getValue();
  };

  const columns: any = useMemo(() => {
    return columnData.map((value) =>
      columnHelper.accessor(value?.asset?.prop_name, {
        header: () => <Text>{value?.column_label}</Text>,
        cell: (info) => renderColumnCell(value, info),
      })
    );
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  console.log("COLUMNS", columns);

  return (
    <Accordion
      defaultValue={label}
      styles={{
        item: { border: "none", background: "#F8F9FA" },
        content: {
          background: "#FFF",
          paddingTop: "16px",
          borderRadius: "8px",
          overflowX: "auto",
        },
        panel: {
          background: "#FFFFFF",
          border: "1px solid #E9ECEF",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
          overflow: "hidden",
        },
      }}
    >
      <Accordion.Item value={label}>
        <Accordion.Control>{label}</Accordion.Control>
        <Accordion.Panel>
          <Table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: " 🔼",
                              desc: " 🔽",
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AssetTableNew;
