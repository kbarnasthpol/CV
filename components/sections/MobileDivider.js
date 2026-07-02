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
    text-[9vw]
    font-black
    uppercase
    leading-[0.7]
    opacity-10
    dark:text-white
    select-none
    break-words
    blur-[2px]
  "
      >
        {Array(50).fill(title).join(" ")}
      </div>
      <span className="absolute text-[15vw] separation-[0.7] select-none font-black rotate-[-3deg] opacity-90 text-diferencias [-webkit-text-stroke:6px_var(--color-secundario)] text-green dark:text-primario dark:[-webkit-text-stroke:6px_var(--color-secundario)]">
        {title}
      </span>
    </div>
  );
}