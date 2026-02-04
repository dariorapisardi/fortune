#!/usr/bin/env node

const fs = require("fs/promises")
const os = require("os")
const path = require("path")

const usage = `Usage: agent-fortune <command> [options]

Commands:
  install       Copy the OpenCode agent into a config directory

Options:
  --global      Install to ~/.config/opencode/agents (default)
  --project     Install to .opencode/agents in the current directory
  --force, -f   Overwrite existing fortune.md
  --help, -h    Show this help
`

const args = process.argv.slice(2)

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log(usage)
  process.exit(0)
}

const [command, ...rest] = args

if (command !== "install") {
  console.error(`Unknown command: ${command}\n`)
  console.error(usage)
  process.exit(1)
}

const options = parseOptions(rest)

installAgent(options).catch((error) => {
  console.error(`Install failed: ${error.message}`)
  process.exit(1)
})

function parseOptions(rawArgs) {
  let force = false
  let installScope = "global"
  let hasGlobal = false
  let hasProject = false

  for (const arg of rawArgs) {
    if (arg === "--force" || arg === "-f") {
      force = true
      continue
    }

    if (arg === "--global") {
      hasGlobal = true
      installScope = "global"
      continue
    }

    if (arg === "--project") {
      hasProject = true
      installScope = "project"
      continue
    }

    console.error(`Unknown option: ${arg}\n`)
    console.error(usage)
    process.exit(1)
  }

  if (hasGlobal && hasProject) {
    console.error("Choose either --global or --project, not both.")
    process.exit(1)
  }

  return { force, installScope }
}

async function installAgent({ force, installScope }) {
  const source = path.resolve(__dirname, "..", "agents", "fortune.md")
  const targetDir = getTargetDir(installScope)
  const target = path.join(targetDir, "fortune.md")

  await fs.mkdir(targetDir, { recursive: true })

  if (!force && (await exists(target))) {
    throw new Error(`fortune.md already exists at ${target}. Use --force to overwrite.`)
  }

  await fs.copyFile(source, target)
  console.log(`Installed @fortune to ${target}`)
}

function getTargetDir(scope) {
  if (scope === "project") {
    return path.join(process.cwd(), ".opencode", "agents")
  }

  const configDir = process.env.OPENCODE_CONFIG_DIR
    ? path.resolve(process.env.OPENCODE_CONFIG_DIR)
    : path.join(os.homedir(), ".config", "opencode")

  return path.join(configDir, "agents")
}

async function exists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch (error) {
    return false
  }
}
