export const useMenu = () => {
  const menuOpened = useState("menuOpened", () => false);
  
  const openMenu = () => {
    menuOpened.value = true;
  };
  
  const closeMenu = () => {
    menuOpened.value = false;
  };
  
  // close the menu whenever the route changes
  const route = useRoute();
  watchEffect(() => {
    route.path;
    closeMenu();
  });

  return { menuOpened, openMenu, closeMenu };
};
