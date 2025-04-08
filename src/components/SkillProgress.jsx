import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const SkillProgress = ({ user }) => {
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Skill Progress for {user.username}</Typography>
      <Box mt={1}>
        <Typography>Courses: {user.courses.join(", ")}</Typography>
        <Typography>Progress Level: {user.skillProgress}</Typography>
      </Box>
    </Paper>
  );
};

export default SkillProgress;
