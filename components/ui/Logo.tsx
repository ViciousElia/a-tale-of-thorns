export default function Logo(props: { headFoot: number }) {
  const headFoot = props.headFoot;
  const logoOut = <img src="/vectors/Rose.svg" className="h-[100%]" alt="A Tale of Thorns" title="A Tale of Thorns"/>;

  return headFoot == 1 ? (
    <div className="h-[2rem]"><a href="/">{logoOut}</a></div>
  ) : (
    <div className="h-[3rem]">{logoOut}</div>
  )
}