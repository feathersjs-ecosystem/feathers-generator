import fs from 'fs-extra';

export default fs.existsSync || function existsSync (filePath) {
  try {
    fs.statSync(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
  }

  return true;
};
