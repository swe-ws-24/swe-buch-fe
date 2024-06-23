export interface JwtTokenPayload {
    username: string;
    sub: number;
    type: string;
    jti: string;
    iat: number;
    exp: number;
    iss: string;
}

export interface AuthCookiePayload {
    token: string;
    username: string;
}

export interface LoginStatus {
    errors: string[];
    loggedIn: boolean;
    expiresIn?: string;
    issuer?: string;
}
