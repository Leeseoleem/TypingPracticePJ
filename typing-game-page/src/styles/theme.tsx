export const theme = {
  colors: {
    main50: "#9b5de5",
    main40: "#f15bb5",
    main30: "#fee440",
    main20: "#00bbf9",
    main10: "#00f5d4",
  },
  ligthColors: {
    main50: "#cdb4db",
    main40: "#ffafcc",
    main30: "#fefae0",
  },

  rowColors: {
    main30: "#553f3f",
  },
} as const;

export type Theme = typeof theme;
