import client from './client';

async function authenticate(email, password) {
  return await client
    .post('/studentLogin', {email, password})
    .then(res => {
      console.log('Response in Authentication: ', res);
      if (res.ok) {
        console.log('Authenticated Successfully with email: ', email);
        return res.data;
      } else {
        console.log('Authentication Failed with email: ', email);
        return res.data;
      }
    })
    .catch(error => {
      console.log('Error while requesting for authentication');
      console.error(error);
    });
}

async function createUser(name, email, password) {
  return await client
    .post('./students', {name, email, password})
    .then(res => {
      console.log('Response in Authentication: ', res);
      if (res.ok) {
        console.log('User Added: ', name, email, password);
        return res.data;
      } else {
        console.log('User not created: ', name, email, password);
        return res.data;
      }
    })
    .catch(error => {
      console.log('Error while requesting for authentication');
      console.error(error);
    });
}

// data = authenticate(email, password)
// if (data != 'User ....') {

// }

export {authenticate, createUser};
