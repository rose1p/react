import React, { useState } from 'react'
import Insert from './Insert';

const Address = () => {
    const [array, setArray] = useState([
        { "id": 1, "name": "김근육", "address": "인천 서구 120번지" },
        { "id": 2, "name": "김짱구", "address": "서울 강남구 120번지" },
        { "id": 3, "name": "김철수", "address": "서안대로 휴계소" },
        { "id": 4, "name": "김맹구", "address": "서울 강남구 압구정동" },
    ]);

    const onInsert = (form) => {
        setArray(array.concat(form));
        alert("주소 추가")
    }

    return (
        <div>
            <Insert onInsert={onInsert}/>
            <h1>주소목록</h1>
            {array.map(person =>
                <h2 key={person.id}>{person.id} : {person.name} : {person.address}</h2>
            )}
        </div>
    )
}

export default Address