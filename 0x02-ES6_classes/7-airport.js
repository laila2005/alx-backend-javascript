export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for name and code
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Override default string conversion
  toString() {
    return `Airport [${this._code}]`;
  }

  // Override inspect() to get the detailed output when logged
  inspect() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
