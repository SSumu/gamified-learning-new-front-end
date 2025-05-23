import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const UserList = ({ users, refresh, onSelect }) => {
  const deleteUser = async (id) => {
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/${id}`, {
      method: "DELETE",
    });
    refresh();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Courses</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u) => (
            <TableRow
              key={u._id}
              hover
              onClick={() => onSelect(u)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#e3f2fd", // Light blue highlight on hover
                },
              }}
            >
              <TableCell>{u.username}</TableCell>
              <TableCell>{u.courses.join(", ")}</TableCell>
              <TableCell>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(u);
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteUser(u._id);
                  }}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
