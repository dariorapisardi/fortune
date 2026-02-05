# Agent Fortune

[![npm](https://img.shields.io/npm/v/agent-fortune?color=brightgreen)](https://www.npmjs.com/package/agent-fortune)

Tiny, silly fortune-cookie agent for OpenCode.

Quick install:

```bash
npx --yes agent-fortune install --global
```

## Install

```bash
npx --yes agent-fortune install --global
```

To install only for the current repo:

```bash
npx --yes agent-fortune install --project
```

The installer respects `OPENCODE_CONFIG_DIR` if you set it.

## Use in OpenCode

After installation, mention the agent in any session:

```
@fortune
```

## Use in other tools

Use the raw prompt here:

- `prompts/fortune.txt`

## Files

- `agents/fortune.md` (OpenCode agent definition)
- `prompts/fortune.txt` (raw prompt text)
- `bin/agent-fortune.js` (installer CLI)

## License

MIT
