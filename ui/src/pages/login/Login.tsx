import React, {useState} from "react";
import "../../sass/Login.scss";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// @ts-ignore
import backgroundVideo from "../../assets/background.mp4";
// @ts-ignore
import logo from "../../assets/logo.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {useNavigate} from "react-router-dom";

function Login() {
    const SwAlert = withReactContent(Swal);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = () => {
        console.log("duap")
    };

    return (
        <>
            <video className='videoTag' autoPlay loop muted>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
            <Box className='videoGradient'/>
            <Box className="container">
                <Box className="position-absolute top-50 start-50 translate-middle">
                    <Box className='loginBox'>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={logo} alt="Logo" style={{width: '300px', margin: '30px'}}/>
                        </Box>
                        <form>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <AccountCircleOutlinedIcon style={{color: 'rgba(67, 0, 153, 1'}}/>
                                <TextField sx={{marginLeft: 2}}
                                           margin="normal"
                                           required
                                           fullWidth
                                           id="username"
                                           name="username"
                                           placeholder="Username"
                                           value={username}
                                           onChange={handleUsernameChange}
                                           autoComplete="username"
                                />
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <LockOutlinedIcon style={{color: 'rgba(67, 0, 153, 1'}}/>
                                <TextField sx={{marginLeft: 2}}
                                           margin="normal"
                                           required
                                           fullWidth
                                           id="password"
                                           name="password"
                                           placeholder="Password"
                                           type="password"
                                           value={password}
                                           onChange={handlePasswordChange}
                                           autoComplete="current-password"
                                />
                            </Box>

                            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" id='default-button' onClick={handleFormSubmit}>
                                    LOG IN
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Login;
