import LookBook from "@/components/LookBook/LookBook"

export default function Lookbook() {
  return (
    <div
      className="overflow-hidden bg-repeat-y bg-cover bg-black"
      style={{ backgroundImage: `url(/bg.png)` }}
    >
      <LookBook />
    </div>
  )
}
