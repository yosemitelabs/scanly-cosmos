import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";
import UserActions from "./UserActions";

const code = `
  code
`;

const config = `
- section_type: user_actions
span: 12
user_actions:
  - event_ref: Event.tobacco_box_delivered
    event_asset_ref: Event.tobacco_box_delivered.assets.tobacco_box
    requires:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: 'not_delivered'
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - operations_manager
          - admin    
  - event_ref: Event.tobacco_box_sorting_complete
    event_asset_ref: Event.tobacco_box_sorting_complete.assets.tobacco_box
    requires:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: 'delivered'
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - operations_manager
          - admin    
  - event_ref: Event.tobacco_box_start_production
    event_asset_ref: Event.tobacco_box_start_production.assets.tobacco_box
    requires:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: 'sorted'
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - operations_manager
          - admin    
  - event_ref: Event.worker_log_cuts
    event_asset_ref: Event.worker_log_cuts.assets.tobacco_box
    requires:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: 'production'
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - data_collector
          - supervisor
          - operations_manager
          - admin    
  - event_ref: Event.worker_log_pouches
    event_asset_ref: Event.worker_log_pouches.assets.tobacco_box
    requires:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: 'production'
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - data_collector
          - supervisor
          - operations_manager
          - admin    
  - event_ref: Event.tobacco_box_log_by_product
    event_asset_ref: Event.tobacco_box_log_by_product.assets.tobacco_box
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - operations_manager
          - admin    
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: 'production'
  - event_ref: Event.tobacco_box_log_master_case
    event_asset_ref: Event.tobacco_box_log_master_case.assets.tobacco_box
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - operations_manager
          - admin    
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: 'production'
  - event_ref: Event.tobacco_box_complete
    event_asset_ref: Event.tobacco_box_complete.assets.tobacco_box
    requires:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: production
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - operations_manager
          - admin    
  - event_ref: Event.tobacco_box_cost
    event_asset_ref: Event.tobacco_box_cost.assets.tobacco_box
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - admin
`;

// note label comes from Event.tobacco_box_cost
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

export default function UserActionsFixture() {
  return (
    <CosmosLayout
      title="User Actions"
      componentName="user_actions"
      code={code}
      config={config}
    >
      <UserActions label="Actions" userActions={userActions} />
    </CosmosLayout>
  );
}
