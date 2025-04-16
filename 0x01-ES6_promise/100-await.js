import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('photo-profile-1');
    const user = await createUser('Guillaume', 'Salva');
    return {
      photo: photo,
      user: user
    };
  } catch (error) {
    return {
      photo: null,
      user: null
    };
  }
}
