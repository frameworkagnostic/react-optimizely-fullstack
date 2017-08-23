//jest.unmock('../src/index');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import mapRegistry from '../src/index';


const Button = (props) => { <button /> }
const Image = (props) => { <image /> }
const Div = (props) => { <div /> }
const H1 = (props) => { <h1 /> }
const H2 = (props) => { <h2 /> }
const H3 = (props) => { <h3 /> }

const Components = mapRegistry({
  button: Button,
  image: Image,
  div: Div,
  h1: H1,
  h2: H2,
  h3: H3,
});

describe('server', () => {
    it('should have <button> element', () => {
      console.log(
        <Components elements={[
          {
            $type: 'button'
          }
        ]} />
      )

      //console.log();
      // const renerer = TestUtils.createRenderer();
      // renerer.render(
      //   <div>
      //     <Components components={[
      //       {
      //         $type: 'button'
      //       }
      //     ]} />
      //   </div>
      // );
      // expect(renerer.getRenderOutput()).toIncludeJSX(
      //   <Button />
      // )
    });
});
