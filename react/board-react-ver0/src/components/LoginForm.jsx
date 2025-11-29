import { TextField, Button, Box, Paper, Typography } from "@mui/material"
import { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, pw);
  }

  return (
    <Paper elevation={3} sx={{ width: 400, p: 4, m: "50px auto" }}>
      <Typography variant="h5" mb={2}>로그인</Typography>

      <Box component="form" onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          type="email"
          label="이메일"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="비밀번호"
          type="password"
          fullWidth
          margin="normal"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          로그인
        </Button>
      </Box>
    </Paper>
  )
}

export default LoginForm