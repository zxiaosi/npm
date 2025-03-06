import fs from 'fs';
import path from 'path';
import pc from 'picocolors';

const sourceDir = path.dirname(__dirname);
const targetDir = process.cwd();

export default async function (fileName: string) {
  try {
    // 获取源文件和目标路径
    const sourcePath = path.join(sourceDir, 'templates', fileName);
    const targetPath = path.join(targetDir, fileName);

    // 判断目标文件是否存在
    if (fs.existsSync(targetPath)) {
      throw new Error(`The folder ${fileName} already exists. 🤖`);
    }

    // 拷贝文件
    fs.cpSync(sourcePath, targetPath, { recursive: true });

    return pc.green(`Successfully copied ${fileName}！🎉`);
  } catch (error) {
    return pc.red(`Error: ${error.message}`);
  }
}
