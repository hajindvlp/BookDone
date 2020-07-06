import e from '../modules/element';
import Footer from './footer';

const menu = [
	{href: "/library", name: "도서관", icon: "far fa-compass"},
	{href: "/book", name: "내 서재", icon: "fas fa-book"},
	{href: "/calendar", name: "달력", icon: "far fa-calendar-alt"},
]

export default () => {
	return e("nav", {id: "nav"}, 
		e("a", {href: "/"}, e("img", {id: "title_icon", src: "/src/img/bookshelf.svg"})),
		...menu.map(m => e("a", {href: m.href, id: "link"}, 
			e("i", {id: "icon", class: m.icon}), 
			m.name
		)),
		Footer()
  )
}