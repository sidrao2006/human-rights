async function setViewportToggleAction(
  onEnterViewport: VoidFunction,
  onExitViewport: VoidFunction
) {
  const gsap = (await import("gsap")).gsap;
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;

  gsap.registerPlugin(ScrollTrigger);

  const enter = ({ isActive }: { isActive: boolean }) => {
    if (isActive && onEnterViewport != null) {
      onEnterViewport!();
    }
  };

  const exit = ({ isActive }: { isActive: boolean }) => {
    if (!isActive && onExitViewport != null) {
      onExitViewport!();
    }
  };

  ScrollTrigger.create({
    trigger: "#un_declarations",
    start: "top 40%",
    end: "center top",
    onEnter: enter,
    onEnterBack: enter,
    onLeave: exit,
    onLeaveBack: exit,
  });
}

export { setViewportToggleAction };
