import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Avatar,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const CommunitySkillProgressCard = ({ user }) => {
  if (!user || !user.skillsProgress) return null;

  return (
    <Card sx={{ mb: 3, p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ bgcolor: "primary.main", marginRight: 2 }}>
            <SchoolIcon />
          </Avatar>
          <Typography variant="h6">Community Skill Progress</Typography>
        </Box>

        {user.skillsProgress.map((skill, index) => (
          <Box key={index} mb={2}>
            <Typography variant="body1">{skill.skill}</Typography>
            <LinearProgress
              variant="determinate"
              value={skill.progress}
              sx={{ height: 10, borderRadius: 5 }}
            />
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              {skill.progress}% Complete
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CommunitySkillProgressCard;
