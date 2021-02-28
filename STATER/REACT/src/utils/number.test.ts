import { round100 } from './tools'

test('round100', () => {
  expect(round100(10.222)).toBe(10.22)
  expect(round100(10)).toBe(10)
  expect(round100(10.5555)).toBe(10.56)
})
