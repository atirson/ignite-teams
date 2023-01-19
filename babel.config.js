module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
       [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@context": "./src/context",
            "@services": "./src/services",
            "@config": "./src/config",
            "@constants": "./src/constants",
            "@styles": "./src/styles",
            "@types": "./src/types",
            "@storage": "./src/storage",
          }
       }
      ]
    ]
  };
};
