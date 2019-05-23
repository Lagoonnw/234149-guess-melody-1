export function createNodeMock(element) {
  if (element.type === `audio`) {
    return {};
  }
  return null;
}
