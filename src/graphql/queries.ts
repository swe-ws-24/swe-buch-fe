import axios from 'axios';
import Auth from './auth';
import { LoginStatus } from './interfaces';

const auth = new Auth();

export const login = async (username: string, password: string) => {
    const mutation = `
    mutation {
        login(username: "${username}", password: "${password}") {
          token
          expiresIn
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
      const { token } = login;
      const loggedIn = auth.setAuthCookie(token);
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