
export const types = {
  ONSIGNIN: 'ONSIGNIN',
  ONSIGNOUT: 'ONSIGNOUT'
}
export function signIn(userName) {
  console.log(userName);
  return {
    type: types.ONSIGNIN,
    userName: userName,
    sign: true
  };
}

export function signOut() {
  console.log('yeeeeeeeee');
  return {
    type: types.ONSIGNOUT,
    userName: '',
    sign: false
  };
}

export default {
  signIn,
  signOut
}