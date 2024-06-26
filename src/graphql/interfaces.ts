export interface JwtTokenPayload {
    exp: number;   // Zeitpunkt des Ablaufs
    iat: number;   // Ausstellungszeitpunkt
    jti: string;   // JWT ID
    iss: string;   // Herausgeber
    aud: string;   // Audience
    sub: string;   // Subject
    typ: string;   // Type
    azp: string;   // Authorized party
    session_state: string; 
    acr: string;   // Authentication Context Class Reference
    allowed_origins: string[];
    realm_access: { roles: string[] };
    resource_access: {
        [key: string]: {
            roles: string[];
        }
    };
    scope: string;
    sid: string;   // Session ID
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
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

export enum BuchArt {
    DRUCKAUSGABE = "DRUCKAUSGABE",
    KINDLE = "KINDLE",
}

export interface SuchkriterienInput {
    titel?: string;
    isbn?: string;
    rating?: number;
    art?: BuchArt;
    lieferbar?: boolean;
}

export interface Titel {
    titel: string;
    untertitel?: string;
}

export interface Buch {
    id: number;
    version: number;
    isbn: string;
    rating?: number;
    art: BuchArt;
    preis: number;
    lieferbar: boolean;
    datum?: string;
    homepage?: string;
    schlagwoerter?: string[];
    titel: Titel;
    rabatt: (short: boolean) => string;
}

export enum BuchFields {
    'id',
    'version',
    'isbn',
    'rating',
    'art',
    'preis',
    'lieferbar',
    'datum',
    'homepage',
    'schlagwoerter',
    'titel',
    'rabatt',
}

export interface FilterParameter {
    key: string;
    value: string | boolean | number;
}

export interface AbbildungInput {
    beschriftung: string;
    contentType: string;
}

export interface TitelInput {
    titel: string;
    untertitel?: string;
}

export interface BuchInput {
    isbn?: string;
    rating?: number;
    art?: BuchArt;
    preis?: number;
    rabatt?: number;
    lieferbar?: boolean;
    datum?: string;               
    homepage?: string;
    schlagwoerter?: string[];
    titel: TitelInput;
    abbildungen?: AbbildungInput[];
}
  