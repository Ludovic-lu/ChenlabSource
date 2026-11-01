import React, { useState } from 'react';
import { Image } from 'antd';
import styles from './index.less';

interface PreviewImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  onPreviewChange?: (visible: boolean) => void;
}

// Keep the native thumbnail so existing page and carousel layouts stay intact.
export default function PreviewImage({
  src,
  alt,
  className,
  onClick,
  onKeyDown,
  onPreviewChange,
  tabIndex = 0,
  ...props
}: PreviewImageProps) {
  // Mount the viewer on first use instead of creating one for every thumbnail up front.
  const [visible, setVisible] = useState<boolean>();
  const changeVisible = (value: boolean) => {
    setVisible(value);
    onPreviewChange?.(value);
  };

  return (
    <>
      <img
        {...props}
        src={src}
        alt={alt}
        className={[styles.image, className].filter(Boolean).join(' ')}
        role="button"
        tabIndex={tabIndex}
        aria-label={`${alt}，点击放大`}
        aria-haspopup="dialog"
        title="点击放大图片"
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) changeVisible(true);
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (!event.defaultPrevented && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            changeVisible(true);
          }
        }}
      />
      {visible !== undefined && (
        <Image
          src={src}
          alt={alt}
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible,
            onVisibleChange: changeVisible,
            mask: false,
            keyboard: true,
            maskClosable: true,
          }}
        />
      )}
    </>
  );
}
