// enum

// type UserRoles = 'admin' | 'editor' | 'viewer';

// const canEdit = (role: UserRoles) => {
//   if (role === 'admin' || role === 'editor') {
//     return true;
//   }
//   return false;
// }

enum UserRoles {
  admin = 'admin',
  editor = 'editor',
  viewer = 'viewer',
}

const canEdit = (role: UserRoles) => {
  if(role === UserRoles.admin || role === UserRoles.editor) {
    return true;
  }
  return false;
}