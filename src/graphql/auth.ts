import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import { AuthCookiePayload, JwtTokenPayload } from '@/graphql/interfaces';

const COOKIE_NAME = 'auth_cookie';

class Auth {
    readonly #cookies: Cookies;

    constructor() {
        this.#cookies = new Cookies();
    }

    setAuthCookie(token: string) {
        const decodedJwt = jwtDecode<JwtTokenPayload>(token);
        const { exp, username } = decodedJwt;
        const cookiePayload = {
            token,
            username,
        };
        this.#cookies.set(COOKIE_NAME, cookiePayload, {
            // Berechnung: 1000 Millisekunden/Sekunde * 60 Sekunden/Minute * 60 Minuten/Stunde * 24 Stunden/Tag * 30 Tage
            expires: new Date(exp + (1000 * 60 * 60 * 24 * 30)),
            sameSite: 'strict',
        });
        return this.checkAuthCookie();
    }

    getAuthCookie(): AuthCookiePayload {
        return this.#cookies.get(COOKIE_NAME);
    }

    checkAuthCookie() {
        return this.getAuthCookie() !== undefined;
    }

    removeAuthCookie() {
        this.#cookies.remove(COOKIE_NAME);
    }
}

export default Auth;