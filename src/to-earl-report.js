function toAssertion (title, resultSet) {
  let outcome;
  if (resultSet.length === 0) {
    outcome = 'earl:inapplicable'
  } else if (resultSet.every(({ rule }) => rule !== title)) {
    outcome = 'earl:passed'
  } else {
    outcome = 'earl:failed'
  }

  return {
    '@type': "Assertion",
    'test': { title },
    'result': { outcome }
  }
}

function rulesInResultSets (resultSets) {
  const allRules = new Set()
  resultSets.forEach(({ resultSet }) => {
    resultSet.forEach(({ rule }) => allRules.add(rule))
  })
  return Array.from(allRules)
}

module.exports = function toEarlReport (ruleResults) {
  /**
   * Figure out what rules ran on these pages
   * Since axe Pro only reports fails, we need to infer what passed based on which rules we
   * see any failures for. 
   * THIS ASSUMES THAT THE SAME RULES RAN ON EVERY TEST CASE OF A RULE!
   */
  const allRules = rulesInResultSets(ruleResults)

  const graph = ruleResults.map(({ source, resultSet }) => {
    const assertions = allRules.map(ruleId => toAssertion(ruleId, resultSet))
    return {
      '@type': 'TestSubject',
      source,
      assertions
    }
  })

  return {
    "@context": "https://act-rules.github.io/earl-context.json",
    "@graph": graph
  }
}