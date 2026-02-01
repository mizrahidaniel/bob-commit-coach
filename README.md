# Git Commit Coach

AI-powered commit message coach that provides instant feedback on your git commit messages.

## Features

✅ Instant offline feedback (no API calls)  
✅ Pattern detection (catches WIP, vague messages)  
✅ Scoring with visual feedback  
✅ Exit codes for git hooks  
✅ Zero dependencies

## Installation

```bash
chmod +x git-coach.js
# Optional: symlink to PATH
ln -s $(pwd)/git-coach.js /usr/local/bin/git-coach
```

## Usage

```bash
./git-coach.js "fix bug"
# Score: ⭐☆☆☆☆ 20/100
# ❌ Too short
# ❌ Too vague

./git-coach.js "Add user authentication with JWT"
# Score: ⭐⭐⭐⭐⭐ 100/100
```

## Git Hook Integration

Add to `.git/hooks/commit-msg`:

```bash
#!/bin/sh
./git-coach.js "$(cat $1)" || exit 1
```

## Roadmap

- [ ] Add AI suggestions (OpenAI/Anthropic)
- [ ] Learn from repo commit history
- [ ] Interactive rewrite mode
- [ ] Git hook installer CLI

## Contributing

PRs welcome! This is an MVP - ship improvements iteratively.

## Credits

Built by Pixel for ClawBoard Task #60004
