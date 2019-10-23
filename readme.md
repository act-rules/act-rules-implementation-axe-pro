# Axe Pro Implementation Reports for ACT-R

This repo is contains [axe Pro](https://axe.deque.com) implementation data for [ACT-R rules](https://act-rules.github.io/rules/). Within this repository are the JSON exports from running axe Pro on ACT-R test case pages. The `axe-pro-earl` script transforms axe Pro JSON exports into EARL reports, for use in ACT-R.

To turn all axe Pro exports into EARL reports in `./reports`, run:

```sh
npm run build
```

## CLI

For custom report generation, a CLI is available in `./axe-pro-earl`.

```sh
$ ./axe-pro-earl --help
Usage: ./axe-pro-earl -input axe-pro-exports/**.json --outDir ./reports --testcases ./testcases.json

Options:
  --version, -v    Show version number                                 [boolean]
  --input, -i                   [array] [default: "./axe-pro-exports/**/*.json"]
  --outDir, -o                                           [default: "./reports/"]
  --testcases, -t        [default: "https://act-rules.github.io/testcases.json"]
  --help, -h       Show help                                           [boolean]
```

## How to run axe Pro tests for ACT Rules

1. Open the test case URL
2. Open axe and run "analyse"
3. Click "save results", this will take you to axe pro
4. Use the part of the URL between "testcase/" and ".html" as the test case name
    Example: "c4a8a4/3040ba5bd3485b7328c1cea8b5909982a10e4089"
5. Under "Guided tests" click the "Run {{tool name}}" for the tool you need to run on that test case. If the tool is hidden under "Additional guided tests", skip step 6.
6. Run through the guided test in the test page.
7. Go back to axe Pro, and click Options > Export issues > export (as JSON)
