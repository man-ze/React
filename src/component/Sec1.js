import { useState } from 'react';

export default function Sec1() {
  let [title] = useState('제목');
  let [modal, Setmodal] = useState(false);
  let [input, Change] = useState('');

  return (
    <div className="Sec1">
      <h3>QnA 게시판</h3>
      <div className="click">
        <input
          type="text"
          onChange={(e) => {
            Change(e.target.value);
            console.log(title);
          }}
          className="qnaInput"
        ></input>
        <img src="/img/cursor.png" onClick={() => {}} className="cursor"></img>
      </div>
      <div className="box">
        <div className="list">
          <p> {title} </p>
          <p> 내용 </p>
        </div>
        <div className="list">
          <p> {title} </p>
          <p> 내용 </p>
        </div>
        <div className="list">
          <p> {title} </p>
          <p> 내용 </p>
        </div>
        <div
          className="list"
          onClick={() => {
            Setmodal(!modal);
          }}
        >
          <p> {title} </p>
          <p> 내용 </p>
        </div>
        {modal == true ? <Modal /> : null}
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <p> 이것은 모달창 입니다. </p>
    </div>
  );
}
