'use client';
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '../types';

const Custombutton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className="flex-1">title</span>
      ABC
    </button>
  );
};

export default Custombutton;
