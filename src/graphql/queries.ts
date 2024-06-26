import axios, { AxiosResponse } from 'axios';
import Auth from './auth';
import https from 'https';
import { BuchFields, BuchInput, LoginStatus, SuchkriterienInput } from '@graphql/interfaces';
import { buildQuery } from '@graphql/queryHelper';

const auth = new Auth();

const httpsAgent = new https.Agent({  
    rejectUnauthorized: false,
});

axios.interceptors.request.use(config => {
    config.httpsAgent = httpsAgent;
    return config;
});


export const login = async (username: string, password: string) => {
  const mutation = `
  mutation {
      login(username: "${username}", password: "${password}") {
        access_token
        expires_in
        roles
      }
  }`;

  const options = {
      method: 'POST',
      url: 'https://localhost:3000/graphql',
      headers: {
          'Content-Type': 'application/json',
          'X-REQUEST-TYPE': 'GraphQL',
      },
      data: {
          query: mutation,
      },
  };

  const LoginStatus: LoginStatus = {
      loggedIn: false,
      errors: [],
  };

  try {
    const result = await axios.request(options);
    const { errors, data } = result.data;
    const { login } = data;
    if (login) {
      const { access_token } = login;
      const loggedIn = auth.setAuthCookie(access_token);
      if (!loggedIn) {
        throw new Error('Login fehlgeschlagen');
      }
      LoginStatus.loggedIn = loggedIn;
    }
    if (errors) {
      const errMessage = errors
        .flatMap((err: { message: string }) => err.message)
        .toString();
      LoginStatus.errors?.push(errMessage);
    }
  } catch (err: any) {
    LoginStatus.errors?.push(err.message);
  }

  return LoginStatus;
};

export const queryBuecher = async (
  suchkriterien: SuchkriterienInput,
): Promise<AxiosResponse> => {
  const query = buildQuery(suchkriterien);

  const options = {
      method: 'POST',
      url: 'https://localhost:3000/graphql',
      headers: {
          'Content-Type': 'application/json',
          'X-REQUEST-TYPE': 'GraphQL',
          ...(auth.checkAuthCookie() && {
              Authorization: `Bearer ${auth.getAuthCookie().token}`,
          }),
      },
      data: {
          query,
      },
  };

  return axios.request(options);
};

export const createBuch = async (buchData: BuchInput) => {
  const mutation = `
    mutation create($buchData: BuchInput!) {
      create(input: $buchData){
        id
      }
    }
  `;

  const options = {
      method: 'POST',
      url: 'https://localhost:3000/graphql',
      headers: {
          'Content-Type': 'application/json',
          'X-REQUEST-TYPE': 'GraphQL',
          ...(auth.checkAuthCookie() && {
              Authorization: `Bearer ${auth.getAuthCookie().token}`,
          }),
      },
      data: {
          query: mutation,
          variables: {
              buchData,
          },
      },
  };

  return axios.request(options);
};

export const queryBuch = async (id: string): Promise<AxiosResponse> => {
  const query = `
  query {
    buch(id: "${id}") {
      id
      version
      isbn
      rating
      art
      preis
      lieferbar
      datum
      homepage
      schlagwoerter
      titel {
        titel
        untertitel
      }
      rabatt(short: true)
    }
  }
  `;

  const options = {
    method: 'POST',
    url: 'https://localhost:3000/graphql',
    headers: {
      'Content-Type': 'application/json',
      'X-REQUEST-TYPE': 'GraphQL',
      ...(auth.checkAuthCookie() && {
        Authorization: `Bearer ${auth.getAuthCookie().token}`,
      }),
    },
    data: {
      query,
    },
  };

  return axios.request(options);
};
