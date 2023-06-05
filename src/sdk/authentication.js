import axios from "axios";

const host = "http://localhost:9000";

export const authentication = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${host}/api/auth/signin`,

      {
        email: email,
        password: password,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
