import Link from "next/link";
import Image from "next/image";

export default function Logo(props: { headFoot: number }) {
  const headFoot = props.headFoot;
  const logoOut = <Image src="/vectors/Rose.svg" alt="A Tale of Thorns" title="A Tale of Thorns" className="" fill/>;

  return headFoot == 1 ? (
    <div className="relative h-[2rem] w-[10%]"><Link href="/">{logoOut}</Link></div>
  ) : (
    <div className="relative h-[3rem] w-[10%]">{logoOut}</div>
  )
}
/* @TODO: sort a way to do images using the fixed height approach without the linter yelling at me and without all the extra fluff.  */