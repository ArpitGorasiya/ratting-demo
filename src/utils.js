export const getLoginData = () => JSON.parse(localStorage.getItem("loginUser"));
export const getUserDetails = () => localStorage.getItem("userDetails");
export const logout = () => localStorage.removeItem('loginUser');
