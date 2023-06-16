/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from 'react';
import RootElement from './src/components/root-element';

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};
