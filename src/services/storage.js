export const getAuthToken = async () => {
  const authToken = await localStorage.getItem('authToken');
  return authToken;
};

export const setAuthToken = async (authToken) => {
  try {
    await localStorage.setItem('authToken', authToken);
  } catch (error) {
    console.error('local storage error', error);
  }
};
