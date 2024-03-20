import Image from 'next/image';
import FullMap from '../img/full-map.png';

export function Map() {
  return <Image src={FullMap} alt="" className="md:h-full" />;
}
