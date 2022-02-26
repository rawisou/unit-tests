export const firstLast = (items) => {
  console.log(items)
  let e = items.length
    if (e === 0) {
      return 'No items!'
    } else if (e === 1) {
      return `Only item: ${items}` 
    } else {
      return `First: ${items[0]}, Last: ${items[e - 1]}` 
    }
}

