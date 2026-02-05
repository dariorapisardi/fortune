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

## Examples

### AGENTS.md snippet (auto-add a fortune to PRs)

Add this to your repo's `AGENTS.md`:

```md
## Examples

- If creating a PR, append a quote from the `@fortune` agent at the end of the PR description. Send the changelog to @fortune so the quote is relevant.
```

### Sample quotes

- "Even the shinier docs can't save you from forgetting to update the README."
- "You gained a fullscreen view and a back button, which means the bugs now have a nicer place to hide."
- "Even your pets need smaller rooms, static frames, and proper URLs because chaos still needs good routing."
- "Refactor today, decipher tomorrow, but the bugs still take weekends off."
- "Your merge will succeed, but only to make room for the next bug."

## Files

- `agents/fortune.md` (OpenCode agent definition)
- `prompts/fortune.txt` (raw prompt text)
- `bin/agent-fortune.js` (installer CLI)

## License

MIT
