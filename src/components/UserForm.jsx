import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  ListItemText,
  Input,
} from "@mui/material";

const courses = [
  "JavaScript",
  "React",
  "Node.js",
  "CSS",
  "Python",
  "HTML",
  "C#",
  ".NET",
];

const UserForm = ({ refresh }) => {
  const [user, setUser] = useState({ username: "", courses: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "courses") {
      const newCourses = value;
      setUser((prev) => ({ ...prev, courses: newCourses }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    setUser({ username: "", courses: [] });
    refresh();
  };

  return (
    <Box>
      <Typography variant="h6">Add User</Typography>
      <TextField
        fullWidth
        label="Username"
        name="username"
        value={user.username}
        onChange={handleChange}
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Courses</InputLabel>
        <Select
          multiple
          name="courses"
          value={user.courses}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
        >
          {courses.map((course) => (
            <MenuItem key={course} value={course}>
              <Checkbox checked={user.courses.indexOf(course) > -1} />
              <ListItemText primary={course} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleSubmit} variant="contained" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default UserForm;
