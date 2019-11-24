export const truncate = width => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};
// Use https://github.com/styled-components/styled-components/blob/master/packages/styled-components/docs/tips-and-tricks.md
