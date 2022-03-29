import jwt_decode from "jwt-decode";

export function decryptJWT(jwt) {
    var decoded = jwt_decode(jwt);

    return decoded
}