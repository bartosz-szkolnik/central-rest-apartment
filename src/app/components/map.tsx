import Image from 'next/image';
import FullMap from '../img/full-map.png';

export function Map() {
  // TODO: get an actual API_KEY from google services & configure map component properly
  return <Image src={FullMap} alt="" className="h-1/3 w-5/6 md:h-full"></Image>;
}
