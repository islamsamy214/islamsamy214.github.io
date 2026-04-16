export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {};
    },
    mounted(el, binding) {
      const delay = binding.value?.delay || 0;
      const direction = binding.value?.direction || 'up';

      const transforms = {
        up: 'translateY(40px)',
        left: 'translateX(-40px)',
        right: 'translateX(40px)',
      };

      el.style.opacity = '0';
      el.style.transform = transforms[direction];
      el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0)';
          observer.unobserve(el);
        }
      }, { threshold: 0.15 });

      observer.observe(el);
    }
  });
});
