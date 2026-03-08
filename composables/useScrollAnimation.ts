export const useScrollAnimation = () => {
  const observeElement = (
    element: HTMLElement,
    callback: (isIntersecting: boolean) => void,
    options: IntersectionObserverInit = { threshold: 0.2 }
  ) => {
    if (!process.client) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting)
      })
    }, options)

    observer.observe(element)

    return () => observer.disconnect()
  }

  return {
    observeElement
  }
}
