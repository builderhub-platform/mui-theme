# @builderhub/mui-theme

[![Publish Package to npmjs](https://github.com/eunchurn/mui-theme/actions/workflows/publish.yml/badge.svg)](https://github.com/eunchurn/mui-theme/actions/workflows/publish.yml) ![npm](https://img.shields.io/npm/dw/@builderhub%2Fmui-theme) ![npm](https://img.shields.io/npm/v/@builderhub/mui-theme?color=%2357C754&label=npm%20version) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Builderhub Platform Material UI Theme

- Custom colors
- Custom breakpoint
- Custom typography
- Custom MuiCssBaseline

React.js 혹은 Next.js 프로젝트에서 Builderhub UI/UX 팀에서 정의한 Color scheme과 breakpoint 등을 정의한 Material UI `ThemeProvider`를 사용합니다.

### Peer Dependencies

- `react@^18`
- `react-dom@^18`
- `@mui/material^5`

## Installation

- npm

```zsh
npm i @builderhub/mui-theme
```

- yarn

```zsh
yarn add @builderhub/mui-theme
```

- pnpm

```zsh
pnpm add @builderhub/mui-theme
```

## Usage

```tsx
import React from "react";
import { BuilderhubThemeProvider } from "@builderhub/mui-theme";

export function Wrapped() {
  return (
    <BuilderhubThemeProvider>
      <App />
    </BuilderhubThemeProvider>
  );
}
```

### 기존 `colors`를 수정하는 방법

```tsx
- import { colors } from "context";
+ import { useTheme } from "@mui/material";

// ...omitted
function Component() {
  const { palette } = useTheme();

  - const oldColor = colors.purple_10;
  + const newColor = palette.purple_10;
}
```

### `styled` 에서 사용

```tsx
import { styled, Button } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
  border: 0,
  background: theme.palette.purple_10,
  width: "5rem",
  height: "2rem",
  borderRadius: theme.shape.borderRadius,
}));
```
