import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPropmt] = useState("");
  const [prevPrompt, setPrevPropmt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 50 * index);
  };

  const onSent = async (propmt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (propmt !== undefined) {
      response = await runChat(propmt);
      setRecentPropmt(propmt);
    } else {
      setPrevPropmt((prev) => [...prev, input]);
      setRecentPropmt(input);
      response = await runChat(input);
    }

    let responseArr = response.split("**");
    let newArray = "";
    for (let i = 0; i < responseArr.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newArray += responseArr[i];
      } else {
        newArray += "<b>" + responseArr[i] + "</b>";
      }
    }
    console.log(newArray);
    let newRespone = newArray.split("*").join("</br>");
    let delayArray = newRespone.split(" ");
    for (let i = 0; i < delayArray.length; i++) {
      const nextWord = delayArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };
  const contextValue = {
    prevPrompt,
    onSent,
    setRecentPropmt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setPrevPropmt,
    setInput,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
