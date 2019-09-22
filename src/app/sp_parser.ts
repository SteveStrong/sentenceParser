import { spBuffer } from './sp_buffer';

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
        return this._buffer.getChar();
    }

}
