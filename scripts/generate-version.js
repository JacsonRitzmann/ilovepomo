const fs = require('fs')
const path = require('path')

const pkgPath = path.resolve(__dirname, '..', 'package.json')
const outPath = path.resolve(__dirname, '..', 'public', 'version.json')

try {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
  const out = { version: pkg.version }
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(out))
  console.log('Wrote', outPath)
} catch (err) {
  console.error('Failed to generate version.json', err)
  process.exit(1)
}
