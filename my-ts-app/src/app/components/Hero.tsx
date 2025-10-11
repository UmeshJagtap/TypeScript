'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';
export default function Hero() {
  const handleScroll = () => {};
  return (
    <div className="Hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find book or rent a car --quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Our platform offers a seamless experience for booking flights, hotels,
          and car rentals all in one place. Save time and money with our
          exclusive deals and discounts.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="g-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}
