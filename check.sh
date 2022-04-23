#!/usr/bin/env bash

function check {
  if [ $? -eq 0 ]; then
    echo "✅ $1"
  else
    echo "❌ $1: Ejecuta $2 para más información"
  fi
}

npm run build --if-present >/dev/null 2>&1
check "Compilación" "npm run build"

npm run test --script-shell >/dev/null 2>&1
check "Tests" "npm run test"

# Ejecutar el formateador y despues checkear, siempre debería estar bien
npm run format >/dev/null 2>&1
npm run check-format >/dev/null 2>&1
check "Format" "npm run check-format"

npm run lint >/dev/null 2>&1
check "Linter" "npm run lint"
