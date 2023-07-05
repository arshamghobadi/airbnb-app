'use client';
import React, { Suspense } from 'react';
import Container from '../Container';
import { FaSkiing } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';
import { TbBeach, TbMountain } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { BsSnow } from 'react-icons/bs';
export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'this property is colse to the beach',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'this property has windmills',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modren',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property Countryside',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is an Islands',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to lake ',
  },
  {
    label: 'skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities ',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property has castle',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property is close to jungle',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property has castle',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in desert',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in the barn',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is luxurious',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';
  if (!isMainPage) {
    return null;
  }
  return (
    <Suspense>
      <Container>
        <div className="pt-4 flex items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              icon={item.icon}
              description={item.description}
              selected={category === item.label}
            />
          ))}
        </div>
      </Container>
    </Suspense>
  );
};

export default Categories;
