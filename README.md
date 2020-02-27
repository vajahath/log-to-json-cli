# log-to-json-cli

A handy CLI to convert log files to JSON using [log-to-json](https://github.com/vajahath/log-to-json) module.

![](https://github.com/vajahath/log-to-json-cli/workflows/Build/badge.svg) [![](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## Install

Requires Node >=10.

From npm,

```sh
npm i -g log-to-json-cli
```

From [Github Package Registry](https://github.com/vajahath/log-to-json-cli/packages). ([Guide](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)).

Type definitions are bundled with this package, just in case you need.

## CLI Usage

```bash
➜ log-to-json --help
Usage: log-to-json [options] <input-log-file>

An easy CLI tool to convert .log files to .json

Options:
  -V, --version        output the version number
  -o, --output <file>  Relative or absolute file path. If not provided, a new
                       JSON file with similar name is created.
  -h, --help           output usage information

```

### Example

With out output file option (`-o`):

```bash
➜ log-to-json sample._log
✔ Output file created at: /home/user/path/log-to-json/tests/sample._log.json
```

With `-o` option

```bash
➜ log-to-json sample._log -o magic.json
✔ Output file created at: /home/qbuser/gith/log-to-json/tests/magic.json
```

### Need API?

Refer [log-to-json](https://github.com/vajahath/log-to-json) module.

<br>

[![](https://img.shields.io/badge/built%20with-ts--np%203-lightgrey?style=flat-square)](https://github.com/vajahath/generator-ts-np) <!--(TSNP VERSION: 3.2.0)-->

## Licence

MIT &copy; [Vajahath Ahmed](https://twitter.com/vajahath7)
