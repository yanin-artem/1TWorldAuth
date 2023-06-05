import axios from "axios";

const host = "http://localhost:9000";

export const registration = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${host}/api/auth/signup`,

      {
        email: email,
        password: password,
        login: "artem",
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
