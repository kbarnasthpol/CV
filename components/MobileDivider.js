export default function MobileDivider({ title }) {
  return (
    <div className="md:hidden h-[14vh] relative overflow-hidden flex items-center justify-center">

{/* Fade vertical */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-black/10
          to-transparent
          via-50%
        "
      />
      <div
  className="
    absolute
    left-1/2
    top-1/2
    w-[170%]
    h-[170%]
    -translate-x-1/2
    -translate-y-1/2
    rotate-[5deg]
    overflow-hidden
    text-[8vw]
    font-black
    uppercase
    leading-[0.7]
    opacity-10
    dark:text-white
    select-none
    break-words
    blur-[1px]
  "
>
  {Array(50).fill(title).join(" ")}
</div>
<span className="absolute text-6xl select-none font-black rotate-[-5deg] opacity-100 text-secundario/90">
    {title}
  </span>
    </div>
  );
}