'use client';

import React, { FC, ReactNode } from 'react';
import { LoaderWithThreeDots } from '../loader/loader';

type CommonButtonProps = {
  onClick: any;
  children: ReactNode;
  type?: 'primary' | 'neutral' | 'outlined' | 'error';
  size?: 'small' | 'medium' | 'large' | 'xLarge' | 'xSmall';
  rounded?: boolean;
  classNames?: string;
  disabled?: boolean;
  loading?: boolean;
  loaderColor?: string;
  buttonRef?: any;
  buttonId?: string;
  style?: React.CSSProperties;
};

const CommonButton: FC<CommonButtonProps> = ({
  onClick = () => {
    console.log('Clicked');
  },
  style,
  type = 'primary',
  size = 'small',
  disabled = false,
  rounded = false,
  children = rounded ? 'Icon' : 'Next',
  classNames,
  loading,
  loaderColor = '#f2f2f2',
  buttonRef,
  buttonId,
}) => {
  const loaderSizeMapping = {
    small: {
      width: '16px',
      height: '4px'
    },
    medium: {
      width: '20px',
      height: '6px'
    },
    large: {
      width: '24px',
      height: '8px'
    },
    xLarge: {
      width: '28px',
      height: '10px'
    },
    xSmall: {
      width: '28px',
      height: '10px'
    },
  };

  const baseClasses = `flex items-center justify-center transition ease-in-out duration-50 w-fit font-medium py-3`;
  const sizeClasses = {
    xLarge: `h-14 text-[18px] leading-6 ${rounded ? 'rounded-full !w-14' : 'rounded-xl px-12'}`,
    large: `h-12 text-base tracking-[0.096px] ${rounded ? 'rounded-full ' : 'rounded-xl px-8 !w-12'}`,
    medium: `h-10 text-[14px] leading-[22px] tracking-[0.084px] ${rounded ? 'rounded-full !w-10' : 'rounded-xl px-6 '}`,
    small: `h-7 text-[14px] leading-[22px] tracking-[0.084px] ${rounded ? 'rounded-full !w-7' : 'rounded-lg px-3 '}`,
    xSmall: `h-7 text-[12px] leading-[18px] tracking-[0.12px] ${rounded ? 'rounded-full !w-5' : 'rounded-lg px-2 '}`,
  };

  const typeClasses = {
    error: `${disabled ? 'cursor-default text-[#FF687533] bg-[rgba(255,104,117,0.20)]' : 'text-mentorai-red-300 bg-[rgba(255,104,117,0.20)]'} ${loading || disabled ? '' : 'hover:bg-active-topic-hover hover:border-[#000000] cursor-pointer'
      }`,
    primary: `${disabled ? 'bg-mentorai-bg-disabled-primary cursor-default text-mentorai-text-disabled' : 'bg-mentorai-primary-base text-mentorai-text-white'} ${loading || disabled ? '' : 'hover:bg-mentorai-primary-light active:bg-mentorai-primary-light cursor-pointer'
      }`,
    neutral: `${disabled ? 'bg-mentorai-bg-disabled-netural cursor-default text-mentorai-text-disabled' : 'bg-mentorai-bg-light text-mentorai-text-black'} ${loading || disabled ? '' : 'hover:bg-mentorai-bg-white active:bg-mentorai-bg-white cursor-pointer'
      }`,
    outlined: `${disabled
      ? 'border border-mentorai-stroke-base cursor-default text-mentorai-text-disabled bg-transparent'
      : 'border border-mentorai-stroke-base text-mentorai-text-soft bg-transparent'
      } ${loading || disabled
        ? ''
        : 'hover:border-mentorai-stroke-light hover:bg-mentorai-bg-hover-outlined hover:!text-mentorai-text-white active:border-mentorai-stroke-light active:bg-mentorai-bg-hover-outlined active:text-mentorai-text-white cursor-pointer shadow-[0px_2px_8px_0px_rgba(255,255,255,0.04)]'
      }`,
  };

  return (
    <button style={style} id={buttonId} ref={buttonRef} onClick={onClick} className={`${baseClasses} ${sizeClasses[size]} ${typeClasses[type]} ${classNames}`} disabled={disabled}>
      {loading ? <LoaderWithThreeDots color={loaderColor} className={`text-${loaderColor} bg-${loaderColor}`} height={loaderSizeMapping[size].height} width={loaderSizeMapping[size].width} /> : children}
    </button>
  );
};

export default CommonButton;
