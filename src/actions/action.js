export function signIn(userName) {
  return {
    type: 'ONSIGNIN',
    userName: userName,
    sign: true
  };
}

export function signOut() {
  return {
    type: 'ONSIGNOUT',
    userName: '',
    sign: false
  };
}