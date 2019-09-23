import { spToken } from "./sp_token";

export class spSentence {
    tokens: Array<spToken> = new Array<spToken>();

    isEmpty():boolean {
        return this.tokens.length === 0;
    }

    append(token:spToken) {
        this.tokens.push(token);
    }

    asString(){
        const reducer = (accumulator:string, currentValue:spToken) => {
            if ( accumulator.length === 0)
                return currentValue.text;
            else 
                return `${accumulator} ${currentValue.text}`;
        }
        return this.tokens.reduce(reducer,'');
    }

}

export class spParagraph {
    sentences: Array<spSentence> = new Array<spSentence>();

    isEmpty():boolean {
        return this.sentences.length === 0;
    }

    append(token:spSentence) {
        this.sentences.push(token);
    }

    asString(){
        const reducer = (accumulator:string, currentValue:spSentence) => `${accumulator} ${currentValue.asString()}`;
        return this.sentences.reduce(reducer,'');
    }

}
