test('date format', () => {
    const date = new Date('23:59 6 Jul 2022')
    expect(date.getHours()).toBe(23)
    expect(date.getMinutes()).toBe(59)
    expect(date.getSeconds()).toBe(0)
    expect(date.getDate()).toBe(6)
    expect(date.getMonth()).toBe(7-1)
    expect(date.getFullYear()).toBe(2022)
})