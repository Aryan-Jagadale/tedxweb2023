import LookBook from '@/components/LookBook/LookBook'

export default function Lookbook() {
  let years = [2021, 2019, '2018Live', 2018, 2017, 2016]
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundImage: 'url(/backg/full2.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        //backgroundSize: 'cover',
        width: '100%',
      }}
    >
      <LookBook years={years} title="LookBook" color="white" />
    </div>
  )
}
