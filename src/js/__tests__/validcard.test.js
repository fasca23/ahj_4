import validate from '../validcard';

test.each([
  ['Виза', '4750657776370372', '.visa'],
  ['МИР', '6011000990139424', '.mir'],
  ['Мастеркарт', '5467929858074128', '.master'],
  ['Амекс', '375700000000002', '.amex'],
  ['Джисиби', '3530111333300000', '.jcb'],
  ['ноунейм', '0000000000', null],

])(('it should be %s'), (_, value, expected) => {
  expect(validate(value)).toBe(expected);
});
