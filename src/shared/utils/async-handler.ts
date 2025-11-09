export async function asyncHandler<T>(handler: (...T: any) => Promise<T>) {
  return async (...T: any) => {
    try {
      return await handler(...T);
    } catch (error: any) {
      console.log("error", error);
      return {
        data: null,
        message: `Something went wrong: ${error.message}`,
        error: error,
      };
    }
  };
}
