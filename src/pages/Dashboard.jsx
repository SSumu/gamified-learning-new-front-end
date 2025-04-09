import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, Box, Avatar } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import SkillProgress from "../components/SkillProgress";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users`);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const getSelectedUserChallengeCount = () => {
    if (!selectedUser || !selectedUser.courses) return 0;
    return selectedUser.courses.length;
  };

  return (
    <Container>
      {/* Logo + Title */}
      <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
        <Avatar
          src="/logo192.png"
          alt="Logo"
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Typography variant="h4">Community Skill Dashboard</Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <GroupIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
            <Box>
              <Typography variant="h6">Total Students</Typography>
              <Typography variant="h5" fontWeight="bold">
                {users.length}
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Selected User Challenge Count */}
        <Grid item xs={12} md={4}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <PersonIcon sx={{ fontSize: 40, color: "#f57c00", mr: 2 }} />
            <Box>
              <Typography variant="h6">Selected User Challenges</Typography>
              <Typography variant="h5" fontWeight="bold">
                {selectedUser ? getSelectedUserChallengeCount() : "N/A"}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Form + User List */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <UserForm refresh={fetchUsers} />
        </Grid>
        <Grid item xs={12} md={8}>
          <UserList
            users={users}
            refresh={fetchUsers}
            onSelect={(user) => setSelectedUser(user)}
            selectedUser={selectedUser}
          />
          {selectedUser && <SkillProgress user={selectedUser} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
