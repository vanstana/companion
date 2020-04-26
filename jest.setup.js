document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  // @ts-ignore
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
})
