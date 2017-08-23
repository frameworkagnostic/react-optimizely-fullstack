
```js
import React from 'react';
import ReactDOM from 'react-dom';
import optimizely from 'optimizely-client-sdk';
import uuidv4 from 'uuid/v4';

import '@thinkeloquent/react-optimizely-fullstack/src/polyfills';
import OptimizelyShell from '@thinkeloquent/react-optimizely-fullstack';

const projectId = 0;
const experiment = null;
const userId = uuidv4();

function Component(props) {
  return (
    <div>{props.variant}</div>
  )
}

ReactDOM.render(
  <OptimizelyShell
    optimizely={optimizely}
    uniqueId={userId}
    projectId={projectId}
    experiment={experiment}
    onClick={() => {
      console.log('clicked');
    }}
    component={Component} />
, document.getElementById('app'));

```
