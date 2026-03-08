import anime from 'animejs'

export const useAnime = () => {
  const animate = (
    targets: anime.AnimeParams['targets'],
    options: Omit<anime.AnimeParams, 'targets'>
  ) => {
    return anime({
      targets,
      ...options
    })
  }

  const stagger = (delay: number = 100) => {
    return anime.stagger(delay)
  }

  return {
    animate,
    stagger,
    anime
  }
}
