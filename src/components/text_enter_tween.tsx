async function setTextEnterTween(props: {
  targetId: string;
  element: gsap.TweenTarget;
  index: number;
  start?: string;
  end?: string;
  syncToScroll?: boolean;
}) {
  const gsap = (await import("gsap")).default;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    props.element,
    {
      autoAlpha: 0,
      yPercent: 100,
    },
    {
      autoAlpha: 1,
      yPercent: 0,
      duration: 0.75,
      delay: !(props.syncToScroll ?? true) ? (props.index + 1) / 4 : undefined,
      ease: "sine",
      overwrite: "auto",
      scrollTrigger: {
        trigger: `#${props.targetId}`,
        scrub: props.syncToScroll ?? true,
        toggleActions: "play reset play reset",
        start: props.start,
        end: props.end ?? "bottom top",
      },
    }
  );
}

export { setTextEnterTween };
