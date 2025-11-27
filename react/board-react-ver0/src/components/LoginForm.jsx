import { TextField, Button, Box, Paper, Typography } from "@mui/material"

function LoginForm() {
  return (
    <Paper elevation={3} sx={{ width: 400, p: 4, m: "50px auto" }}>
      <Typography variant="h5" mb={2}>로그인</Typography>

      <Box>
        <TextField label="이메일" fullWidth />
        <TextField label="비밀번호" type="password" fullWidth />
        <Button variant="contained" fullWidth>
          로그인
        </Button>
      </Box>
    </Paper>
  )
}

export default LoginForm