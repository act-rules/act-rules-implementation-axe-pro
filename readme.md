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
  -help, -h        Show help                                           [boolean]
```
