export const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Диспатч:', action.type);
  return next(action);
};