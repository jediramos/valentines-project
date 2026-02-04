"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [noScale, setNoScale] = useState(1);
  const [noClicks, setNoClicks] = useState(0);
  const router = useRouter();

  // Custom messages for each click
  const clickMessages = [
    "No",
    "Are you suree?",
    "So you hate me?",
    "You don't love me anymore..?",
    "You think that I'm smelly.",
  ];
  const lastMessage = "Please say yes.. :((";

  const handleNoClick = () => {
    const newClicks = noClicks + 1;
    setNoClicks(newClicks);
    setNoScale((s) => s + 0.5);
    if (newClicks === 10) {
      router.push("/no-page");
    }
  };

  // Determine which message to show on the No button
  let noButtonText = "No";
  if (noClicks < 5) {
    noButtonText = clickMessages[noClicks];
  } else if (noClicks >= 5 && noClicks < 11) {
    noButtonText = lastMessage;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-10 justify-center py-32 px-16 bg-white dark:bg-black">
        <Image
          src="/i-love-you-cat.jpg"
          alt="I love you cat"
          width={200}
          height={40}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Baby babyyy, will you be my valentine?
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            If you say no, you hate me, you don't love me and you think that I smell.
          </p>
        </div>
        <div className="flex flex-row gap-4 text-base font-medium w-full justify-center">
          <Link
            href="/yes-page"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            style={{
              minWidth: 158,
              transform: `translateX(-${(noScale - 1) * 100}px)`,
              transition: "transform 0.3s",
              zIndex: 0,
            }}
          >
            Yes
          </Link>
          <button
            type="button"
            onClick={handleNoClick}
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-all hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            style={{
              minWidth: 158,
              transform: `scale(${noScale})`,
              zIndex: 10,
              transition: "transform 0.3s",
            }}
          >
            {noButtonText}
          </button>
        </div>
      </main>
    </div>
  );
}
