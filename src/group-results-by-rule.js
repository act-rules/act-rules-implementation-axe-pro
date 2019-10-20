const identifyTestCase = require('./id-testcase')

function findTestcaseSource (ruleId, testcaseIdFragement, testcases) {
  // Find the complete URL for the test case
  return testcases.find((testcase) => (
    testcase.ruleId === ruleId &&
    testcase.testcaseId.indexOf(testcaseIdFragement) === 0
  )).url
}

module.exports = function groupResultsByRule (fileNames, { testcases }) {
  const ruleResultSets = {}
  fileNames.forEach((fileName) => {
    const resultSet = require(`../${fileName}`)
    const { ruleId, testcaseIdFragement } = identifyTestCase(fileName)
    const source = findTestcaseSource(ruleId, testcaseIdFragement, testcases)

    if (!ruleResultSets[ruleId]) {
      ruleResultSets[ruleId] = []
    }
    ruleResultSets[ruleId].push({ source, ruleId, resultSet })
  })

  // Declare that all non-HTML tests inapplicable
  testcases.forEach(({ ruleId, url: source }) => {
    if (!/\.html$/.test(source) && ruleResultSets[ruleId] ) {
      ruleResultSets[ruleId].push({
        source,
        ruleId,
        resultSet: []
      })
    }
  })

  return ruleResultSets
}

