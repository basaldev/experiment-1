import page from 'page';

import { getLogger } from 'domain/logger';
import { updateCurrentPage, updateUserDocuments } from 'domain/store/reducers/main';
import { firebase, firestore } from 'domain/firebase';
import { store } from 'domain/store/main';

type Context = { params: { name: string } };
type OnRoute = (ctx: Context) => void;

const logger = getLogger('Middleware/router');

function homeRouter(onRoute: OnRoute) {
  page('/', authMiddleware, onRoute);
}
function secondRouter(onRoute: OnRoute) {
  page('/2', authMiddleware, onRoute);
}
function thirdRouter(onRoute: OnRoute) {
  page('/3', authMiddleware, onRoute);
}

function loginRouter(onRoute: OnRoute) {
  page('/login', onRoute);
}

function authMiddleware(ctx, next) {
  const user = store.deref().user;
  if (user.id !== "") {
    logger.info('User authenticated', user);
    next();
  } else {
    logger.info('User not authenticated');
    page('/login');
  }
}
export function getImages() {
  const userId = store.deref().user.id;
  firestore
    .collection('userDocuments')
    .where('userId', '==', userId)
    .get()
    .then(querySnapshot => {
      const files = querySnapshot.docs.map(doc => doc.data());
      updateUserDocuments(files);
    });
}

export default function startRouters() {
  homeRouter(ctx => {
    logger.debug('Home route');
    updateCurrentPage({ name: 'HOME_PAGE', value:0 });
  });

  secondRouter(ctx => {
    logger.debug('Document route');
    updateCurrentPage({ name: 'SECOND_PAGE', value:1 });
    getImages();
  });

  thirdRouter(ctx => {
    logger.debug('Document route');
    updateCurrentPage({ name: 'THIRD_PAGE', value:2 });
  });

  loginRouter(ctx => {
    logger.debug('Document route');
    updateCurrentPage({ name: 'LOGIN', value: 99 });
  });

  page();
}

export function navigate(route: string, event: any) {
  event.preventDefault();
  page(route);
}
