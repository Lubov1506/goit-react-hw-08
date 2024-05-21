export const selectUserName = (state) => state.user.name;
export const selectToken = (state) => state.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
