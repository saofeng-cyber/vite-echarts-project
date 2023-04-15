const baseWidth: number = 1920;
const baseHeight: number = 1080;
export const getScale = (): number => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ww = width / baseWidth;
  const wh = height / baseHeight;
  return ww < wh ? ww : wh;
};
