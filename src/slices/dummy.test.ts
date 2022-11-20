import dummy from './dummy'

describe('dummy', () => {
  it('initializes with an empty state', () => {
    const state = dummy(undefined, { type: '@@INIT' })
    expect(state).toMatchObject({})
  })
})
