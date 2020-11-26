// @generated: @expo/next-adapter@2.1.45
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');
const withImages = require('next-images');

module.exports = withExpo(
  withImages({
    projectRoot: __dirname,
  })
);