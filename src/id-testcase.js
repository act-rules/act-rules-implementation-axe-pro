const assert = require('assert')

module.exports = function identifyTestCase (fileName) {
  const match = fileName.match(/testcases_([a-z0-9]{6})_([a-z0-9]+)\s/)
  assert(Array.isArray(match), `Unable to determine rule and test case for '${fileName}'`)
  assert(match[2].length > 20, `Testcase ID fragement '${match[2]}' too far truncated`)

  return {
    ruleId: match[1],
    testcaseIdFragement: match[2]
  }
}
