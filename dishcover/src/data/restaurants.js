import bunChaImg from '../assets/images/bun-cha-huong-lien.jpeg'
import phoThinImg from '../assets/images/pho-thin-bo-ho.jpg'
import cafeGiangImg from '../assets/images/cafe-giang.jpeg'
import bunBoImg from '../assets/images/bun-bo-nam-bo.jpg'
import banhMiImg from '../assets/images/banh-mi.jpg'

export const RESTAURANTS = [
  {
    emoji: null,
    img: bunChaImg,
    name: 'Bún Chả Hương Liên',
    cuisine: 'Bun Cha · Hoan Kiem',
    rating: '4.8',
    reviews: 324,
    badges: ['👥 2 friends', '🎯 Must-eat'],
    badgeStyles: ['badge-friend', 'badge-stamp'],
    categories: ['friends', 'must-eat'],
    dest: 'restaurant',
  },
  {
    emoji: null,
    img: phoThinImg,
    name: 'Phở Thìn Bờ Hồ',
    cuisine: 'Pho · Hoan Kiem',
    rating: '4.6',
    reviews: 218,
    badges: ['👥 3 friends', '🎯 Must-eat'],
    badgeStyles: ['badge-friend', 'badge-stamp'],
    categories: ['friends', 'must-eat'],
    dest: 'detail2',
  },
  {
    emoji: null,
    img: bunBoImg,
    name: 'Bún Bò Nam Bộ',
    cuisine: 'Bun Bo · Ba Dinh',
    rating: '4.4',
    reviews: 143,
    badges: ['🏠 Local Pick'],
    badgeStyles: ['badge-friend'],
    categories: ['local'],
    dest: null,
  },
  {
    emoji: null,
    img: cafeGiangImg,
    name: 'Cà Phê Trứng Giảng',
    cuisine: 'Egg Coffee · Old Quarter',
    rating: '4.7',
    reviews: 512,
    badges: ['👥 1 friend', '🎯 Must-eat'],
    badgeStyles: ['badge-friend', 'badge-stamp'],
    categories: ['friends', 'must-eat'],
    dest: null,
  },
  {
    emoji: null,
    img: banhMiImg,
    name: 'Bánh Mì 25',
    cuisine: 'Banh Mi · Hoan Kiem',
    rating: '4.5',
    reviews: 389,
    badges: ['🏠 Local Pick'],
    badgeStyles: ['badge-friend'],
    categories: ['local'],
    dest: null,
  },
]
