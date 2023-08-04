import { Accordion, Checkbox, Flex, Table, Text } from "@mantine/core";
import type { HTMLProps } from "react";
import React, { useMemo } from "react";
import type { SortingState } from "@tanstack/react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import CustomBadge from "../Badge/Badge";
import CustomProgress from "../Progress/Progress";
import UserActions from "../UserActions/UserActions";

interface AssetTableNewProps {
  elements?: any;
  label: string;
}

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, indeterminate]);

  return (
    <Checkbox
      type="checkbox"
      ref={ref as any}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}

const defaultData: any[] = [
  {
    customer: "bandit",
    invoice_number: "1",
    box_number: "1",
    tobacco_box_status: "delivered",
    delivered_weight_lbs: 4.0,
    progress_sample: 40,
  },
  {
    customer: "bandit",
    invoice_number: "447",
    box_number: "99",
    tobacco_box_status: "production",
    delivered_weight_lbs: 2.0,
    progress_sample: 100,
  },
  {
    customer: "bandit",
    invoice_number: "2",
    box_number: "2",
    tobacco_box_status: "production",
    delivered_weight_lbs: 4.0,
    progress_sample: 10,
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
    badge_styles: {
      size: "lg",
      colors: [
        {
          color: "green",
          val: "delivered",
        },
        {
          color: "yellow",
          val: "production",
        },
      ],
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
    type: "progress",
    progress_styles: {
      size: "md",
      colors: [
        {
          color: "green",
          val: 100,
        },
        {
          color: "yellow",
          val: 60,
        },
        {
          color: "red",
          val: 20,
        },
      ],
    },
    asset: {
      prop_name: "progress_sample",
    },
  },
];

const userActions = [
  {
    label: "Box delivered",
    scanlyRef: "Event.tobacco_box_delivered.assets.tobacco_box",
    scanlyEventRef: "Event.tobacco_box_delivered",
  },
  {
    label: "Sorting complete",
    scanlyRef: "Event.tobacco_box_sorting_complete.assets.tobacco_box",
    scanlyEventRef: "Event.tobacco_box_sorting_complete",
  },
  {
    label: "Start production",
    scanlyRef: "Event.tobacco_box_start_production.assets.tobacco_box",
    scanlyEventRef: "Event.tobacco_box_start_production",
  },
  {
    label: "Worker log cuts",
    scanlyRef: "Event.worker_log_cuts.assets.tobacco_box",
    scanlyEventRef: "Event.worker_log_cuts",
  },
  {
    label: "Worker log pouches",
    scanlyRef: "Event.worker_log_pouches.assets.tobacco_box",
    scanlyEventRef: "Event.worker_log_pouches",
  },
  {
    label: "Log by product",
    scanlyRef: "Event.tobacco_box_log_by_product.assets.tobacco_box",
    scanlyEventRef: "Event.tobacco_box_log_by_product",
  },
  {
    label: "Log master case",
    scanlyRef: "Event.tobacco_box_log_master_case.assets.tobacco_box",
    scanlyEventRef: "Event.tobacco_box_log_master_case",
  },
  {
    label: "Box complete",
    scanlyRef: "Event.tobacco_box_complete.assets.tobacco_box",
    scanlyEventRef: "Event.tobacco_box_complete",
  },
  {
    label: "Box cost",
    scanlyRef: "Event.tobacco_box_cost.assets.tobacco_box",
    scanlyEventRef: "Event.tobacco_box_cost",
  },
];

const columnHelper = createColumnHelper<any>();

const AssetTableNew: React.FC<AssetTableNewProps> = ({ label }) => {
  const [data] = React.useState(() => [...defaultData]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const renderColumnCell = (value: any, info: any) => {
    if (value?.component_type) {
      switch (value?.component_type) {
        case "badge":
          return (
            <CustomBadge
              value={info?.getValue()}
              badgeStyles={value?.badge_styles}
            />
          );
        case "progress":
          return (
            <CustomProgress
              value={info?.getValue()}
              progressStyles={value?.progress_styles}
            />
          );
        default:
          break;
      }
    }

    return info?.getValue();
  };

  const columns: any = useMemo(() => {
    const data = columnData.map((value) =>
      columnHelper.accessor(value?.asset?.prop_name, {
        header: () => <Text>{value?.column_label}</Text>,
        cell: (info) => renderColumnCell(value, info),
      })
    );

    return [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      ...data,
    ];
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

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
          {Object.keys(rowSelection).length > 0 && (
            <UserActions
              userActions={userActions}
              label={`Actions for boxes selected: ${
                Object.keys(rowSelection).length
              }`}
              isDefaultOpen
            />
          )}

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
                          <Flex
                            sx={{
                              cursor: header.column.getCanSort()
                                ? "pointer"
                                : "initial",
                            }}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            <Text mr="xs">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </Text>
                            {{
                              asc: " 🔼",
                              desc: " 🔽",
                            }[header.column.getIsSorted() as string] ?? null}
                          </Flex>
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
