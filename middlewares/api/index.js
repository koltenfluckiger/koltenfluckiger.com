const AUTH_DOMAIN = process.env.AUTH_DOMAIN;

const JWT = require("jsonwebtoken");
const JWKSClient = require('jwks-rsa')({strictSSL: true, cache: true, rateLimit: true, jwksUri: `${AUTH_DOMAIN}/.well-known/jwks.json`});

class APIMiddleware {

    constructor(options) {
        this.client = options.client;
        this._setPublicKey();
        this.verify = this.verify.bind(this);
    }

    _setPublicKey() {
        this.client.getSigningKeys((err, keys) => {
            if (!keys)
                return null;
            this.publicKey = keys[0].rsaPublicKey;
        })
    }

    _getPublicKey() {
        return this.publicKey;
    }

    async verify(req, res, next) {
        try {
            if (!req.headers.access_token)
                return res.sendStatus(401);
            const token = req.headers.access_token.split(" ")[1];
            await JWT.verify(token, this.publicKey);
            return next();
        } catch (err) {
            console.log(err);
            return res.sendStatus(401);
        }
    }
}

module.exports = new APIMiddleware({client: JWKSClient});
