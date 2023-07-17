import { MantineThemeOverride } from "@mantine/core";

import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = "scanlyGreen" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

// https://mantine.dev/theming/extend-theme/#adding-custom-colors
const theme: MantineThemeOverride = {
  primaryColor: "indigo",
  colors: {
    scanlyGreen: [
      "#F5FFED",
      "#F5FCED",
      "#E9FADC",
      "#D5F0C6",
      "#BEE1B0",
      "#9FCE92",
      "#74B16A",
      "#4E9449",
      "#2E772E",
      "#1C6221",
    ],
  },
  globalStyles: (theme) => ({
    "#__next": {
      height: "100%",
    },
    body: {
      height: "100%",
      overflowX: "hidden",
    },
    main: {
      height: "100%",
    },
    html: {
      height: "100%",
      minHeight: "100%",
    },
    img: {
      userDrag: "none",
      WebkitUserDrag: "none",
    },
    ".lenis.lenis-smooth": {
      scrollBehavior: "auto",
    },
  }),
  // headings: { fontFamily: "ProximaNova, sans serif" },
  // fontFamily: "ProximaNova, sans serif",
  components: {
    Button: {
      styles: {
        root: {
          borderRadius: "100px",
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: "#F5F5FA",
          borderRadius: "8px",
          borderColor: "transparent",
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
    },
    Select: {
      styles: {
        label: {
          color: "rgba(27, 29, 54, 0.4)",
          fontSize: "14px",
          lineHeight: "20px",
          marginBottom: "4px",
        },
        input: {
          backgroundColor: "#F5F5FA",
          borderRadius: "8px",
          borderColor: "transparent",
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
    },
    Card: {
      styles: (theme) => ({
        root: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      }),
    },
    PasswordInput: {
      styles: {
        label: {
          marginBottom: "8px",
        },
      },
    },
    SegmentedControl: {
      styles: {
        root: {
          background: "transparent",
          gap: "12px",
        },
        control: {
          borderColor: "transparent !important",
          backgroundColor: "#E9EBFE",
          borderRadius: "100px",
        },
        controlActive: {
          borderColor: "transparent !important",
          backgroundColor: "#5464F6",
          borderRadius: "100px",
          label: {
            color: "white !important",
          },
        },
        indicator: {
          display: "none",
        },
      },
    },
  },
};

export { theme };
