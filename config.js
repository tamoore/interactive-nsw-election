System.config({
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "bourbon": "npm:bourbon@4.2.1",
    "jquery": "npm:jquery@2.1.3",
    "ractive": "npm:ractive@0.7.1",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:jquery@2.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ractive@0.7.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

