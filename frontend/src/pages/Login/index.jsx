import React, { useState, useEffect} from "react";
import LoginBtn from "../../components/LoginBtn";
import LoginModal from "../../components/LoginModal";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useCookieManager } from '../../storage/cookieManager'; 
import SignUpModal from '../../components/SignUp';
import { toast } from 'react-toastify';
import Logo from "../../components/icons/Logo";
function LoginPage() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const { getCookies } = useCookieManager();
    const [initialCheckDone, setInitialCheckDone] = useState(false);

    // 페이지 로딩 시 쿠키 확인하여 로그인 여부 파악 후 자동으로 이동
    useEffect(() => {
        // 이미 초기 체크가 완료되었다면, 이후의 변경사항에는 반응하지 않음
        if (!initialCheckDone) {
            const { accessToken, refreshToken, accessTokenExpiresIn } = getCookies();
            if (accessToken && refreshToken && accessTokenExpiresIn) {
                navigate('/');
            }
            setInitialCheckDone(true); // 초기 체크 완료 상태를 true로 설정
        }
    }, [navigate, getCookies, initialCheckDone]);

    const handleNoLoginClick = () => {
        navigate("/");
    }

    const oauthLogin = [
        {
            id: 1,
            logoUrl: "email_logo.png",
            text: "이메일"
        },
        {
            id: 2,
            logoUrl: "naver_logo.png",
            text: "네이버"
        },
        {
            id: 3,
            logoUrl: "kakao_logo.png",
            text: "카카오"
        },
        {
            id: 4,
            logoUrl: "google_logo.png",
            text: "구글"
        }
    ];

    const showModalFn = () => {
        setShowModal(!showModal); // showModal 상태 변경
    }

    // 모달 닫기 이벤트 핸들러
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const handleShowSignUp = () => {
        setShowModal(false); // 로그인 모달 닫기
        setShowSignUpModal(true); // 회원가입 모달 열기
    };

    const handleLoginBtnClick = (index) => {
        if (oauthLogin[index].id === 1) { // 이메일로 로그인하기 버튼일 때만 showModal 함수 호출
            showModalFn();
        }else{
            toast("준비중인 서비스입니다.");
    };
    
    };
    

    return (
        <S.PageContainer> 
            <S.TopContainer>
                <S.TopHeader>
                    <Logo  alt="logo" width="160px" height="160px" color1="tomato" color2="green"/>
                </S.TopHeader>
                <S.Wrapper>
                    <S.TopDescription >
                        <S.Welcome>WELCOME !</S.Welcome>
                        <S.Underline className="underline"></S.Underline>
                        <S.Text>매일 같은 길에서 벗어나 새로운 세상을 만나다</S.Text>

                    </S.TopDescription>
                </S.Wrapper>
            </S.TopContainer>
            <S.BottomContainer>
                <S.Wrapper>
                    <S.LoginBtnList>
                        {oauthLogin.map((value, index) => (
                            <LoginBtn onClick={() => handleLoginBtnClick(index)} showModalState={showModal} loginType={value} key={index} />
                        ))}
                    </S.LoginBtnList>
                </S.Wrapper>
                <S.NoLoginContainer>
                    <S.NoLoginLink onClick={handleNoLoginClick}>로그인 없이 이용하기</S.NoLoginLink>
                 </S.NoLoginContainer>
            </S.BottomContainer>
            {/* showModal 상태에 따라 LoginModal을 조건부 렌더링 */}
            {showModal && <LoginModal onClose={handleCloseModal} onSignUp={handleShowSignUp} />}
            {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
        </S.PageContainer>
    );
}

export default LoginPage;