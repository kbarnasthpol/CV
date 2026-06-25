export default function MobileDivider({ title }) {
  return (
    <div className="md:hidden h-[12vh] relative overflow-hidden flex items-center justify-center">

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
      <span
  className="
    absolute
    inset-0
    text-[8vw]
    font-black
    uppercase
    opacity-10
    leading-[0.7]
    overflow-hidden
    text-center
    rotate-[5deg]
  "
>
  {Array(50).fill(title).join(" ")}
</span>

      <div className="absolute bottom-20 animate-bounce">
        <i className="fas fa-chevron-down text-diferencias text-xl"></i>
      </div>

    </div>
  );
}