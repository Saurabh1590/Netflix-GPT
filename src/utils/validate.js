export const checkValiData = (email, password, fullName, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  const isFullNameVaild = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){1,}$/.test(fullName);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isSignInForm && !isFullNameVaild) return "Full Name is not valid";

  return null;
};
