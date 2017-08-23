
import React from 'react';
import ReactDOM from 'react-dom';
import optimizely from 'optimizely-client-sdk';
import uuidv4 from 'uuid/v4';

import '../../src/polyfills';
import DummyComponent from './dummy-component';
import OptimizelyShell from '../../src/optimizely.shell';

const projectId = 0;
const experiment = null;
const userId = uuidv4();

ReactDOM.render(
  <OptimizelyShell
    optimizely={optimizely}
    uniqueId={userId}
    projectId={projectId}
    experiment={experiment}
    onClick={() => {
      console.log('clicked');
    }}
    component={DummyComponent} />
, document.getElementById('app'));
