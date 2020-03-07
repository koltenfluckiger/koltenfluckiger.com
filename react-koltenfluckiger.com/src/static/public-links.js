const PublicLinks = [
  {
    href: "/",
    variant: {classes : "sidebar-icon fas fa-home"},
    title: "Home",
    clickable: true,
    isExternal: false
  }, {

    href: "/about",
    variant: {classes : "sidebar-icon fas fa-info-circle"},
    title: "About",
    clickable: true,
    isExternal: false
  }, {
    href: "/contact",
    variant: {classes : "sidebar-icon fas fa-at"},
    title: "Contact",
    clickable: true,
    isExternal: false
  }, {
    href: "",
    variant: {classes : "sidebar-icon fas fa-minus"},
    title: "",
    clickable: false,
    isExternal: true
  }, {

    href: "https://github.com/koltenfluckiger",
    variant: {classes : "sidebar-icon fab fa-github"},
    title: "GitHub",
    clickable: true,
    isExternal: true
  }, {

    href: "https://www.linkedin.com/in/kolten-fluckiger/",
    variant: {classes : "sidebar-icon fab fa-linkedin"},
    title: "LinkedIn",
    clickable: true,
    isExternal: true
  }
]

export default PublicLinks;
