#!/usr/bin/env bash
set -euo pipefail

# Hanbit Design System — Claude Code Skill Installer
# Deploys skill files to ~/.claude/skills/hanbit-design/

SKILL_NAME="hanbit-design"
SKILL_DIR="$HOME/.claude/skills/$SKILL_NAME"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/skill"

# Color output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " Hanbit Design System — Skill Installer"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check source exists
if [ ! -f "$SOURCE_DIR/SKILL.md" ]; then
  echo "❌ Error: skill/SKILL.md not found."
  echo "   Run this script from the repo root: ./install.sh"
  exit 1
fi

# Ensure ~/.claude/skills/ exists
mkdir -p "$HOME/.claude/skills"

# Backup existing installation
if [ -d "$SKILL_DIR" ]; then
  TIMESTAMP=$(date +%Y%m%d_%H%M%S)
  BACKUP_DIR="${SKILL_DIR}.bak.${TIMESTAMP}"
  echo -e "${YELLOW}⚠ Existing installation found. Backing up to:${NC}"
  echo "  $BACKUP_DIR"
  mv "$SKILL_DIR" "$BACKUP_DIR"
fi

# Create skill directory
mkdir -p "$SKILL_DIR/references"

# Copy skill files
cp "$SOURCE_DIR/SKILL.md" "$SKILL_DIR/SKILL.md"
cp "$SOURCE_DIR/references/components.md" "$SKILL_DIR/references/components.md"
cp "$SOURCE_DIR/references/tokens.md" "$SKILL_DIR/references/tokens.md"
cp "$SOURCE_DIR/references/patterns.md" "$SKILL_DIR/references/patterns.md"

echo ""
echo -e "${GREEN}✅ Installation complete!${NC}"
echo ""
echo "Installed to: $SKILL_DIR"
echo ""
echo "Files:"
echo "  SKILL.md              — Main skill definition"
echo "  references/components.md — Component API reference (73 components)"
echo "  references/tokens.md     — Design token quick-lookup"
echo "  references/patterns.md   — Common UI patterns & recipes"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " Usage"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Claude Code 세션에서 UI 작업을 요청하면"
echo "hanbit-design 스킬이 자동으로 참조됩니다."
echo ""
echo "확인:"
echo "  ls ~/.claude/skills/hanbit-design/"
echo ""
echo "업데이트:"
echo "  cd $(pwd) && git pull && ./install.sh"
echo ""
