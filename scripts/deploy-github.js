const ghpages = require("gh-pages")

ghpages.publish("public", {
  branch: "master",
  repo: "https://github.com/ChristianVillamin/ChristianVillamin.github.io.git",
})
