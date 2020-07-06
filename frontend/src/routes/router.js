import Router from '../modules/router';
import Library from '../components/library';
import BookList from '../components/booklist';
import BookInfo  from '../components/bookinfo';
import page404 from '../components/404';

const router = new Router();

router.get('/', req => {
  return BookList();
})

router.get('/library', req => {
  return Library();
})

router.get('/book', req => {
  return BookList();
});

router.get('/book/:bookID', req => {
  return BookInfo(req.attributes.bookID);
});

router.get('/book/edit/:bookID', req => {
  return e(EditBook, req);
})

router.get('/:d', req => {
  return page404();
})

export default router.route;