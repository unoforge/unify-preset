import { resolve } from 'node:path'
import { defineBuildConfig } from 'unbuild'
import fs from 'fs';
import path from 'path';


async function copyFolder(src: string, dest: string): Promise<void> {
  try {
    if (!fs.existsSync(dest)) {
      await fs.promises.mkdir(dest, { recursive: true });
    }
    const items = await fs.promises.readdir(src);

    for (const item of items) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);

      const stat = await fs.promises.stat(srcItem);

      if (stat.isDirectory()) {
        await copyFolder(srcItem, destItem);
      } else {
        await fs.promises.copyFile(srcItem, destItem);
      }
    }
    console.log(`✔ Theme copied from ${src} to ${dest}`);
  } catch (err) {
    console.error('Error copying folder:', err);
  }
}


export default defineBuildConfig({
    entries: ['src/index'],
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
        alias: {
            entries: {
                "@/types": resolve(__dirname, './src/types/'),
                "@/utils": resolve(__dirname, './src/utils/'),
                "@/rules": resolve(__dirname, './src/rules'),
                "@/shortcuts": resolve(__dirname, './src/shortcuts/'),
                "@/ui": resolve(__dirname, "./src/ui/"),
                "@/colors":resolve(__dirname, "./src/colors/")
            },
        },
        dts: {
            compilerOptions: {
                baseUrl: "./",
                paths: {
                    "@/*": ["src/*"]
                }
            }
        }
    },
    failOnWarn: false,
    externals: ['unocss', "@unifydev/unify-variant", '@unocss/preset-mini/utils', '@unocss/rule-utils', '@unocss/core'],
    hooks: {
        'mkdist:done':async () => {
            await copyFolder('src/css', 'dist/css')
        }
    }
})