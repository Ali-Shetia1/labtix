"use client";
// import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LongImage from '../playground/long-image.png'
import '../playground/style.css';
// export default function Page() {
//   const viewportRef = useRef(null);
//   const imgRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const imgEl = imgRef.current;
//     const vp = viewportRef.current;
//     if (!imgEl || !vp) return;

//     const compute = () => {
//       const renderedHeight = imgEl.clientHeight; // px height rendered
//       const scrollMax = Math.max(0, renderedHeight - vp.clientHeight);
//       vp.style.setProperty("--scroll-max", `${scrollMax}px`);
//       vp.style.setProperty("--scroll-duration", `8s`);
//     };

//     compute();
//     window.addEventListener("resize", compute);
//     return () => window.removeEventListener("resize", compute);
//   }, []);

//   return (
//     <div
//       className={`mt-16 mx-auto image-frame ${hovered ? "is-hovered" : ""}`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div ref={viewportRef} className="image-viewport">
//         <Image
//           ref={imgRef}
//           src={LongImage}
//           alt="Long screenshot"
//           width={800}   // original image width
//           height={2400} // original image height
//           className="scroll-image"
//           priority
//         />
//       </div>
//     </div>
//   );
// }

const Scroll = () => {
  return (
    <div className="main-div bg-gray-500/10 rounded-lg overflow-hidden w-[40%] h-[350px] mx-auto mt-16" >
      <Image src={LongImage} alt="image" width={1280} height={720} className="image" />
    </div>
  )

}

export default Scroll