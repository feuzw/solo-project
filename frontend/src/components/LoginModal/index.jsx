import React, { useState } from 'react';
import * as S from "./styles";
import Modal from "../../components/Modal";
import closeBtn from "../../assets/close-icon.svg";
import { useNavigate } from 'react-router-dom';
import { useCookieManager } from '../../storage/cookieManager'; 
import SignUpModal from '../SignUp';

const LoginModal = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setCookies } = useCookieManager(); // 쿠키 설정 함수를 가져옵니다.
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

    // 회원가입 모달을 표시하는 함수
    const handleSignUpClick = () => {
        setIsSignUpModalVisible(true);
    };

    // 회원가입 모달을 숨기는 함수
    const handleCloseSignUpModal = () => {
        setIsSignUpModalVisible(false);
    };



    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json(); // JSON 형식으로 데이터를 가져옵니다.
            console.log(data);
            setError('');
            setSuccess("로그인 성공!"); // 백엔드에서 받은 메시지를 성공 메시지로 설정합니다.

            // 쿠키에 저장
            setCookies(data.accessToken, data.refreshToken, data.accessTokenExpiresIn);

            setIsModalOpen(true);
            // 모달을 열고 2초 후에 로그인 페이지로 이동
            setTimeout(() => {
                setIsModalOpen(false);
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('에러 발생:', error);
            setError('로그인에 실패했습니다.');
            // 로그인 실패 시 성공 메시지 초기화
            setSuccess('');
        }
    };

    return (
        <>
        <S.LoginContainer>
            <S.LoginBox>
                <S.CloseButton src={closeBtn} onClick={props.onClose}/>
                <S.Title>로그인 해주세요</S.Title>
                <S.Input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
                <S.Input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.TextContainer>
                    <S.LinkText as="a" href="/find-id">아이디</S.LinkText>
                    <S.Text>/</S.Text>
                    <S.LinkText as="a" href="/find-password">비밀번호 찾기</S.LinkText>
                    <S.Text>|</S.Text>
                    <S.LinkText as="a" onClick={handleSignUpClick}>회원가입</S.LinkText>
                </S.TextContainer>
            </S.LoginBox>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {success && <S.SuccessMessage>{success}</S.SuccessMessage>}
            </Modal>
        </S.LoginContainer>
        {isSignUpModalVisible && <SignUpModal onClose={handleCloseSignUpModal} />}
        </>
    );
}

export default LoginModal;