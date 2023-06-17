import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "18px", xs: "10px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      pt="20px"
    >
      All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
