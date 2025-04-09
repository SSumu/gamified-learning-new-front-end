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
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    setUser({ username: "", courses: [] });
    refresh();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add User
      </Typography>

      <Box sx={{ width: "300px" }}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
          margin="normal"
        />
      </Box>

      <FormControl fullWidth margin="normal" sx={{ width: "300px" }}>
        <InputLabel>Courses</InputLabel>
        <Select
          multiple
          name="courses"
          value={user.courses}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                maxHeight: "150px",
                overflowY: "auto",
              }}
            >
              {selected.map((course) => (
                <Box
                  key={course}
                  sx={{
                    bgcolor: "#e3f2fd", // Light blue background for selected courses
                    color: "#1976d2", // Blue text color for course labels
                    borderRadius: "16px",
                    padding: "4px 8px",
                    fontSize: "14px",
                  }}
                >
                  {course}
                </Box>
              ))}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              sx: {
                minHeight: "150px", // Minimum height for the dropdown menu
              },
            },
          }}
        >
          {courses.map((course) => {
            const isSelected = user.courses.includes(course);
            return (
              <MenuItem
                key={course}
                value={course}
                sx={{
                  bgcolor: isSelected ? "#e3f2fd" : "inherit", // light blue background
                  "&:hover": {
                    bgcolor: isSelected ? "#bbdefb" : "#f5f5f5",
                  },
                }}
              >
                <Checkbox checked={isSelected} />
                <ListItemText primary={course} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Box sx={{ width: "300px", mt: 2 }}>
        <Button onClick={handleSubmit} variant="contained" fullWidth>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;
