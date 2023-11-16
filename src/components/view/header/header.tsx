import { Box } from "@mui/material";
const Header = () => {
  return (
    <header>
      <Box
        sx={{
          px: 5,
          display: "flex",
          justifyContent: "center",
          "& .app-logo": { width: 40, height: 40, py: 0.5 },
        }}
      />
    </header>
  );
};
export default Header;
