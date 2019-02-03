const path = require('path');

module.exports = (baseConfig: any) => {
  baseConfig.resolve.modules = [
    ...(baseConfig.resolve.modules || []),
    path.resolve('./')
  ];
  return baseConfig;
};
