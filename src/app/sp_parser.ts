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

  advanceChar(lookAhead: number = 0) {
    return this._buffer.advanceChar(lookAhead);
  }

  readUntil(until: string) {
    let result = "";
    let char = this.getChar();
    while (char !== until) {
      result += char;
      char = this.getChar();
    }
    result += until;
    return result;
  }

  private isNull(str): boolean {
    if (!str || str.length === 0) {
      return true;
    }
    return false;
  }

  private isWhiteSpace(str): boolean {
    return /^\s*$/.test(str);
  }

  private isDigit(str): boolean {
    return /^\d+$/.test(str);
  }

  private isCapital(str): boolean {
    return /[A-Z]/.test(str);
  }

  private isNullOrWhiteSpace(str): boolean {
    return this.isNull(str) || this.isWhiteSpace(str);
  }

  private isUS(): boolean {
    let word = this.peekChar();
    word += this.peekChar(1);
    word += this.peekChar(2);
    word += this.peekChar(3);
    if ( word === "U.S." ) {
        this.advanceChar(4)
        return true;
    }
    return false;
  }

  readToken(): spToken {
    let result = new spToken();
    let char = this.peekChar();
    let peek = this.peekChar(1);
    while (char) {
      if (char === "." && this.isWhiteSpace(peek)) {
        return result.append(this.getChar());
      } else if (char === "U" && peek == "." && this.isUS()) {
        result.append("U.S.");
      } else if (char === "." && this.isCapital(peek)) {
        return result.append(this.getChar());
      } else if (char === "[") {
        result.append(this.readUntil("]"));
      } else if (this.isWhiteSpace(char)) {
        return result;
      } else {
        result.append(this.getChar());
      }
      char = this.peekChar();
      peek = this.peekChar(1);
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

  readSentence(): spSentence {
    let result = new spSentence();
    this.readWhitespace();
    let token = this.readToken();
    while (!token.isEmpty()) {
      result.append(token);
      if (token.endsWithChar(".")  && token.text != "U.S.") {
        return result;
      }
      this.readWhitespace();
      token = this.readToken();
    }
    return result;
  }

  readParagraph(): spParagraph {
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
