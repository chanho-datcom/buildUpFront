import React, { useState } from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../../Config/API-Config';

const SignUp = () => {
  const navigate = useNavigate();
    const [checkNum, setCheckNum] = useState(""); // 사용자가 입력한 인증번호
    const [certificated, setCertificated] = useState(false);
    const [uEmail, setUEmail] = useState("");
    const [uName, setUName] = useState("");

    const register = (signUp) => {
        axios.post(API_BASE_URL + "/user/signup", signUp)
            .then((response) => {
                if (response.data !== null) {
                    navigate("/")
                }else{
                    navigate("/whfoiwehoiefhwofeh")
                }
            });
    }

    const handleSubmit = (e) => {
        console.log(certificated)
        e.preventDefault();

        const data = new FormData(document.getElementById("signup"));
        const userEmail = data.get("userEmail");
        const userPassword = data.get("userPassword");
        const userName = data.get("userName")
        
        const userPNum = data.get("userPNum");
        if (certificated) {
            register({
                email: userEmail, password: userPassword, name: userName,
                phone: userPNum, verify : certificated
            
            });
        } else {
            alert("이메일 인증을 먼저 해주세요.")
        }

    }
    //이메일 인증코드 요청 보내는 함수
    const sendCertificationCode = (e) => {
        console.log("전송 요청")
        axios.post(API_BASE_URL + "/mail/send", 
        { 
            email: uEmail,
            name : uName 
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch()
    }
    const certifyCode = (e) => {
        console.log("인증 요청")
        axios.post(API_BASE_URL + "/mail/certify", 
        { 
            code : checkNum
        })
            .then((res) => {
                setCertificated(res.data);
            })
            .catch()
    }
  
    const userEmailOnChange = (e) => {
        setUEmail(e.target.value);
    }
    const userNameOnChange = (e) => {
        setUName(e.target.value);
    }
    const checkNumOnChange = (e) => {
        setCheckNum(e.target.value)
    }



  return (
    <div style={{ height: '82vh', display: 'flex', width: '60vw', margin: 'auto' }}>
            <Grid container maxWidth="xs" style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Grid item xs={12}>
                    <Typography style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', fontWeight: '700' }}>
                        계정생성
                    </Typography>
                </Grid>
                <form onSubmit={handleSubmit} id="signup">
                    <Grid container direction={"column"} spacing={1} style={{ display: 'inline-block' }} >
                        <Grid item>
                            <TextField
                                size='small'
                                variant='outlined'
                                required
                                fullWidth
                                id='userName'
                                type='text'
                                name='userName'
                                label="이름"
                                autoComplete='userName'
                                onChange={userNameOnChange}
                                value={uName}
                            />
                        </Grid>
                        <Grid item >
                            <TextField
                                size='small'
                                variant='outlined'
                                required
                                fullWidth
                                id='userEmail'
                                type='email'
                                name='userEmail'
                                label="이메일"
                                autoComplete='userEmail'
                                autoFocus
                                onChange={userEmailOnChange}
                                value={uEmail}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                size='small'
                                variant='outlined'
                                label="인증번호를 입력해주세요"
                                onChange={checkNumOnChange}
                                value={checkNum}>
                            </TextField>
                            <Button  onClick={sendCertificationCode}>인증코드 전송</Button>
                            <Button  onClick={certifyCode}>인증확인</Button>
                        </Grid>
                        <Grid item>
                            <TextField
                                size='small'
                                variant='outlined'
                                required
                                fullWidth
                                id='userPassword'
                                type='password'
                                name='userPassword'
                                label="비밀번호"
                                autoComplete='userPassword'
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                size='small'
                                variant='outlined'
                                required
                                fullWidth
                                id='userPNum'
                                type='text'
                                name='userPNum'
                                label="전화번호"
                                autoComplete='userPNum'
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' fullWidth variant='contained' color='primary'>
                                Create account
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <i className="fa-solid fa-bell" style={{ color: 'crimson', marginRight: '5px' }}></i>
                            <Link to="/signin" variant="body2" style={{ textDecoration: 'none', color: 'steelblue' }}>
                                <span>Alreay have an account? Please log in here</span>
                            </Link>
                        </Grid>

                    </Grid>
                </form>
            </Grid>
        </div >

  );
};

export default SignUp;