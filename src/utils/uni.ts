/**
 * 状态栏颜色
 */
export enum statusBarColorType {
  /**
   * 白色
   */
  white,
  /**
   * 黑色
   */
  black
}
export const setStatusBar = (type: statusBarColorType)=> {
  let color = 'white'
  if (type == statusBarColorType.black) color = 'black'
  try {
    plus.navigator.setStatusBarStyle(color)
  } catch (error) {
    throw new Error(error)
  }
}