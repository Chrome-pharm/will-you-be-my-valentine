"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Кусь)",
      "Максим лох",
      "За что ты так со мной, Звездочка?",
      "А если я подарок подарю?",
      "Мороженко куплю!",
      "Ну пожалуйстааааа :*(",
      "Тебя учили что говорить нет не вежливо!",
      "Я хочу поиздеваться над Максимкой",
      "КУСЬ! (убить Максима)",
      "Вжух! (оживить максима)",
      "Не вынуждай меня!",
      "Я предупредил!",
      "Ну держись!",
      "+10 Поцелуев с языком!!!!!!",
      "Ну давай, попробуй еще раз...",
      "Вдруг получится",
      "Ну давай, попробуй еще раз...",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">УРААААА! Люблю тебя, моя звездочка!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Будешь моей Валентинкой?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Да
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Не хотю)" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
