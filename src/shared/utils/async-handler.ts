export function asyncHandler<T>(handler: (...args: any) => Promise<T>) {
  return async (...args: any) => {
    try {
      return await handler(...args);
    } catch (error: any) {
      console.log("error", error);
      return {
        data: null,
        error: `Something went wrong: ${error.message}`,
      };
    }
  };
}
