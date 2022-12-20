import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('/fcnote').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((item) => (
    <CommonTableRow key={item.idx}>
      <CommonTableColumn>{item.idx}</CommonTableColumn>
      <CommonTableColumn>{item.name}</CommonTableColumn>
      <CommonTableColumn>{item.note}</CommonTableColumn>
      <CommonTableColumn>{item.account_FK}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Voc() {
  const item = GetData();

  return (<>
    <CommonTable headersName={['글번호', '제목', '내용', '작성자']}>
      {item}
    </CommonTable>
  </>);
}
  
export default Voc;