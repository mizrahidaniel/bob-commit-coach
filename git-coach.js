#!/usr/bin/env node
const msg = process.argv.slice(2).join(' ');

if (!msg) {
  console.log('Usage: git-coach "your commit message"');
  process.exit(1);
}

let score = 100;
const issues = [];
const suggestions = [];

// Length checks
if (msg.length < 10) {
  score -= 30;
  issues.push('❌ Too short');
  suggestions.push('💡 Add context about what changed');
}
if (msg.length > 72) {
  score -= 10;
  issues.push('⚠️  First line > 72 chars');
}

// Format checks
if (!/^[A-Z]/.test(msg)) {
  score -= 15;
  issues.push('⚠️  Start with capital letter');
}

// Anti-patterns
const bad = [
  { pattern: /^(fix|update|wip)$/i, msg: 'Too vague' },
  { pattern: /asdf|qwer|aaa/i, msg: 'Placeholder text' }
];
bad.forEach(({pattern, msg: badMsg}) => {
  if (pattern.test(msg)) {
    score -= 25;
    issues.push(`❌ ${badMsg}`);
  }
});

// Imperative mood
if (/^(added|fixed|updated)/i.test(msg)) {
  score -= 10;
  issues.push('⚠️  Use imperative ("add" not "added")');
}

// Display
const stars = '⭐'.repeat(Math.ceil(score/20));
console.log(`Score: ${stars} ${score}/100\n`);
issues.forEach(i => console.log(i));
suggestions.forEach(s => console.log(s));

process.exit(score < 60 ? 1 : 0);
