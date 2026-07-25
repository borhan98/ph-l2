// enum

// type UserRoles = 'admin' | 'editor' | 'viewer';

// const canEdit = (role: UserRoles) => {
//   if (role === 'admin' || role === 'editor') {
//     return true;
//   }
//   return false;
// }

// enum UserRoles {
//   admin = 'admin',
//   editor = 'editor',
//   viewer = 'viewer',
// }

// const canEdit = (role: UserRoles) => {
//   if(role === UserRoles.admin || role === UserRoles.editor) {
//     return true;
//   }
//   return false;
// }

const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
  if(role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  }
  return false;
}

console.log(canEdit(UserRoles.Admin));
