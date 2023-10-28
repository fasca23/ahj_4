export default function validCards(value) {
  if (/^4\d{12}(?:\d{3})/.test(value)) {
    return '.visa';
  } if (/(^5[1-5])\d{14}/.test(value)) {
    return '.master';
  } if (/(^3[47])\d{13}/.test(value)) {
    return '.amex';
  } if (/^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
    return '.jcb';
  } if (/(^2||6)\d{15}/.test(value)) {
    return '.mir';
  }
  return null;
}
