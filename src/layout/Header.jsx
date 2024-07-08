import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ColorModeSwitcher from "../components/ColorModeSwitcher";

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      position="sticky"
      top="0"
      left="0"
      boxShadow="base"
      py="10px"
      bgcolor={theme.palette.background.default}
      sx={{ boxShadow: theme.shadows[1] }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          useFlexGap
        >
          <Typography variant="h4">Logo</Typography>
          <ColorModeSwitcher isIcon />
        </Stack>
      </Container>
    </Box>
  );
}
