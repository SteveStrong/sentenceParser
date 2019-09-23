import { spBuffer } from "./sp_buffer";
import { spToken } from "./sp_token";
import { spSentence, spParagraph } from "./sp_sentence";

export class spParser {
  private _buffer: spBuffer;

  setBuffer(text: string) {
    this._buffer = new spBuffer();
    this._buffer.setBuffer(text);
  }

  getChar() {
    return this._buffer.getChar();
  }

  peekChar(lookAhead: number = 0) {
    return this._buffer.peekChar(lookAhead);
  }

  private isNull(str):boolean {
    if ( !str || str.length === 0)  {
        return true;
    }
    return false;
  }

  private isWhiteSpace(str):boolean {
    return  /^\s*$/.test(str);
  }

  private isNullOrWhiteSpace(str):boolean {
    return this.isNull(str) || this.isWhiteSpace(str);
  }

  readTillWhitespace(): spToken {
    let result = new spToken();
    let char = this.peekChar();
    while (!this.isNullOrWhiteSpace(char)) {
      result.append(this.getChar());
      char = this.peekChar();
    }
    return result;
  }

  readWhitespace(): spToken {
    let result = new spToken();
    let char = this.peekChar();
    while (char && this.isWhiteSpace(char)) {
      result.append(this.getChar());
      char = this.peekChar();
    }
    return result;
  }

  readSentence():spSentence {
    let result = new spSentence();
    this.readWhitespace();
    let token = this.readTillWhitespace();
    while (!token.isEmpty()) {
      result.append(token);
      if ( token.endsWithChar('.')) {
          return result;
      }
      this.readWhitespace();
      token = this.readTillWhitespace();
    }
    return result;
  }

  readParagraph():spParagraph {
    let result = new spParagraph();
    let sentence = this.readSentence();
    while (!sentence.isEmpty()) {
      result.append(sentence);
      sentence = this.readSentence();
      // let text = sentence.asString();
    }
    return result;
  }
}
