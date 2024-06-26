import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row3 from "./Row3";
import Row2 from "./Row2";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b c"
  "d b f"
  "d h f"
  "d h f"
  "g h j"
  "g h j"
  "g h j"

`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "d"
  "f"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "j"
  "j"
  
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width :1200px)");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
