import React, { useState } from 'react';

const InputElement = () => {

    //multiple useState calls is recommended
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    return <div><input  
                onChange={(e) => {
                    setInputText(e.target.value);
                    setHistoryList([...historyList, e.target.value])
                }}
                placeholder="Enter Some text" /><br/>
                {inputText}
                <hr/><br/>
                <ul>
                    {historyList.map((rec) => {
                        return <div>{rec}</div>
                    })}
                </ul>
            </div>
};

export default InputElement