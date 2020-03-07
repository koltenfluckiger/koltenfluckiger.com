const AdminLinks = [
  {
    href: "/",
    variant: {classes : "sidebar-icon fas fa-home"},
    title: "Home",
    clickable: true,
    isExternal: true
  }, {
    href: "/admin/dashboard",
    variant: {classes : "sidebar-icon fas fa-columns"},
    title: "Dashboard",
    clickable: true,
    isExternal: false
  }, {
    href: "/admin/projects",
    variant: {classes : "sidebar-icon fas fa-project-diagram"},
    title: "Projects",
    clickable: true,
    isExternal: false
  }, {
    href: "/admin/skills",
    variant: {classes : "sidebar-icon fas fa-box-open"},
    title: "Skills",
    clickable: true,
    isExternal: false
  }
]

export default AdminLinks;
