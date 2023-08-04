export const config = `
#region user kerith
schema_name: UserConfig
username: kerith
locale: en_us
hashed_password: $2b$12$uCz5wvkAVLJgnClfmo87Fu/FYB1sZJfkkhzHKFYEK5EewCshSZ4XK
groups:
  - admin
---
#endregion
#region user edward
schema_name: UserConfig
username: edward
locale: es_do
hashed_password: $2b$12$uCz5wvkAVLJgnClfmo87Fu/FYB1sZJfkkhzHKFYEK5EewCshSZ4XK
groups:
  - admin
---
#endregion
#region user tablet1
schema_name: UserConfig
username: tablet1
locale: es_do
hashed_password: $2b$12$O7N2Yolt0wDQeU/ZzRJpReEi0CCvpQ3e2ZJW6j6rrAmdxBp/Dkki.
groups:
  - admin
---
#endregion
#region user tablet1
schema_name: UserConfig
username: tablet2
locale: es_do
hashed_password: $2b$12$O7N2Yolt0wDQeU/ZzRJpReEi0CCvpQ3e2ZJW6j6rrAmdxBp/Dkki.
groups:
  - admin
---
#endregion
#region user denis
schema_name: UserConfig
username: denis
locale: en_us
hashed_password: $2b$12$uCz5wvkAVLJgnClfmo87Fu/FYB1sZJfkkhzHKFYEK5EewCshSZ4XK
groups:
  - admin
---
#endregion
#region user anthony
schema_name: UserConfig
username: anthony
locale: es_do
hashed_password: $2b$12$uCz5wvkAVLJgnClfmo87Fu/FYB1sZJfkkhzHKFYEK5EewCshSZ4XK
groups:
  - operations_manager
---
#endregion
#region user anthony
schema_name: UserConfig
username: kheri
locale: en_us
hashed_password: $2b$12$uCz5wvkAVLJgnClfmo87Fu/FYB1sZJfkkhzHKFYEK5EewCshSZ4XK
groups:
  - admin
---
#endregion
#region groups admin
schema_name: Groups
group_name: admin
context_props:
  - prop_name: customer
    options:
      - firelyfe
      - bandit
  - prop_name: role
    options:
      - data_collector
      - hr
      - operations_manager
      - admin
      - supervisor
---
#endregion
#region groups data_collector
schema_name: Groups
group_name: data_collector
context_props:
  - prop_name: customer
    options:
      - firelyfe
      - bandit
  - prop_name: role
    options:
      - data_collector
---
#endregion
#region groups operations_manager
schema_name: Groups
group_name: operations_manager
context_props:
  - prop_name: customer
    options:
      - firelyfe
      - bandit
  - prop_name: role
    options:
      - operations_manager
---
#endregion
#region view home
schema_name: View
view_name: home
path: "/"
label: Home
sections:
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.tobacco_invoice_ordered
        label: Create Tobacco Invoice
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - operations_manager
          - admin
  - section_type: asset_table
    span: 6
    label: Boxes
    table_ref: AssetTable.tobacco_box_table
    expanded: true
    filters:
      - key_type: asset_prop
        val_type: literal
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: not_equals
        val: "complete"
    # user_actions:
    #   - event_ref: Event.tobacco_box_complete
    #     event_asset_ref: Event.tobacco_box_complete.assets.tobacco_box
    #     requires:
    #       - key_type: context_prop
    #         context_prop_name: role
    #         operation: in
    #         val_type: literal
    #         val:
    #           - operations_manager
    #           - admin
  - section_type: asset_table
    span: 6
    label: Invoices
    table_ref: AssetTable.tobacco_invoice_table
    expanded: true
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - operations_manager
          - admin
  - section_type: asset_table
    span: 6
    label: Completed Boxes
    table_ref: AssetTable.tobacco_box_table
    filters:
      - key_type: asset_prop
        val_type: literal
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val: "complete"
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - operations_manager
          - admin

    # requires:
    #   - key_type: context_prop
    #     context_prop_name: customer
    #     operation: equals
    #     val_type: literal
    #     val: firelyfe
---
#endregion
#region view workers
schema_name: View
view_name: workers
path: "/workers"
label: Workers
sections:
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.create_worker
        label: Add worker
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.worker_log_attendance
        label: Log attendance
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - supervisor
          - admin
  - section_type: asset_table
    span: 6
    label: My Workers
    table_ref: AssetTable.worker_table
    expanded: true
    filters:
      - key_type: asset_prop
        val_type: current_user
        prop_ref: Asset.worker.props.worker_supervisor
        operation: equals
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - supervisor
          - admin
  - section_type: asset_table
    span: 6
    label: All workers
    table_ref: AssetTable.worker_table
    filters:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin
---
#endregion
#region view products
schema_name: View
view_name: products
path: "/products"
label: Products
requires:
  - key_type: context_prop
    context_prop_name: role
    operation: in
    val_type: literal
    val:
      - operations_manager
      - admin
sections:
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.create_product_sku
        label: Add Product SKU
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - admin
  - section_type: asset_table
    span: 6
    label: Product packaging count
    table_ref: AssetTable.product_sku_packaging
    expanded: true
---
#endregion
#region view metrics
schema_name: View
view_name: metrics
path: "/metrics"
label: Metrics
sections:
  - section_type: metrics
    span: 6
    prod_iframe: "https://my-deployment-0a8760.kb.us-east-1.aws.found.io:9243/s/firelyfe/app/dashboards?auth_provider_hint=firetest#/view/99203dc0-cf25-11ed-bbe1-6fd648d186bb?embed=true&_g=(refreshInterval%3A(pause%3A!f%2Cvalue%3A5000)%2Ctime%3A(from%3Anow-4d%2Cto%3Anow))&show-time-filter=true"
    dev_iframe: "https://my-deployment-0a8760.kb.us-east-1.aws.found.io:9243/s/firelyfe/app/dashboards?auth_provider_hint=firetest#/view/e5688370-cf18-11ed-b423-15139ce43efb?embed=true&_g=(refreshInterval%3A(pause%3A!f%2Cvalue%3A5000)%2Ctime%3A(from%3Anow-4d%2Cto%3Anow))&show-time-filter=true"
requires:
  - key_type: context_prop
    context_prop_name: role
    operation: equals
    val_type: literal
    val:
      - hr
      - admin
---
#endregion
#region view tobacco_invoice_view
schema_name: View
view_name: tobacco_invoice_view
asset_ref: Asset.tobacco_invoice
path: "/"
label: Tobacco Invoice
sections:
  - section_type: qr_code
    span: 6
    asset_label_prop_ref: Asset.tobacco_invoice.props.tobacco_invoice_label
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.tobacco_box_created
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        requires:
          - key_type: context_prop
            context_prop_name: role
            operation: in
            val_type: literal
            val:
              - operations_manager
              - admin
  - section_type: asset_table
    span: 6
    label: Tobacco Boxes
    asset_list_prop_ref: Asset.tobacco_invoice.props.tobacco_boxes
    table_ref: AssetTable.tobacco_box_table
    expanded: true
  - section_type: prop_table
    span: 6
    prop_refs:
      - Asset.tobacco_invoice.props.vendor
      - Asset.tobacco_invoice.props.customer
      - Asset.tobacco_invoice.props.invoice_number
      - Asset.tobacco_invoice.props.tobacco_boxes
      - Asset.tobacco_invoice.props.total_bad_leaf_lbs
      - Asset.tobacco_invoice.props.total_expected_lbs
      - Asset.tobacco_invoice.props.total_delivered_lbs
      - Asset.tobacco_invoice.props.total_expected_measured_variance_lbs
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - admin
          - operations_manager
  - section_type: prop_table
    span: 6
    prop_refs:
      - Asset.tobacco_invoice.props.total_cost
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - admin
  - section_type: event_history
    span: 6
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - admin
---
#endregion
#region view product_sku_view
schema_name: View
view_name: product_sku_view
asset_ref: Asset.product_sku
path: "/"
label: Product SKU
sections:
  - section_type: qr_code
    span: 6
    asset_label_prop_ref: Asset.product_sku.props.product_name
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.set_product_packaging_count
        event_asset_ref: Event.set_product_packaging_count.assets.product_sku
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - operations_manager
          - admin
  - section_type: prop_table
    span: 6
  - section_type: event_history
    span: 6
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin
---
#endregion
#region view worker_view
schema_name: View
view_name: worker_view
asset_ref: Asset.worker
path: "/"
label: Worker
sections:
  - section_type: qr_code
    span: 6
    asset_label_prop_ref: Asset.worker.props.worker_name
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.archive_worker
        event_asset_ref: Event.archive_worker.assets.worker
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin
  - section_type: prop_table
    span: 6
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin
  - section_type: event_history
    span: 6
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin

---
#endregion
#region view tobacco_box_view
schema_name: View
view_name: tobacco_box_view
asset_ref: Asset.tobacco_box
path: "/"
label: Tobacco Box
sections:
  - section_type: qr_code
    span: 6
    asset_label_prop_ref: Asset.tobacco_box.props.tobacco_box_label
  - section_type: asset_link
    span: 6
    prop_ref: Asset.tobacco_box.props.tobacco_invoice
    asset_label_prop_ref: Asset.tobacco_invoice.props.tobacco_invoice_label
    link_label: Invoice
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - operations_manager
          - admin
  - section_type: user_actions
    span: 6
    user_actions:
      - event_ref: Event.tobacco_box_delivered
        event_asset_ref: Event.tobacco_box_delivered.assets.tobacco_box
        requires:
          - key_type: asset_prop
            prop_ref: Asset.tobacco_box.props.tobacco_box_status
            operation: equals
            val_type: literal
            val: "not_delivered"
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
            val: "delivered"
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
            val: "sorted"
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
            val: "production"
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
            val: "production"
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
            val: "production"
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
            val: "production"
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
  - section_type: prop_key_val
    span: 6
    headers:
      - Cutter
      - Cuts weight lbs
    label: Cuts (lbs) by worker
    prop_ref: Asset.tobacco_box.props.cuts_by_worker
    key_asset_label_prop_ref: Asset.worker.props.worker_name
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - data_collector
          - supervisor
          - operations_manager
          - admin
  - section_type: prop_key_val
    span: 6
    headers:
      - Poucher
      - Pouches count
    label: Cuts (lbs) by worker
    prop_ref: Asset.tobacco_box.props.pouches_by_worker
    key_asset_label_prop_ref: Asset.worker.props.worker_name
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - data_collector
          - supervisor
          - operations_manager
          - admin
  - section_type: prop_table
    span: 6
    prop_refs:
      - Asset.tobacco_box.props.box_number
      - Asset.tobacco_box.props.customer
      - Asset.tobacco_box.props.tobacco_type
      - Asset.tobacco_box.props.tobacco_box_status
  - section_type: prop_table
    span: 6
    prop_refs:
      - Asset.tobacco_box.props.invoice_number
      - Asset.tobacco_box.props.weight_expected_lbs
      - Asset.tobacco_box.props.delivered_weight_lbs
      - Asset.tobacco_box.props.tobacco_for_original_cuts_weight_lbs
      - Asset.tobacco_box.props.whole_leaf_weight_lbs
      - Asset.tobacco_box.props.tobacco_for_special_edition_weight_lbs
      - Asset.tobacco_box.props.total_cuts_produced_weight_lbs
      - Asset.tobacco_box.props.total_picadura_produced_weight_lbs
      - Asset.tobacco_box.props.rejected_unusable_leaf_lbs
      - Asset.tobacco_box.props.rejected_usable_leaf_lbs
      - Asset.tobacco_box.props.pouches_produced
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - operations_manager
          - admin
  - section_type: prop_table
    span: 6
    prop_refs:
      - Asset.tobacco_box.props.cost_per_lb
      - Asset.tobacco_box.props.total_cost
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - admin
  - section_type: event_history
    span: 6
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - admin
---
#endregion
#region AssetTable tobacco_invoice_table
schema_name: AssetTable
table_name: tobacco_invoice_table
asset_ref: Asset.tobacco_invoice
label: Tobacco Invoice
columns:
  - column_label: Customer
    prop_ref: Asset.tobacco_invoice.props.customer
  - column_label: Vendor
    prop_ref: Asset.tobacco_invoice.props.vendor
  - column_label: Weight delivered (boxes)
    prop_ref: Asset.tobacco_invoice.props.weight_delivered_lbs
  - column_label: Total bad leaf
    prop_ref: Asset.tobacco_invoice.props.total_bad_leaf_lbs
  - column_label: Invoice number
    prop_ref: Asset.tobacco_invoice.props.invoice_number
filters:
  - key_type: asset_prop
    prop_ref: Asset.tobacco_invoice.props.customer
    operation: equals
    val_type: context_prop_name_val
    context_prop_name_val: customer
sort_props:
  - prop_ref: Asset.tobacco_invoice.props.ts
---
#endregion
#region AssetTable tobacco_box_table
schema_name: AssetTable
table_name: tobacco_box_table
asset_ref: Asset.tobacco_box
label: Tobacco Box
columns:
  - column_label: Customer
    prop_ref: Asset.tobacco_box.props.customer
  - column_label: Invoice
    prop_ref: Asset.tobacco_box.props.invoice_number
  - column_label: Box number
    prop_ref: Asset.tobacco_box.props.box_number
  - column_label: Status
    prop_ref: Asset.tobacco_box.props.tobacco_box_status
  - column_label: Delivered weight
    prop_ref: Asset.tobacco_box.props.delivered_weight_lbs
sort_props:
  - prop_ref: Asset.tobacco_box.props.invoice_number
  - prop_ref: Asset.tobacco_box.props.box_number
row_colors:
  - filters:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: complete
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.cuts_yield_pct
        operation: gt
        val_type: literal
        val: .5
    color: green
  - filters:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: complete
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.cuts_yield_pct
        operation: gt
        val_type: literal
        val: .4
    color: yellow
  - filters:
      - key_type: asset_prop
        prop_ref: Asset.tobacco_box.props.tobacco_box_status
        operation: equals
        val_type: literal
        val: complete
    color: red
filters:
  - key_type: asset_prop
    prop_ref: Asset.tobacco_box.props.customer
    operation: equals
    val_type: context_prop_name_val
    context_prop_name_val: customer
---
#endregion
#region AssetTable worker_table
schema_name: AssetTable
table_name: worker_table
asset_ref: Asset.worker
label: Worker
columns:
  - column_label: Tenure
    prop_ref: Asset.worker.props.time_since_start_date
  - column_label: Name
    prop_ref: Asset.worker.props.worker_name
  - column_label: Customer
    prop_ref: Asset.worker.props.worker_customer
  - column_label: Activity
    prop_ref: Asset.worker.props.worker_activity
  - column_label: Supervisor
    prop_ref: Asset.worker.props.worker_supervisor
  - column_label: Time Since Last Activity
    prop_ref: Asset.worker.props.last_activity_elapsed_time
sort_props:
  - prop_ref: Asset.worker.props.time_since_start_date
user_actions:
  - event_ref: Event.worker_log_attendance
    event_asset_ref: Event.archive_worker.assets.worker
  - event_ref: Event.archive_worker
    event_asset_ref: Event.archive_worker.assets.worker
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin
  - event_ref: Event.worker_log_cuts
    event_asset_ref: Event.archive_worker.assets.worker
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - data_collector
          - admin
  - event_ref: Event.worker_log_pouches
    event_asset_ref: Event.archive_worker.assets.worker
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - data_collector
          - admin
---
#endregion
#region AssetTable product_sku_packaging
schema_name: AssetTable
table_name: product_sku_packaging
asset_ref: Asset.product_sku
label: Product Components
filters:
  - key_type: asset_prop
    prop_ref: Asset.product_sku.props.customer
    operation: equals
    val_type: context_prop_name_val
    context_prop_name_val: customer
columns:
  - column_label: Product Name
    prop_ref: Asset.product_sku.props.product_name
  - column_label: Customer
    prop_ref: Asset.product_sku.props.customer
  - column_label: num_unused_master_cases
    prop_ref: Asset.product_sku.props.num_unused_master_cases
  - column_label: num_unused_displays
    prop_ref: Asset.product_sku.props.num_unused_displays
  - column_label: num_unused_pouches
    prop_ref: Asset.product_sku.props.num_unused_pouches
---
#endregion
#region Asset product_sku
schema_name: Asset
asset_name: product_sku
props:
  - type: dynamic
    prop_name: customer
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_product_sku.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.create_product_sku.props.customer
        operation: set
  - type: dynamic
    prop_name: product_name
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_product_sku.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.create_product_sku.props.product_name
        operation: set
  - type: dynamic
    prop_name: pouches_per_master_case
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_product_sku.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.create_product_sku.props.pouches_per_master_case
        operation: set
  - type: dynamic
    prop_name: displays_per_master_case
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_product_sku.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.create_product_sku.props.displays_per_master_case
        operation: set
  - type: dynamic
    prop_name: num_unused_master_cases
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.set_product_packaging_count.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.set_product_packaging_count.props.num_unused_master_cases
        operation: set
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_log_master_case.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_master_case.props.num_master_cases
        operation: sub
  - type: dynamic
    prop_name: num_unused_pouches
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.set_product_packaging_count.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.set_product_packaging_count.props.num_unused_pouches
        operation: set
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_log_master_case.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_master_case.props.used_pouches
        operation: sub
  - type: dynamic
    prop_name: num_unused_displays
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.set_product_packaging_count.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.set_product_packaging_count.props.num_unused_displays
        operation: set
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_log_master_case.assets.product_sku
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_master_case.props.used_displays
        operation: sub
---
#endregion
#region Asset tobacco_invoice
schema_name: Asset
asset_name: tobacco_invoice
props:
  - type: dynamic
    prop_name: ts
    function_name: add_sub_set
    prop_type: ts
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_invoice_ordered.assets.tobacco_invoice
        ref_type: event_prop
        prop_ref: Event.tobacco_invoice_ordered.props.ts
        operation: set
  - type: dynamic
    prop_name: customer
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_invoice_ordered.assets.tobacco_invoice
        ref_type: event_prop
        prop_ref: Event.tobacco_invoice_ordered.props.customer
        operation: set
  - type: dynamic
    prop_name: total_cost
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        prop_ref: Asset.tobacco_box.props.total_cost
        operation: add
  - type: dynamic
    prop_name: weight_delivered_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        prop_ref: Asset.tobacco_box.props.delivered_weight_lbs
        operation: add
  - type: dynamic
    prop_name: vendor
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_invoice_ordered.assets.tobacco_invoice
        ref_type: event_prop
        prop_ref: Event.tobacco_invoice_ordered.props.vendor
        operation: set
  - type: dynamic
    prop_name: invoice_number
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_invoice_ordered.assets.tobacco_invoice
        ref_type: event_prop
        prop_ref: Event.tobacco_invoice_ordered.props.invoice_number
        operation: set
  - type: dynamic
    prop_name: tobacco_invoice_label
    function_name: string_join
    prop_type: str
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_invoice.props.vendor
        operation: append
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_invoice.props.invoice_number
        operation: append
  - type: dynamic
    prop_name: tobacco_boxes
    function_name: asset_list
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    prop_type: asset_list
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_asset
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        operation: append
  - type: dynamic
    prop_name: total_expected_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.weight_expected_lbs
        operation: add
  - type: dynamic
    prop_name: total_delivered_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        prop_ref: Asset.tobacco_box.props.delivered_weight_lbs
        operation: add
  - type: dynamic
    prop_name: total_bad_leaf_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        prop_ref: Asset.tobacco_box.props.bad_leaf_lbs
        operation: add
  - type: dynamic
    prop_name: total_expected_measured_variance_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        prop_ref: Asset.tobacco_box.props.delivered_weight_lbs
        operation: add
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        prop_ref: Asset.tobacco_box.props.weight_expected_lbs
        operation: sub
---
#endregion
#region Asset tobacco_box
schema_name: Asset
asset_name: tobacco_box
props:
  - type: dynamic
    prop_name: ts
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.ts
        operation: set
  - type: dynamic
    prop_name: customer
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        prop_ref: Asset.tobacco_invoice.props.customer
        operation: set
  - type: dynamic
    prop_name: cuts_by_worker
    function_name: event_key_val
    prop_type: key_val
    args:
      - type: event_history
        match_event_asset_ref: Event.worker_log_cuts.assets.tobacco_box
        ref_type: event_asset
        event_asset_ref: Event.worker_log_cuts.assets.worker
        operation: key
      - type: event_history
        match_event_asset_ref: Event.worker_log_cuts.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.worker_log_cuts.props.cuts_weight_lbs
        operation: add
  - type: dynamic
    prop_name: pouches_by_worker
    function_name: event_key_val
    prop_type: key_val
    args:
      - type: event_history
        match_event_asset_ref: Event.worker_log_pouches.assets.tobacco_box
        ref_type: event_asset
        event_asset_ref: Event.worker_log_pouches.assets.worker
        operation: key
      - type: event_history
        match_event_asset_ref: Event.worker_log_pouches.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.worker_log_pouches.props.pouches_produced_count
        operation: add
  - type: dynamic
    prop_name: tobacco_type
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.tobacco_type
        operation: set
  - type: dynamic
    prop_name: cost_per_lb
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_cost.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_cost.props.cost_per_lb
        operation: set
  - type: dynamic
    prop_name: whole_leaf_weight_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_sorting_complete.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_sorting_complete.props.whole_leaf_weight_lbs
        operation: set
  - type: dynamic
    prop_name: tobacco_for_special_edition_weight_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_sorting_complete.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_sorting_complete.props.tobacco_for_special_edition_weight_lbs
        operation: set
  - type: dynamic
    prop_name: rejected_unusable_leaf_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_log_by_product.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_by_product.props.rejected_unusable_leaf_lbs
        operation: set
  - type: dynamic
    prop_name: rejected_usable_leaf_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_log_by_product.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_by_product.props.rejected_usable_leaf_lbs
        operation: set
  - type: dynamic
    prop_name: bad_leaf_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_log_by_product.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_by_product.props.bad_leaf_lbs
        operation: set
  - type: dynamic
    prop_name: invoice_number
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        prop_ref: Asset.tobacco_invoice.props.invoice_number
        operation: set
  - type: dynamic
    prop_name: vendor
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        prop_ref: Asset.tobacco_invoice.props.vendor
        operation: set
  - type: dynamic
    prop_name: box_number
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.box_number
        operation: set
  - type: dynamic
    prop_name: invoice_label
    function_name: string_join
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        prop_ref: Asset.tobacco_invoice.props.invoice_number
        operation: append
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        prop_ref: Asset.tobacco_invoice.props.vendor
        operation: append
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.customer
        operation: append
  - type: dynamic
    prop_name: tobacco_box_label
    function_name: string_join
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        prop_ref: Asset.tobacco_invoice.props.invoice_number
        operation: append
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        prop_ref: Asset.tobacco_invoice.props.vendor
        operation: append
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.customer
        operation: append
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.tobacco_type
        operation: append
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.box_number
        operation: append
  - type: dynamic
    prop_name: tobacco_box_status
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.tobacco_box_status
        operation: set
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_delivered.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_delivered.props.tobacco_box_status
        operation: set
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_sorting_complete.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_sorting_complete.props.tobacco_box_status
        operation: set
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_start_production.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_start_production.props.tobacco_box_status
        operation: set
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_complete.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_complete.props.tobacco_box_status
        operation: set
  - type: dynamic
    prop_name: weight_expected_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_created.props.weight_expected_lbs
        operation: add
  - type: dynamic
    prop_name: delivered_weight_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_delivered.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_delivered.props.weight_lbs
        operation: add
  - type: dynamic
    prop_name: tobacco_invoice
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_created.assets.tobacco_box
        ref_type: event_asset
        event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
        operation: set
  - type: dynamic
    prop_name: tobacco_for_original_cuts_weight_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_sorting_complete.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_sorting_complete.props.tobacco_for_original_cuts_weight_lbs
        operation: add
  - type: dynamic
    prop_name: total_cuts_produced_weight_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.worker_log_cuts.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.worker_log_cuts.props.cuts_weight_lbs
        operation: add
  - type: dynamic
    prop_name: total_picadura_produced_weight_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: event_history
        match_event_asset_ref: Event.tobacco_box_log_by_product.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_by_product.props.picadura_produced_weight_lbs
        operation: add
  - type: dynamic
    prop_name: cuts_yield_pct
    function_name: mul_div
    prop_type: float
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.total_cuts_produced_weight_lbs
        operation: mul
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.tobacco_for_original_cuts_weight_lbs
        operation: div
  - type: dynamic
    prop_name: expected_measured_variance_lbs
    function_name: add_sub_set
    prop_type: float
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.weight_expected_lbs
        operation: sub
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.delivered_weight_lbs
        operation: add
  - type: dynamic
    prop_name: pouches_produced
    function_name: add_sub_set
    prop_type: int
    args:
      - type: event_history
        match_event_asset_ref: Event.worker_log_pouches.assets.tobacco_box
        ref_type: event_prop
        prop_ref: Event.worker_log_pouches.props.pouches_produced_count
        operation: add
  - type: dynamic
    prop_name: total_cost
    function_name: mul_div
    prop_type: float
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.weight_expected_lbs
        operation: mul
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.cost_per_lb
        operation: mul
  - type: dynamic
    prop_name: cost_per_cut_lb
    function_name: mul_div
    prop_type: float
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.total_cost
        operation: mul
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.total_cuts_produced_weight_lbs
        operation: div
  - type: dynamic
    prop_name: cost_per_1100_pouches
    function_name: mul_div
    prop_type: float
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.total_cost
        operation: mul
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.tobacco_box.props.pouches_produced
        operation: div
      - type: literal
        val: 1100
        operation: mul
---
#endregion
#region Asset worker
schema_name: Asset
asset_name: worker
props:
  - type: dynamic
    prop_name: worker_activity
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.worker_log_cuts.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_cuts.props.worker_activity
        operation: set
      - type: event_history
        match_event_asset_ref: Event.worker_log_pouches.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_pouches.props.worker_activity
        operation: set
      - type: event_history
        match_event_asset_ref: Event.archive_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.archive_worker.props.worker_activity
        operation: set
      - type: event_history
        match_event_asset_ref: Event.worker_log_attendance.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_attendance.props.worker_activity
        operation: set
  - type: dynamic
    prop_name: worker_supervisor
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.archive_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.archive_worker.props.username
        operation: set
      - type: event_history
        match_event_asset_ref: Event.worker_log_attendance.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_attendance.props.username
        operation: set
  - type: dynamic
    prop_name: worker_customer
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.worker_log_cuts.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_cuts.props.customer
        operation: set
      - type: event_history
        match_event_asset_ref: Event.worker_log_pouches.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_pouches.props.customer
        operation: set
      - type: event_history
        match_event_asset_ref: Event.archive_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.archive_worker.props.customer
        operation: set
      - type: event_history
        match_event_asset_ref: Event.worker_log_attendance.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_attendance.props.customer
        operation: set
  - type: dynamic
    prop_name: worker_name
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.worker_name
        operation: set
  - type: dynamic
    prop_name: id_number
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.id_number
        operation: set
  - type: dynamic
    prop_name: address
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.address
        operation: set
  - type: dynamic
    prop_name: phone_number
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.phone_number
        operation: set
  - type: dynamic
    prop_name: dob
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.dob
        operation: set
  - type: dynamic
    prop_name: start_date
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.start_date
        operation: set
  - type: dynamic
    prop_name: end_date
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.archive_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.archive_worker.props.end_date
        operation: set
  - type: dynamic
    prop_name: weekly_salary
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.weekly_salary
        operation: set
  - type: dynamic
    prop_name: previous_employment
    function_name: add_sub_set
    prop_type: str
    args:
      - type: event_history
        match_event_asset_ref: Event.create_worker.assets.worker
        ref_type: event_prop
        prop_ref: Event.create_worker.props.previous_employment
        operation: set
  - type: dynamic
    prop_name: last_activity_ts
    prop_type: ts
    function_name: add_sub_set
    args:
      - type: event_history
        match_event_asset_ref: Event.worker_log_cuts.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_cuts.props.ts
        operation: set
      - type: event_history
        match_event_asset_ref: Event.worker_log_pouches.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_pouches.props.ts
        operation: set
      - type: event_history
        match_event_asset_ref: Event.worker_log_attendance.assets.worker
        ref_type: event_prop
        prop_ref: Event.worker_log_attendance.props.ts
        operation: set
  - type: dynamic
    prop_name: time_since_start_date
    function_name: elapsed_time
    prop_type: timedelta
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.worker.props.start_date
        operation: start_ts
  - type: dynamic
    prop_name: last_activity_elapsed_time
    function_name: elapsed_time
    prop_type: timedelta
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Asset.worker.props.last_activity_ts
        operation: start_ts
---
#endregion
#region event create_product_sku
schema_name: Event
event_name: create_product_sku
label: Create Product Sku
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.product_sku
    event_asset_name: product_sku
    label: Product Sku
    type: create_asset
props:
  - type: static
    prop_name: product_name
    prop_label: Product Name
    prop_type: str
  - type: static
    prop_name: pouches_per_master_case
    prop_label: Pouches per master case
    prop_type: float
  - type: static
    prop_name: displays_per_master_case
    prop_label: Displays per master case
    prop_type: float
---
#endregion
#region event set_product_packaging_counts
schema_name: Event
event_name: set_product_packaging_count
label: Set product packaging counts
assets:
  - asset_ref: Asset.product_sku
    event_asset_name: product_sku
    label: Product Sku
    type: update
props:
  - type: static
    prop_name: num_unused_master_cases
    prop_label: Number of unused master cases
    prop_type: float
  - type: static
    prop_name: num_unused_displays
    prop_label: Number of unused displays
    prop_type: float
  - type: static
    prop_name: num_unused_pouches
    prop_label: Number of unused pouches
    prop_type: float
---
#endregion
#region event create_worker
schema_name: Event
event_name: create_worker
label: Create Worker
assets:
  - asset_ref: Asset.worker
    event_asset_name: worker
    label: worker
    type: create_asset
    print_qr_code:
      - type: asset_qr
        qr_size: 10
        x: 225
        y: 80
      - type: asset_prop
        asset_prop_ref: Asset.worker.props.worker_name
        font_size: 50
        x: 100
        y: 550

props:
  - type: static
    prop_name: worker_name
    prop_label: Worker name
    prop_type: str
  - type: static
    prop_name: id_number
    prop_label: ID number
    prop_type: str
  - type: static
    prop_name: address
    prop_label: Address
    prop_type: str
  - type: static
    prop_name: phone_number
    prop_label: Phone number
    prop_type: str
  - type: static
    prop_name: dob
    prop_label: DOB
    prop_type: date
  - type: static
    prop_name: start_date
    prop_label: Start Date
    prop_type: date
  - type: static
    prop_name: weekly_salary
    prop_label: Weekly salary
    prop_type: float
  - type: static
    prop_name: previous_employment
    prop_label: Previous employment
    prop_type: str

---
#endregion
#region event worker_log_cuts
schema_name: Event
event_name: worker_log_cuts
label: Worker log cuts
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Tobacco box
    type: update
  - asset_ref: Asset.worker
    event_asset_name: worker
    asset_label_prop_ref: Asset.worker.props.worker_name
    batch_action: fire_multiple
    label: worker
    type: update
props:
  - type: static
    prop_name: cuts_weight_lbs
    prop_label: Cuts weight lbs
    prop_type: float
  - type: literal
    prop_type: str
    prop_name: worker_activity
    val: cutter
  # Needed because event_key_val requires the key/val to be on an event so it can coalence by event_id and I cant reference it on the asset directly
  - type: dynamic
    prop_name: worker_name
    prop_type: str
    function_name: add_sub_set
    args:
      - type: local_prop
        ref_type: event_asset_prop
        event_asset_ref: Event.worker_log_cuts.assets.worker
        prop_ref: Asset.worker.props.worker_name
        operation: set
---
#endregion
#region event worker_log_pouches
schema_name: Event
event_name: worker_log_pouches
label: Worker log pouches
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Tobbacco box
    type: update
  - asset_ref: Asset.worker
    event_asset_name: worker
    asset_label_prop_ref: Asset.worker.props.worker_name
    label: worker
    type: update
  - asset_ref: Asset.product_sku
    event_asset_name: product_sku
    asset_label_prop_ref: Asset.product_sku.props.product_name
    label: Product
    input_type: dropdown
    type: update
props:
  - type: static
    prop_name: pouches_produced_count
    prop_label: Pouches count
    prop_type: int
  - type: literal
    prop_type: str
    prop_name: worker_activity
    val: poucher
  - type: dynamic
    prop_name: worker_name
    prop_type: str
    function_name: add_sub_set
    args:
      - type: local_prop
        ref_type: event_asset_prop
        event_asset_ref: Event.worker_log_pouches.assets.worker
        prop_ref: Asset.worker.props.worker_name
        operation: set
---
#endregion
#region event worker_log_attendance
schema_name: Event
event_name: worker_log_attendance
label: Log Attendance
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.worker
    event_asset_name: worker
    asset_label_prop_ref: Asset.worker.props.worker_name
    label: worker
    type: update
props:
  - type: static
    prop_name: worker_activity
    prop_label: Activity
    prop_type: str
    options:
      - cutter
      - poucher
      - sealing
      - tobacco
---
#endregion
#region event archive_worker
schema_name: Event
event_name: archive_worker
label: Archive Worker
assets:
  - asset_ref: Asset.worker
    event_asset_name: worker
    asset_label_prop_ref: Asset.worker.props.worker_name
    label: worker
    type: update
props:
  - type: static
    prop_label: End Date
    prop_name: end_date
    prop_type: date
  - type: literal
    prop_name: worker_activity
    prop_type: str
    val: archived
---
#endregion
#region event tobacco_invoice_ordered
schema_name: Event
event_name: tobacco_invoice_ordered
label: Tobacco ordered
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.tobacco_invoice
    event_asset_name: tobacco_invoice
    label: Tobacco Invoice
    type: create_asset
props:
  - type: static
    prop_name: vendor
    prop_label: Vendor
    prop_type: str
  - type: static
    prop_name: invoice_number
    prop_label: Invoice Number
    prop_type: str
---
#endregion
#region event tobacco_box_created
schema_name: Event
event_name: tobacco_box_created
label: Create Tobacco Box (Packing List)
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Delivered tobbacco box
    type: create_asset
    print_qr_code:
      - type: asset_qr
        qr_size: 10
        x: 225
        y: 80
      - type: asset_prop
        asset_prop_ref: Asset.tobacco_box.props.tobacco_box_label
        font_size: 50
        x: 100
        y: 550
      - type: event_qr
        qr_size: 5
        x: 50
        y: 625
        event_ref: Event.worker_log_cuts
        event_asset_ref: Event.worker_log_cuts.assets.tobacco_box
      - type: text
        x: 50
        y: 870
        font_size: 50
        val: log_cuts
  - asset_ref: Asset.tobacco_invoice
    event_asset_name: tobacco_invoice
    label: Tobacco Invoice
    asset_label_prop_ref: Asset.tobacco_invoice.props.tobacco_invoice_label
    type: update
props:
  - type: static
    prop_name: tobacco_type
    prop_label: Tobacco type
    prop_type: str
  - type: static
    prop_name: box_number
    prop_label: Box number
    prop_type: str
  - type: static
    prop_name: weight_expected_lbs
    prop_label: Weight on packing list (lbs)
    prop_type: float
  - type: literal
    prop_name: tobacco_box_status
    prop_type: str
    val: "not_delivered"
---
#endregion
#region event tobacco_box_delivered
schema_name: Event
event_name: tobacco_box_delivered
label: Tobacco box delivered
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Delivered tobbacco box
    type: update
props:
  - type: static
    prop_name: weight_lbs
    prop_label: Measured Weight (lbs)
    prop_type: float
  - type: literal
    prop_name: tobacco_box_status
    prop_type: str
    val: "delivered"
---
#endregion
#region event tobacco_box_cost
schema_name: Event
event_name: tobacco_box_cost
label: Tobacco box cost
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Cost tobacco box
    type: update
props:
  - type: static
    prop_name: cost_per_lb
    prop_label: Cost per lb
    prop_type: float
---
#endregion
#region event tobacco_box_complete
schema_name: Event
event_name: tobacco_box_complete
label: Complete Production
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Complete tobacco box
    type: update
props:
  - type: literal
    prop_name: tobacco_box_status
    prop_type: str
    val: "complete"
---
#endregion
#region event tobacco_box_start_production
schema_name: Event
event_name: tobacco_box_start_production
label: Start Production
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: tobacco box
    type: update
props:
  - type: literal
    prop_name: tobacco_box_status
    prop_type: str
    val: "production"
---
#endregion
#region event tobacco_box_sorting_complete
schema_name: Event
event_name: tobacco_box_sorting_complete
label: Tobacco box sorted (box breakdown)
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Tobacco box
    type: update
props:
  - type: static
    prop_name: tobacco_for_original_cuts_weight_lbs
    prop_label: Tobacco for original cuts (lbs)
    prop_type: float
  - type: static
    prop_name: whole_leaf_weight_lbs
    prop_label: Whole leaf weight (lbs)
    prop_type: float
  - type: static
    prop_name: tobacco_for_special_edition_weight_lbs
    prop_label: Special edition cuts weight (lbs)
    prop_type: float
  - type: literal
    prop_name: tobacco_box_status
    prop_type: str
    val: "sorted"
  - type: dynamic
    prop_name: gross_sorted_weight_lbs
    function_name: add_sub_set
    prop_label: Gross sorted weight (lbs)
    prop_type: float
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Event.tobacco_box_sorting_complete.props.tobacco_for_original_cuts_weight_lbs
        operation: add
      - type: local_prop
        ref_type: local_prop
        prop_ref: Event.tobacco_box_sorting_complete.props.whole_leaf_weight_lbs
        operation: add
  - type: dynamic
    prop_name: gross_sorted_weight_variance_lbs
    prop_label: Gross sorted weight variance (lbs)
    function_name: add_sub_set
    prop_type: float
    args:
      - type: local_prop
        ref_type: local_prop
        prop_ref: Event.tobacco_box_sorting_complete.props.gross_sorted_weight_lbs
        operation: add
      - type: local_prop
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_sorting_complete.assets.tobacco_box
        prop_ref: Asset.tobacco_box.props.delivered_weight_lbs
        operation: sub
---
#endregion
#region event tobacco_box_log_by_product
schema_name: Event
event_name: tobacco_box_log_by_product
label: Log byproduct
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Tobacco box
    type: update
props:
  - type: static
    prop_name: picadura_produced_weight_lbs
    prop_label: Picadura Produced Weight (lbs)
    prop_type: float
  - type: static
    prop_name: stems_weight_lbs
    prop_label: Stems  Weight (lbs)
    prop_type: float
  - type: static
    prop_name: bad_leaf_lbs
    prop_label: Bad leaf lbs
    prop_type: float
  - type: static
    prop_name: rejected_usable_leaf_lbs
    prop_label: Rejected leaf usable weight lbs
    prop_type: float
  - type: static
    prop_name: rejected_unusable_leaf_lbs
    prop_label: Rejected leaf unusable weight lbs
    prop_type: float

---
#endregion
#region event tobacco_box_log_master_case
schema_name: Event
event_name: tobacco_box_log_master_case
label: Log master case
display_context_prop_names:
  - customer
assets:
  - asset_ref: Asset.tobacco_box
    event_asset_name: tobacco_box
    asset_label_prop_ref: Asset.tobacco_box.props.box_number
    label: Tobacco box
    type: update
  - asset_ref: Asset.product_sku
    event_asset_name: product_sku
    asset_label_prop_ref: Asset.product_sku.props.product_name
    label: Product
    input_type: dropdown
    type: update
props:
  - type: static
    prop_name: num_master_cases
    prop_label: Number of master cases
    prop_type: float
  - prop_name: used_pouches
    type: dynamic
    function_name: mul_div
    prop_type: float
    args:
      - type: local_prop
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_log_master_case.assets.product_sku
        prop_ref: Asset.product_sku.props.pouches_per_master_case
        operation: mul
      - type: local_prop
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_master_case.props.num_master_cases
        operation: mul
  - prop_name: used_displays
    type: dynamic
    function_name: mul_div
    prop_type: float
    args:
      - type: local_prop
        ref_type: event_asset_prop
        event_asset_ref: Event.tobacco_box_log_master_case.assets.product_sku
        prop_ref: Asset.product_sku.props.displays_per_master_case
        operation: mul
      - type: local_prop
        ref_type: event_prop
        prop_ref: Event.tobacco_box_log_master_case.props.num_master_cases
        operation: mul
---
#endregion
#region es-do translations
schema_name: Translations
locale: es_do
translations:
  - key: "Create Worker"
    translated_str: "Crear Trabajador"
  - key: "create_worker"
    translated_str: "crear_trabajador"
  - key: "worker_name"
    translated_str: "nombre_trabajador"
  - key: "Worker name"
    translated_str: "Nombre del trabajador"
  - key: "address"
    translated_str: "direccion"
  - key: "Address"
    translated_str: "Dirección"
  - key: "phone_number"
    translated_str: "numero_telefono"
  - key: "Phone number"
    translated_str: "Número de teléfono"
  - key: "dob"
    translated_str: "fecha_nacimiento"
  - key: "DOB"
    translated_str: "Fecha de nacimiento"
  - key: "start_date"
    translated_str: "fecha_inicio"
  - key: "Start Date"
    translated_str: "Fecha de inicio"
  - key: "weekly_salary"
    translated_str: "salario_semanal"
  - key: "Weekly salary"
    translated_str: "Salario semanal"
  - key: "Worker log cuts"
    translated_str: "Registro de cortes del trabajador"
  - key: "worker_log_cuts"
    translated_str: "registro_cortes_trabajador"
  - key: "cuts_weight_lbs"
    translated_str: "peso_cortes_libras"
  - key: "Cuts weight lbs"
    translated_str: "Peso de cortes en libras"
  - key: "worker_activity"
    translated_str: "actividad_trabajador"
  - key: "Worker log pouches"
    translated_str: "Registro de bolsas del trabajador"
  - key: "worker_log_pouches"
    translated_str: "registro_bolsas_trabajador"
  - key: "pouches_produced_count"
    translated_str: "conteo_bolsas_producidas"
  - key: "Pouches count"
    translated_str: "Conteo de bolsas"
  - key: "product_sku"
    translated_str: "codigo_producto"
  - key: "Product"
    translated_str: "Producto"
  - key: "fire_original"
    translated_str: "fire_original"
  - key: "fire_whole_leaf"
    translated_str: "fire_hoja_completa"
  - key: "fire_special_edition"
    translated_str: "fire_edicion_especial"
  - key: "bandit_original"
    translated_str: "bandit_original"
  - key: "Log Attendance"
    translated_str: "Registrar Asistencia"
  - key: "worker_log_attendance"
    translated_str: "registro_asistencia_trabajador"
  - key: "Activity"
    translated_str: "Actividad"
  - key: "cutter"
    translated_str: "cortador"
  - key: "poucher"
    translated_str: "empaquetador"
  - key: "sealing"
    translated_str: "sellado"
  - key: "tobacco"
    translated_str: "tabaco"
  - key: "Archive Worker"
    translated_str: "Archivar Trabajador"
  - key: "archive_worker"
    translated_str: "archivar_trabajador"
  - key: "end_date"
    translated_str: "fecha_fin"
  - key: "End Date"
    translated_str: "Fecha de finalización"
  - key: "Tobacco ordered"
    translated_str: "Tabaco pedido"
  - key: "tobacco_invoice_ordered"
    translated_str: "factura_tabaco_pedido"
  - key: "vendor"
    translated_str: "proveedor"
  - key: "Vendor"
    translated_str: "Proveedor"
  - key: "Total Weight Ordered (lbs)"
    translated_str: "Peso total ordenado (libras)"
  - key: "invoice_number"
    translated_str: "numero_factura"
  - key: "Invoice Number"
    translated_str: "Número de factura"
  - key: "Add Tobacco Box (delivered)"
    translated_str: "Agregar caja de tabaco (entregada)"
  - key: "tobacco_box_delivered"
    translated_str: "caja_tabaco_entregada"
  - key: "tobacco_type"
    translated_str: "tipo_tabaco"
  - key: "Tobacco type"
    translated_str: "Tipo de tabaco"
  - key: "box_number"
    translated_str: "numero_caja"
  - key: "Box number"
    translated_str: "Número de caja"
  - key: "weight_expected_lbs"
    translated_str: "peso_esperado_libras"
  - key: "Expected Gross Weight (lbs)"
    translated_str: "Peso bruto esperado (libras)"
  - key: "weight_lbs"
    translated_str: "peso_libras"
  - key: "Measured Weight (lbs)"
    translated_str: "Peso medido (libras)"
  - key: "tobacco_box_status"
    translated_str: "estado_caja_tabaco"
  - key: "expected_measured_variance_lbs"
    translated_str: "varianza_esperada_medida_libras"
  - key: "tobacco_box_cost"
    translated_str: "costo_caja_tabaco"
  - key: "cost_per_lb"
    translated_str: "costo_por_libra"
  - key: "Cost per lb"
    translated_str: "Costo por libra"
  - key: "Complete Production"
    translated_str: "Completar Producción"
  - key: "tobacco_box_complete"
    translated_str: "caja_tabaco_completa"
  - key: "Start Production"
    translated_str: "Iniciar Producción"
  - key: "tobacco_box_start_production"
    translated_str: "caja_tabaco_iniciar_produccion"
  - key: "Box breakdown"
    translated_str: "Desglose de caja"
  - key: "tobacco_box_sorting_complete"
    translated_str: "ordenamiento_caja_tabaco_completo"
  - key: "Tobacco for cuts (lbs)"
    translated_str: "Tabaco para cortes (libras)"
  - key: "whole_leaf_weight_lbs"
    translated_str: "peso_hoja_completa_libras"
  - key: "Whole leaf weight (lbs)"
    translated_str: "Peso de hoja completa (libras)"
  - key: "tobacco_for_special_edition_weight_lbs"
    translated_str: "tabaco_para_edicion_especial_libras"
  - key: "Special edition cuts weight (lbs)"
    translated_str: "Peso de cortes edición especial (libras)"
  - key: "gross_sorted_weight_lbs"
    translated_str: "peso_bruto_ordenado_libras"
  - key: "gross_sorted_weight_variance_lbs"
    translated_str: "varianza_peso_bruto_ordenado_libras"
  - key: "Log byproduct"
    translated_str: "Registrar subproducto"
  - key: "tobacco_box_log_by_product"
    translated_str: "registro_caja_tabaco_subproducto"
  - key: "picadura_produced_weight_lbs"
    translated_str: "picadura_producida_peso_libras"
  - key: "Picadura Produced Weight (lbs)"
    translated_str: "Peso de picadura producida (libras)"
  - key: "rejected_usable_leaf_lbs"
    translated_str: "hoja_rechazada_utilizable_libras"
  - key: "Rejected leaf usable weight lbs"
    translated_str: "Peso de hoja rechazada utilizable (libras)"
  - key: "rejected_unusable_leaf_lbs"
    translated_str: "hoja_rechazada_inutilizable_libras"
  - key: "Rejected leaf unusable weight lbs"
    translated_str: "Peso de hoja rechazada inutilizable (libras)"
  - key: "Asset"
    translated_str: "Activo"
  - key: "customer"
    translated_str: "cliente"
  - key: "total_cost"
    translated_str: "costo_total"
  - key: "tobacco_invoice_label"
    translated_str: "etiqueta_factura_tabaco"
  - key: "tobacco_boxes"
    translated_str: "cajas_tabaco"
  - key: "total_expected_lbs"
    translated_str: "total_esperado_libras"
  - key: "total_delivered_lbs"
    translated_str: "total_entregado_libras"
  - key: "total_expected_measured_variance_lbs"
    translated_str: "total_varianza_esperada_medida_libras"
  - key: "cuts_by_worker"
    translated_str: "cortes_por_trabajador"
  - key: "pouches_by_worker"
    translated_str: "bolsas_por_trabajador"
  - key: "tobacco_box_label"
    translated_str: "etiqueta_caja_tabaco"
  - key: "delivered_weight_lbs"
    translated_str: "peso_entregado_libras"
  - key: "tobacco_invoice"
    translated_str: "factura_tabaco"
  - key: "total_cuts_produced_weight_lbs"
    translated_str: "total_cortes_producidos_peso_libras"
  - key: "total_picadura_produced_weight_lbs"
    translated_str: "total_picadura_producida_peso_libras"
  - key: "cuts_yield_pct"
    translated_str: "porcentaje_rendimiento_cortes"
  - key: "pouches_produced"
    translated_str: "bolsas_producidas"
  - key: "cost_per_cut_lb"
    translated_str: "costo_por_libra_corte"
  - key: "cost_per_1100_pouches"
    translated_str: "costo_por_1100_bolsas"
  - key: "worker_supervisor"
    translated_str: "supervisor_trabajador"
  - key: "worker_customer"
    translated_str: "cliente_trabajador"
  - key: "last_activity_ts"
    translated_str: "ultimo_registro_actividad"
  - key: "last_activity_elapsed_time"
    translated_str: "tiempo_transcurrido_ultima_actividad"
  - key: "firelyfe"
    translated_str: "firelyfe"
  - key: "bandit"
    translated_str: "bandit"
  - key: "role"
    translated_str: "rol"
  - key: "data_collector"
    translated_str: "recolector_datos"
  - key: "hr"
    translated_str: "recursos_humanos"
  - key: "operations_manager"
    translated_str: "gerente_operaciones"
  - key: "admin"
    translated_str: "administrador"
  - key: "supervisor"
    translated_str: "supervisor"
  - key: "Production Boxes"
    translated_str: "Cajas de Producción"
  - key: "Delivered Boxes"
    translated_str: "Cajas Entregadas"
  - key: "Sorted Boxes"
    translated_str: "Cajas Ordenadas"
  - key: "Invoices"
    translated_str: "Facturas"
  - key: "Completed Boxes"
    translated_str: "Cajas Completadas"
  - key: "Add worker"
    translated_str: "Agregar trabajador"
  - key: "My Workers"
    translated_str: "Mis Trabajadores"
  - key: "All workers"
    translated_str: "Todos los trabajadores"
  - key: "None"
    translated_str: "Ninguno"
  - key: "Tobacco Boxes"
    translated_str: "Cajas de Tabaco"
  - key: "Cuts (lbs) by worker"
    translated_str: "Cortes (libras) por trabajador"
  - key: "Tobacco"
    translated_str: "Tabaco"
  - key: "Workers"
    translated_str: "Trabajadores"
  - key: "Metrics"
    translated_str: "Métricas"
  - key: "Tobacco Invoice"
    translated_str: "Factura de Tabaco"
  - key: "Worker"
    translated_str: "Trabajador"
  - key: "Tobacco Box"
    translated_str: "Caja de Tabaco"
  - key: "Customer"
    translated_str: "Cliente"
  - key: "Vendor"
    translated_str: "Proveedor"
  - key: "Weight ordered"
    translated_str: "Peso ordenado"
  - key: "Invoice number"
    translated_str: "Número de factura"
  - key: "Customer"
    translated_str: "Cliente"
  - key: "Invoice"
    translated_str: "Factura"
  - key: "Box number"
    translated_str: "Número de caja"
  - key: "Status"
    translated_str: "Estado"
  - key: "Delivered weight"
    translated_str: "Peso entregado"
  - key: "Name"
    translated_str: "Nombre"
  - key: "Customer"
    translated_str: "Cliente"
  - key: "Activity"
    translated_str: "Actividad"
  - key: "Supervisor"
    translated_str: "Supervisor"
  - key: "Time Since Last Activity"
    translated_str: "Tiempo desde la última actividad"
  - key: "Scan"
    translated_str: "Escanear"
  - key: "Feedback"
    translated_str: "Comentarios"
  - key: "logout"
    translated_str: "cerrar sesión"
  - key: "Submit"
    translated_str: "Enviar"
  - key: "Tobacco for original cuts (lbs)"
    translated_str: "Tabaco para cortes originales (libras)"
  - key: "Home"
    translated_str: "Inicio"
  - key: "Log attendance"
    translated_str: "Registrar asistencia"
  - key: "Previous employment"
    translated_str: "Empleo anterior"
  - key: "previous_employment"
    translated_str: "empleo_anterior"
  - key: "weight_delivered_lbs"
    translated_str: "peso_entregado_libras"
  - key: "tobacco_for_original_cuts_weight_lbs"
    translated_str: "tabaco_para_cortes_originales_libras"
  - key: "Tobacco box cost"
    translated_str: "Costo de la caja de tabaco"
  - key: "tobacco_box_created"
    translated_str: "caja_tabaco_creada"
  - key: "Create Tobacco Box"
    translated_str: "Crear caja de tabaco"
  - key: "Weight delivered (boxes)"
    translated_str: "Peso entregado (cajas)"
  - key: "Tobacco box delivered"
    translated_str: "Caja de tabaco entregada"
  - key: "Tobacco box sorted (box breakdown)"
    translated_str: "Caja de tabaco clasificada (desglose de caja)"
  - key: "Not Delivered Boxes"
    translated_str: "Cajas no entregadas"
  - key: "Add Product SKU"
    translated_str: "Agregar SKU del producto"
  - key: "num_unused_displays"
    translated_str: "num_exhibidores_sin_usar"
  - key: "create_product_sku"
    translated_str: "crear_sku_producto"
  - key: "tobacco_box_log_master_case"
    translated_str: "registro_caja_tabaco_caja_maestra"
  - key: "Weight on packing list (lbs)"
    translated_str: "Peso en lista de empaque (libras)"
  - key: "Product packaging count"
    translated_str: "Cantidad de empaque del producto"
  - key: "Pouches per master case"
    translated_str: "Bolsas por caja maestra"
  - key: "Log master case"
    translated_str: "Registrar caja maestra"
  - key: "num_unused_pouches"
    translated_str: "num_bolsas_sin_usar"
  - key: "pouches_per_master_case"
    translated_str: "bolsas_por_caja_maestra"
  - key: "displays_per_master_case"
    translated_str: "exhibidores_por_caja_maestra"
  - key: "Set product packaging counts"
    translated_str: "Establecer cantidades de empaque del producto"
  - key: "Number of master cases"
    translated_str: "Número de cajas maestras"
  - key: "Number of unused displays"
    translated_str: "Número de exhibidores sin usar"
  - key: "Create Tobacco Box (Packing List)"
    translated_str: "Crear caja de tabaco (lista de empaque)"
  - key: "Create Product Sku"
    translated_str: "Crear SKU de producto"
  - key: "used_pouches"
    translated_str: "bolsas_utilizadas"
  - key: "Create Tobacco Invoice"
    translated_str: "Crear factura de tabaco"
  - key: "Products"
    translated_str: "Productos"
  - key: "Displays per master case"
    translated_str: "Exhibidores por caja maestra"
  - key: "Product Name"
    translated_str: "Nombre del producto"
  - key: "set_product_packaging_count"
    translated_str: "establecer_cantidad_empaque_producto"
  - key: "Number of unused pouches"
    translated_str: "Número de bolsas sin usar"
  - key: "product_name"
    translated_str: "nombre_producto"
  - key: "num_unused_master_cases"
    translated_str: "num_cajas_maestras_sin_usar"
  - key: "num_master_cases"
    translated_str: "num_cajas_maestras"
  - key: "used_displays"
    translated_str: "exhibidores_utilizados"
  - key: "Product SKU"
    translated_str: "SKU del producto"
  - key: "Number of unused master cases"
    translated_str: "Número de cajas maestras sin usar"
#endregion
`;
