import { spParser } from './sp_parser';

 const data = "(a) In general. Section 903 provides that the term “income, war profits, and excess profits taxes” shall include a tax paid in lieu of a tax on income, war profits, or excess profits (“income tax”) otherwise generally imposed by any foreign country. For purposes of this section and §§ 1.901-2 and 1.901-2A, such a tax is referred to as a “tax in lieu of an income tax”; and the terms “paid” and “foreign country” are defined in § 1.901-2(g). A foreign levy (within the meaning of § 1.901-2(g)(3)) is a tax in lieu of an income tax if and only if -(1) It is a tax within the meaning of § 1.901-2(a)(2); and(2) It meets the substitution requirement as set forth in paragraph (b) of this section.The foreign country's purpose in imposing the foreign tax (e.g., whether it imposes the foreign tax because of administrative difficulty in determining the base of the income tax otherwise generally imposed) is immaterial. It is also immaterial whether the base of the foreign tax bears any relation to realized net income. The base of the tax may, for example, be gross income, gross receipts or sales, or the number of units produced or exported. Determinations of the amount of a tax in lieu of an income tax that is paid by a person and determinations of the person by whom such tax is paid are made under § 1.901-2 (e) and (f), respectively, substituting the phrase “tax in lieu of an income tax” for the phrase “income tax” wherever the latter appears in those sections. Section 1.901-2A contains additional rules applicable to dual capacity taxpayers (as defined in § 1.901-2(a)(2)(ii) (A)). The rules of this section are applied independently to each separate levy (within the meaning of §§ 1.901-2(d) and 1.901-2A (a)) imposed by the foreign country. Except as otherwise provided in paragraph (b)(2) of this section, a foreign tax either is or is not a tax in lieu of an income tax in its entirety for all persons subject to the tax.(b) Substitution - (1) In general. A foreign tax satisfies the substitution requirement if the tax in fact operates as a tax imposed in substitution for, and not in addition to, an income tax or a series of income taxes otherwise generally imposed. However, not all income derived by persons subject to the foreign tax need be exempt from the income tax. If, for example, a taxpayer is subject to a generally imposed income tax except that, pursuant to an agreement with the foreign country, the taxpayer's income from insurance is subject to a gross receipts tax and not to the income tax, then the gross receipts tax meets the substitution requirement notwithstanding the fact that the taxpayer's income from other activities, such as the operation of a hotel, is subject to the generally imposed income tax. A comparison between the tax burden of this insurance gross receipts tax and the tax burden that would have obtained under the generally imposed income tax is irrelevant to this determination.(2) Soak-up taxes. A foreign tax satisfies the substitution requirement only to the extent that liability for the foreign tax is not dependent (by its terms or otherwise) on the availability of a credit for the foreign tax against income tax liability to another country. If, without regard to this paragraph (b)(2), a foreign tax satisfies the requirement of paragraph (b)(1) of this section (including for this purpose any foreign tax that both satisfies such requirement and also is an income tax within the meaning of § 1.901-2(a)(1)), liability for the foreign tax is dependent on the availability of a credit for the foreign tax against income tax liability to another country only to the extent of the lesser of -(i) The amount of foreign tax that would not be imposed on the taxpayer but for the availability of such a credit to the taxpayer (within the meaning of § 1.901-2(c)), or(ii) The amount, if any, by which the foreign tax paid by the taxpayer exceeds the amount of foreign income tax that would have been paid by the taxpayer if it had instead been subject to the generally imposed income tax of the foreign country.(3) Examples. The provisions of this paragraph (b) may be illustrated by the following examples:Example 1.Country X has a tax on realized net income that is generally imposed except that nonresidents are not subject to that tax. Nonresidents are subject to a gross income tax on income from country X that is not attributable to a trade or business carried on in country X. The gross income tax imposed on nonresidents satisfies the substitution requirement set forth in this paragraph (b). See also examples 1 and 2 of § 1.901-2(b)(4)(iv).Example 2.The facts are the same as in example 1, with the additional fact that payors located in country X are required by country X law to withhold the gross income tax from payments they make to nonresidents, and to remit such withheld tax to the government of country X. The result is the same as in example 1.Example 3.The facts are the same as in example 2, with the additional fact that the gross income tax on nonresidents applies to payments for technical services performed by them outside of country X. The result is the same as in example 2.Example 4.Country X has a tax that is generally imposed on the realized net income of nonresident corporations that is attributable to a trade or business carried on in country X. The tax applies to all nonresident corporations that engage in business in country X except for such corporations that engage in contracting activities, each of which is instead subject to two different taxes. The taxes applicable to nonresident corporations that engage in contracting activities satisfy the substitution requirement set forth in this paragraph (b).Example 5.Country X imposes both an excise tax and an income tax. The excise tax, which is payable independently of the income tax,is allowed as a credit against the income tax. For 1984 A has a tentative income tax liability of 100u (units of country X currency) but is allowed a credit for 30u of excise tax that it has paid. Pursuant to paragraph (e)(4)(i) of § 1.901-2, the amount of excise tax A has paid to country X is 30u and the amount of income tax A has paid to country X is 70u. The excise tax paid by A does not satisfy the substitution requirement set forth in this paragraph (b) because the excise tax is imposed on A in addition to, and not in substitution for, the generally imposed income tax.Example 6.Pursuant to a contract with country X, A, a domestic corporation engaged in manufacturing activities in country X, must pay tax to country X equal to the greater of (i) 5u (units of country X currency) per item produced, or (ii) the maximum amount creditable by A against its U.S. income tax liability for that year with respect to income from its country X operations. Also pursuant to the contract, A is exempted from country X's otherwise generally imposed income tax. A produces 16 items in 1984 and the maximum amount creditable by A against its U.S. income tax liability for 1984 is 125u. If A had been subject to country X's otherwise generally imposed income tax it would have paid a tax of 150u. Pursuant to paragraph (b)(2) of this section, the amount of tax paid by A that is dependent on the availability of a credit against income tax of another country is 0 (lesser of (i) 45u, the amount that would not be imposed but for the availability of a credit (125u-80u), or (ii) 0, the amount by which the contractual tax (125u) exceeds the generally imposed income tax (150u)).Example 7.The facts are the same as in example 6 except that, of the 150u A would have paid if it had been subject to the otherwise generally imposed income tax, 60u is dependent on the availability of a credit against income tax of another country. The amount of tax actually paid by A (i.e., 125u) that is dependent on the availability of a credit against income tax of another country is 35u (lesser of (i) 45u, computed as in example , § 6, or (ii) 35u, the amount by which the contractual tax (125u) exceeds the amount A would have paid as income tax if it had been subject to the otherwise generally imposed income tax (90u, i.e., 150u-60u).(c) Effective date. The effective date of this section is as provided in § 1.901-2(h).[T.D. 7918, 48 FR 46295, Oct. 12, 1983; 48 FR 52033, Nov. 16, 1983]"
 
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

    let word = parse.readToken();

    expect(word.text).toContain("we");
  });

  it('should get first word', () => {
    let parse = new spParser();
    parse.setBuffer(data);

    let word = parse.readToken();

    expect(word.text).toContain('(a)');
  });

});
