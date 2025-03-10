import React from "react";
import {
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";

const AnimatedBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `linear-gradient(145deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  animation: "gradientFlow 15s ease infinite",
  backgroundSize: "400% 400%",
  zIndex: -1,
  opacity: 0.1,
  [theme.breakpoints.up("md")]: {
    opacity: 0.15,
  },
  "@keyframes gradientFlow": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

type RoleType = "publisher" | "reader";

interface RoleCardProps {
  roletype: RoleType;
}

const RoleCard = styled(Paper)<RoleCardProps>(({ theme, roletype }) => ({
  padding: theme.spacing(4),
  width: "100%",
  maxWidth: 320,
  minHeight: 320,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[6],
  },
  border: `2px solid ${
    roletype === "publisher"
      ? theme.palette.primary.main
      : theme.palette.secondary.main
  }`,
}));

const PublisherReaderPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRoleSelection = React.useCallback(
    (role: RoleType) => {
      navigate(
        role === "publisher" ? "/publisher/dashboard" : "/reader/dashboard"
      );
    },
    [navigate]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        px: 2,
        py: 4,
      }}
    >
      <AnimatedBackground />

      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "text.primary",
          }}
        >
          Welcome to Apollo
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Choose your role to continue to our platform
        </Typography>
      </Box>

      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 800 }}
      >
        {["publisher", "reader"].map((role) => (
          <Grid
            key={role}
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
          >
            <RoleCard roletype={role as RoleType} elevation={3}>
              {role === "publisher" ? (
                <LibraryBooksIcon
                  sx={{ fontSize: 64, color: "primary.main", mb: 3 }}
                />
              ) : (
                <AccountBoxIcon
                  sx={{ fontSize: 64, color: "secondary.main", mb: 3 }}
                />
              )}
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 3, textAlign: "center" }}
              >
                {role === "publisher"
                  ? "Manage and publish your content, track analytics, and engage with readers"
                  : "Discover new content, create reading lists, and engage with authors"}
              </Typography>
              <Button
                variant="outlined"
                color={role === "publisher" ? "primary" : "secondary"}
                fullWidth
                size="large"
                onClick={() => handleRoleSelection(role as RoleType)}
                sx={{ mt: "auto" }}
              >
                Continue as {role.charAt(0).toUpperCase() + role.slice(1)}
              </Button>
            </RoleCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PublisherReaderPage;
