export const endpoints = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    signOut: '/auth/sign-out',
    refresh: '/auth/refresh',
  },
  tasks: {
    newTask: '/task',
    tasks: '/task',
    updateStatus: '/task/status/',
    archive: '/task/archive/',
    archivedTasks: '/task/archived',
  },
};
