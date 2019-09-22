export class spBuffer {
  private _cur = 0;
  private _buffer: string = "";

  setBuffer(buf: string) {
    this._cur = 0;
    this._buffer = buf;
  }

  getChar() {
    if (this._cur < this._buffer.length) {
      let value = this._buffer[this._cur++];
      return value;
    }
    return null;
  }
  putChar() {
    if (this._cur > 0) {
      this._cur--;
    }
    return this.peekChar();
  }

  peekChar(lookAhead: number = 0) {
    let id = this._cur + lookAhead;
    if (id < this._buffer.length) {
      return this._buffer[id];
    }
    return null;
  }
}
