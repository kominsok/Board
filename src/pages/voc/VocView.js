import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './VocView.css';

function GetData(vocId) {
  const [question, setQuestion] = useState({});
  
  useEffect(() => {
    axios.get('/fcnote/'+vocId).then((response)=> {
        setQuestion(response.data);
    })
  }, []);

  const item =  (Object.values(question)).map((item) => (
    <>
    <h2 align="center">게시글 상세정보</h2>
    <div className="voc-view-wrapper" key={item.idx}>
        <div className="voc-view-row">
            <label>게시글 번호</label>
            <label>{ item.idx }</label>
        </div>
        <div className="voc-view-row">
            <label>제목</label>
            <label>{ item.name }</label>
        </div>
        <div className="voc-view-row">
            <label>내용</label>
            <div>
                {
                item.note
                }
            </div>
        </div>
    </div></>
    ));

    return item;
}

function VocView() {
  const{vocId} = useParams();
  const item = GetData(vocId);

  return (<>
    <div>
        {item}
    </div>
  </>);
}
  
export default VocView;