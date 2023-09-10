export function getAuthenticatedUser() {
  try {
    const store = localStorage.getItem('user-storage');

    if (store) {
      const userParsed = JSON.parse(store).state.user;

      return userParsed;
    }
  } catch (e) {
    console.error('Error getting user from localStorage', e);
  }

  return undefined;
}
