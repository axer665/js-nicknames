import Validator from "../classes/Validator";

test('Positive check for correct Username', () => {
    const name = new Validator();
    expect(name.validateUsername('Misha')).toBe('Username is allowed');
});

test('Negative check for Username that starts with "-"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('-Misha'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that starts with digit', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('34Misha'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that starts with "_"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('_Misha'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username contains more than 3 digits in turn', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('Mis000ha'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that ends on "-"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('Misha-'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that ends on digit', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('Misha34'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that ends on "_"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('Misha_'); }).toThrow('Error: Please follow the Username guide.');
});