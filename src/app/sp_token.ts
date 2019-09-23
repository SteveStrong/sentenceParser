export class spToken {
    private _text:string = "";

    get text(){
        return this._text;
    }

    private isDigit(str):boolean {
        return  /^\d+$/.test(str);
      }

    isEmpty():boolean {
        return this._text === null ||  this._text === "";
    }

    isNumber():boolean {
        return !this.isEmpty() && this.isDigit(this._text[0])
    }

    startsWithChar(char:string) {
        return !this.isEmpty() && this._text[0] === char;
    }

    endsWithChar(char:string) {
        let len = this._text.length-1;
        return !this.isEmpty() && this._text[len] === char;
    }

    append(char:string):spToken {
        this._text = `${this._text}${char}`;
        return this;
    }
}
