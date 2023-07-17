// This file is automatically generated by Cosmos. Add it to .gitignore and
// only edit if you know what you're doing.

import { RendererConfig, UserModuleWrappers } from 'react-cosmos-core';

import * as fixture0 from './components/ProgressCard/ProgressCard.fixture';
import * as fixture1 from './components/Header/Header.fixture';
import * as fixture2 from './components/Card/Card.fixture';
import * as fixture3 from './components/Button/Button.fixture.jsx';

export const rendererConfig: RendererConfig = {
  "playgroundUrl": "http://localhost:5000",
  "rendererUrl": "http://localhost:3000/cosmos"
};

const fixtures = {
  'components/ProgressCard/ProgressCard.fixture.tsx': { module: fixture0 },
  'components/Header/Header.fixture.tsx': { module: fixture1 },
  'components/Card/Card.fixture.tsx': { module: fixture2 },
  'components/Button/Button.fixture.jsx': { module: fixture3 }
};

const decorators = {};

export const moduleWrappers: UserModuleWrappers = {
  lazy: false,
  fixtures,
  decorators
};
