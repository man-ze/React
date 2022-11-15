import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  const takeSec1 = () => {
    navigate('/Sec1');
  };

  return (
    <div className="Main">
      <img src="img/dog.png" className="hero"></img>
      <span className="text">
        반려동물 동반 가능한 숙소를 알아보는 사이트 입니다
      </span>
      {/* 버튼을 클릭하면 sec1 페이지로 이동 (리액트 라우터 이용) */}
      <button className="intro" onClick={takeSec1}>
        QnA
      </button>
    </div>
  );
}
