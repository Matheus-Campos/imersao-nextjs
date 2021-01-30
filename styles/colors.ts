import { pallete } from './pallete';

export interface Colors {
  primary: string
  secondary: string
  mainBg: string
  contrastText: string
  wrong: string
  success: string
}

export const colors: Colors = {
  primary: pallete.deepPurple,
  secondary: pallete.yellow,
  mainBg: pallete.darkBlack,
  contrastText: pallete.white,
  success: pallete.green,
  wrong: pallete.red,
};
