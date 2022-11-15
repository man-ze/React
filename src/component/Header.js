export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <span>
          <img src="/logo192.png" id="logo"></img>
        </span>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
          <li>
            <a href="#">Map</a>
          </li>
        </ul>
          <button
            onClick={() => {
              alert('로그인');
            }}
            className="login"
          >
            로그인
          </button>
      </div>
    </div>
  );
}
