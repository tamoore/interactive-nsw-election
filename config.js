System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.1.10",
    "babel-runtime": "npm:babel-runtime@5.1.10",
    "bourbon": "npm:bourbon@4.2.1",
    "core-js": "npm:core-js@0.8.3",
    "jquery": "npm:jquery@2.1.3",
    "ractive": "npm:ractive@0.7.1",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jquery@2.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ractive@0.7.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

