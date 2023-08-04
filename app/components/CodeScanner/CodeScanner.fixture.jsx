import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import CodeScanner from "./CodeScanner";

const code = `
  <CodeScanner />
`;

const config = null;

export default function CodeScannerFixture() {
  return (
    <CosmosLayout
      title="CodeScanner"
      componentName="code_scanner"
      code={code}
      config={config}
    >
      <CodeScanner />
    </CosmosLayout>
  );
}
