import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
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

  return (
    <Container>
      <Typography variant="h4" my={2}>
        Community Skill Dashboard
      </Typography>

      {/* Total Users Card */}
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
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <UserForm refresh={fetchUsers} />
        </Grid>
        <Grid item xs={12} md={8}>
          <UserList
            users={users}
            refresh={fetchUsers}
            onSelect={(user) => setSelectedUser(user)}
          />
          {selectedUser && <SkillProgress user={selectedUser} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
