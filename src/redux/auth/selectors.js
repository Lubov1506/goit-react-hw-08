export const selectUserName = (state) => state.auth.user.name;
export const selectToken = (state) => state.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;
