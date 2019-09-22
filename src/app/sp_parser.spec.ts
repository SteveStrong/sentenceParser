import { spParser } from './sp_parser';

describe('spParser', () => {
  it('should create an instance', () => {
    expect(new spParser()).toBeTruthy();
  });

  it('should get first character', () => {
    let buf = new spParser();
    buf.setBuffer("hello");
    let char = buf.getChar();
    expect(char).toEqual('h');
  });

  it('should get first word', () => {
    let parse = new spParser();
    parse.setBuffer("we are the know.");

    let word = parse.readTillWhitespace();

    expect(word.text).toContain("we");
  });

});
