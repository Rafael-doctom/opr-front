var bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

export function encryptValue(value) {
    var salt = bcrypt.genSaltSync(SALT_ROUNDS);
    var hash = bcrypt.hashSync(value, salt);

    return hash
}

export async function compareValue(value, hash) {
    var comparation = bcrypt.compareSync(value, hash);

    return comparation;
}