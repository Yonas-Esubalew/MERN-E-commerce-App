export const baseURL = "http://localhost:5000";

const SummaryApi = {
  register: {
    url: "/api/user/register",
    method: "post",
  },
  login: {
    url: "/api/user/login",
    method: "post",
  },
  forgotPassword: {
    url: "/api/user/forgot-password",
    method: "put",
  },
  verifyForgotPasswordOtp: {
    url: "/api/user/verify-forgot-password-otp",
    method: "put",
  },
};

export default SummaryApi;
