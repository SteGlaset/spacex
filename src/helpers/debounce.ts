const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  callback: F,
  wait: number
) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => callback.apply(this, args), wait);
  };
};

export default debounce;
