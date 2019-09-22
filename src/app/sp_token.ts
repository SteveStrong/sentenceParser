export class spToken {
    private _text:string;

    get text(){
        return this._text;
    }
    
    isEmpty():boolean {
        return this._text === null ||  this._text === "";
    }

    append(char:string):spToken {
        this._text = `${this._text}${char}`;
        return this;
    }
}
