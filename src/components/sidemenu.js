import e from '../element.js';
import Footer from './footer.js';

const menu = [
	{href: "/library", name: "📚 도서관"},
	{href: "/book", name: "📘 내 서재"},
	{href: "/calendar", name: "📅 달력"},
]

export default () => {
	return e("nav", {id: "nav"}, 
		e("a", {href: "/"}, e("img", {id: "icon", src: "/src/img/bookshelf.svg"})),
		...menu.map(m => e("a", {href: m.href, id: "link"}, m.name)),
		Footer()
  )
}