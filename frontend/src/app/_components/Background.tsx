import Image from 'next/image'
 
export default function Background() {
  return (
    <div className="fixed h-screen w-screen overflow-hidden -z-10">
      {/* <Image
        alt="background"
        src={bg1}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      /> */}
    </div>
  )
}