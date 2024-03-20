import { createLogger, type Plugin } from "vite"
import path from "path"

interface BuildTimeTarget {
    absolute: string
    origin: string
    checked: boolean
}

export interface PluginOptions {
    files?: string[]
}

async function executeBuildTimeFile(code: string) {
    console.log(code)
}

function getAbsolutePath(filepath: string) {
    return path.isAbsolute(filepath) ? filepath : path.resolve(process.cwd(), filepath)
}

export function buildTimePlugin(options?: PluginOptions): Plugin {
    const { files = [] } = options ?? {}
    const logger = createLogger()
    const targets = new Map<string, BuildTimeTarget>()

    return {
        name: "build-time",
        buildStart() {
            for (const file of files) {
                const absolutePath = getAbsolutePath(file)
                targets.set(absolutePath, { absolute: absolutePath, origin: file, checked: false })
            }
        },
        buildEnd() {
            for (const [_, target] of targets) {
                if (!target.checked) {
                    throw new Error(`build time file: ${target.origin} is not found`)
                }
            }
        },
        transform: {
            order: "post",
            async handler(code, id) {
                const moduleInfo = this.getModuleInfo(id)
                if (!moduleInfo) return

                if (targets.has(moduleInfo.id)) {
                    const target = targets.get(moduleInfo.id)
                    target!.checked = true
                    logger.info(`perpare build time file: ${target!.origin}`, { timestamp: true })

                    await executeBuildTimeFile(code)

                    // run the script and transform the code
                    logger.info(`done!!`, { timestamp: true })
                }
            }
        },
        renderStart() {
            logger.info("renderStart", { timestamp: true })
        }
    }
}
