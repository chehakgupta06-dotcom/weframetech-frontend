"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  withText?: boolean;
  size?: number;          // image size in px
  className?: string;
};

export function Logo({ withText = true, size = 28, className }: Props) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className || ""}`}>
      <Image
        src="/logo.png"
        alt="weframetech logo"
        width={size}
        height={size}
        priority
        className="rounded"
      />
      {withText && (
        <span className="font-semibold tracking-wide leading-none">
          weframetech
        </span>
      )}
    </Link>
  );
}
