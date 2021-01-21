import React from "react";
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";

const LazyLoader = (props: React.PropsWithChildren<Props>) => {
  const lazyLoad = props.lazyLoad ?? true;
  const shouldUseCustomBackground = props.shouldUseCustomBackground ?? false;

  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "50px 0px",
  });
  const width = "100%",
    height = "100vh";

  return (
    <div
      id={props.id}
      ref={!supportsLazyLoading ? ref : undefined}
      style={{
        position: "relative",
        height: height,
      }}
    >
      {(inView || supportsLazyLoading) && !shouldUseCustomBackground ? (
        <img
          src={props.backgroundImageSrc}
          alt={props.backgroundImageAlt}
          width={width}
          height={height}
          loading={lazyLoad ? "lazy" : undefined}
          style={{
            position: "absolute",
            objectFit: "cover",
            width: width,
            height: height,
            ...props.backgroundImageStyle,
          }}
        />
      ) : null}
      {shouldUseCustomBackground
        ? props.customBackground!({
            position: "absolute",
            objectFit: "cover",
            width: width,
            height: height,
          })
        : null}
      <div
        style={{
          paddingLeft: "17%",
          position: "absolute",
        }}
        className={props.className}
      >
        {props.children}
      </div>
    </div>
  );
};

interface Props {
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  className?: string;
  id?: string;
  backgroundImageStyle?: React.CSSProperties;
  lazyLoad?: boolean;
  shouldUseCustomBackground?: boolean;
  customBackground?: (style: React.CSSProperties) => JSX.Element;
}

export default LazyLoader;
