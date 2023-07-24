import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = `
- section_type: metrics
span: 12
prod_iframe:  "https://my-deployment-0a8760.kb.us-east-1.aws.found.io:9243/s/firelyfe/app/dashboards?auth_provider_hint=firetest#/view/99203dc0-cf25-11ed-bbe1-6fd648d186bb?embed=true&_g=(refreshInterval%3A(pause%3A!f%2Cvalue%3A5000)%2Ctime%3A(from%3Anow-4d%2Cto%3Anow))&show-time-filter=true"
dev_iframe: "https://my-deployment-0a8760.kb.us-east-1.aws.found.io:9243/s/firelyfe/app/dashboards?auth_provider_hint=firetest#/view/e5688370-cf18-11ed-b423-15139ce43efb?embed=true&_g=(refreshInterval%3A(pause%3A!f%2Cvalue%3A5000)%2Ctime%3A(from%3Anow-4d%2Cto%3Anow))&show-time-filter=true"
requires:
- key_type: context_prop
context_prop_name: role
operation: equals
val_type: literal
val: 
  - hr
  - admin
`;

export default function MetricsFixture() {
  return (
    <CosmosLayout
      title="Metrics"
      componentName="metrics"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
