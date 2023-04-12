import LookBook from "@/components/LookBook/LookBook"

export default function Lookbook() {
  let years = [2021, 2019, "2018Live", 2018, 2017, 2016] 
  return (
    <div
      className="overflow-hidden bg-repeat-y bg-cover bg-[#212121]"
      // style={{ backgroundImage: `url(/bg.png)` }}
    >
      <LookBook years={years} title="LookBook" color="white" />
    </div>
  )
}
