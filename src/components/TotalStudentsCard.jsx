import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

const TotalStudentsCard = ({ total }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar>
            <GroupIcon />
          </Avatar>
          <Box ml={2}>
            <Typography variant="h6">Total Students</Typography>
            <Typography variant="h4">{total}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalStudentsCard;
