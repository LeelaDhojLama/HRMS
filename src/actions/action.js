export function signIn(userName) {
  return {
    type: 'ONSIGNIN',
    userName: userName,
  };
}

export function signOut() {
  return {
    type: 'ONSIGNOUT',
    userName: '',
  };
}

export function onClockInOut() {
  return {
    type: 'ONCLOCKINOUT'
  }
}

export function onLeave() {
  return {
    type: 'ONLEAVE',
  }
}

export function onOverTime() {
  return {
    type: 'ONOVERTIME',
  }
}

export function onStaReport() {
  return {
    type: 'ONSTAREPORT',
  }
}