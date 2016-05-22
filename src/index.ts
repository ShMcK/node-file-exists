import {accessSync, F_OK} from 'fs';

export default function fileExists(path: string, silent = true) {
  try {
    accessSync(path, F_OK);
  } catch (e) {
    if (e) {
      if (!silent) {
        console.log(e);
      }
      return false;
    }
  }
  return true;
}
