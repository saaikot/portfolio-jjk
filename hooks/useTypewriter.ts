"use client";
import { useEffect, useState } from "react";

type Options = {
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export default function useTypewriter(
  words: string[],
  { typeSpeed = 85, deleteSpeed = 40, pause = 1500 }: Options = {}
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      // পুরো word টাইপ শেষ — একটু pause দিয়ে delete শুরু
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // পুরো word মুছে গেছে — পরের word এ যাও
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      // টাইপিং বা মুছার একটি ধাপ
      timer = setTimeout(
        () => {
          setText(current.substring(0, text.length + (deleting ? -1 : 1)));
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}