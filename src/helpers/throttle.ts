const throttle = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  callback: F,
  wait: number
) => {
  let timer: NodeJS.Timeout | null = null;

  return function perform(...args: Parameters<F>): void {
    if (timer) return;

    timer = setTimeout(() => {
      callback(...args);

      clearTimeout(timer!);
      timer = null;
    }, wait);
  };
};

export default throttle;
