import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, test } from 'vitest'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const forbidden = [
  'neto_token',
  'Bearer',
  'customer-workspace',
  'localStorage',
  'sessionStorage',
  'Authorization:',
]

function collect(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === 'test') continue
      collect(full, acc)
      continue
    }
    if (/\.(jsx?|css|html)$/.test(entry) && !/\.test\./.test(entry)) {
      acc.push(full)
    }
  }
  return acc
}

test('public app source has no workspace auth code', () => {
  const files = [...collect(join(root, 'src')), join(root, 'index.html')]
  const hits = []
  for (const file of files) {
    const text = readFileSync(file, 'utf8')
    for (const token of forbidden) {
      if (text.includes(token)) {
        hits.push(`${relative(root, file)} contains ${token}`)
      }
    }
  }
  expect(hits).toEqual([])
})
