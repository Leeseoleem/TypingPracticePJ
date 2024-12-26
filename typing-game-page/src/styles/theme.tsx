export const theme = {
  colors: {
    main50: "#9b5de5",
    main40: "#f15bb5",
    main30: "#fee440",
    main20: "#00bbf9",
    main10: "#00f5d4",
  },
} as const;

export type Theme = typeof theme;
