//Savannah
// export const hashtags = (text) => text = text.match(/#\w+/gm)
//Tiina
// export const hashtags = (text) => text = text.startsWith('#')
export const hashtags = (text) => {
  return text.split(' ').filter(word => word.startsWith('#')) }