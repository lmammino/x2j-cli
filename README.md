# x2j-cli

[![npm version](https://badge.fury.io/js/x2j-cli.svg)](http://badge.fury.io/js/x2j-cli)
[![Build Status](https://travis-ci.org/lmammino/x2j-cli.svg?branch=master)](https://travis-ci.org/lmammino/x2j-cli)

Node.js command line script to convert XML input into JSON output. It can be
piped to a command printing XML to stdout to have it converted and pretty printed
to JSON.


## Example

```bash
curl -sS http://www.w3schools.com/xml/note.xml | x2j
```

Will print:

```json
{
  "note": {
    "to": [
      "Tove"
    ],
    "from": [
      "Jani"
    ],
    "heading": [
      "Reminder"
    ],
    "body": [
      "Don't forget me this weekend!"
    ]
  }
}
```


## Install

It requires Node (4.0.0 or higher) and Npm (2 or higher):

```bash
npm install --global x2j-cli
```

This is going to install globally the executable `x2j` which you can use to
convert xml string from the standard input into formatted JSON into the standard
output as shown in the example above.


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/x2j-cli/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
