import { spBuffer } from './sp_buffer';
import { spToken } from './sp_token';

export class spParser {
    private _buffer: spBuffer;

    setBuffer(text:string){
        this._buffer = new spBuffer();
        this._buffer.setBuffer(text)
    }

    getChar() {
        return this._buffer.getChar();
    }

    peekChar(lookAhead:number=0) {
        return this._buffer.peekChar(lookAhead);
    }

    private isNullOrWhiteSpace(str) {
        return (!str || str.length === 0 || /^\s*$/.test(str))
    }

    readTillWhitespace(){
        let result = new spToken();
        let char = this.peekChar();
        while( !this.isNullOrWhiteSpace(char)  ){
            result.append(this.getChar());
            char = this.peekChar();
        }
        return result;
    }

}
