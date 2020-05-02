import e from '../element.js';
import Footer from './footer.js';
import bookshelf from './bookshelf.js';

const menu = [
	{href: "/", name: "내 서제"},
	{href: "/calender", name: "달력"},
]

export default () => {
	return e("nav", {id: "nav"}, 
		e("a", {href: "/"}, e("img", {id: "icon", src: "/src/img/bookshelf.svg"})),
		...menu.map(m => e("a", {href: m.href, id: "link"}, m.name)),
		Footer()
  )
}